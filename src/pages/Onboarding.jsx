import React, { useState } from "react";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import LanguageSelect from "../components/LanguageSelect";
import SabiTalkLayout from "../components/SabiTalkLayout";

const Onboarding = () => {
  const [page, setPage] = useState("selectlang");

  return (
    <SabiTalkLayout showBackButton={page !== "selectlang"}>
      {page === "signup" && <SignUp onSwitch={() => setPage("login")} />}
      {page === "login" && <Login onSwitch={() => setPage("signup")} />}
      {page === "selectlang" && (
        <LanguageSelect
          onSelect={(language) => {
            console.log("Selected language:", language);
            setPage("signup");
          }}
        />
      )}
    </SabiTalkLayout>
  );
};

export default Onboarding;
