import axios from "axios";

const api = axios.create({
  baseURL: "https://loja-virtual-v1.onrender.com",
});

export default api;