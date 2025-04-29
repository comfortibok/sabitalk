import React from "react";
import styles from "../layouts/header.module.css";

const Header = ({ title, date, toggleSidebar }) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.headerTitle}>{title}</h2>
      <div className={styles.dateWrapper}>
        <div onClick={toggleSidebar} className={styles.hamburgerWrapper}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7H21"
              stroke="#383848"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 12H21"
              stroke="#383848"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 17H21"
              stroke="#383848"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <svg
          className={styles.notificationIcon}
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9342 19.98C18.6358 19.5033 18.4775 18.9524 18.4772 18.39V14.226C18.4772 12.5082 17.7948 10.8608 16.5801 9.64609C15.3654 8.43142 13.718 7.74902 12.0002 7.74902C10.2824 7.74902 8.63492 8.43142 7.42024 9.64609C6.20557 10.8608 5.52317 12.5082 5.52317 14.226V18.388C5.52325 18.9511 5.36488 19.5028 5.06617 19.98L3.97817 21.72C3.88357 21.8714 3.8312 22.0453 3.82652 22.2238C3.82183 22.4022 3.865 22.5787 3.95153 22.7348C4.03806 22.8909 4.16481 23.021 4.31861 23.1116C4.47242 23.2022 4.64767 23.25 4.82617 23.25H19.1742C19.3527 23.25 19.5279 23.2022 19.6817 23.1116C19.8355 23.021 19.9623 22.8909 20.0488 22.7348C20.1354 22.5787 20.1785 22.4022 20.1738 22.2238C20.1691 22.0453 20.1168 21.8714 20.0222 21.72L18.9342 19.98Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 26.25H14"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="8" r="8" fill="#FF0000" />
          <path
            d="M20.11 12V5.53L20.2 5H21.07V12H20.11ZM18.56 6.91V6.02C18.7067 6.02667 18.8767 5.98 19.07 5.88C19.27 5.78 19.47 5.65 19.67 5.49C19.87 5.33 20.0467 5.16333 20.2 4.99L20.81 5.65C20.5833 5.89 20.3467 6.10667 20.1 6.3C19.8533 6.49333 19.6 6.64667 19.34 6.76C19.0867 6.87333 18.8267 6.92333 18.56 6.91Z"
            fill="white"
          />
        </svg>
        <span className={styles.date}>{date}</span>{" "}
      </div>
    </header>
  );
};

export default Header;
