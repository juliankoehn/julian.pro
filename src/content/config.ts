import { defineCollection, z } from 'astro:content';

const caseSchema = z.object({
        title: z.string(),
        description: z.string(),
        laufzeit: z.string(),
        kunde: z.string(),
        branche: z.string(),
        tags: z.array(z.string()),
    })

const caseCollection = defineCollection({
    type: 'content',
    schema: caseSchema,
});

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

export type Case = z.infer<typeof caseSchema>;

export const collections = {
  'blog': blogCollection,
  'cases': caseCollection,
};