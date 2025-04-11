"use client";

import { useEffect } from "react";
import styles from "./ErrorDisplay.module.css";

const ErrorDisplay = ({ error, reset }: IErrorProps) => {
  useEffect(() => {
    console.error("Error: ", error);
  }, [error]);

  return (
    <div className={styles["errorContainer"]}>
      <div className={styles["errorCard"]}>
        <h2 className={styles["errorTitle"]}>이런, 문제가 발생했습니다!</h2>
        <p className={styles["errorMessage"]}>
          {error.message || "데이터를 불러오는 중 오류가 발생했습니다."}
        </p>
        <button onClick={() => reset()} className={styles["resetButton"]}>
          다시 시도하기
        </button>
      </div>
    </div>
  );
};

export default ErrorDisplay;
