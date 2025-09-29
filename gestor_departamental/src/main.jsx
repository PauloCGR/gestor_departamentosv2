import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import EmployeeRegister from "./views/employee_register.jsx";
import EmployeeList from "./views/employee_list.jsx";
import DepartmentRegister from "./views/department_register.jsx";
import DepartmentList from "./views/department_list.jsx";
import Navbar from "./components/forms/Navbar.jsx";
import Footer from "./components/forms/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar /> {/* Siempre visible */}
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/empleados" element={<EmployeeList />} />
        <Route path="/empleados/registrar" element={<EmployeeRegister />} />
        <Route path="/departamentos" element={<DepartmentList />} />
        <Route
          path="/departamentos/registrar"
          element={<DepartmentRegister />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
