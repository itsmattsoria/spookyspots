import { z } from 'astro/zod';

const listingSchema = z.object({
  name: z.string(),
  description: z.string(),
  address: z.string(),
  latLong: z.string(),
  website: z.string(),
  instagram: z.string(),
  phone: z.string(),
  mapUrl: z.string(),
  type: z.string(),
  tags: z.array(z.string()),
  images: z.array(z.string()),
});

export type Listing = z.infer<typeof listingSchema>;
