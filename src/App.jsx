import { Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import LessonComplete from "./pages/LessonComplete";

function App() {
  return (
    <>
      <LessonComplete />
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
