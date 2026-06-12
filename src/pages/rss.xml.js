import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_URL } from "../data/site";

export async function GET(context) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: "Moe's Barbershop Blog",
    description:
      "Haircut and beard grooming tips, style guides, and barbering advice from Moe's Barbershop in Erin, Ontario.",
    site: context.site ?? SITE_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: `<language>en-ca</language>`,
  });
}
