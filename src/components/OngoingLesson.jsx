import React from "react";
import styles from "../styles/ongoingLesson.module.css";

const OngoingLesson = ({ lessons }) => {
  return (
    <div className={styles.lessons}>
      {lessons.map((lesson) => (
        <div key={lesson.id} className={styles.lessonCard}>
          <p className={styles.lessonTitle}>{lesson.title}</p>
          <p className={styles.lessonDescription}>{lesson.description}</p>
          <div className={`${styles.progressBar} ${styles[lesson.border]}`}>
            <div
              className={`${styles.progress} ${styles[lesson.color]}`}
              style={{ width: `${lesson.progress}%` }}
            ></div>
          </div>
          <div className={styles.langWrapper}>
            <a href="#" className={styles.continueLink} target="_blank">
              Continue Learning
            </a>
            <strong className={styles.lang}>{lesson.lang}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OngoingLesson;
