// Edge entry point. Serves the static build from ./dist.
// On staging hosts every response carries a noindex header and robots.txt
// blocks crawling, so the staging copy never competes with the live site.

export interface Env {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
}

const isStaging = (host: string) => host.startsWith('staging.') || host.endsWith('.workers.dev');

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const staging = isStaging(url.hostname);

    if (staging && url.pathname === '/robots.txt') {
      return new Response('User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }

    // Lead capture is not wired up yet: the check hands people to our legal
    // partner. Until the partner integration is agreed, nothing is stored.
    if (url.pathname.startsWith('/api/')) {
      return new Response('Not found', { status: 404 });
    }

    const res = await env.ASSETS.fetch(request);
    if (!staging) return res;
    const out = new Response(res.body, res);
    out.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return out;
  },
};
