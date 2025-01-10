import express from "express";
import cors from 'cors';
import { serverRoutes } from "./mainRoutes";
import { PORT } from "./config/dotenv.config";
import { BD } from "./config/dotenv.config";
import mongoose from "mongoose";

// Si no está definid BD, lanzar error. Mongoose no admite undefined como valor de conexión
if (!BD) {
  throw new Error("URI de conexion a BD no definida");
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(serverRoutes);



app.use((req, res) => {
  res.status(404).send('Ruta no encontrada :/')
})

mongoose.connect(BD,{
}).then ( () => console.log('Conexion correcta a BD'))
.catch( (error) => {
  console.log('Error al conectar a BD', error.message);
  process.exit(1);
})


app.listen(PORT || 3003, () => {
  console.log(`server on port ${PORT || 3003}`);
});
