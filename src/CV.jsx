import React from "react";
import styles from "../src/styles/CV.module.css";
import Header from "./Header";
import Projects from "./Projects";
import InfoBar from "./InfoBar";

export default function CV() {
  return (
    <div className={styles.resume}>
      <Header />
      <div className={styles.main}>
        <div className={styles.box}>
          <Projects />
          <InfoBar/>
        </div>
      </div>
    </div>
  );
}
