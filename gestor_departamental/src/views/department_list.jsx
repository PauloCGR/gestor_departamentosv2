import React, { useState } from "react";
import Navbar from "../components/forms/Navbar";
import Footer from "../components/forms/Footer";
import DepartmentCard from "../components/departments/DepartmentCard";
import SearchBar from "../components/forms/SearchBar";

export default function DepartmentList() {
  const [departments, setDepartments] = useState([
    {
      id: 1,
      nombre: "Recursos Humanos",
      domicilio: "Av. Principal 123",
      telefono: "555-123-4567",
      correo: "rh@empresa.com",
      extra: "Encargado de nóminas",
    },
    {
      id: 2,
      nombre: "Finanzas",
      domicilio: "Av. Secundaria 456",
      telefono: "555-987-6543",
      correo: "finanzas@empresa.com",
      extra: "",
    },
  ]);

  const handleEdit = (department) => {
    console.log("Editar:", department);
  };

  const handleDelete = (department) => {
    if (window.confirm(`¿Eliminar el departamento ${department.nombre}?`)) {
      setDepartments(departments.filter((d) => d.id !== department.id));
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
              key={dep.id}
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
