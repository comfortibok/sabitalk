import React from "react";
import SabiTalkLayout from "../components/SabiTalkLayout";
import ConfirmOtpComponent from "../components/ConfirmOtp"

const ConfirmOtp = () => {
  return (
    <div className="onboarding-container">
      <div className="sabi-container-left">
        <SabiTalkLayout />
      </div>
      <div className="right-pane">
        <ConfirmOtpComponent />
      </div>
    </div>
  );
};

export default ConfirmOtp;
