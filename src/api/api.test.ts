import { searchTerm } from './itunes-api';

const SAMPLE_SEARCH_TERM = "Better Khalid";

test('searches results for a song on iTunes API', async () => {
    const response = await searchTerm(SAMPLE_SEARCH_TERM);
    expect(response.resultCount).toBeGreaterThanOrEqual(1);
    expect(response.results[0].previewUrl).toBeDefined();
});