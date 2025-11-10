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

const tags = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    relatedTags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, tags };
