// Supabase helpers for the Worker (copied from reportrepair-website/worker/leads.ts).
// Server key only: the tables refuse the public keys (supabase/schema.sql).

export interface DbEnv {
  SUPABASE_URL?: string;
  SUPABASE_SERVICE_KEY?: string;
  RESEND_API_KEY?: string;
  CONTACT_FROM?: string;
  CONTACT_TO?: string;
}

/** The secret key without stray spaces or line breaks from pasting. */
export const key = (env: DbEnv) => (env.SUPABASE_SERVICE_KEY ?? '').trim();
/** SUPABASE_URL without stray spaces or a trailing slash. */
export const base = (env: DbEnv) => (env.SUPABASE_URL ?? '').trim().replace(/\/+$/, '');
export const db = (env: DbEnv, extra: Record<string, string> = {}) => ({ apikey: key(env), Authorization: `Bearer ${key(env)}`, 'Content-Type': 'application/json', ...extra });
/** The Supabase host, for logs (never the key). */
const host = (env: DbEnv) => { try { return new URL(base(env)).host; } catch { return `invalid SUPABASE_URL (length ${env.SUPABASE_URL?.length ?? 0})`; } };

export async function insert(env: DbEnv, table: string, row: Record<string, unknown>) {
  let res: Response;
  try {
    res = await fetch(`${base(env)}/rest/v1/${table}`, { method: 'POST', headers: db(env, { Prefer: 'return=minimal' }), body: JSON.stringify(row) });
  } catch (e) {
    console.error(`supabase insert ${table}: request failed to ${host(env)}: ${String(e).slice(0, 200)}`);
    return 0;
  }
  if (!res.ok) {
    // PostgREST's code and message only: "details" can quote the row, which holds personal data.
    const b = await res.json().catch(() => ({})) as { code?: string; message?: string };
    console.error(`supabase insert ${table}: ${res.status} from ${host(env)} ${b.code ?? ''} ${(b.message ?? '').slice(0, 160)}`);
  }
  return res.status;
}

/** An email to CONTACT_TO through Resend, when it's set up. */
export async function alert(env: DbEnv, subject: string, text: string) {
  if (!env.RESEND_API_KEY || !env.CONTACT_FROM || !env.CONTACT_TO) return;
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY.trim()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.CONTACT_FROM, to: [env.CONTACT_TO], subject, text }),
  }).catch(() => null);
  if (!r || !r.ok) console.error(`alert email: ${r ? r.status : 'request failed'}`);
}
