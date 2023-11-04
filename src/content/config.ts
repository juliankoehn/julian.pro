import { defineCollection, z, type SchemaContext, reference } from 'astro:content';

const categoryCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        description: z.string(),
    }),
});

const pagesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

const caseSchema = ({ image }: SchemaContext)  => z.object({
        title: z.string(),
        description: z.string(),
        laufzeit: z.string(),
        kunde: z.string(),
        branche: z.string(),
        tags: z.array(z.string()),
        logo: z.string().optional(),
        image: z.object({
            url: image(),
            alt: z.string(),
        }).optional(),
        links: z.array(z.object({
            title: z.string(),
            url: z.string(),
        })).optional(),
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
        }),
        categories: z.array(reference('categories')).optional(),
    })
});

export type Case = z.infer<ReturnType<typeof caseSchema>>;

export const collections = {
  'blog': blogCollection,
  'cases': caseCollection,
  'categories': categoryCollection,
  'pages': pagesCollection,
};