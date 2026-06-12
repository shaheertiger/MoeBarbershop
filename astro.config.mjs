import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://www.moesbarbershop.ca',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      // Tune priority per page type so crawlers see the homepage and
      // money pages (services, areas) as most important.
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '');

        if (path === '') {
          item.priority = 1.0;
        } else if (path === '/services' || path === '/areas') {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (path.startsWith('/services/') || path.startsWith('/areas/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (path === '/blog') {
          item.priority = 0.7;
        } else if (path.startsWith('/blog/')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.5;
        }

        return item;
      },
    }),
  ],
});
