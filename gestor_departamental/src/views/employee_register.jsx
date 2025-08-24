import EmployeeForm from "../components/employees/EmployeeForm";
import Navbar from "../components/forms/Navbar";
import Footer from "../components/forms/Footer";
import Swal from "sweetalert2";

export default function EmployeeRegister() {
  const handleRegister = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/api/1.0/employeds", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al registrar empleado");
      }

      const result = await response.json();
      console.log("Respuesta del servidor:", result);

      Swal.fire({
        title: "Registro exitoso",
        text: `Empleado ${data.nombre} guardado correctamente`,
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#2563eb",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "No se pudo registrar el empleado",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gradient-to-tr from-blue-50 to-white flex items-center justify-center p-4">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
            Registro de Empleados
          </h1>
          <EmployeeForm onSubmit={handleRegister} />
        </div>
      </main>
      <Footer />
    </div>
  );
}