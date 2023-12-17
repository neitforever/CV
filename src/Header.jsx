import styles from "../src/styles/Header.module.css";
export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <img className={styles.img} src="/images/authorPhoto.jpg" />
      <div className={styles.box}>
        <span className={styles.name}>Vladislav Ptuashko</span>
        <span className={styles.job_title}>front-end developer</span>

        <p className={styles.contactInfo}>Contact Information:</p>
        <a
          className={styles.contactInfoLink}
          href="https://github.com/neitforever"
        >
          GitHub
        </a>
        <a className={styles.contactInfoLink} href="mailto:pvs1606@gmail.com">
          Email: pvs1606@gmail.com
        </a>
        <a className={styles.contactInfoLink} href="https://t.me/neitforever">
          Telegram: @neitforever
        </a>
      </div>
    </header>
  );
}
