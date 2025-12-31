# Efeito Tigre (Tiger Effect) — Site institucional + comunidade

Stack:
- Next.js (App Router)
- Tailwind CSS
- Lucide React (ícones)
- Framer Motion (animações)
- i18n simples via dicionário (PT/EN)
- Supabase (Auth + Fórum) — estrutura pronta

---

## 1) Rodar localmente

1. Instale dependências:
```bash
npm install
```

2. Crie o arquivo `.env.local` baseado no `.env.example`:
```bash
cp .env.example .env.local
```

3. Preencha:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. Rode:
```bash
npm run dev
```

Acesse: http://localhost:3000

---

## 2) Colocar capas reais
Troque as imagens em:
- `/public/books/vol1.jpg`
- `/public/books/vol2.jpg`
- `/public/books/vol3.jpg`

---

## 3) Supabase (Auth + Fórum)

### 3.1 Criar projeto
1. Crie um projeto no Supabase.
2. Vá em **Project Settings → API** e copie:
   - Project URL
   - anon public key

### 3.2 Habilitar Auth
Em **Authentication → Providers**:
- Habilite Email (password).
- Opcional: habilite confirmação por e-mail.

### 3.3 Criar tabela do fórum (SQL)
No Supabase: **SQL Editor → New query** e rode:

```sql
create table if not exists public.forum_topics (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  author_email text,
  created_at timestamptz not null default now()
);

alter table public.forum_topics enable row level security;

-- Políticas (simples) — ajuste depois conforme quiser.
create policy "read topics" on public.forum_topics
for select
to authenticated
using (true);

create policy "insert topics" on public.forum_topics
for insert
to authenticated
with check (true);
```

> Para leitura pública (sem login), altere a policy de SELECT para `to anon, authenticated`.

---

## 4) Subir no GitHub

```bash
git init
git add .
git commit -m "Initial Tiger Effect site"
git branch -M main
```

Crie o repositório no GitHub e conecte:

```bash
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

---

## 5) Deploy na Vercel

1. Entre na Vercel e clique em **New Project**
2. Importa do GitHub
3. Configure Environment Variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
4. Deploy.

---

## 6) Onde editar
- Textos PT/EN: `translations/i18n.ts`
- Navbar/Footer: `components/Navbar.tsx`, `components/Footer.tsx`
- Home: `app/page.tsx`
- Trilogia: `app/trilogy/page.tsx`
- Algoritmo: `app/algorithm/page.tsx`
- Portal: `app/community/*`
