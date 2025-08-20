import EmployeeForm from "../components/employees/EmployeeForm";
import Navbar from "../components/forms/Navbar";
import Footer from "../components/forms/Footer";
import Swal from "sweetalert2";

export default function EmployeeRegister() {
  const handleRegister = (data) => {
    console.log("Empleado registrado:", data);

    Swal.fire({
      title: "Registro exitoso",
      text: `Empleado ${data.nombre} guardado correctamente`,
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#2563eb",
    });
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
