import React from "react";
import SabiTalkLayout from "../components/SabiTalkLayout";
import InputComponent from '../components/InputOtp'

const Login = () => {
  return (
    <div className="onboarding-container">
      <div className="sabi-container-left">
        <SabiTalkLayout />
      </div>
      <div className="right-pane">
        <InputComponent />
      </div>
    </div>
  );
};

export default Login;
