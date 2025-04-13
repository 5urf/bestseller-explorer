import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <nav className={styles["nav"]}>
        <Link href='/' className={styles["logo"]}>
          New York Times Best Seller
        </Link>
        <ul className={styles["navList"]}>
          <li className={styles["navItem"]}>
            <Link href='/' className={styles["navLink"]}>
              Home
            </Link>
          </li>
          <li className={styles["navItem"]}>
            <Link href='/about' className={styles["navLink"]} prefetch>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
