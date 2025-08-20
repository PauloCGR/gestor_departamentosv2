import React, { useState } from "react";
import Navbar from "../components/forms/Navbar";
import Footer from "../components/forms/Footer";
import EmployeeCard from "../components/employees/EmployeeCard";
import SearchBar from "../components/forms/SearchBar";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Juan Pérez",
      code: "EMP001",
      curp: "PEPJ900101HDFRRL01",
      salary: 500,
      salaryType: "día",
      department: "Recursos Humanos",
      vacationDays: 12,
    },
    {
      id: 2,
      name: "María López",
      code: "EMP002",
      curp: "LOPM850202MDFRRL02",
      salary: 100,
      salaryType: "hora",
      department: "Finanzas",
      vacationDays: 10,
    },
  ]);

  const handleEdit = (employee) => {
    console.log("Editar:", employee);
  };

  const handleDelete = (employee) => {
    if (window.confirm(`¿Eliminar a ${employee.name}?`)) {
      setEmployees(employees.filter((e) => e.id !== employee.id));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-white p-4 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
          Listado de Empleados
        </h1>

        <div className="w-full max-w-4xl">
          <SearchBar />

          {employees.map((emp) => (
            <EmployeeCard
              key={emp.id}
              employee={emp}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
