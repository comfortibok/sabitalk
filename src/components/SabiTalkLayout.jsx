import PropTypes from "prop-types";
import styles from "../styles/sabiTalkLayout.module.css";
import "../App.css";

const SabiTalkLayout = ({ children, showBackButton = true }) => {
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
      <section className="right-pane">
        {showBackButton && (
          <p className={styles.back}>
            <span>&lt;</span> Back
          </p>
        )}
        {children}
      </section>
    </div>
  );
};

SabiTalkLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showBackButton: PropTypes.bool, 
};

export default SabiTalkLayout;
