import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../layouts/sidebar.module.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <h1 className={styles.logo}>Speak It</h1>
        <p className={styles.subtext}>...like a local</p>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link
              to="/dashboard"
              className={`${styles.navLink} ${
                location.pathname === "/dashboard" ? styles.currentLink : ""
              }`}
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7066 0.292786C11.5191 0.105315 11.2648 0 10.9996 0C10.7344 0 10.4801 0.105315 10.2926 0.292786L3.29259 7.29279L1.29259 9.29279C1.19708 9.38503 1.1209 9.49538 1.06849 9.61738C1.01608 9.73939 0.988496 9.87061 0.987342 10.0034C0.986189 10.1362 1.01149 10.2678 1.06177 10.3907C1.11205 10.5136 1.18631 10.6253 1.2802 10.7192C1.37409 10.8131 1.48574 10.8873 1.60864 10.9376C1.73154 10.9879 1.86321 11.0132 1.99599 11.012C2.12877 11.0109 2.25999 10.9833 2.382 10.9309C2.504 10.8785 2.61435 10.8023 2.70659 10.7068L2.99959 10.4138V16.9998C2.99959 17.7954 3.31566 18.5585 3.87827 19.1211C4.44088 19.6837 5.20394 19.9998 5.99959 19.9998H15.9996C16.7952 19.9998 17.5583 19.6837 18.1209 19.1211C18.6835 18.5585 18.9996 17.7954 18.9996 16.9998V10.4138L19.2926 10.7068C19.4812 10.8889 19.7338 10.9897 19.996 10.9875C20.2582 10.9852 20.509 10.88 20.6944 10.6946C20.8798 10.5092 20.985 10.2584 20.9873 9.99619C20.9895 9.73399 20.8888 9.48139 20.7066 9.29279L11.7066 0.292786Z"
                  fill="white"
                />
              </svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/lessons"
              className={`${styles.navLink} ${
                location.pathname === "/lessons" ? styles.currentLink : ""
              }`}
            >
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 13.6529C20 13.9029 19.95 14.1529 19.85 14.3829C19.7533 14.6133 19.6142 14.8236 19.44 15.0029C19.259 15.1739 19.049 15.3129 18.82 15.4129C18.5852 15.5084 18.3336 15.556 18.08 15.5529C16.9483 15.5337 15.8179 15.641 14.71 15.8729C13.3972 16.0277 12.1324 16.4606 11 17.1429V2.23285C12.091 1.71285 13.26 1.37485 14.46 1.23285C15.6813 0.990427 16.9251 0.879793 18.17 0.902852C18.666 0.930382 19.1319 1.14902 19.47 1.51285C19.8 1.86485 19.983 2.32985 19.98 2.81285L20 13.6529ZM9.00003 2.23285V17.1429C7.88636 16.4672 6.64255 16.0345 5.35003 15.8729C4.22132 15.6446 3.07149 15.5373 1.92003 15.5529C1.66649 15.556 1.41489 15.5084 1.18003 15.4129C0.951606 15.3123 0.741947 15.1737 0.560031 15.0029C0.381717 14.827 0.242073 14.6158 0.150031 14.3829C0.0496535 14.1526 -0.0014416 13.904 3.09461e-05 13.6529V2.75285C0.00160588 2.27079 0.186362 1.80734 0.516871 1.45641C0.847379 1.10548 1.29893 0.893295 1.78003 0.862852C3.05173 0.830703 4.32302 0.941395 5.57003 1.19285C6.76371 1.3442 7.9233 1.6958 9.00003 2.23285Z"
                  fill="white"
                />
              </svg>
              Lessons
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              className={`${styles.navLink} ${
                location.pathname === "/community" ? styles.currentLink : ""
              }`}
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={`${styles.navLink} ${
                location.pathname === "/profile" ? styles.currentLink : ""
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
                  fill="white"
                />
                <path
                  d="M20 17.5C20 19.985 20 22 12 22C4 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z"
                  fill="white"
                />
              </svg>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.logoutContainer}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.496 21H6.5C5.395 21 4.5 19.849 4.5 18.429V5.57C4.5 4.151 5.395 3 6.5 3H13.5M16 15.5L19.5 12L16 8.5M9.5 11.996H19.5"
            stroke="#FF0000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{" "}
        <Link to="/logout" className={`${styles.logout} ${styles.navLink}`}>
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
