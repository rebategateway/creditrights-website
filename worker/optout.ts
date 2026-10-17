// Stop-our-letters form (POST /api/opt-out/, copied from Report Repair, 17 Oct 2026).
// Stored in Supabase "opt_outs", the do-not-mail list every new mailing file is checked
// against (scripts/mailing.py), and emailed to CONTACT_TO once Resend is set up.
// Works without JavaScript (form post, then a redirect).

import { alert, base, insert, key } from './db';
import type { DbEnv } from './db';
import { cleanRef } from './letter';

const clean = (v: FormDataEntryValue | null, max: number) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

export async function handleOptOut(request: Request, env: DbEnv, ctx?: { waitUntil(p: Promise<unknown>): void }): Promise<Response> {
  const back = (path: string) => Response.redirect(new URL(path, request.url).toString(), 303);
  const fail = (message: string) => back(`/opt-out/?error=${encodeURIComponent(message)}`);
  let fd: FormData;
  try { fd = await request.formData(); } catch { return fail('Something went wrong. Please try again.'); }

  // Bots: honeypot filled, or submitted impossibly fast. Pretend it worked.
  const started = Number(fd.get('started') ?? 0);
  if (clean(fd.get('company'), 100) || (started && Date.now() - started < 2000)) return back('/opt-out/done/');

  const name = clean(fd.get('name'), 120);
  const address1 = clean(fd.get('address1'), 160);
  const postcode = clean(fd.get('postcode'), 10).toUpperCase().replace(/\s+/g, ' ');
  const ref = cleanRef(fd.get('ref'));
  if (!name) return fail('Enter the name on the letter.');
  if (!address1) return fail('Enter the first line of the address we wrote to.');
  if (!/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/.test(postcode)) return fail('Enter the postcode we wrote to, like LS9 6AB.');
  if (!base(env) || !key(env)) return fail('This form isn’t working just now. Please email or write to us instead.');

  const status = await insert(env, 'opt_outs', { ref: ref || null, name, address1, postcode });
  if (status < 200 || status >= 300) return fail('We couldn’t save that. Please try again.');
  const mail = alert(env, 'Stop our letters', `Add to the do-not-mail list:\n\n${name}\n${address1}\n${postcode}${ref ? `\nReference CR-${ref}` : ''}`).catch(() => {});
  if (ctx) ctx.waitUntil(mail);
  return back('/opt-out/done/');
}
