import AppLayout from "../layouts/AppLayout";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/form.module.css";

const InputOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "user@example.com"; // fallback or get from state
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState(null);

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/reset-password");
  };

  const handleChange = (element, index) => {
    const value = element.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(paste)) {
      const digits = paste.split("");
      setOtp(digits);
      e.preventDefault();
      document.querySelector(`#otp-5`)?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await axios.post("/auth/verify-otp", {
        otp: otpCode,
      });

      console.log("OTP verification successful:", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error(
        "OTP verification error:",
        error.response?.data || error.message
      );
      const errorMessage =
        error.response?.data?.message === "otp already expired"
          ? "The OTP has expired. Please request a new one."
          : error.response?.data?.message ||
            "Failed to verify OTP. Please try again.";
      setError(errorMessage);
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await axios.post("/auth/resend-otp", {
        email: email,
      });
      console.log("OTP resent successfully:", response.data);
      setError("A new OTP has been sent to your email.");
    } catch (error) {
      console.error("Resend OTP error:", error.response?.data || error.message);
      setError(
        error.response?.data?.message ||
          "Failed to resend OTP. Please try again."
      );
    }
  };

  return (
    <AppLayout>
      <section className="formWrapper">
        <div
          className={styles.backWrap}
          onClick={handleBack}
          role="button"
          aria-label="Go back to reset password page"
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
        </div>

        <h3 className={styles.formTitle}>
          Please enter the 6-digit OTP sent to your email address to proceed
        </h3>

        <section className={styles.formSection}>
          <form className={styles.accountForm} onSubmit={handleSubmit}>
            <div className={styles.inputWrap}>
              <div className={styles.otpContainer}>
                {otp.map((digit, index) => (
                  <input
                    id={`otp-${index}`}
                    key={index}
                    type="text"
                    maxLength="1"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className={styles.otpInput}
                    value={digit}
                    onChange={(e) => handleChange(e.target, index)}
                    onPaste={handlePaste}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Backspace" &&
                        !otp[index] &&
                        e.target.previousSibling
                      ) {
                        e.target.previousSibling.focus();
                      }
                    }}
                  />
                ))}
              </div>

              {error && <p className={styles.error}>{error}</p>}

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleResendOtp();
                }}
                className={styles.link}
              >
                Resend OTP
              </a>
            </div>
            <button type="submit">Confirm</button>
          </form>
        </section>
      </section>
    </AppLayout>
  );
};

export default InputOtp;
