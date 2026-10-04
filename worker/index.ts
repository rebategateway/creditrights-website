// Edge entry point. Serves the static build from ./dist.
// On staging hosts every response carries a noindex header and robots.txt
// blocks crawling, so the staging copy never competes with the live site.

import { handleContact } from './contact';
import type { ContactEnv } from './contact';

export interface Env extends ContactEnv {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
}

const isStaging = (host: string) => host.startsWith('staging.') || host.endsWith('.workers.dev');

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
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
