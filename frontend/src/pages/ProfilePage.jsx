"use client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Header from "../layouts/Header";
import styles from "../styles/profilePage.module.css";
import avatar from "../assets/images/Ellipse 668.png";
import AuthService from "../services/auth.service";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    gender: "",
    language: "",
  });

  useEffect(() => {
    const user = AuthService.getUser();
    if (user) {
      setUserData({
        username: user.username || "Not set",
        email: user.email || "Not set",
        gender: user.gender || "Not set",
        language: user.language || "Not set",
      });
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleEditProfile = () => {
    navigate("/personalize-account");
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
          <div>
            <img
              src={avatar || "/placeholder.svg"}
              alt={`Profile picture of ${userData.username}`}
              className={styles.avatar}
            />
          </div>
          <div>
            <h3 className={styles.userName}>{userData.username}</h3>
            <p className={styles.userEmail}>{userData.email}</p>
          </div>
          <button
            type="button"
            aria-label="Edit profile"
            className={styles.editBtn}
            onClick={handleEditProfile}
          >
            Edit profile
          </button>
        </div>

        <section className={styles.details}>
          <div>
            <p className={styles.title}>Gender</p>
            <p className={styles.info}>{userData.gender}</p>
          </div>
          <div>
            <p className={styles.title}>Username</p>
            <p className={styles.info}>{userData.username}</p>
          </div>
          <div>
            <p className={styles.title}>Email Address</p>
            <p className={styles.info}>{userData.email}</p>
          </div>
          <div>
            <p className={styles.title}>Learning Language</p>
            <p className={styles.info}>{userData.language}</p>
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
