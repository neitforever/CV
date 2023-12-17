import styles from "../src/styles/Projects.module.css";
export default function Projects() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Projects</span>
      <div className={styles.projectsContainer}>
        <div className={styles.project}>
          <span className={styles.projectName}>Todo list</span>
          <div className={styles.box}>
            <img className={styles.projectImage} src="/images/todolist.jpg" />

            <div className={styles.projectDescription}>
              <span className={styles.infoField}>
                Todo list app for task planning
              </span>
              <span className={styles.infoField}>React</span>

              <a
                className={styles.infoField}
                href="https://github.com/neitforever/Todo-list"
              >
                GitHub: https://github.com/neitforever/Todo-list
              </a>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <span className={styles.projectName}>Notions</span>
          <div className={styles.box}>
            <img className={styles.projectImage} src="/images/notions.jpg" />

            <div className={styles.projectDescription}>
              <span className={styles.infoField}>
                The application has login, authorization, creation, viewing,
                editing pages
              </span>
              <span className={styles.infoField}>
                React, Html, Css, Tailwind, Redux, Json-server
              </span>

              <a
                className={styles.infoField}
                href="https://github.com/neitforever/Notions"
              >
                GitHub: https://github.com/neitforever/Notions
              </a>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <span className={styles.projectName}>Albums</span>
          <div className={styles.box}>
            <img className={styles.projectImage} src="/images/albums.jpg" />

            <div className={styles.projectDescription}>
              <span className={styles.infoField}>
                The application has several pages with information about authors
                and albums
              </span>
              <span className={styles.infoField}>
                React, React-router-dom, Html, Material UI
              </span>

              <a
                className={styles.infoField}
                href="https://github.com/neitforever/Albums"
              >
                GitHub: https://github.com/neitforever/Albums
              </a>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <span className={styles.projectName}>Lamoda</span>
          <div className={styles.box}>
            <img className={styles.projectImage} src="/images/lamoda.jpg" />

            <div className={styles.projectDescription}>
              <span className={styles.infoField}>
                The application is the functionality of an online store, with
                search, filtering and sorting of goods
              </span>
              <span className={styles.infoField}>
                React , React-Chance , Html , Module css{" "}
              </span>

              <a
                className={styles.infoField}
                href="https://github.com/neitforever/lamoda"
              >
                GitHub: https://github.com/neitforever/lamoda              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
