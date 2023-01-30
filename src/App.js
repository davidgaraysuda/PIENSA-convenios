import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import CompanyPage from "./Pages/company/CompanyPage";
import TutorPage from "./Pages/tutor/TutorPage";
import TeacherPage from "./Pages/teacher/TeacherPage";
import CareerPage from "./Pages/career/CareerPage";
import AgreementPage from "./Pages/agreement/AgreementPage";

function App() {
  return (
    <BrowserRouter>
    <ResponsiveAppBar />
    <Routes>
    

      <Route path="/Company" element={<CompanyPage />} />
      <Route path="/Career" element={<CareerPage />} />
      <Route path="/Agreement" element={<AgreementPage />} />
      <Route path="/Tutor" element={<TutorPage />} />
      <Route path="/Teacher" element={<TeacherPage />} />
      
    </Routes>

    </BrowserRouter>
  );
}

export default App;
