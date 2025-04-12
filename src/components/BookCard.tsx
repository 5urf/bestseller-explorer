import { formatWeeksOnList, getBookDescription } from "@/lib/utils/format";
import { getBookImageUrl } from "@/lib/utils/image";
import Image from "next/image";
import styles from "./BookCard.module.css";

interface IBookCardProps {
  book: Book.Book;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <article className={styles["bookCard"]}>
      <div className={styles["bookContent"]}>
        <div className={styles["bookHeader"]}>
          <span className={styles["rank"]}>#{book.rank}</span>
          <span className={styles["weeksOnList"]}>
            {formatWeeksOnList(book.weeks_on_list)}
          </span>
        </div>
        <h2 className={styles["title"]}>{book.title}</h2>
        <p className={styles["author"]}>by {book.author}</p>
        <div className={styles["bookCover"]}>
          <Image
            src={getBookImageUrl(book.book_image)}
            alt={book.title}
            width={120}
            height={180}
            className={styles["coverImage"]}
          />
        </div>
        <p className={styles["description"]}>
          {getBookDescription(book.description, book.title)}
        </p>
        {book.amazon_product_url && (
          <a
            href={book.amazon_product_url}
            target='_blank'
            rel='noopener noreferrer'
            className={styles["buyButton"]}
          >
            구매하기
          </a>
        )}
      </div>
    </article>
  );
};

export default BookCard;
