import React from "react";
import SabiTalkLayout from "../layouts/SabiTalkLayout";
import "../App.css";

const AppLayout = ({ children }) => {
  return (
    <div className="appWrapper">
      <SabiTalkLayout />
      <section className="rightPaneContainer">{children}</section>
    </div>
  );
};

export default AppLayout;
