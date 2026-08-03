import { type Listing } from '../schemas/listing';

export async function fetchRecords(): Promise<Listing[]> {
  try {
    const response = await fetch(import.meta.env.DIRECTORY_DATA_SOURCE_URL);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const rawData = await response.json();

    // filter out records whose 'unlisted' property is true
    const filteredRecords = rawData.filter(
      record => record.name && !record.unlisted
    );

    return filteredRecords;
  } catch (error) {
    console.error('Failed to fetch records:', error);
    throw error;
  }
}
