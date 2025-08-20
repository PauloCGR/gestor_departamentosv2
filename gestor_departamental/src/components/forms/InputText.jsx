export default function InputText({
  label,
  value,
  onChange,
  name,
  type = "text",
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Ingrese ${label.toLowerCase()}`}
        className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
      />
    </div>
  );
}
