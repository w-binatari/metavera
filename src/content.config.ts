import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectStatus = z.enum(['available', 'construction', 'completed', 'sold']);
const projectType = z.enum(['residential', 'commercial', 'land']);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortName: z.string().optional(),
    location: z.string(),
    address: z.string().optional(),
    type: projectType,
    status: projectStatus,
    statusLabel: z.string(),
    price: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    image: z.string(),
    gallery: z.array(z.string()).default([]),
    excerpt: z.string(),
    description: z.string(),
    specs: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .default([]),
    amenities: z.array(z.string()).default([]),
    unitOptions: z.array(z.string()).default([]),
    mapEmbed: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    initials: z.string(),
    bio: z.string(),
    photo: z.string().optional(),
    order: z.number().default(99),
    accent: z.enum(['navy', 'blue', 'mid', 'accent']).default('navy'),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    initials: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = { projects, team, testimonials };
