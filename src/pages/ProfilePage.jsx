import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import Header from "../components/Header";
import styles from "../styles/profilePage.module.css";
import avatar from "../assets/images/Ellipse 668.png";
const ProfilePage = () => {
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
    <DashboardLayout>
      <Header title="Profile" date="Mar 05, 2025" />

      <section className={styles.card}>
        <div className={styles.userInfo}>
          <img src={avatar} alt="Profile" className={styles.avatar} />
          <div>
            <h3 className={styles.userName}>Fawazat02</h3>
            <p className={styles.userEmail}>fawazatrufalt@gmail.com</p>
          </div>
          <button className={styles.editBtn}>Edit profile</button>
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
