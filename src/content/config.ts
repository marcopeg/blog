import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
