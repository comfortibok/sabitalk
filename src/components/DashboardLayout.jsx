import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "../styles/dashboardLayout.module.css";

const DashboardLayout = ({ children }) => {
  return (
  <div className={styles.wrapper}>
      <Sidebar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default DashboardLayout;
