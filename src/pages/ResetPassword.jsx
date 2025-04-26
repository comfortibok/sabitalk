import React from "react";
import SabiTalkLayout from "../components/SabiTalkLayout";
import ResetPassword from '../components/ResetPassword'

const Login = () => {
  return (
    <div className="onboarding-container">
      <div className="sabi-container-left">
        <SabiTalkLayout />
      </div>
      <div className="right-pane">
        <ResetPassword />
      </div>
    </div>
  );
};

export default Login;
