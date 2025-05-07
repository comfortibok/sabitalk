"use client";

import { useState, useEffect } from "react";
import AppLayout from "../layouts/AppLayout";
import { useNavigate } from "react-router-dom";
import styles from "../styles/form.module.css";
import AuthService from "../services/auth.service";

const InputOtp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const resetEmail = AuthService.getResetEmail();
    if (!resetEmail) {
      navigate("/reset-password");
    } else {
      setEmail(resetEmail);
    }
  }, [navigate]);

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
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (otpCode.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      setLoading(false);
      return;
    }

    try {
      await AuthService.verifyOtp(otpCode);
      setSuccess("OTP verified successfully!");
      setTimeout(() => {
        navigate("/new-password");
      }, 1500);
    } catch (err) {
      setError(err.message || "Failed to verify OTP. Please try again.");
      console.error("OTP verification error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await AuthService.resendOtp();

      setSuccess("A new OTP has been sent to your email.");
    } catch (err) {
      setError("Failed to resend OTP. Please try again.");
      console.error("Resend OTP error:", err);
    } finally {
      setLoading(false);
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
          <p>Back</p>{" "} 
          <div>{success && <p className={styles.success}>{success}</p>}</div>
        </div>

        <h3 className={styles.formTitle}>
          Please enter the 6-digit OTP sent to {email || "your email address"}{" "}
          to proceed
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
                    disabled={loading}
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
                aria-disabled={loading}
              >
                Resend OTP
              </a>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Verifying..." : "Confirm"}
            </button>
          </form>
        </section>
      </section>
    </AppLayout>
  );
};

export default InputOtp;
