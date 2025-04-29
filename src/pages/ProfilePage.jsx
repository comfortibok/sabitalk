import React from "react";
import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Header from "../layouts/Header";
import styles from "../styles/profilePage.module.css";
import avatar from "../assets/images/Ellipse 668.png";
const ProfilePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const ongoingLessons = [
    {
      title: "Ọnka",
      progress: 70,
      border: "blueBorder",
      color: "blueProgress",
    },
    {
      title: "Ọnka",
      progress: 90,
      border: "greenBorder",
      color: "greenProgress",
    },
    {
      title: "Ọnka",
      progress: 60,
      border: "purpleBorder",
      color: "purpleProgress",
    },
  ];

  return (
    <DashboardLayout isOpen={isSidebarOpen} closeSidebar={closeSidebar}>
      <Header
        title="Profile"
        date="Mar 05, 2025"
        toggleSidebar={toggleSidebar}
      />

      <section className={styles.card}>
        <div className={styles.userInfo}>
          <img
            src={avatar}
            alt="Profile picture of Fawazat02"
            className={styles.avatar}
          />
          <div>
            <h3 className={styles.userName}>Fawazat02</h3>
            <p className={styles.userEmail}>fawazatrufalt@gmail.com</p>
          </div>
          <button
            type="button"
            aria-label="Edit profile"
            className={styles.editBtn}
          >
            Edit profile
          </button>
        </div>

        <section className={styles.details}>
          <div>
            <p className={styles.title}>Gender</p>
            <p className={styles.info}>Fawazat02</p>
          </div>
          <div>
            <p className={styles.title}>Username</p>
            <p className={styles.info}>Fawazat02</p>
          </div>
          <div>
            <p className={styles.title}>Email Address</p>
            <p className={styles.info}>fawazatrufalt@gmail.com</p>
          </div>
        </section>

        <section>
          <h4 className={styles.lessonSectionTitle}>Ongoing Lessons</h4>
          <div className={styles.lessons}>
            {ongoingLessons.map((lesson, index) => (
              <div key={index} className={styles.lessonCard}>
                <p className={styles.lessonTitle}>{lesson.title}</p>
                <div
                  className={`${styles.progressBar} ${styles[lesson.border]}`}
                  aria-valuenow={lesson.progress}
                  role="progressbar"
                  aria-label={`Progress for ${lesson.title}: ${lesson.progress}%`}
                >
                  <div
                    className={`${styles.progress} ${styles[lesson.color]}`}
                    style={{ width: `${lesson.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </DashboardLayout>
  );
};

export default ProfilePage;
