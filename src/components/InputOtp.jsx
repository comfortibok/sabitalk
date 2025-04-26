import styles from "../styles/form.module.css";
import layoutStyles from "../styles/sabiTalkLayout.module.css";
const InputOtp = () => {
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
          Please enter the 6 digit OTP sent to your email address to proceed{" "}
        </h3>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <span>Resend OTP</span>
          </div>
          <button type="button">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default InputOtp;
