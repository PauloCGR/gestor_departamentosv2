import React, { useState, useEffect } from "react";
import Navbar from "../components/forms/Navbar";
import Footer from "../components/forms/Footer";
import EmployeeCard from "../components/employees/EmployeeCard";
import SearchBar from "../components/forms/SearchBar";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  // 🔹 Cargar empleados al iniciar
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/1.0/employeds");
        if (!response.ok) {
          throw new Error("Error al obtener empleados");
        }
        const data = await response.json();

        // 👇 Aquí el fix: tomar la propiedad `data` que contiene el array
        setEmployees(data.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);

  const handleEdit = (employee) => {
    console.log("Editar:", employee);
  };

  const handleDelete = async (employee) => {
    if (window.confirm(`¿Eliminar a ${employee.nombre}?`)) {
      try {
        const response = await fetch(
          `http://localhost:4000/api/1.0/employeds/${employee._id}`,
          { method: "DELETE" }
        );

        if (!response.ok) throw new Error("Error al eliminar");

        // 🔹 Quitar del state
        setEmployees((prev) => prev.filter((e) => e._id !== employee._id));
      } catch (error) {
        console.error(error);
      }
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

          {employees.length === 0 ? (
            <p className="text-center text-gray-600">No hay empleados registrados.</p>
          ) : (
            employees.map((emp) => (
              <EmployeeCard
                key={emp._id}
                employee={emp}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}