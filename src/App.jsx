import { Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import LessonPage from "./pages/LessonPage";
import DashboardPage from "./pages/DashboardPage";
import LanguageSelect from "./pages/LanguageSelect";

function App() {
  return (
    <>
      <LanguageSelect />
      {/* <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/lesson" element={<LessonPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes> */}
    </>
  );
}

export default App;
