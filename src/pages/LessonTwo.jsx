import React from "react";
import OngoingLesson from "../components/OngoingLesson";
import LessonLayout from "../layouts/LessonLayout";
import styles from "../styles/lesson.module.css";

const LessonTwo = () => {
  const beginnerLessons = [
    {
      id: 1,
      lang: "Yoruba",
      title: "Ọnka",
      description: "Numbers",
      progress: 24,
      border: "blueBorder",
      color: "blueProgress",
    },
    {
      id: 2,
      lang: "Igbo",
      title: "Abịdịi",
      description: "Alphabet",
      progress: 50,
      border: "purpleBorder",
      color: "purpleProgress",
    },
  ];

  const intermediateLessons = [
    {
      id: 1,
      lang: "Yoruba",
      title: "Ọnka",
      description: "Numbers",
      progress: 24,
      border: "blueBorder",
      color: "blueProgress",
    },
    {
      id: 2,
      lang: "Igbo",
      title: "Abịdịi",
      description: "Alphabet",
      progress: 50,
      border: "purpleBorder",
      color: "purpleProgress",
    },
    {
      id: 1,
      lang: "Yoruba",
      title: "Ọnka",
      description: "Numbers",
      progress: 24,
      border: "blueBorder",
      color: "blueProgress",
    },
  ];

  const advancedLessons = [
    {
      id: 1,
      lang: "Yoruba",
      title: "Ọnka",
      description: "Numbers",
      progress: 24,
      border: "blueBorder",
      color: "blueProgress",
    },
    {
      id: 2,
      lang: "Igbo",
      title: "Abịdịi",
      description: "Alphabet",
      progress: 50,
      border: "purpleBorder",
      color: "purpleProgress",
    },
    {
      id: 1,
      lang: "Yoruba",
      title: "Ọnka",
      description: "Numbers",
      progress: 24,
      border: "blueBorder",
      color: "blueProgress",
    },
    {
      id: 2,
      lang: "Igbo",
      title: "Abịdịi",
      description: "Alphabet",
      progress: 50,
      border: "purpleBorder",
      color: "purpleProgress",
    },
  ];

  return (
    <LessonLayout activeLanguage="Yoruba">
      <section className={styles.lessonsListWrap}>
        <div className={styles.subtitleWrap}>
          <h3 className={styles.subtitle}>Beginner</h3>
          <svg
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195"
              stroke="#383848"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <OngoingLesson lessons={beginnerLessons} />
      </section>

      <section className={styles.lessonsListWrap}>
        <div className={styles.subtitleWrap}>
          <h3 className={styles.subtitle}>Intermediate</h3>
          <svg
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195"
              stroke="#383848"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <OngoingLesson lessons={intermediateLessons} />
      </section>

      <section className={styles.lessonsListWrap}>
        <div className={styles.subtitleWrap}>
          <h3 className={styles.subtitle}>Advanced</h3>
          <svg
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9201 0.950195L10.4001 7.4702C9.63008 8.2402 8.37008 8.2402 7.60008 7.4702L1.08008 0.950195"
              stroke="#383848"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <OngoingLesson lessons={advancedLessons} />
      </section>
    </LessonLayout>
  );
};

export default LessonTwo;
