import styles from "./BuyLink.module.css";

interface IBuyLinkProps {
  buyLinks: Array<{ name: string; url: string }>;
}

const BuyLink = ({ buyLinks }: IBuyLinkProps) => {
  if (!buyLinks || buyLinks.length === 0) return null;

  return (
    <div className={styles["buyOptions"]}>
      <p className={styles["buyLinksTitle"]}>구매처</p>
      <div className={styles["buyLinksList"]}>
        {buyLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className={styles["buyLinkButton"]}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default BuyLink;
