import { z } from 'astro/zod';

const listingSchema = z.object({
  name: z.string(),
  description: z.string(),
  address: z.string(),
  addressShort: z.string(),
  latLong: z.string(),
  website: z.string().optional(),
  instagram: z.string().optional(),
  phone: z.string().optional(),
  mapUrl: z.string(),
  type: z.string(),
  tags: z.string().optional(),
  images: z.array(z.string()).optional(),
  searchTerms: z.string().optional(),
  rating: z.number().optional(),
  userRatingCount: z.number().optional(),
  photo1: z.string().optional(),
  photo2: z.string().optional(),
  photo3: z.string().optional(),
  unlisted: z.boolean().default(false),
});

export type Listing = z.infer<typeof listingSchema>;
