import AppLayout from "../layouts/AppLayout";
import { useNavigate } from "react-router-dom";
import "../App.css";
const LanguageSelect = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/sign-up");
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
