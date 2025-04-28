import React from "react";
import Header from "../components/Header";
import DashboardLayout from "../components/DashboardLayout";
import styles from "../styles/dashboard.module.css";
import image from "../assets/images/0014.png";
import OngoingLesson from "../components/OngoingLesson";

const DashboardPage = () => {
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
    <DashboardLayout>
      <Header title=" Dashboard" date="Mar 05, 2025" />

      <div className={styles.dashboardMain}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Ongoing Lessons</h3>
          <div className={styles.lessonWrapper}>
            <section className={styles.lessonsList}>
              <OngoingLesson lessons={ongoingLessons} />
            </section>

            <section className={styles.learnWrap}>
              <h3 className={styles.cardTitle}>Learn</h3>
              <div className={styles.learnGrid}>
                {[
                  { lang: "Yoruba", lessons: 20, time: "4h 30min" },
                  { lang: "Igbo", lessons: 16, time: "3h 20min" },
                  { lang: "Hausa", lessons: 10, time: "2h 40min" },
                  { lang: "Pidgin", lessons: 32, time: "6h 10min" },
                ].map((item) => (
                  <div key={item.lang} className={styles.learnCard}>
                    <h4 className={styles.learnTitle}>
                      {item.lang}
                      <span className={styles.learnTitleSpan}>
                        - {item.lessons} lessons
                      </span>
                    </h4>
                    <p className={styles.learnDes}>{item.time}</p>
                    <a className={styles.startLink}>Start Learning</a>

                    <img width="86" height="120" src={image} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <aside className={styles.community}>
          <h3 className={styles.cardTitle}>Community</h3>
          <div className={styles.communityCard}></div>
        </aside>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
