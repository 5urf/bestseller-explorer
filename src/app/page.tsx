import { fetchBestsellerLists } from "@/app/lib/api";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const { results } = await fetchBestsellerLists();

  return (
    <main className={styles["container"]}>
      <section className={styles["gridContainer"]}>
        {results.map((result) => (
          <Link
            key={result.list_name}
            href={`/list/${result.list_name_encoded}`}
            className={styles["categoryLink"]}
          >
            <article className={styles["categoryCard"]}>
              <h2 className={styles["categoryName"]}>{result.display_name}</h2>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
