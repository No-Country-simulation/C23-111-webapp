import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const publicInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

publicInstance.interceptors.response.use(
  (response) => response,
  (error) => {

    const { data } = error.response;
    return Promise.reject(data.error || data.message);
  }
);

export { publicInstance };
