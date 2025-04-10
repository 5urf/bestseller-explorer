const BASE_URL = "https://books-api.nomadcoders.workers.dev";

export const fetchBestsellerLists =
  async (): Promise<Book.BookListsResponse> => {
    const response = await fetch(`${BASE_URL}/lists`);

    if (!response.ok) {
      throw new Error("Failed to fetch bestseller lists");
    }

    return response.json();
  };

export const fetchBooksByList = async (
  listName: string
): Promise<Book.BookListDetailResponse> => {
  const response = await fetch(`${BASE_URL}/list?name=${listName}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch books for list: ${listName}`);
  }

  return response.json();
};
