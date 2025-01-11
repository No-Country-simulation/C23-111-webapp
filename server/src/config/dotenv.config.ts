import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const CORS_ORIGIN = process.env.CORS_ORIGIN;
const BD = process.env.BD;
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY ;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;



export { PORT, HOST, CORS_ORIGIN, BD, CLOUD_NAME, API_KEY, API_SECRET };
