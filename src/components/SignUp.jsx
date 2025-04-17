import styles from "../styles/form.module.css";
import layoutStyles from "../styles/sabiTalkLayout.module.css";
const SignUp = ({ onSwitch }) => {
  return (
    <div className={`${styles.formSection} ${layoutStyles.leftPaneContainer}`}>
      <p className={styles.back}>
        <span>
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
        </span>
        Back
      </p>
      <h3 className={styles.title}>Create an account and start learning</h3>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email Address</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>
        <div className={styles.termsCheckbox}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className={styles.termsText}>
            By signing up, I agree to its
            <a href="#" className={styles.termsLink}>
              Terms & Conditions
            </a>
          </label>
        </div>
        <button type="submit">Sign up</button>
        <p>
          Already have an account?{" "}
          <a href="#" onClick={onSwitch}>
            Log In
          </a>
        </p>
        <span>or</span>
        <button type="button" className={styles.signUpBtn}>
          Sign up with Google
        </button>
      </form>
    </div>
  );
};

export default SignUp;
