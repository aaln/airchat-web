import { saveOrUpdateMessages } from './ingest';

export const scrapeMessagesByKeyword = async ({ keyword, token }) => {
  let allResults = [];
  let pageKey = null;

  for (let i = 0; i < 150; i++) {
    const url = new URL(
      `${process.env.NEXT_PUBLIC_CURRENT_URL}/api/search/enhanced`
    );
    url.searchParams.append('token', token);
    url.searchParams.append('query', keyword);
    if (pageKey) {
      url.searchParams.append('pageKey', pageKey);
    }

    try {
      const response = await fetch(url.toString(), {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      await saveOrUpdateMessages(data?.results);
      allResults.push(...data?.results);
      pageKey = data.nextPageKey;
      // Break the loop if there is no next page
      if (!pageKey || data?.results.length === 0) {
        break;
      }
    } catch (error) {
      console.error('Search Error:', error);
      throw new Error('Failed to fetch messages');
    }

    // Wait for 2 seconds before making the next call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return allResults;
};
