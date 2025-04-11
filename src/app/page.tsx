import CategoryCard from "@/components/CategoryCard";
import { fetchBestsellerLists } from "@/lib/api";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home | 뉴욕 타임즈 베스트셀러",
};

export default async function Home() {
  const { results } = await fetchBestsellerLists();

  return (
    <main className={styles["container"]}>
      <section className={styles["gridContainer"]}>
        {results.map((result) => (
          <CategoryCard
            key={result.list_name}
            displayName={result.display_name}
            listNameEncoded={result.list_name_encoded}
          />
        ))}
      </section>
    </main>
  );
}
