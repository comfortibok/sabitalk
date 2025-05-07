import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import AppLayout from "../layouts/AppLayout";
import { GoogleLogin } from "@react-oauth/google";
import styles from "../styles/form.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/lang-select");
  };

  const handleGoogleLogin = async (response) => {
    if (response.credential) {
      try {
        const googleToken = response.credential;
        const backendResponse = await axios.post(
          "https://sabitalk-api.onrender.com/google-auth/login",
          { token: googleToken }
        );
        console.log("Google login successful:", backendResponse.data);
        navigate("/dashboard");
      } catch (error) {
        setError("Google sign-in failed. Please try again.");
        console.error("Google login error:", error);
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const termsCheckbox = document.getElementById("terms");
    if (!termsCheckbox.checked) {
      setError("You must accept the Terms & Conditions to sign up.");
      return;
    }

    const payload = {
      email,
      password,
      termsAccepted: true,
    };

    try {
      const response = await axios.post(
        "/auth/signup",
        payload,
        { withCredentials: true }
      );
      console.log("Signup successful:", response.data);
      navigate("/personalize-account");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      const message =
        error.response?.data?.message ||
        "An error occurred during signup. Please try again.";
      if (message === "Language not selected in session") {
        navigate("/personalize-account");
      } else {
        setError(message);
      }
    }
  };

  return (
    <AppLayout>
      <section className="formWrapper">
        <div
          className={styles.backWrap}
          onClick={handleBack}
          role="button"
          aria-label="Go back to language selection page"
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
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Back</p>
        </div>

        <section className={styles.formSection}>
          <h3 className={styles.formTitle}>
            Create an account and start learning
          </h3>

          {error && <p className={styles.errorMsg}>{error}</p>}

          <form className={styles.accountForm} onSubmit={handleSignUp}>
            <div className={styles.inputWrap}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.inputWrap}>
              <label htmlFor="password">Password</label>
              <div className={styles.passwordWrap}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg
                  className={styles.eyeIcon}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  role="button"
                >
                  <path
                    d="M14.53 9.47L9.47 14.53C8.82 13.88 8.42 12.99 8.42 12C8.42 10.02 10.02 8.42 12 8.42C12.99 8.42 13.88 8.82 14.53 9.47Z"
                    stroke="#383848"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.inputWrap}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className={styles.passwordWrap}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <svg
                  className={styles.eyeIcon}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Toggle confirm password visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  role="button"
                >
                  <path
                    d="M14.53 9.47L9.47 14.53C8.82 13.88 8.42 12.99 8.42 12C8.42 10.02 10.02 8.42 12 8.42C12.99 8.42 13.88 8.82 14.53 9.47Z"
                    stroke="#383848"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.termsCheckbox}>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms" className={styles.termsText}>
                By signing up, I agree to its{" "}
                <a href="#" className={styles.termsLink}>
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button type="submit">Sign up</button>

            <p className={`${styles.span} ${styles.spanAlign}`}>
              Already have an account?{" "}
              <a href="/login" target="_self" aria-label="Go to Log in page">
                Log In
              </a>
            </p>

            <span className={styles.divider}>or</span>

            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => setError("Google Login failed.")}
            />
          </form>
        </section>
      </section>
    </AppLayout>
  );
};

export default SignUp;
