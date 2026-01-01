-- Nickname / Profiles migration for Tiger Effect Community
-- Run this in Supabase SQL Editor AFTER the original forum_moderation.sql has been applied.
-- Goal: users choose a public nickname (display_name) used in forum posts; email stays private for auth.

create extension if not exists pgcrypto;

-- 1) Profiles table (one row per auth user)
create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz
);

alter table public.profiles enable row level security;

-- Everyone authenticated can read nicknames (needed to show authors in the forum)
drop policy if exists "Profiles readable by authenticated" on public.profiles;
create policy "Profiles readable by authenticated"
on public.profiles
for select
to authenticated
using (true);

-- Users can insert/update only their own profile
drop policy if exists "Profiles insert own" on public.profiles;
create policy "Profiles insert own"
on public.profiles
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Profiles update own" on public.profiles;
create policy "Profiles update own"
on public.profiles
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- 2) Auto-create profile on sign-up, using auth user metadata: raw_user_meta_data.display_name
-- (If you don't want triggers, you can remove this section and rely on the Dashboard upsert.)
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (user_id, display_name)
  values (
    new.id,
    coalesce(nullif(trim(new.raw_user_meta_data->>'display_name'), ''), 'Anonymous')
  )
  on conflict (user_id) do update
    set display_name = excluded.display_name;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

-- 3) Forum topics: add author_id (so we can link posts to the user profile)
alter table public.forum_topics
  add column if not exists author_id uuid references auth.users(id);

-- OPTIONAL: You can stop storing emails entirely (keep for now to avoid breaking old data)
-- alter table public.forum_topics drop column if exists author_email;

-- 4) Strengthen forum insert policies (nickname required)
-- Topics insert: must be the logged-in user AND must have a profile nickname (non-empty)
drop policy if exists "Topics insert by authenticated" on public.forum_topics;
create policy "Topics insert by authenticated"
on public.forum_topics
for insert
to authenticated
with check (
  auth.uid() = author_id
  and exists (
    select 1
    from public.profiles p
    where p.user_id = auth.uid()
      and length(trim(p.display_name)) >= 2
  )
);

-- Replies insert: must be the logged-in user AND must have a profile nickname
drop policy if exists "Replies insert by authenticated" on public.forum_replies;
create policy "Replies insert by authenticated"
on public.forum_replies
for insert
to authenticated
with check (
  auth.uid() = author_id
  and exists (
    select 1
    from public.profiles p
    where p.user_id = auth.uid()
      and length(trim(p.display_name)) >= 2
  )
);

-- OPTIONAL (recommended): enforce author_id not null for new rows
-- (Only run after confirming there are no NULLs)
-- alter table public.forum_topics alter column author_id set not null;
-- alter table public.forum_replies alter column author_id set not null;

-- 5) Helpful index
create index if not exists profiles_display_name_idx on public.profiles (display_name);
