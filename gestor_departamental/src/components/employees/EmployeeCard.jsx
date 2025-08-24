import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function EmployeeCard({ employee, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 hover:shadow-2xl transition">
      <div className="flex flex-col sm:flex-row sm:space-x-6 mb-4 sm:mb-0">
        <div>
          <p className="text-gray-800 font-semibold">{employee.nombre}</p>
          <p className="text-gray-500 text-sm">{employee.curp}</p>
        </div>
        <div>
          <p className="text-gray-600">
            Código: <span className="font-medium">{employee.numSeguro}</span>
          </p>
          <p className="text-gray-600">
            Sueldo:{" "}
            <span className="font-medium">
              {employee.sueldo} ({employee.tipoSueldo})
            </span>
          </p>
        </div>
        <div>
          <p className="text-gray-600">
            Departamento:{" "}
            <span className="font-medium">{employee.departamento}</span>
          </p>
          <p className="text-gray-600">
            Vacaciones:{" "}
            <span className="font-medium">{employee.diasVacaciones} días</span>
          </p>
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={() => onEdit(employee)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          <FaEdit className="mr-1" /> Editar
        </button>
        <button
          onClick={() => onDelete(employee)}
          className="flex items-center px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
        >
          <FaTrash className="mr-1" /> Eliminar
        </button>
      </div>
    </div>
  );
}
