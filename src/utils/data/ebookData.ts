const API_URL = "https://www.googleapis.com/books/v1/volumes?q=meditation&maxResults=10";

export const fetchBooks = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};