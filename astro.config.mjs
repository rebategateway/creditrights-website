// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { UPDATED as LENDERS_UPDATED } from './src/data/lenders.ts';

// lastmod must be the date the page content last changed (not the build date).
// Lender pages use UPDATED in src/data/lenders.ts; bump SITE_UPDATED when other page copy changes.
const SITE_UPDATED = '2026-10-04';

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
      serialize: (item) => ({ ...item, lastmod: new URL(item.url).pathname.startsWith('/banks-and-lenders/') ? LENDERS_UPDATED : SITE_UPDATED }),
    }),
  ],
  vite: {
    // Never inline font files as data: URIs: the CSP only allows fonts from our own origin.
    build: { sourcemap: false, assetsInlineLimit: (file) => (/\.(woff2?|ttf|otf)$/.test(file) ? false : undefined) },
  },
});
