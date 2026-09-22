import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Moe's Barbershop"),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    heroImage: z.string().optional(),
    /** Describes the hero photo; falls back to the post title. */
    heroAlt: z.string().optional(),
    /** Shown under the post and emitted as FAQPage JSON-LD. */
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { blog };
