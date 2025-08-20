import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function DepartmentCard({ department, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-4 flex justify-between items-center hover:shadow-lg transition">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          {department.nombre}
        </h2>
        <p className="text-gray-600">Domicilio: {department.domicilio}</p>
        <p className="text-gray-600">Teléfono: {department.telefono}</p>
        <p className="text-gray-600">Correo: {department.correo}</p>
        {department.extra && (
          <p className="text-gray-500 italic">Extra: {department.extra}</p>
        )}
      </div>
      <div className="flex space-x-3">
        <button
          onClick={() => onEdit(department)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition transform hover:-translate-y-1"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => onDelete(department)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition transform hover:-translate-y-1"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
