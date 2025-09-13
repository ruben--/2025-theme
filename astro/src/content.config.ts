import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Navigation schema for type safety
const navigationSchema = z.object({
  id: z.string(),
  title: z.string(),
  href: z.string(),
  icon: z.string().optional(),
  order: z.number().default(0),
  description: z.string().optional(),
});

// Block content schema - for individual block content
const blockSchema = z.object({
  id: z.string(),
  type: z.enum(['stats', 'hero', 'features', 'testimonials', 'cta']),
  // Stats block specific fields
  title: z.string().optional(),
  description: z.string().optional(),
  stats: z.array(z.object({
    value: z.string(),
    title: z.string(),
    description: z.string(),
    bgColor: z.string().optional(),
    textColor: z.string().optional(),
    valueColor: z.string().optional(),
    descColor: z.string().optional(),
  })).optional(),
  // Hero block specific fields
  subtitle: z.string().optional(),
  cta: z.object({
    text: z.string(),
    href: z.string(),
  }).optional(),
  image: z.string().optional(),
  // Add more block-specific fields as needed
});

// Page manifest schema - defines which blocks to use
const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  blocks: z.array(z.object({
    type: z.enum(['StatsSection', 'HeroSection', 'FeatureGrid', 'Testimonials', 'CTASection']),
    content: z.string(), // Reference to block content ID
    variant: z.string().optional(), // Optional variant specification
  })),
  showInNav: z.boolean().default(true),
  navOrder: z.number().default(0),
});

// Define collections
const navigation = defineCollection({
  loader: glob({ pattern: "**/*.{md,yml,yaml,json}", base: "./src/content/navigation" }),
  schema: z.array(navigationSchema),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: pageSchema,
});

const blocks = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blocks" }),
  schema: blockSchema,
});

// Export collections
export const collections = {
  navigation,
  pages,
  blocks,
};