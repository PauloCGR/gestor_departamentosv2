import { useState } from "react";
import { FaBuilding } from "react-icons/fa";
import { GoX } from "react-icons/go";
import InputText from "../forms/InputText";

export default function DepartmentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: "",
    domicilio: "",
    telefono: "",
    correo: "",
    extra: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      onSubmit={handleSubmit}
    >
      <InputText
        label="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      <InputText
        label="Domicilio"
        name="domicilio"
        value={formData.domicilio}
        onChange={handleChange}
      />
      <InputText
        label="Número de contacto"
        name="telefono"
        type="tel"
        value={formData.telefono}
        onChange={handleChange}
      />
      <InputText
        label="Correo"
        name="correo"
        type="email"
        value={formData.correo}
        onChange={handleChange}
      />
      <InputText
        label="Dato extra (opcional)"
        name="extra"
        value={formData.extra}
        onChange={handleChange}
      />

      <div className="sm:col-span-2 flex justify-end mt-4">
        <button
          type="button"
          className="flex items-center bg-white text-red-600 font-semibold py-3 px-6 rounded-full transition transform hover:-translate-y-1 hover:bg-red-100"
        >
          <span className="mr-2">Cancelar</span>
          <GoX size={20} />
        </button>

        <button
          type="submit"
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition transform hover:-translate-y-1 ml-4"
        >
          <span className="mr-2">Registrar</span>
          <FaBuilding size={20} />
        </button>
      </div>
    </form>
  );
}
