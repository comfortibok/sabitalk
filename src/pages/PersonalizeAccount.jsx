import AppLayout from "../layouts/AppLayout";
import { useNavigate } from "react-router-dom";
import styles from "../styles/form.module.css";

const PersonalizeAccount = () => {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };
  return (
    <AppLayout>
      <section className="formWrapper">
        <div
          className={styles.backWrap}
          onClick={handleBack}
          role="button"
          aria-label="Go back to sign up page"
          aria-hidden="true"
        >
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
        <section className={styles.formSection}>
          <h3 className={styles.formTitle}>Personalize your account</h3>
          <form className={styles.accountForm}>
            <div className={styles.inputWrap}>
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" required>
                <option value="" disabled selected hidden></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className={styles.inputWrap}>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" required />
            </div>
            <button>Confirm</button>
            <button
              className={styles.cta}
              type="button"
              aria-label="Do this later"
            >
              Do this later
            </button>
          </form>
        </section>
      </section>
    </AppLayout>
  );
};

export default PersonalizeAccount;
