-- CreditRights database (Supabase). Run in the SQL editor of the CreditRights project.
-- Copied from reportrepair-website/supabase/schema.sql (letters, lookups, opt-outs), 17 Oct 2026.

-- Letter mailings (worker/letter.ts). One row per person written to, loaded per mailing
-- (scripts/mailing.py). The reference is 8 random digits (printed as CR-xxxxxxxx), so it
-- can't be guessed from a neighbour's letter. Read only by the Worker with the service key.
create table if not exists public.letters (
  ref text primary key check (ref ~ '^[0-9]{8}$'),
  title text,
  first_name text,
  surname text,
  address1 text not null,
  address2 text,
  town text,
  postcode text not null,
  batch text not null,
  mailed_on date,
  created_at timestamptz not null default now()
);
alter table public.letters enable row level security;

-- Reference lookups, to limit guessing (10 failed lookups per device per hour). Hashed IP only.
create table if not exists public.letter_lookups (
  id bigint generated always as identity primary key,
  ip_hash text not null,
  ok boolean not null,
  created_at timestamptz not null default now()
);
create index if not exists letter_lookups_ip_time on public.letter_lookups (ip_hash, created_at);
alter table public.letter_lookups enable row level security;

-- Stop-our-letters requests (/opt-out/, worker/optout.ts): the do-not-mail list every new mailing is checked against.
create table if not exists public.opt_outs (
  id bigint generated always as identity primary key,
  ref text,
  name text not null,
  address1 text not null,
  postcode text not null,
  created_at timestamptz not null default now()
);
alter table public.opt_outs enable row level security;

-- Server key only: the public keys get nothing.
revoke all on public.letters, public.letter_lookups, public.opt_outs from anon, authenticated;
grant select on public.letters to service_role;
grant select, insert on public.letter_lookups to service_role;
grant select, insert on public.opt_outs to service_role;

-- Test record for checking the flow (delete when the first real mailing loads):
-- insert into public.letters (ref, title, first_name, surname, address1, town, postcode, batch)
-- values ('73519046', 'Mr', 'Test', 'Example', '1 Test Street', 'Crewe', 'CW4 8GJ', 'test');

-- Retention (privacy policy, 17 Oct 2026): failed reference lookups 30 days; letters 12 months
-- from the date of the letter. Runs daily at 03:15 with pg_cron (Database → Extensions → pg_cron).
create extension if not exists pg_cron;
select cron.schedule('creditrights-retention', '15 3 * * *', $$
  delete from public.letter_lookups where created_at < now() - interval '30 days';
  delete from public.letters where coalesce(mailed_on::timestamptz, created_at) < now() - interval '12 months';
$$);
