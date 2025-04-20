import styles from "../styles/form.module.css";
import layoutStyles from "../styles/sabiTalkLayout.module.css";
const ConfirmOtp = ({ onSwitch }) => {
  return (
    <div className={`${styles.formSection} ${layoutStyles.leftPaneContainer}`}>
      <div className={styles.back}>
        <img
          className={styles.backIcon}
          src="src/assets/icons/arrow-left.png"
          alt="Back icon"
        />
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
          <button type="button">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmOtp;
