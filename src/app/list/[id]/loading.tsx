import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles["container"]}>
      <div className={styles["headingSkeleton"]}>
        <div className={styles["skeletonContent"]}></div>
      </div>
      <div className={styles["booksGrid"]}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={styles["bookCardSkeleton"]}>
            <div className={styles["skeletonContent"]}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
