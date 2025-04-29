import React from "react";
import SabiTalkLayout from "../layouts/SabiTalkLayout";
import "../App.css";

const AppLayout = ({ children }) => {
  return (
    <div className="appWrapper">
      <SabiTalkLayout />
      <main className="rightPaneContainer" role="main">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
