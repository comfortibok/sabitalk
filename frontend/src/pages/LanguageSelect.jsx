import AppLayout from "../layouts/AppLayout";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../App.css";
const LanguageSelect = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleContinue = async (e) => {
    e.preventDefault();

    if (!selectedLanguage) {
      alert("Please select a language.");
      return;
    }

    try {
      const response = await fetch(
        "/select-language",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ language: selectedLanguage }),
        }
      );

      if (response.ok) {
        navigate("/sign-up");
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <AppLayout>
      <section className="rightPaneContent">
        <h3 className="mainContentTitle">
          Welcome to <span className="mainContentTitleSpan">Sabitalk</span>
        </h3>
        <p>
          Pick a preferred language to start your journey! Whether it's Yoruba,
          Igbo, Hausa, or more—immerse yourself in words, sounds, and culture.
        </p>
        <form>
          <div className="radioGroup">
            <div className="radioInput">
              <label htmlFor="yoruba">Yoruba</label>
              <input
                type="radio"
                id="yoruba"
                name="language"
                value="Yoruba"
                onChange={handleLanguageChange}
                aria-labelledby="yorubaLabel"
              />
            </div>
            <div className="radioInput">
              <label htmlFor="igbo">Igbo</label>
              <input
                type="radio"
                id="igbo"
                name="language"
                value="Igbo"
                onChange={handleLanguageChange}
                aria-labelledby="igboLabel"
              />
            </div>
            <div className="radioInput">
              <label htmlFor="hausa">Hausa</label>
              <input
                type="radio"
                id="hausa"
                name="language"
                value="Hausa"
                onChange={handleLanguageChange}
                aria-labelledby="hausaLabel"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleContinue}
            aria-label="Go to sign up page"
          >
            Continue
          </button>
        </form>
      </section>
    </AppLayout>
  );
};

export default LanguageSelect;
