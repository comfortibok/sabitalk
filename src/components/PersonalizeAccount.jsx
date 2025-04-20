import layoutStyles from "../styles/sabiTalkLayout.module.css";
import styles from "../styles/form.module.css";
const PersonalizeAccount = ({ onSwitch }) => {
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
        <h3 className={styles.title}>Personalize your account</h3>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender">
              <option value="select">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <button>Confirm</button>
          <button className={styles.cta}>Do this later</button>
        </form>
      </div>
    </div>
  );
};
export default PersonalizeAccount;
