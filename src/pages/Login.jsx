import React from "react";
import SabiTalkLayout from "../components/SabiTalkLayout";
import LoginCompoent from "../components/Login"

const Login = () => {
  return (
    <div className="onboarding-container">
      <div className="sabi-container-left">
        <SabiTalkLayout />
      </div>
      <div className="right-pane">
        <LoginCompoent />
      </div>
    </div>
  );
};

export default Login;
