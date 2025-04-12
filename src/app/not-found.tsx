import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h1 className={styles["title"]}>페이지를 찾을 수 없습니다</h1>
        <Link href='/' className={styles["homeLink"]}>
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
