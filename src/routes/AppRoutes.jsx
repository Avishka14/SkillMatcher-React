import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Account from "../pages/Account/Account.jsx";
import LandingPage from "../pages/Landing-Page/LandingPage.jsx";
import LogIn from "../pages/LogIn/LogIn.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import Job from "../pages/Job-Page/Job.jsx";
import Pricing from "../pages/Pricing/Pricing.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signin" element={<SignUp />} />
      <Route path="/jobs" element={<Job />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}
