import axios from "axios";
import { showErrorToast } from "../toastify/toastUtils";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage =
      error.response?.data?.message ||
      error.response?.data ||
      error.message ||
      "Something Went Wrong";

    showErrorToast(errorMessage);

    return Promise.reject(error);
  }
);

export default API;
