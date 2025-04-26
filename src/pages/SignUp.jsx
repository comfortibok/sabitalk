import React from "react";
import SabiTalkLayout from "../components/SabiTalkLayout";
import SignUpComponent from "../components/SignUp"

const SignUp = () => {
  return (
    <div className="onboarding-container">
      <div className="sabi-container-left">
        <SabiTalkLayout />
      </div>
      <div className="right-pane">
        <SignUpComponent />
      </div>
    </div>
  );
};

export default SignUp;
