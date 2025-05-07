import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../layouts/sidebar.module.css";
import {
  DashboardIconActive,
  DashboardIconInactive,
  LessonsIconActive,
  LessonsIconInactive,
  CommunityIconActive,
  CommunityIconInactive,
  ProfileIconActive,
  ProfileIconInactive,
} from "../components/icons";
import AuthService from "../services/auth.service";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();

  const links = [
    {
      to: "/dashboard",
      label: "Dashboard",
      activeIcon: <DashboardIconActive />,
      inactiveIcon: <DashboardIconInactive />,
    },
    {
      to: "/lesson",
      label: "Lessons",
      activeIcon: <LessonsIconActive />,
      inactiveIcon: <LessonsIconInactive />,
    },
    {
      to: "/community",
      label: "Community",
      activeIcon: <CommunityIconActive />,
      inactiveIcon: <CommunityIconInactive />,
    },
    {
      to: "/profile",
      label: "Profile",
      activeIcon: <ProfileIconActive />,
      inactiveIcon: <ProfileIconInactive />,
    },
  ];

  const navigate = useNavigate();
  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
  };
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
      aria-label="Main sidebar"
    >
      <button
        className={styles.closeBtn}
        onClick={closeSidebar}
        type="button"
        aria-label="Close sidebar"
      >
        &times;
      </button>
      <div className={styles.logoWrapper}>
        <h1 className={styles.logo}>Sabitalk</h1>
        <p className={styles.subtext}>...like a local</p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {links.map((link) => {
            const isActive = location.pathname.startsWith(link.to);
            return (
              <li
                key={link.to}
                className={
                  isActive ? styles.activeListItem : styles.inactiveListItem
                }
              >
                <Link
                  to={link.to}
                  className={`${styles.navLink} ${
                    isActive ? styles.activeLink : styles.inactiveLink
                  }`}
                  aria-label={link.label}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeSidebar}
                >
                  <span className={styles.icon} aria-hidden="true">
                    {isActive ? link.activeIcon : link.inactiveIcon}
                  </span>
                  <span className={styles.label}>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.logoutContainer}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M13.496 21H6.5C5.395 21 4.5 19.849 4.5 18.429V5.57C4.5 4.151 5.395 3 6.5 3H13.5M16 15.5L19.5 12L16 8.5M9.5 11.996H19.5"
            stroke="#FF0000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{" "}
        <Link
          to="/logout"
          className={`${styles.logout} ${styles.navLink}`}
          aria-label="Log out"
          onClick={handleLogout}
        >
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
