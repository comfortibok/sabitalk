import styles from "../styles/form.module.css";

import layoutStyles from "../styles/sabiTalkLayout.module.css";
const Login = ({ onSwitch }) => {
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
          Enter your details to log in and start learning
        </h3>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <span>Forgot Password</span>
          <button>Log in</button>
          <button className={styles.cta}>Do this later</button>
          <p>
            Don’t have an account? <a onClick={onSwitch}>Sign up</a>
          </p>
          <span>or</span>
          <button className={styles.loginBtn}>
            Log in with Google with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
