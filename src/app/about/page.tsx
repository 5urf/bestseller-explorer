import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className={styles["container"]}>
      <section className={styles["aboutSection"]}>
        <article className={styles["description"]}>
          <p className={styles["grainy-p"]}>
            뉴욕 타임스 베스트셀러는 단순한 책 순위를 넘어서는 의미를 가집니다.
            <br /> 이 목록에 선정된 책들은 독자들의 관심을 끌며, 현대 문화와
            사회의 흐름을 반영합니다.
          </p>
          <p className={styles["grainy-p"]}>
            우리는 이 웹사이트를 통해 다양한 장르의 베스트셀러들을 쉽고 간편하게
            탐색할 수 있도록 했습니다. <br /> 각 카테고리의 책들은 독자들에게
            새로운 이야기와 관점을 제공합니다.
          </p>
          <p className={styles["grainy-p"]}>
            뉴욕 타임즈의 베스트셀러는 단순한 판매 순위가 아니라, 독서의
            트렌드와 문화적 영향력을 보여주는 중요한 지표입니다.
          </p>
          <p className={styles["grainy-p"]}>
            책과 함께 새로운 세상을 탐험해보세요.
          </p>
        </article>
      </section>
    </div>
  );
}
