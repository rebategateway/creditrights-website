# CreditRights website

Marketing site for creditrights.co.uk (CreditRights, a trading name of Claim Simple Ltd). Astro, served by a Cloudflare Worker.

- `npm run dev`: local preview
- `npm run verify`: build and run the quality checks in `scripts/check-site.mjs`

Staging hosts (`staging.*`, `*.workers.dev`) send a noindex header and block crawlers in robots.txt (see `worker/index.ts`).
