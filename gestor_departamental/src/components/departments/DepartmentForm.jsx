import { useState } from "react";
import { FaBuilding } from "react-icons/fa";
import { GoX } from "react-icons/go";
import InputText from "../forms/InputText";

export default function DepartmentForm({ onCancel, onSuccess }) {
  const [formData, setFormData] = useState({
    nombre: "",
    domicilio: "",
    numeroContacto: "",
    correo: "",
    extra: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:4000/api/1.0/departaments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Error al registrar departamento");
      }

      const data = await res.json();
      console.log("Departamento creado:", data);

      // si el padre necesita refrescar lista
      if (onSuccess) onSuccess(data);

      // limpiar form
      setFormData({
        nombre: "",
        domicilio: "",
        numeroContacto: "",
        correo: "",
        extra: "",
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      onSubmit={handleSubmit}
    >
      <InputText label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
      <InputText label="Domicilio" name="domicilio" value={formData.domicilio} onChange={handleChange} />
      <InputText label="Número de contacto" name="numeroContacto" type="tel" value={formData.numeroContacto} onChange={handleChange} />
      <InputText label="Correo" name="correo" type="email" value={formData.correo} onChange={handleChange} />
      <InputText label="Dato extra (opcional)" name="extra" value={formData.extra} onChange={handleChange} />

      {error && <p className="sm:col-span-2 text-red-600">{error}</p>}

      <div className="sm:col-span-2 flex justify-end mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center bg-white text-red-600 font-semibold py-3 px-6 rounded-full transition transform hover:-translate-y-1 hover:bg-red-100"
        >
          <span className="mr-2">Cancelar</span>
          <GoX size={20} />
        </button>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition transform hover:-translate-y-1 ml-4 disabled:opacity-50"
        >
          <span className="mr-2">{loading ? "Guardando..." : "Registrar"}</span>
          <FaBuilding size={20} />
        </button>
      </div>
    </form>
  );
}
