import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import Swal from "sweetalert2";

export default function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    usuario: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.usuario === "admin" && formData.password === "1234") {
      Swal.fire({
        title: "Bienvenido",
        text: `Hola ${formData.usuario}, ingreso exitoso 🚀`,
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#2563eb",
      });
      onLogin?.(formData);
    } else {
      Swal.fire({
        title: "Error",
        text: "Usuario o contraseña incorrectos",
        icon: "error",
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="relative">
        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          name="usuario"
          placeholder="Usuario"
          value={formData.usuario}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
        />
      </div>

      <div className="relative">
        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition transform hover:-translate-y-1"
      >
        Ingresar
      </button>
    </form>
  );
}
