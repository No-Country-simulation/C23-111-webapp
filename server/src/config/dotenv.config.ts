import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

export { PORT, HOST, CORS_ORIGIN };
