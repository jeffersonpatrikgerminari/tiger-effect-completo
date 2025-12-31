-- Tiger Effect Community Forum (Topics + Replies + Reports + Admin moderation)
-- Run this in Supabase SQL Editor (Database -> SQL Editor).
-- It creates tables + RLS policies for:
-- - forum_topics
-- - forum_replies
-- - forum_reports (denúncias)
-- - admin_users (lista de admins)

create extension if not exists pgcrypto;

-- 1) Admin list
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;

-- allow a logged user to check only if THEY are admin (returns 1 row only for admins)
drop policy if exists "Admin can read own row" on public.admin_users;
create policy "Admin can read own row"
on public.admin_users
for select
to authenticated
using (user_id = auth.uid());

-- 2) Topics
create table if not exists public.forum_topics (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  author_email text,
  created_at timestamptz not null default now(),

  -- moderation / soft delete
  is_deleted boolean not null default false,
  deleted_at timestamptz,
  deleted_by uuid references auth.users(id)
);

alter table public.forum_topics enable row level security;

drop policy if exists "Topics readable by authenticated" on public.forum_topics;
create policy "Topics readable by authenticated"
on public.forum_topics
for select
to authenticated
using (true);

drop policy if exists "Topics insert by authenticated" on public.forum_topics;
create policy "Topics insert by authenticated"
on public.forum_topics
for insert
to authenticated
with check (true);

drop policy if exists "Topics update by admin" on public.forum_topics;
create policy "Topics update by admin"
on public.forum_topics
for update
to authenticated
using (exists (select 1 from public.admin_users au where au.user_id = auth.uid()))
with check (exists (select 1 from public.admin_users au where au.user_id = auth.uid()));

-- (optional hard delete by admin, not recommended, but allowed)
drop policy if exists "Topics delete by admin" on public.forum_topics;
create policy "Topics delete by admin"
on public.forum_topics
for delete
to authenticated
using (exists (select 1 from public.admin_users au where au.user_id = auth.uid()));

-- 3) Replies
create table if not exists public.forum_replies (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.forum_topics(id) on delete cascade,
  body text not null,
  author_email text,
  author_id uuid references auth.users(id),
  created_at timestamptz not null default now(),

  -- moderation / soft delete
  is_deleted boolean not null default false,
  deleted_at timestamptz,
  deleted_by uuid references auth.users(id)
);

create index if not exists forum_replies_topic_id_idx on public.forum_replies(topic_id);

alter table public.forum_replies enable row level security;

drop policy if exists "Replies readable by authenticated" on public.forum_replies;
create policy "Replies readable by authenticated"
on public.forum_replies
for select
to authenticated
using (true);

drop policy if exists "Replies insert by authenticated" on public.forum_replies;
create policy "Replies insert by authenticated"
on public.forum_replies
for insert
to authenticated
with check (author_id = auth.uid());

drop policy if exists "Replies update by admin" on public.forum_replies;
create policy "Replies update by admin"
on public.forum_replies
for update
to authenticated
using (exists (select 1 from public.admin_users au where au.user_id = auth.uid()))
with check (exists (select 1 from public.admin_users au where au.user_id = auth.uid()));

drop policy if exists "Replies delete by admin" on public.forum_replies;
create policy "Replies delete by admin"
on public.forum_replies
for delete
to authenticated
using (exists (select 1 from public.admin_users au where au.user_id = auth.uid()));

-- 4) Reports (denúncias)
create table if not exists public.forum_reports (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid references public.forum_topics(id) on delete cascade,
  reply_id uuid references public.forum_replies(id) on delete cascade,

  reason text not null,
  details text,
  reporter_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'open' check (status in ('open','resolved')),
  created_at timestamptz not null default now(),

  resolved_at timestamptz,
  resolved_by uuid references auth.users(id)
);

create index if not exists forum_reports_topic_id_idx on public.forum_reports(topic_id);
create index if not exists forum_reports_reply_id_idx on public.forum_reports(reply_id);
create index if not exists forum_reports_status_idx on public.forum_reports(status);

alter table public.forum_reports enable row level security;

-- insert by any authenticated user, reporter_id must match auth.uid()
drop policy if exists "Reports insert by authenticated" on public.forum_reports;
create policy "Reports insert by authenticated"
on public.forum_reports
for insert
to authenticated
with check (reporter_id = auth.uid());

-- reporters can see their own reports (optional but useful)
drop policy if exists "Reports read own" on public.forum_reports;
create policy "Reports read own"
on public.forum_reports
for select
to authenticated
using (reporter_id = auth.uid());

-- admins can see all reports
drop policy if exists "Reports read by admin" on public.forum_reports;
create policy "Reports read by admin"
on public.forum_reports
for select
to authenticated
using (exists (select 1 from public.admin_users au where au.user_id = auth.uid()));

-- admins can update reports (resolve)
drop policy if exists "Reports update by admin" on public.forum_reports;
create policy "Reports update by admin"
on public.forum_reports
for update
to authenticated
using (exists (select 1 from public.admin_users au where au.user_id = auth.uid()))
with check (exists (select 1 from public.admin_users au where au.user_id = auth.uid()));
