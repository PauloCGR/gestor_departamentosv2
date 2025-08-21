import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongo.js";
import routes from "./app/routes/index.js"

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/1.0', routes);

dbConnect();

app.listen(PORT, () => {
  console.log('API escuchando el puerto', PORT);
});
