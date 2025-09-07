// frontend/src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

// Always attach JWT if present
api.interceptors.request.use((config) => {
  const t = localStorage.getItem("token");
  if (t) {
    // keep header-casing consistent with backend check
    config.headers.Authorization = `Bearer ${t}`;
  }
  return config;
});

export default api;
