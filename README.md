# English Zone - Mr. Abdelrahman Mohamed

English Zone is a Next.js learning platform UI and Supabase-ready application for structured English courses, student progress, exams, attendance, payments, and teacher support.

## Stack

- Next.js App Router + TypeScript
- CSS design system based on the supplied English Zone references
- Supabase Auth + PostgreSQL + Row Level Security
- Vercel-compatible deployment

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Put the Supabase project URL and anon public key in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

Never put a service-role key, database password, or other secret in the frontend or GitHub.

## Supabase setup

1. Create a free Supabase project.
2. Open **SQL Editor** and run [`supabase/schema.sql`](supabase/schema.sql).
3. In **Authentication > Providers**, enable Email.
4. Add the two variables above to `.env.local`.
5. Create the teacher account through Supabase Auth, then update that profile's `role` to `teacher` from the SQL editor. Public registration always creates a student profile.
6. Add the teacher's editable contact and InstaPay instructions as rows in `settings`, for example `instapay_account` and `payment_instructions`.

The schema stores student codes, course links, payment status, attendance, exams, exam submissions, grades, announcements, and settings persistently. Row Level Security policies restrict student rows to the signed-in student while teachers can manage platform data.

## Main routes

- `/` - homepage and visual identity
- `/courses` - course catalogue
- `/register` - student registration
- `/student-login` - student authentication
- `/teacher-login` - teacher authentication
- `/student-dashboard` - student workspace shell
- `/teacher-dashboard` - teacher management workspace shell
- `/about` and `/contact` - public information pages

The Supabase schema is the source of truth for production data. The catalogue cards currently provide the visual and navigation layer; course CRUD, payment approval, attendance entry, exams, and grades should be connected to authenticated server actions as the next implementation slice.

## Verification

```bash
npm run lint
npm run build
```

## Vercel deployment

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel Project Settings > Environment Variables for Preview and Production.
4. Deploy. Vercel runs `npm run build` automatically.
5. In Supabase Auth URL Configuration, add the Vercel deployment URL to **Site URL** and the allowed redirect URLs.

## Data persistence check

Create a student in `/register`, confirm the email, and verify the generated `EZ-XXXXXX` code in `profiles`. Add a course in Supabase, refresh or log out and back in, and verify it remains present. Do not use `localStorage` as a data store; all production records belong in Supabase.
