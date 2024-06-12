import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import AcademicPage from "../Pages/AcademicPage";
import ResumePage from "../Pages/ResumePage";

export default function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/academic" element={<AcademicPage />} />
          <Route path="/resume" element={<ResumePage/>} />
        </Routes>
      </Router>
    </div>
  );
}
