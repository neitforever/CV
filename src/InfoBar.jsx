import styles from "../src/styles/InfoBar.module.css";
export default function InfoBar() {
  return <div className={styles.container}>
    <div className={styles.box}>
    <span className={styles.title}>Personal information</span>
    <span className={styles.subTitle}>Education:</span>
    <span className={styles.infoField}>student of BSU MMF</span>
    <span className={styles.subTitle}>Country:</span>
    <span className={styles.infoField}>Belarus</span>
    <span className={styles.subTitle}>Age :</span>
    <span className={styles.infoField}>19 year </span>



    </div>

    <div className={styles.box}>
    <span className={styles.title}>Languages</span>
    <span className={styles.infoField}>English B1 Intermediate</span>
    </div>

    <div className={styles.box}>
    <span className={styles.title}>Experience</span>
    <span className={styles.infoField}>Freelancing</span>
    </div>
   
    <div className={styles.box}>
    <span className={styles.title}>Technologies</span>
    <span className={styles.infoField}>React</span>
    <span className={styles.infoField}>Redux</span>
    <span className={styles.infoField}>Html</span>
    <span className={styles.infoField}>Css</span>
    <span className={styles.infoField}>Tailwind</span>


    </div>
   
  </div>;
}
