import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    section: z.enum(['watch', 'read', 'listen', 'in-person']),
    dek: z.string().optional(),        // one-line summary
    cover: z.string().optional(),      // e.g. img/listen.jpg (from /public)
    sample: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});
export const collections = { posts };
