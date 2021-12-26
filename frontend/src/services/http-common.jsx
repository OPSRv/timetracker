import axios from "axios";
import Cookies from "js-cookie";

const TOKEN = Cookies.get("auth_token");
const BASE_URL_API = "/api/";
console.log(TOKEN);
export const http = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    Accept: "application/json",
    Authorization: `Token ${TOKEN}`,
  },
});

export const PATHS = {};
