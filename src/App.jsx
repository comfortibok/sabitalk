import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Lesson from "./components/Lesson";

function App() {
  return (
    <>
      <Onboarding />
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Onboarding />} />
    //     <Route path="/lesson" element={<Lesson />} />
    //     <Route path="*" element={<Navigate to="/" />} />
    //   </Routes>
    // </Router>
  );
}

export default App;