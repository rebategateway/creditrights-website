// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Placeholder pages (see PLACEHOLDERS in src/data/site.ts) and utility pages
// carry noindex, so they never go in the sitemap.
const NOINDEX = [
  '/404', '/how-it-works/', '/claim-types/', '/guides/', '/faq/', '/fees/', '/about-us/',
  '/contact/', '/privacy-policy/', '/complaints-policy/', '/website-terms/', '/cookie-policy/',
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
