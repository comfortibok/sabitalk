import React from "react";
import { useState } from "react";
import Header from "./Header";
import DashboardLayout from "./DashboardLayout";
import styles from "../styles/lesson.module.css";

const LessonLayout = ({ children, activeLanguage = "Your lessons" }) => {
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
        {["Your lessons", "Yoruba", "Igbo", "Hausa", "Pidgin"].map((lang) => (
          <a
            key={lang}
            className={lang === activeLanguage ? styles.activeTab : ""}
            aria-current={lang === activeLanguage ? "page" : undefined}
            role="tab"
          >
            {lang}
          </a>
        ))}
      </nav>
      {children}
    </DashboardLayout>
  );
};

export default LessonLayout;
