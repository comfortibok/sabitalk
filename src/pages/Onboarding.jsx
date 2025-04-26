import React from "react";
import LanguageSelect from "../components/LanguageSelect";
import SabiTalkLayout from "../components/SabiTalkLayout";

const Onboarding = () => {
  return (
    <div className="onboarding-container">
      <div className="sabi-container-left">
        <SabiTalkLayout />
      </div>
      <div className="right-pane">
        <LanguageSelect />
      </div>
    </div>
  );
};

export default Onboarding;
