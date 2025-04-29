import AppLayout from "../layouts/AppLayout";
import { useNavigate } from "react-router-dom";
import styles from "../styles/form.module.css";

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <AppLayout>
      <section className="formWrapper">
        <div
          className={styles.backWrap}
          onClick={handleBack}
          role="button"
          aria-label="Go back to log in page"
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
        <h3 className={styles.formTitle}>
          Enter your email address to receive an OTP to reset your password
        </h3>
        <section className={styles.formSection}>
          <form className={styles.accountForm}>
            <div className={styles.inputWrap}>
              <label htmlFor="email">Email Address</label>
              <input type="text" name="email" id="email" required />
            </div>
            <button type="button">Confirm</button>
          </form>
        </section>
      </section>
    </AppLayout>
  );
};

export default ResetPassword;
