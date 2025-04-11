import styles from "./page.module.css";

export default function Loading() {
  return (
    <div className={styles["container"]}>
      <div className={styles["gridContainer"]}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className={styles["skeletonCard"]}>
            <div className={styles["skeletonContent"]}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
