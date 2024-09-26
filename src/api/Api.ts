import axios from "axios";

const baseURL = import.meta.env.REACT_APP_API_URL || "http://localhost:3333";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
