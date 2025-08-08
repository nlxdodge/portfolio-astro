import { imageMetadata } from "astro/assets/utils";
import { defineCollection, z } from "astro:content";

const worksCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      order: z.number(),
      author: z.string(),
      date: z.date(),
      image: image() | imageMetadata(),
      image_alt: z.string(),
      description: z.string(),
      tags: z.array(z.string()).optional(),
      category: z.string(),
    }),
});
const postsCollection = defineCollection({
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
