import express from "express";
import cors from 'cors';
import { serverRoutes } from "./mainRoutes";
import { PORT } from "./config/dotenv.config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(serverRoutes);

app.use((req, res) => {
  res.status(404).send('Ruta no encontrada :/')
})

app.listen(PORT || 3003, () => {
  console.log(`server on port ${PORT || 3003}`);
});
