import * as dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const HOST = process.env.HOST;
export const CORS_ORIGIN = process.env.CORS_ORIGIN;
export const MONGO_URI = process.env.MONGO_URI;
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY ;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
