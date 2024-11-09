import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000", // Define a URL base para o backend
});

export default api;
