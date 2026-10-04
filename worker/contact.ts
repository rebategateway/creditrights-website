// Contact form handler (POST /api/contact/).
// Sends the message by email through Resend when RESEND_API_KEY is set.
// Optional Cloudflare Turnstile check when TURNSTILE_SECRET is set.
// Nothing is stored: the email is the record.

export interface ContactEnv {
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;   // where messages are delivered, e.g. support@creditrights.co.uk
  CONTACT_FROM?: string; // a verified sending address, e.g. "CreditRights <website@send.creditrights.co.uk>"
  TURNSTILE_SECRET?: string;
}

const TOPICS: Record<string, string> = {
  'new-claim': 'A new claim',
  'existing-claim': 'An existing claim',
  letters: 'Letters or my data',
  other: 'Something else',
};

const clean = (v: FormDataEntryValue | null, max: number) => String(v ?? '').replace(/\r/g, '').trim().slice(0, max);
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export async function handleContact(request: Request, env: ContactEnv): Promise<Response> {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  const reply = (status: number, message: string) => wantsJson
    ? Response.json({ ok: status < 300, message }, { status })
    : Response.redirect(new URL(status < 300 ? '/contact/sent/' : `/contact/?error=${encodeURIComponent(message)}`, request.url).toString(), 303);

  let fd: FormData;
  try { fd = await request.formData(); } catch { return reply(400, 'Something went wrong. Please try again.'); }

  // Bots: honeypot filled, or submitted impossibly fast. Pretend it worked.
  const started = Number(fd.get('started') ?? 0);
  if (clean(fd.get('company'), 100) || (started && Date.now() - started < 2500)) return reply(200, 'Sent');

  const name = clean(fd.get('name'), 120);
  const email = clean(fd.get('email'), 200);
  const reference = clean(fd.get('reference'), 40);
  const message = clean(fd.get('message'), 5000);
  const topic = TOPICS[clean(fd.get('topic'), 40)] ?? TOPICS.other;
  if (!name) return reply(422, 'Enter your name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return reply(422, 'Enter a valid email address, like name@example.com.');
  if (message.length < 5) return reply(422, 'Tell us how we can help.');

  if (env.TURNSTILE_SECRET) {
    const body = new FormData();
    body.append('secret', env.TURNSTILE_SECRET);
    body.append('response', clean(fd.get('cf-turnstile-response'), 2048));
    const ip = request.headers.get('cf-connecting-ip');
    if (ip) body.append('remoteip', ip);
    const v = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body }).then((r) => r.json() as Promise<{ success?: boolean }>).catch(() => ({ success: false }));
    if (!v.success) return reply(422, 'We couldn’t confirm you’re not a robot. Please try again.');
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    return reply(503, 'Our contact form isn’t switched on yet. Please email us instead.');
  }

  const text = `Topic: ${topic}\nName: ${name}\nEmail: ${email}\nLetter or claim reference: ${reference || '-'}\n\n${message}`;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: email,
      subject: `Website message: ${topic} (${name})`,
      text,
      html: `<pre style="font-family:sans-serif;white-space:pre-wrap">${esc(text)}</pre>`,
    }),
  }).catch(() => null);
  if (!res || !res.ok) return reply(502, 'We couldn’t send your message just now. Please try again, or email us.');
  return reply(200, 'Sent');
}
