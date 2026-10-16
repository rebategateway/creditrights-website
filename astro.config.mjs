// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { UPDATED as LENDERS_UPDATED, TEMPLATE_CHANGED, LENDER_INFO } from './src/data/lenders.ts';

// lastmod must be the date the page content last changed (not the build date).
const latest = (...d) => d.filter(Boolean).sort().at(-1);
function lastmodFor(path) {
  const m = path.match(/^\/banks-and-lenders\/([^/]+)\/$/);
  if (m) return latest(LENDERS_UPDATED, TEMPLATE_CHANGED, LENDER_INFO.find((l) => l.slug === m[1])?.checked);
  return SITE_UPDATED;
}
// Lender pages: latest of UPDATED, TEMPLATE_CHANGED and the lender's own checked date (src/data/lenders.ts).
// Every other page: bump SITE_UPDATED when its copy changes.
const SITE_UPDATED = '2026-10-16';

// Utility pages
// carry noindex, so they never go in the sitemap.
const NOINDEX = [
  '/404', '/contact/sent/', '/check/',
  // Legal drafts, until reviewed (see LEGAL_REVIEWED in src/data/site.ts).
  '/privacy-policy/', '/complaints-policy/', '/website-terms/', '/cookie-policy/',
];

export default defineConfig({
  site: 'https://creditrights.co.uk',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  prefetch: false,
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX.some((p) => new URL(page).pathname === p || page.includes('/404') || page.endsWith('.txt')),
      serialize: (item) => ({ ...item, lastmod: lastmodFor(new URL(item.url).pathname) }),
    }),
  ],
  vite: {
    // Never inline font files as data: URIs: the CSP only allows fonts from our own origin.
    build: { sourcemap: false, assetsInlineLimit: (file) => (/\.(woff2?|ttf|otf)$/.test(file) ? false : undefined) },
  },
});
