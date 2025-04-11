import PropTypes from "prop-types";
import styles from "../styles/sabiTalkLayout.module.css";
import "../App.css";

const SabiTalkLayout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <section className="left-pane">
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
      <section className="right-pane">{children}</section>
    </div>
  );
};

SabiTalkLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SabiTalkLayout;
