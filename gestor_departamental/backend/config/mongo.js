import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const DB_URI = process.env.DB_URI;
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("CONECTADO A MONGODB");
  } catch (err) {
    console.error("ERROR DE CONEXION:", err);
  }
};

export default dbConnect;