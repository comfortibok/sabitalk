import React, { useState } from "react";
import styles from "../styles/mainLesson.module.css";
import { FlipIcon, AudioIcon } from "../components/icons";

const QuizCard = () => {
  const questions = [
    {
      type: "meaning",
      yoruba: "Ẹ káàrọ̀",
      translation: "Good morning",
      options: ["Good morning", "Good afternoon", "Good evening"],
    },
    {
      type: "pronunciation",
      yoruba: "Book",
      translation: "Iwé",
    },
    {
      type: "meaning",
      yoruba: "Ẹ káalẹ́",
      translation: "Good evening",
      options: ["Good afternoon", "Good evening", "Good night"],
    },
    {
      type: "pronunciation",
      yoruba: "Ọkọ̀ ayọ́kẹ́lẹ́",
      translation: "Car",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleSelect = (option) => {
    if (!answered) {
      setSelected(option);
      setAnswered(true);
      if (option === currentQuestion.translation) {
        setCorrectAnswers((prev) => prev + 1);
      }
    }
  };

  const getOptionClass = (option) => {
    if (!answered) return "";
    if (option === currentQuestion.translation) return styles.correct;
    if (option === selected) return styles.incorrect;
    return "";
  };

  const handleFlip = () => setShowTranslation((prev) => !prev);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
      setAnswered(false);
      setShowTranslation(false);
    } else {
      alert(
        `Quiz completed! Your score is ${correctAnswers} out of ${questions.length}`
      );
    }
  };

  return (
    <>
      {currentQuestion.type === "meaning" ? (
        <>
          <section className={styles.quizCard}>
            <div className={styles.prompt}>
              <h3>“Kí ni itumọ̀ èyí?”</h3>
              <span>(What does this mean?)</span>
            </div>
            <p className={styles.yorubaWord}>{currentQuestion.yoruba}</p>
            <div className={styles.controlsWrap}>
              <div className={styles.control}>
                <button
                  className={`${styles.controlBtn} ${styles.flip}`}
                  disabled
                >
                  <FlipIcon />
                </button>
                <span>Flip</span>
              </div>
              <div className={styles.control}>
                <button
                  className={`${styles.controlBtn} ${styles.speak}`}
                  disabled
                >
                  <AudioIcon />
                </button>
                <span>Speak</span>
              </div>
              <div className={`${styles.control} ${styles.listen}`}>
                <button className={styles.controlBtn}>
                  <AudioIcon />
                </button>
                <span>Listen</span>
              </div>
            </div>
          </section>

          <section>
            {currentQuestion.options?.map((opt, index) => (
              <div key={index} className={styles.optionWrapper}>
                <strong className={styles.optionLabel}>
                  {String.fromCharCode(65 + index)}.
                </strong>
                <button
                  className={`${styles.option} ${getOptionClass(opt)}`}
                  onClick={() => handleSelect(opt)}
                  disabled={answered}
                >
                  {opt}
                </button>
              </div>
            ))}
          </section>
        </>
      ) : currentQuestion.type === "pronunciation" ? (
        <>
          <section className={styles.quizCard}>
            <div className={styles.prompt}>
              <h3>“Báwo ló ṣe màa wí ‘{currentQuestion.yoruba}’ ní Yorùbá?”</h3>
              <p>(How do you say '{currentQuestion.yoruba}' in Yoruba?)</p>
            </div>

            <p className={styles.yorubaWord}>{currentQuestion.yoruba}</p>

            {showTranslation && (
              <p className={styles.translation}>
                <em>{currentQuestion.translation}</em>
              </p>
            )}

            <div className={styles.controlsWrap}>
              <div className={styles.control}>
                <button className={styles.controlBtn} onClick={handleFlip}>
                  <FlipIcon />
                </button>
                <span>Flip</span>
              </div>
              <div className={styles.control}>
                <button className={`${styles.controlBtn} ${styles.speakWrap}`}>
                  <AudioIcon />
                </button>
                <span>Speak</span>
              </div>
              <div className={`${styles.control} ${styles.listen}`}>
                <button className={styles.controlBtn}>
                  <AudioIcon />
                </button>
                <span>Listen</span>
              </div>
            </div>
          </section>
        </>
      ) : null}

      <button
        className={styles.nextBtn}
        onClick={handleNext}
        disabled={currentQuestion.type === "meaning" && !answered}
      >
        Next
      </button>
    </>
  );
};

export default QuizCard;
