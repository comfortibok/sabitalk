import AppLayout from "../layouts/AppLayout";
import { useNavigate } from "react-router-dom";
import styles from "../styles/form.module.css";

const InputOtp = () => {
  const navigate = useNavigate();
  const handleBack = (e) => {
    e.preventDefault();
    navigate("/reset-password");
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
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Back</p>
        </div>{" "}
        <h3 className={styles.formTitle}>
          Please enter the 6 digit OTP sent to your email address to proceed{" "}
        </h3>
        <section className={styles.formSection}>
          <form className={styles.accountForm}>
            <div className={styles.inputWrap}>
              <div className={styles.otpContainer}>
                <input
                  type="text"
                  maxLength="1"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={styles.otpInput}
                />
                <input
                  type="text"
                  maxLength="1"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={styles.otpInput}
                />
                <input
                  type="text"
                  maxLength="1"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={styles.otpInput}
                />
                <input
                  type="text"
                  maxLength="1"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={styles.otpInput}
                />
                <input
                  type="text"
                  maxLength="1"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={styles.otpInput}
                />
                <input
                  type="text"
                  maxLength="1"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={styles.otpInput}
                />
              </div>
              <a href="#" target="_self" className={styles.link}>
                Resend OTP
              </a>
            </div>
            <button type="button">Confirm</button>
          </form>
        </section>
      </section>
    </AppLayout>
  );
};

export default InputOtp;
