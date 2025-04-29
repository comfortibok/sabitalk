import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import InputOtp from "./pages/InputOtp";
import LanguageSelect from "./pages/LanguageSelect";
import LessonTwo from "./components/LessonTwo";
import LessonComplete from "./pages/LessonComplete";
import LessonPage from "./pages/LessonPage";
import Login from "./pages/Login";
import PersonalizeAccount from "./pages/PersonalizeAccount";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import SavePassword from "./pages/savePassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LanguageSelect />} />{" "}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/personalize-account" element={<PersonalizeAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/input-otp" element={<InputOtp />} />
        <Route path="/save-password" element={<SavePassword />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/lesson" element={<LessonPage />} />
        <Route path="/lesson-two" element={<LessonTwo />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/lesson-complete" element={<LessonComplete />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
