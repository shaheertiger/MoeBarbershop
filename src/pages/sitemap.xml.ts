import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE_URL } from "../data/site";
import { servicePages } from "../data/servicePages";
import { locationPages } from "../data/locations";

export const prerender = true;

interface Entry {
  path: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export const GET: APIRoute = async () => {
  const now = new Date().toISOString();

  const entries: Entry[] = [
    { path: "/", lastmod: now, changefreq: "weekly", priority: "1.0" },
    { path: "/services", lastmod: now, changefreq: "monthly", priority: "0.9" },
    { path: "/areas", lastmod: now, changefreq: "monthly", priority: "0.9" },
    { path: "/about", lastmod: now, changefreq: "monthly", priority: "0.7" },
    { path: "/blog", lastmod: now, changefreq: "weekly", priority: "0.7" },
  ];

  for (const s of servicePages) {
    entries.push({
      path: `/services/${s.slug}`,
      lastmod: now,
      changefreq: "monthly",
      priority: "0.8",
    });
  }

  for (const l of locationPages) {
    entries.push({
      path: `/areas/${l.slug}`,
      lastmod: now,
      changefreq: "monthly",
      priority: "0.8",
    });
  }

  const posts = await getCollection("blog");
  for (const p of posts) {
    entries.push({
      path: `/blog/${p.id}`,
      lastmod: (p.data.updatedDate ?? p.data.pubDate).toISOString(),
      changefreq: "monthly",
      priority: "0.6",
    });
  }

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries
      .map(
        (e) =>
          `  <url>\n` +
          `    <loc>${SITE_URL}${e.path}</loc>\n` +
          `    <lastmod>${e.lastmod}</lastmod>\n` +
          `    <changefreq>${e.changefreq}</changefreq>\n` +
          `    <priority>${e.priority}</priority>\n` +
          `  </url>`,
      )
      .join("\n") +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
