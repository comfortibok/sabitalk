"use client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import styles from "../styles/form.module.css";
import AuthService from "../services/auth.service";

const PersonalizeAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gender: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = AuthService.getUser();
    if (user) {
      setFormData({
        gender: user.gender || "",
        username: user.username || "",
      });
    }
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleConfirm = () => {
    if (!formData.gender || !formData.username) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      AuthService.updateUserProfile({
        gender: formData.gender,
        username: formData.username,
      });

      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating your profile. Please try again.");
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
        </div>
        <section className={styles.formSection}>
          <h3 className={styles.formTitle}>Personalize your account</h3>
          <form
            className={styles.accountForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.inputWrap}>
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className={styles.inputWrap}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <button
              className={styles.confirmBtn}
              type="button"
              onClick={handleConfirm}
              disabled={loading}
            >
              {loading ? "Saving..." : "Confirm"}
            </button>
            <button
              className={styles.cta}
              type="button"
              aria-label="Do this later"
              onClick={() => navigate("/profile")}
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
