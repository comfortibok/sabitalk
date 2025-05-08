import React from "react";
import { useNavigate } from "react-router-dom";
import LessonLayout from "../layouts/LessonLayout";
import { ClockIcon, BookmarkIcon, AudioIcon } from "../components/icons";
import styles from "../styles/mainLesson.module.css";

const LessonThree = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/lesson-quiz"); // Redirect to the quiz page
  };

  return (
    <LessonLayout activeLanguage="Yoruba">
      <main className={styles.lessonsMain}>
        <section className={styles.lessonsInfo}>
          <div className={styles.lessonsTime}>
            <ClockIcon />
            About 30 mins to complete
          </div>
          <span>(Numbers)</span>
          <div className={styles.bookmark}>
            <BookmarkIcon />
            <span>Bookmark</span>
          </div>
        </section>

        <section className={styles.lessonSection}>
          <p className={styles.lessonDescription}>
            Lorem ipsum dolor sit amet consectetur. Placerat orci eu facilisi
            fermentum. Sed lobortis in nulla sed id eu arcu vulputate
            consectetur. Commodo laoreet quisque sit massa sed at semper tortor.
            Velit arcu a urna lorem amet faucibus. At dui arcu non eget velit
            faucibus vitae gravida pharetra. Nibh ipsum nulla viverra imperdiet.
            Arcu aenean dictumst amet gravida tortor. Nisl nec sagittis sagittis
            malesuada. Suscipit integer commodo tempus a ultrices habitant nulla
            pharetra. Aliquam et eu natoque imperdiet nunc faucibus elementum
            tincidunt malesuada.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2 className={styles.lessonTitle}>Lesson Title</h2>
          <div className={styles.lessonVideo}>
            <div className={styles.audioWrap}>
              <AudioIcon />
            </div>
          </div>
          <p className={styles.lessonDescription}>
            Lorem ipsum dolor sit amet consectetur. Ut fermentum ut et dolor
            penatibus enim adipiscing. Mauris sed cursus magna cursus. Risus
            felis habitant id amet sociis. Sit sem ac lacus tristique euismod
            suspendisse scelerisque eu. Vel erat turpis in ipsum tortor
            malesuada mi. Laoreet elementum urna nisi urna arcu lacus.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2 className={styles.lessonTitle}>Another Lesson Title</h2>
          <div className={styles.lessonVideo}>
            <div className={styles.audioWrap}>
              <AudioIcon />
            </div>
          </div>
          <p className={styles.lessonDescription}>
            Lorem ipsum dolor sit amet consectetur. Consectetur nec mi
            adipiscing egestas porttitor nunc. Volutpat malesuada suspendisse
            amet est arcu arcu vel sapien. Dignissim in faucibus laoreet nisl
            neque aliquam nec sed. Donec convallis quam scelerisque feugiat sed.
          </p>
        </section>

        {/* Updated button to redirect to the quiz */}
        <button onClick={handleContinue} className={styles.quizBtn}>
          Take Quiz
        </button>
      </main>
    </LessonLayout>
  );
};

export default LessonThree;
