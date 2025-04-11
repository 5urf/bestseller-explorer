import { fetchBooksByList } from "@/lib/api";

export default async function Page({ params }: { params: { id: string } }) {
  const {
    results: { books },
  } = await fetchBooksByList(params.id);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
