import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ placeholder = "Buscar empleado..." }) {
  return (
    <div className="w-full mb-6 flex justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
}
