// Letter reference lookup (copied from Report Repair, 17 Oct 2026). Someone types the
// reference from our letter on /received-a-letter/ and the check then shows the name and
// address we wrote to, to confirm. Mailing data is in Supabase table "letters"
// (supabase/schema.sql), loaded per mailing (scripts/mailing.py). References are 8 random
// digits (printed CR-48203917), so they can't be guessed from a neighbour's letter; failed
// lookups are limited per device (hashed IP, letter_lookups).

import { base, db, insert, key } from './db';
import type { DbEnv } from './db';

const MAX_FAILS = 10; // failed lookups per device per hour
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

async function sha(s: string) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** The reference as typed ("CR-4820 3917", "cr48203917") reduced to its digits and letters. */
export const cleanRef = (v: unknown) => (typeof v === 'string' ? v : '').replace(/^\s*CR\s*-?/i, '').replace(/[^0-9A-Za-z]/g, '').slice(0, 12);

export async function handleLetter(request: Request, env: DbEnv, ctx?: { waitUntil(p: Promise<unknown>): void }): Promise<Response> {
  if (!base(env) || !key(env)) return json({ error: 'unavailable' }, 503);
  let ref = '';
  try { ref = cleanRef(((await request.json()) as { ref?: unknown }).ref); } catch { /* bad body */ }
  if (!ref) return json({ found: false });

  const ip = request.headers.get('cf-connecting-ip') ?? '';
  const ipHash = await sha(`${ip}|${key(env).slice(-24)}`);
  const since = new Date(Date.now() - 3600 * 1000).toISOString();
  try {
    const r = await fetch(`${base(env)}/rest/v1/letter_lookups?select=id&ip_hash=eq.${ipHash}&ok=is.false&created_at=gte.${since}&limit=${MAX_FAILS}`, { headers: db(env) });
    if (r.ok && ((await r.json()) as unknown[]).length >= MAX_FAILS) return json({ error: 'too_many' }, 429);
  } catch { /* if the count fails, carry on: the lookup itself is still exact-match only */ }

  let row: Record<string, string | null> | undefined;
  if (/^[0-9]{8}$/.test(ref)) {
    try {
      const r = await fetch(`${base(env)}/rest/v1/letters?ref=eq.${ref}&select=title,first_name,surname,address1,address2,town,postcode&limit=1`, { headers: db(env) });
      if (!r.ok) { console.error(`letters lookup: ${r.status}`); return json({ error: 'unavailable' }, 503); }
      row = ((await r.json()) as Record<string, string | null>[])[0];
    } catch (e) {
      console.error(`letters lookup failed: ${String(e).slice(0, 200)}`);
      return json({ error: 'unavailable' }, 503);
    }
  }
  const log = insert(env, 'letter_lookups', { ip_hash: ipHash, ok: !!row });
  if (ctx) ctx.waitUntil(log); else await log;

  if (!row) return json({ found: false });
  return json({
    found: true,
    ref,
    title: row.title ?? '',
    firstName: row.first_name ?? '',
    surname: row.surname ?? '',
    address: [row.address1, row.address2, row.town].filter(Boolean),
    postcode: row.postcode ?? '',
  });
}
