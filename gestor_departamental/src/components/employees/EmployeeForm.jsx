import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { GoX } from "react-icons/go";
import InputText from "../forms/InputText";
import SelectBox from "../forms/SelectBox";

export default function EmployeeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: "",
    codigoSeguro: "",
    curp: "",
    sueldo: "",
    tipoSueldo: "",
    departamento: "",
    vacaciones: "",
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
        label="Código Seguro"
        name="codigoSeguro"
        value={formData.codigoSeguro}
        onChange={handleChange}
      />
      <InputText
        label="CURP"
        name="curp"
        value={formData.curp}
        onChange={handleChange}
      />
      <InputText
        label="Sueldo"
        name="sueldo"
        type="number"
        value={formData.sueldo}
        onChange={handleChange}
      />

      <SelectBox
        label="Tipo de sueldo"
        name="tipoSueldo"
        value={formData.tipoSueldo}
        onChange={handleChange}
        options={[
          { label: "Por día", value: "dia" },
          { label: "Por hora", value: "hora" },
        ]}
      />

      <SelectBox
        label="Departamento"
        name="departamento"
        value={formData.departamento}
        onChange={handleChange}
        options={[
          { label: "Recursos Humanos", value: "rh" },
          { label: "Ventas", value: "ventas" },
          { label: "Producción", value: "produccion" },
        ]}
      />

      <InputText
        label="Días de vacaciones"
        name="vacaciones"
        type="number"
        value={formData.vacaciones}
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
          <FaUserPlus size={20} />
        </button>
      </div>
    </form>
  );
}
