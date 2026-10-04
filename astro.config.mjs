// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Utility pages
// carry noindex, so they never go in the sitemap.
const NOINDEX = [
  '/404', '/contact/sent/',
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
      filter: (page) => !NOINDEX.some((p) => new URL(page).pathname === p || page.includes('/404')),
    }),
  ],
  vite: {
    build: { sourcemap: false },
  },
});
