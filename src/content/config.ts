import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>  z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        date: z.coerce.date(),
        topics: z.array(z.string()),
        image: z.object({
            url: image(),
            alt: z.string(),
        }).optional(),
    })
});

export const collections = {
  'blog': blogCollection,
};