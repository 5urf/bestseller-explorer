const BASE_URL = "https://books-api.nomadcoders.workers.dev";

async function fetchAPI<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const fetchBestsellerLists = () => {
  return fetchAPI<Book.BookListsResponse>("/lists");
};

export const fetchBooksByList = (listName: string) => {
  if (!listName) {
    throw new Error("List name is required");
  }

  const encodedListName = encodeURIComponent(listName);
  return fetchAPI<Book.BookListDetailResponse>(`/list?name=${encodedListName}`);
};
