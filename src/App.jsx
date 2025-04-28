import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import ConfirmOtp from "./pages/ConfirmOtp";
import InputOtp from "./pages/InputOtp";
import ResetPassword from "./pages/ResetPassword";
import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <Routes>
      {/* Auth Pages */}
      <Route path="/" element={<Onboarding />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Post-Auth Pages */}
      <Route path="/home" element={<Home />} />
      <Route path="/lesson" element={<Lesson />} />
      <Route path="/confirm-otp" element={<ConfirmOtp />} />
      <Route path="/input-otp" element={<InputOtp />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;

// import React from "react";
// import { Router, Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import Onboarding from "./pages/Onboarding";
// import Lesson from "./pages/Lesson";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import ConfirmOtp from "./pages/ConfirmOtp";
// import InputOtp from "./pages/InputOtp";
// import ResetPassword from "./pages/ResetPassword";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Onboarding />} />
//         <Route path="/lesson" element={<Lesson />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
