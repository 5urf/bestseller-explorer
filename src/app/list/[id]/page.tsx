import BookCard from "@/components/BookCard";
import { fetchBooksByList } from "@/lib/api";
import { formatDate } from "@/lib/utils/format";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

interface IListPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: IListPageProps): Promise<Metadata> {
  try {
    const { id } = await params;
    const { results } = await fetchBooksByList(id);
    return {
      title: `${results.display_name}`,
      description: `${results.display_name} 카테고리의 뉴욕 타임즈 베스트셀러 도서 목록`,
    };
  } catch (error) {
    return {
      title: "베스트셀러 리스트",
    };
  }
}

export default async function ListPage({ params }: IListPageProps) {
  try {
    const { id } = await params;
    const { results } = await fetchBooksByList(id);

    if (!results || !results.books) return notFound();

    return (
      <div className={styles["container"]}>
        <section className={styles["pageHeading"]}>
          <h1 className={styles["title"]}>{results["display_name"]}</h1>
          <p className={styles["date"]}>
            발행일: {formatDate(results.published_date)}
          </p>
        </section>
        <section className={styles["booksGrid"]}>
          {results.books.map((book) => (
            <BookCard key={book.primary_isbn13} book={book} />
          ))}
        </section>
      </div>
    );
  } catch (error) {
    throw error;
  }
}
