import { type Listing } from '../schemas/listing';

export async function fetchListings(): Promise<Listing[]> {
  try {
    const response = await fetch(import.meta.env.DIRECTORY_DATA_SOURCE_URL);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const rawData = await response.json();

    // filter out listings whose 'unlisted' property is true
    const filteredListings = rawData.filter(
      listing => listing.name && !listing.unlisted
    );

    return filteredListings;
  } catch (error) {
    console.error('Failed to fetch listings:', error);
    throw error;
  }
}
