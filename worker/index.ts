// Edge entry point. Serves the static build from ./dist.
// On staging hosts every response carries a noindex header and robots.txt
// blocks crawling, so the staging copy never competes with the live site.

import { handleContact } from './contact';
import type { ContactEnv } from './contact';
import type { DbEnv } from './db';
import { handleLetter } from './letter';
import { handleOptOut } from './optout';

export interface Env extends ContactEnv, DbEnv {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
}

const isStaging = (host: string) => host.startsWith('staging.') || host.endsWith('.workers.dev');

export default {
  async fetch(request: Request, env: Env, ctx: { waitUntil(p: Promise<unknown>): void }): Promise<Response> {
    const url = new URL(request.url);
    const staging = isStaging(url.hostname);

    // One canonical host: www and http go to https://creditrights.co.uk
    if (url.hostname === 'www.creditrights.co.uk') {
      url.hostname = 'creditrights.co.uk';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    if (staging && url.pathname === '/robots.txt') {
      return new Response('User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }

    if (url.pathname === '/api/contact/' || url.pathname === '/api/contact') {
      if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
      return handleContact(request, env);
    }

    // Our own check is off for now (CHECK_URL in src/data/site.ts): send it to Claims & Refunds.
    if (url.pathname === '/check' || url.pathname === '/check/') {
      return Response.redirect('https://claimsandrefunds.co.uk/check/?type=lending&utm_source=creditrights', 302);
    }

    // Short address printed on letters: creditrights.co.uk/letter
    if (url.pathname === '/letter' || url.pathname === '/letter/') {
      return Response.redirect(new URL(`/received-a-letter/${url.search}`, url).toString(), 301);
    }

    const postOnly = () => new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
    if (url.pathname === '/api/letter' || url.pathname === '/api/letter/') {
      return request.method === 'POST' ? handleLetter(request, env, ctx) : postOnly();
    }
    if (url.pathname === '/api/opt-out' || url.pathname === '/api/opt-out/') {
      return request.method === 'POST' ? handleOptOut(request, env, ctx) : postOnly();
    }

    // Lead capture is not wired up yet: the check hands people to our legal
    // partner. Until the partner integration is agreed, nothing is stored.
    if (url.pathname.startsWith('/api/')) {
      return new Response('Not found', { status: 404 });
    }

    const res = await env.ASSETS.fetch(request);
    const out = new Response(res.body, res);
    if (staging) {
      out.headers.set('X-Robots-Tag', 'noindex, nofollow');
    } else {
      // Browsers remember to use HTTPS for a year. No preload until we're sure.
      out.headers.set('Strict-Transport-Security', 'max-age=31536000');
    }
    return out;
  },
};
