import React from "react";
import Navbar from "../components/forms/Navbar";
import Footer from "../components/forms/Footer";
import DepartmentForm from "../components/departments/DepartmentForm";

export default function DepartmentRegister() {
  const handleRegister = (data) => {
    console.log("Departamento registrado:", data);
    // Aquí puedes hacer fetch/axios al backend
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-white flex items-center justify-center p-4">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
            Registro de Departamentos
          </h1>

          <DepartmentForm onSubmit={handleRegister} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
