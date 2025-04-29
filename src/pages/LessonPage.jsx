import React from "react";
import { useState } from "react";
import styles from "../styles/lesson.module.css";
import Header from "../layouts/Header";
import DashboardLayout from "../layouts/DashboardLayout";
import OngoingLesson from "../components/OngoingLesson";

const LessonPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
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
      language: "Igbo",
      border: "purpleBorder",
      color: "purpleProgress",
    },
  ];

  return (
    <DashboardLayout isOpen={isSidebarOpen} closeSidebar={closeSidebar}>
      <Header
        title="Lessons"
        date="Mar 05, 2025"
        toggleSidebar={toggleSidebar}
      />
      <section className={styles.headerWrapper}>
        <strong className={styles.notificationContent}>
          <svg
            width="21"
            height="32"
            viewBox="0 0 21 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M15.7003 0.0795898L0.0302734 14.2461L12.1853 18.0151L3.06027 32.0001L20.6903 15.2871L11.2013 11.0551L15.7003 0.0795898Z"
              fill="#FBB11C"
            />
          </svg>
          3
        </strong>
      </section>

      <nav className={styles.tabs}>
        <a className={styles.activeTab} aria-current="page" role="tab">
          Your lessons
        </a>
        <a>Yoruba</a>
        <a>Igbo</a>
        <a>Hausa</a>
        <a>Pidgin</a>
      </nav>

      <section className={styles.lessonsList}>
        <OngoingLesson lessons={ongoingLessons} />
      </section>
    </DashboardLayout>
  );
};

export default LessonPage;
