import axios from "axios";

const instance = axios.create({
  // baseURL: "https://localhost:9001",
  baseURL: "https://amazon-backend69.onrender.com",
});

export default instance;
