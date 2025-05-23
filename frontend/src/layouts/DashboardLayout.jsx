import React from "react";
import styles from "../layouts/dashboardLayout.module.css";
import Sidebar from "../layouts/Sidebar";

const DashboardLayout = ({ children, isOpen, closeSidebar }) => {
  return (
    <div className={styles.dashboardWrapper}>
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
      <main role="main" className={styles.dashboardContent}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
