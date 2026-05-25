import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const worksCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/works" }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      order: z.number(),
      author: z.string(),
      date: z.date(),
      image: image(),
      image_alt: z.string(),
      description: z.string(),
      tags: z.array(z.string()).optional(),
      category: z.string(),
    }),
});
const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    draft: z.boolean().optional(),
    title: z.string(),
    author: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  works: worksCollection,
  posts: postsCollection,
};
