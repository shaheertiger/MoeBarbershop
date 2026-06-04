import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://moesbarbershop.ca',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
});
