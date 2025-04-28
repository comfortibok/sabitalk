import AppLayout from "../layouts/AppLayout";
import styles from "../styles/form.module.css";

const InputOtp = () => {
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
        </div>{" "}
        <h3 className={styles.formTitle}>
          Please enter the 6 digit OTP sent to your email address to proceed{" "}
        </h3>
        <div className={styles.formSection}>
          <form className={styles.accountForm}>
            <div className={styles.inputWrap}>
              <span >Resend OTP</span>
            </div>
            <button type="button">Confirm</button>
          </form>
        </div>
      </div>
    </AppLayout>
  );
};

export default InputOtp;
