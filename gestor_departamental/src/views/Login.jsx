import Navbar from "../components/forms/Navbar";
import Footer from "../components/forms/Footer";
import LoginForm from "../components/forms/LoginForm";

export default function Login() {
  const handleLogin = (userData) => {
    console.log("Usuario logueado:", userData);
    // Aquí podrías redirigir a otra ruta (ej: listado empleados)
  };

  return (
    <div>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gradient-to-tr from-blue-50 to-white flex items-center justify-center p-4">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
            Iniciar Sesión
          </h1>

          <LoginForm onLogin={handleLogin} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
