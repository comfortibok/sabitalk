import styles from "../styles/form.module.css";
import layoutStyles from "../styles/sabiTalkLayout.module.css";
const ResetPassword = ({ onSwitch }) => {
  return (
    <div className={`${styles.formSection} ${layoutStyles.leftPaneContainer}`}>
      <div className={styles.back}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles.backIcon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <p>Back</p>
      </div>
      <div>
        <h3 className={styles.title}>
          Enter your email address to receive an OTP to reset your password
        </h3>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" id="email" />
          </div>
          <button type="button" className="reset-confirm-btn">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
