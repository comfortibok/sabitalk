import AppLayout from "../layouts/AppLayout";
import styles from "../styles/form.module.css";

const PersonalizeAccount = () => {
  return (
    <AppLayout>
      <div className="formWrapper">
        <div className={styles.backWrap}>
          <svg
            width="9"
            height="18"
            viewBox="0 0 9 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99984 16.92L1.47984 10.4C0.709844 9.63002 0.709844 8.37002 1.47984 7.60002L7.99984 1.08002"
              stroke="#383848"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Back</p>
        </div>
        <div className={styles.formSection}>
          <h3 className={styles.formTitle}>Personalize your account</h3>
          <form className={styles.accountForm}>
            <div className={styles.inputWrap}>
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender">
                <option value="select"></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className={styles.inputWrap}>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" />
            </div>
            <button>Confirm</button>
            <button className={styles.cta}>Do this later</button>
          </form>
        </div>
      </div>
    </AppLayout>
  );
};

export default PersonalizeAccount;
