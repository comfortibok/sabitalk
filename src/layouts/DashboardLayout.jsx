import React from "react";
import styles from "../layouts/dashboardLayout.module.css";
import Sidebar from "../layouts/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.dashboardWrapper}>
      <Sidebar />
      <main className={styles.dashboardContent}>{children}</main>
    </div>
  );
};

export default DashboardLayout;
