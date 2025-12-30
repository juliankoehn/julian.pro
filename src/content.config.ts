import { defineCollection, z, type SchemaContext, reference } from 'astro:content';

const categoryCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        description: z.string(),
        tooling: z.boolean().optional(),
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
        tooling: z.array(reference('tooling')).optional(),
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

const toolingCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        name: z.string(),
        title: z.string(),
        icon: z.string().optional(),
        description: z.string(),
        category: reference('categories').optional(),
        benefits: z.array(z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
        })),
        ctaLabel: z.string().optional(),
    
        whyChooseTool: z.object({
            eyebrow: z.string(), // Überschrift
            heading: z.string(), // Überschrift
            advantages: z.string(), // Vertiefte Erklärung der Vorteile
            useCases: z.array(z.object({
                title: z.string(), // Titel des Anwendungsfalls
                description: z.string(), // Beschreibung des Anwendungsfalls
                icon: z.string(), // Icon des Anwendungsfalls "mdi:icon"
                link: z.string().optional(), // Link zum Anwendungsfall
            })).max(8), // Informationen zu Anwendungsfällen
        }).optional(),

        featureOverview: z.object({
            mainFeatures: z.array(z.string()), // Liste der Hauptfunktionen
            integrationOptions: z.array(z.string()), // Informationen zu Integrationen
        }).optional(),
        customerReviewsOrSuccessStories: z.array(
            z.object({
                reviewOrStory: z.string(), // Kundenbewertung oder Erfolgsgeschichte
            })
        ).optional(),
        ctaSection: z.object({
            actionCall: z.string(), // Action call, Heading
            actionLabel: z.string(), // Weiterer CTA-Button
        }).optional(),
        faq: z.object({
            heading: z.string(), // Überschrift
            questions: z.array(z.object({
                question: z.string(), // Frage in den FAQ
                answer: z.string(), // Antwort auf die Frage
            }))
        }).optional(),
    })
});


const servicesCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(), // Titel der Dienstleistung
        name: z.string(), // Name der Dienstleistung für word cloud
        shortDescription: z.string(), // Kurze Beschreibung der Dienstleistung für word cloud
        icon: z.string(), // Icon der Dienstleistung "mdi:icon"
        description: z.string(), // Kurze Beschreibung der Dienstleistung
        keywords: z.array(z.string()), // Relevante Keywords für SEO




        // section faq
        faqSection: z.object({
            heading: z.string(), // Überschrift z.B. "Häufig gestellte Fragen zu ... thema"
            questions: z.array(z.object({
                question: z.string(), // Frage in den FAQ
                answer: z.string(), // Antwort auf die Frage
            }))
        }).optional(),

        benefitsSection: z.object({
            title: z.string(), // Titel der Vorteile
            description: z.string(), // Beschreibung der Vorteile
            benefits: z.array(z.string()), // Vorteile der Dienstleistung als Stichpunkte
        }).optional(), // Vorteile der Dienstleistung

        // nach FAQ wird Kontakt CTA angezeigt vom template
    }),
});

export const collections = {
  'blog': blogCollection,
  'cases': caseCollection,
  'categories': categoryCollection,
  'pages': pagesCollection,
  'tooling': toolingCollection,
  'services': servicesCollection,
};