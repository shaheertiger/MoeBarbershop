import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { site } from './src/data/site.ts';

// Square booking links written in blog-post Markdown get the same treatment
// as every other "Book" button on the site: they open in a new tab and carry
// data-book, so the Google Ads booking conversion is sent before the visitor
// leaves the page.
function rehypeBookingLinks() {
  const visit = (node) => {
    if (node.tagName === 'a' && String(node.properties?.href).startsWith(site.bookingUrl)) {
      node.properties.target = '_blank';
      node.properties.rel = ['noopener'];
      node.properties.dataBook = '';
    }
    node.children?.forEach(visit);
  };
  return (tree) => visit(tree);
}

// https://astro.build
export default defineConfig({
  site: 'https://www.moesbarbershop.ca',
  trailingSlash: 'ignore',
  // Every page is prerendered to static HTML (served from Vercel's CDN).
  // The adapter is only here for Vercel Web Analytics — don't switch to
  // output: 'server', it silently disables getStaticPaths() and 500s every
  // /blog, /services and /areas page.
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    rehypePlugins: [rehypeBookingLinks],
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      // Tune priority per page type so crawlers see the homepage and
      // money pages (services, areas) as most important.
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '');

        // List the canonical, slash-less URL (vercel.json 308s "/about/").
        if (path !== '') item.url = new URL(path, item.url).href;

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
