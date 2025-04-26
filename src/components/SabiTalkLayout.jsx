import styles from "../styles/sabiTalkLayout.module.css";
import "../App.css";

const SabiTalkLayout = () => {
  return (
      <section className="sabi-container-left">
        <div className={styles.leftPaneContainer}>
          <h1>Speak It</h1>
          <p className={styles.subtitle}>...like a local</p>
          <h2>Master Nigerian languages in a fun and interactive way</h2>
          <p className={styles.subtext}>
            Play games, track your progress, and level up your fluency—one word
            at a time
          </p>
        </div>
      </section>
  );
};

export default SabiTalkLayout;
