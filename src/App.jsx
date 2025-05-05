import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import LanguageSelect from "./pages/LanguageSelect";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PersonalizeAccount from "./pages/PersonalizeAccount";
import InputOtp from "./pages/InputOtp";
import ResetPassword from "./pages/ResetPassword";
import SavePassword from "./pages/savePassword";
import ProfilePage from "./pages/ProfilePage";
import Lesson from "./pages/Lesson";
import LessonTwo from "./pages/LessonTwo";
import LessonThree from "./pages/LessonThree";
import LessonComplete from "./pages/LessonComplete";
import LessonQuiz from "./pages/LessonQuiz";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lang-select" element={<LanguageSelect />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/personalize-account" element={<PersonalizeAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/input-otp" element={<InputOtp />} />
        <Route path="/save-password" element={<SavePassword />} />
        <Route path="/profile" element={<ProfilePage />} />{" "}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/lesson-two" element={<LessonTwo />} />
        <Route path="/lesson-three" element={<LessonThree />} />
        <Route path="/lesson-complete" element={<LessonComplete />} />
        <Route path="/lesson-quiz" element={<LessonQuiz />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
