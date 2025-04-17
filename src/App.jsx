import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Lesson from "./components/Lesson";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
