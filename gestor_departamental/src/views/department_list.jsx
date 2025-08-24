import React, { useState, useEffect } from "react";
import Navbar from "../components/forms/Navbar";
import Footer from "../components/forms/Footer";
import DepartmentCard from "../components/departments/DepartmentCard";
import SearchBar from "../components/forms/SearchBar";

export default function DepartmentList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/1.0/departaments");
        if (!response.ok) {
          throw new Error("Error al obtener departamentos");
        }
        const data = await response.json();

        setDepartments(data.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDepartments();
  }, []);

  const handleEdit = (department) => {
    console.log("Editar:", department);
  };

  const handleDelete = async (department) => {
    if (window.confirm(`¿Eliminar el departamento ${department.nombre}?`)) {
      try {
        const response = await fetch(
          `http://localhost:4000/api/1.0/departaments/${department._id}`,
          { method: "DELETE" }
        );

        if (!response.ok) throw new Error("Error al eliminar");

        // 🔹 Quitar del state
        setDepartments((prev) => prev.filter((e) => e._id !== department._id));
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
          Listado de Departamentos
        </h1>

        <div className="w-full max-w-4xl">
          <SearchBar placeholder="Buscar departamento..." />

          {departments.map((dep) => (
            <DepartmentCard
              key={dep._id}
              department={dep}
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
