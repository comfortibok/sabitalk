import styles from "../styles/languageSelect.module.css";

const LanguageSelect = ({ onSelect }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedLanguage = event.target.language.value;
    if (onSelect) {
      onSelect(selectedLanguage);
    }
  };

  return (
    <div className={styles.mainContent}>
      <h3 className={styles.mainContentTitle}>
        Welcome to <span>Speak It</span>
      </h3>
      <p>
        Pick a preferred language to start your journey! Whether it's Yoruba,
        Igbo, Hausa, or more—immerse yourself in words, sounds, and culture.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.radioGroup}>
          <div className={styles.radioInput}>
            <label htmlFor="yoruba">Yoruba</label>
            <input type="radio" id="yoruba" name="language" value="Yoruba" />
          </div>
          <div className={styles.radioInput}>
            <label htmlFor="igbo">Igbo</label>
            <input type="radio" id="igbo" name="language" value="Igbo" />
          </div>
          <div className={styles.radioInput}>
            <label htmlFor="hausa">Hausa</label>
            <input type="radio" id="hausa" name="language" value="Hausa" />
          </div>
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default LanguageSelect;
