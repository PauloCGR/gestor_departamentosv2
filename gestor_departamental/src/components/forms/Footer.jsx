import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-blue-600 pt-12 pb-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <FaPhone className="mr-2" /> +52 123 456 7890
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" /> info@miempresa.com
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Ciudad, País
              </li>
            </ul>
          </div>

          {/* Links a tutoriales */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tutoriales</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-800 transition"
                >
                  Cómo registrar empleados
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-800 transition"
                >
                  Gestión de departamentos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-800 transition"
                >
                  Reportes y estadísticas
                </a>
              </li>
            </ul>
          </div>

          {/* Términos y condiciones */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-800 transition"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-800 transition"
                >
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales o información adicional */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-800 transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-800 transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-blue-800 transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="mt-8 border-t border-blue-100 pt-4 text-center text-sm text-blue-400">
          &copy; {new Date().getFullYear()} MiEmpresa. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
