import AppLayout from "../layouts/AppLayout";
import "../App.css";
const LanguageSelect = () => {
  return (
    <AppLayout>
      <div className="rightPaneContent">
        <h3 className="mainContentTitle">
          Welcome to <span className="mainContentTitleSpan">Speak It</span>
        </h3>
        <p>
          Pick a preferred language to start your journey! Whether it's Yoruba,
          Igbo, Hausa, or more—immerse yourself in words, sounds, and culture.
        </p>
        <form>
          <div className="radioGroup">
            <div className="radioInput">
              <label htmlFor="yoruba">Yoruba</label>
              <input type="radio" id="yoruba" name="language" value="Yoruba" />
            </div>
            <div className="radioInput">
              <label htmlFor="igbo">Igbo</label>
              <input type="radio" id="igbo" name="language" value="Igbo" />
            </div>
            <div className="radioInput">
              <label htmlFor="hausa">Hausa</label>
              <input type="radio" id="hausa" name="language" value="Hausa" />
            </div>
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    </AppLayout>
  );
};

export default LanguageSelect;
