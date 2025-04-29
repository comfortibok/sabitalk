import React from "react";
import { useState } from "react";
import Header from "../layouts/Header";
import DashboardLayout from "../layouts/DashboardLayout";
import OngoingLesson from "../components/OngoingLesson";
import styles from "../styles/lesson.module.css";

const LessonTwo = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
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
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
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
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <OngoingLesson lessons={advancedLessons} />
      </section>
    </DashboardLayout>
  );
};

export default LessonTwo;
