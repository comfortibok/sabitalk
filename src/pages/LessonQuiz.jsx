import LessonLayout from "../layouts/LessonLayout";
import QuizCard from "../components/QuizCard";
import styles from "../styles/mainLesson.module.css";
import { BookmarkIcon } from "../components/icons";

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
        <div></div>
        <QuizCard />
      </main>
    </LessonLayout>
  );
};

export default LessonQuiz;
