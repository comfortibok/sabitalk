import React from "react";
import styles from "../styles/lesson.module.css";
import LessonLayout from "../layouts/LessonLayout";
import OngoingLesson from "../components/OngoingLesson";

const LessonOne = () => {
  const ongoingLessons = [
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
    <LessonLayout>
      <section className={styles.lessonsList}>
        <OngoingLesson lessons={ongoingLessons} />
      </section>
    </LessonLayout>
  );
};

export default LessonOne;
