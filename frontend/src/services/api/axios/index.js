import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "/api/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const auth_token = Cookies.get("auth_token");

    if (auth_token) {
      config.headers.authorization = `Token ${auth_token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;