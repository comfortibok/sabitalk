import React from "react";
import { useState } from "react";
import "../App.css";
import styles from "../styles/lesson.module.css";
import Header from "../layouts/Header";
import DashboardLayout from "../layouts/DashboardLayout";
import celebatoryImage from "../assets/images/tempImaged50DP3 1.png";
import {
  PointsIcon,
  TimeIcon,
  CorrectIcon,
  TargetIcon,
} from "../components/icons";
const LessonComplete = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <DashboardLayout isOpen={isSidebarOpen} closeSidebar={closeSidebar}>
      <Header
        title="Lessons"
        date="Mar 05, 2025"
        toggleSidebar={toggleSidebar}
      />
      <section className={styles.lessonResult}>
        <div className={styles.celebrationIcon}>
          <img src={celebatoryImage} alt="Celebration" />
        </div>
        <h3 className={styles.resultTitle}>Great Job! You Did It!</h3>
        <p className={styles.resultSubtitle}>
          You’ve just taken another step toward mastering a new language
        </p>

        <section className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statItemDescription}>
              <PointsIcon /> Points gained
            </span>
            <span className={styles.statItemDescription}>28 pts</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statItemDescription}>
              <TimeIcon /> Time spent
            </span>
            <span className={styles.statItemDescription}>3m 30s</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statItemDescription}>
              <CorrectIcon /> Correct answers
            </span>
            <span className={styles.statItemDescription}>5/8</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statItemDescription}>
              <TargetIcon /> Accuracy rate
            </span>
            <span className={styles.statItemDescription}>62.5%</span>
          </div>
        </section>

        <section className={styles.buttons}>
          <button className={` ${styles.btn} ${styles.shareBtn}`}>Share</button>
          <button className={` ${styles.btn} ${styles.goBtn}`}>Go home</button>
        </section>
      </section>
    </DashboardLayout>
  );
};

export default LessonComplete;
