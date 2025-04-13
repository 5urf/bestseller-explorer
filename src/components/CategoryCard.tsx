import Link from "next/link";
import styles from "./CategoryCard.module.css";

interface ICategoryCardProps {
  displayName: string;
  listNameEncoded: string;
}

export default function CategoryCard({
  displayName,
  listNameEncoded,
}: ICategoryCardProps) {
  return (
    <Link href={`/list/${listNameEncoded}`} className={styles["categoryLink"]}>
      <article className={styles["categoryCard"]}>
        <h2 className={styles["categoryName"]}>{displayName}</h2>
        <span className={styles["viewMore"]}>→</span>
      </article>
    </Link>
  );
}
