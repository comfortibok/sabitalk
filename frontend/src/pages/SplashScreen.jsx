import React from "react";
import styles from "../styles/splashScreen.module.css";
const SplashScreen = () => {
  return (
    <main className={styles.Wrapper}>
      <section className={styles.content}>
        <div className={styles.speech} id={styles.topLeft}>
          Bi gmo ila
        </div>
        <div className={styles.speech} id={styles.topRight}>
          Dị ka onye obodo
        </div>

        <h1 className={styles.logo}>Sabitalk</h1>
        <p className={styles.subtitle}>...speak it like a local</p>

        <div className={styles.speech} id={styles.bottomCenter}>
          Kamar ɗan gari
        </div>
      </section>
    </main>
  );
};

export default SplashScreen;
