import React, { useState, useRef, useEffect } from "react";
import {
  FaUsers,
  FaBuilding,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Cerrar el menú si se hace click afuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold tracking-wider">
            Nombre de la empresa
          </div>

          <div className="hidden md:flex flex-1 justify-center space-x-8 items-center">
            <Link
              to="/empleados"
              className="relative group px-3 py-2 flex items-center transition"
            >
              <FaUsers className="mr-2" /> Listado de Empleados
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>

            <Link
              to="/departamentos"
              className="relative group px-3 py-2 flex items-center transition"
            >
              <FaBuilding className="mr-2" /> Listado de Departamentos
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Botón Cerrar Sesión al final */}
          <div className="hidden md:flex flex-shrink-0 ml-auto">
            <button className="flex items-center bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition transform">
              <FaSignOutAlt className="mr-2" /> Cerrar Sesión
            </button>
          </div>

          {/* Mobile Profile Menu */}
          <div className="flex md:hidden relative" ref={menuRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center focus:outline-none"
            >
              <FaUserCircle size={28} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-blue-600 rounded-lg shadow-lg overflow-hidden animate-slideDown z-50">
                <a
                  href="#empleados"
                  className="flex items-center px-4 py-3 hover:bg-blue-100 transition"
                  onClick={() => setOpen(false)}
                >
                  <FaUsers className="mr-2" /> Listado de Empleados
                </a>
                <a
                  href="#departamentos"
                  className="flex items-center px-4 py-3 hover:bg-blue-100 transition"
                  onClick={() => setOpen(false)}
                >
                  <FaBuilding className="mr-2" /> Listado de Departamentos
                </a>
                <button
                  className="w-full text-left flex items-center px-4 py-3 hover:bg-blue-100 transition"
                  onClick={() => setOpen(false)}
                >
                  <FaSignOutAlt className="mr-2" /> Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
