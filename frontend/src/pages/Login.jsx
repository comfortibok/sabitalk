"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import AppLayout from "../layouts/AppLayout";
import styles from "../styles/form.module.css";
import AuthService from "../services/auth.service";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = AuthService.getUser();
    if (!user || !user.language) {
      navigate("/lang-select");
    }
  }, [navigate]);

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const existingUser = AuthService.getUser() || {};

      const user = {
        ...existingUser,
        id: `user_${Date.now()}`,
        email: form.email,
        lastLogin: new Date().toISOString(),
      };

      const token = `token_${Math.random().toString(36).substr(2, 9)}`;

      AuthService.setUser(user);
      AuthService.setToken(token);

      if (user.username && user.gender) {
        navigate("/dashboard");
      } else {
        navigate("/personalize-account");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    setError("");
    setLoading(true);

    try {
      if (credentialResponse.credential) {
        const googleToken = credentialResponse.credential;

        const existingUser = AuthService.getUser() || {};

        const user = {
          ...existingUser,
          id: `google_user_${Date.now()}`,
          email: "google_user@example.com",
          googleAuth: true,
          lastLogin: new Date().toISOString(),
        };

        AuthService.setUser(user);
        AuthService.setToken(googleToken);

        if (user.username && user.gender) {
          navigate("/dashboard");
        } else {
          navigate("/personalize-account");
        }
      } else {
        throw new Error("No credential received from Google");
      }
    } catch (err) {
      setError("Google login failed. Please try again.");
      console.error("Google login error:", err);
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
          aria-label="Go back to sign-up page"
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
        <section className={styles.formSection}>
          <h3 className={styles.formTitle}>
            Enter your details to log in and start learning
          </h3>
          <form
            className={styles.accountForm}
            onSubmit={(e) => e.preventDefault()}
          >
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.inputWrap}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                autoComplete="email"
                required
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputWrap}>
              <label htmlFor="password">Password</label>
              <div className={styles.passwordWrap}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  autoComplete="password"
                  value={form.password}
                  onChange={handleChange}
                />
                <svg
                  className={styles.eyeIcon}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Toggle password visibility"
                >
                  <path
                    d="M14.5299 9.47004L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C12.9899 8.42004 13.8799 8.82004 14.5299 9.47004Z"
                    stroke="#383848"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77"
                    stroke="#383848"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.41992 19.5301C9.55992 20.0101 10.7699 20.2701 11.9999 20.2701C15.5299 20.2701 18.8199 18.1901 21.1099 14.5901C22.0099 13.1801 22.0099 10.8101 21.1099 9.40005C20.7799 8.88005 20.4199 8.39005 20.0499 7.93005"
                    stroke="#383848"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5104 12.7C15.2504 14.11 14.1004 15.26 12.6904 15.52"
                    stroke="#383848"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.47 14.53L2 22"
                    stroke="#383848"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.0003 2L14.5303 9.47"
                    stroke="#383848"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <a
                href="/reset-password"
                target="_self"
                className={styles.link}
                aria-label="Go to reset password page"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="button"
              aria-label="Log in"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
            <button
              className={styles.cta}
              type="button"
              aria-label="Do this later"
              onClick={() => navigate("/dashboard")}
            >
              Do this later
            </button>
            <p className={styles.span}>
              Don't have an account?
              <a
                className={styles.login}
                href="/sign-up"
                target="_self"
                aria-label="Go to sign up page"
              >
                Sign up
              </a>
            </p>
            <span className={styles.divider}>or</span>
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => setError("Google login failed.")}
            />
          </form>
        </section>
      </section>
    </AppLayout>
  );
};

export default Login;
