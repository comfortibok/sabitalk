import React, { useState } from "react";
import LessonLayout from "../layouts/LessonLayout";
import QuizCard from "../components/QuizCard";
import styles from "../styles/mainLesson.module.css";
import { BookmarkIcon } from "../components/icons";

const LessonQuiz = () => {
  const [progress, setProgress] = useState(100); 
 
  return (
    <LessonLayout activeLanguage="Yoruba">
      <main className={styles.lessonsMain}>
        <section className={styles.lessonsInfo}>
          <p>Ọ̀nka</p>
          <h3>Quiz</h3>
          <div className={styles.bookmark}>
            <BookmarkIcon />
            <span>Bookmark</span>
          </div>
        </section>

        <div className={styles.timerContainer}>
          <div className={styles.progressBarBackground}>
            <div
              className={styles.progressBar}
              style={{ width: `50%` }} 
            ></div>
          </div>
          <div className={styles.timerInfo}>
            <h4>Question 1</h4>
            <span>20s</span>
          </div>
        </div>

        <QuizCard />
      </main>
    </LessonLayout>
  );
};

export default LessonQuiz;
