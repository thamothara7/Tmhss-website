## Contact form database (Supabase)

The contact form writes to a Supabase table named `contact_messages`.

1) Create a Supabase project and copy the project URL and anon key.
2) Add a `.env` file in the project root with:

```
VITE_SUPABASE_URL=YOUR_URL
VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

3) In the Supabase SQL editor, create the table:

```sql
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default now()
);

-- Allow inserts from the public anonymous key
alter table public.contact_messages enable row level security;
create policy "allow inserts" on public.contact_messages
  for insert to anon
  with check (true);
```

4) Restart the dev server after adding the env file:

```
npm run dev
```

Submissions are handled in `src/pages/Contact.jsx` via `supabase.from('contact_messages').insert(...)`.
