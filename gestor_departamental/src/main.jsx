import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import EmployeeRegister from "./views/employee_register.jsx";
import EmployeeList from "./views/employee_list.jsx";
import DepartmentRegister from "./views/department_register.jsx";
import DepartmentList from "./views/department_list.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmployeeRegister />
  </StrictMode>
);
