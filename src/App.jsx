import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import ConfirmOtp from "./pages/ConfirmOtp";
import DashboardPage from "./pages/DashboardPage";
import InputOtp from "./pages/InputOtp";
import LanguageSelect from "./pages/LanguageSelect";
import LessonComplete from "./pages/LessonComplete";
import LessonPage from "./pages/LessonPage";
import Login from "./pages/Login";
import PersonalizeAccount from "./pages/PersonalizeAccount";
import ProfilePage from "./pages/ProfilePage";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LanguageSelect />} />
        <Route path="/input-otp" element={<InputOtp />} />
        <Route path="/confirm-otp" element={<ConfirmOtp />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/lesson" element={<LessonPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personalize-account" element={<PersonalizeAccount />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/lesson-complete" element={<LessonComplete />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
