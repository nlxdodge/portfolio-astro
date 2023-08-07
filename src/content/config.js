import { defineCollection, z } from 'astro:content';

const worksCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().optional(),
    title: z.string(),
    order: z.number(),
    author: z.string(),
    date: z.date(),
    image: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    category: z.string()
  })
});
const postsCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().optional(),
    title: z.string(),
    author: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
  })
});

export const collections = {
  'works': worksCollection,
  'posts': postsCollection,
};