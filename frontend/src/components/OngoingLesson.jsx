import React from "react";
import styles from "../styles/ongoingLesson.module.css";

const OngoingLesson = ({ lessons }) => {
  return (
    <div className={styles.lessons}>
      {lessons.map((lesson, index) => (
        <div key={`${lesson.id}-${index}`} className={styles.lessonCard}>
          <p className={styles.lessonTitle}>{lesson.title}</p>
          <p className={styles.lessonDescription}>{lesson.description}</p>
          <div
            role="progressbar"
            className={`${styles.progressBar} ${styles[lesson.border]}`}
          >
            <div
              className={`${styles.progress} ${styles[lesson.color]}`}
              style={{ width: `${lesson.progress}%` }}
              aria-label={`Progress of ${lesson.title}`}
            ></div>
          </div>
          <div className={styles.langWrapper}>
            <a
              href="#"
              target="_blank"
              aria-label={`Continue learning ${lesson.title} in ${lesson.lang}`}
              className={styles.continueLink}
            >
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
