import LessonLayout from "../layouts/LessonLayout";
import QuizCard from "../components/QuizCard";
import styles from "../styles/mainLesson.module.css";
import { BookmarkIcon, TimerIcon } from "../components/icons";

const LessonQuiz = () => {
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
            <div className={styles.progressBar} style={{ width: `50%` }}></div>
          </div>
          <div className={styles.timerInfoWrap}>
            <h4>Question 1</h4>
            <div className={styles.timerInfo}>
              {" "}
              <TimerIcon />
              <span>20s</span>
            </div>
          </div>
        </div>

        <QuizCard />
      </main>
    </LessonLayout>
  );
};

export default LessonQuiz;
