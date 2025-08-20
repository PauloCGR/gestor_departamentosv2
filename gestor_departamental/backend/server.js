import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado a MongoDB"))
.catch((err) => console.error("❌ Error conectando a MongoDB:", err));

// Modelo de ejemplo
const empleadoSchema = new mongoose.Schema({
  nombre: String,
  numSeguro: String,
  curp: String,
  sueldo: Number,
  tipoSueldo: String,
  departamento: String,
  diasVacaciones: Number,
});

const Empleado = mongoose.model("Empleado", empleadoSchema);

// Rutas API
app.get("/api/employeds", async (req, res) => {
  const empleados = await Empleado.find();
  res.json(empleados);
});

app.post("/api/employeds", async (req, res) => {
  const nuevoEmpleado = new Empleado(req.body);
  await nuevoEmpleado.save();
  res.json({ mensaje: "Empleado agregado correctamente" });
});

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
