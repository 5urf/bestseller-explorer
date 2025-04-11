import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © {currentYear} Built by <span className={styles.highlight}>5urf</span>
      </p>
    </footer>
  );
};

export default Footer;
