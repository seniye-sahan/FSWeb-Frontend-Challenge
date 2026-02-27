// src/services/api.js
import axios from "axios";

export const api = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "x-api-key": import.meta.env.VITE_REQRES_KEY,
  },
  timeout: 10000,
});