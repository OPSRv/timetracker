import axios from "axios";

const TOKEN = localStorage.getItem("auth_token");

const BASE_URL_API = "http://127.0.0.1:8000/api/";

export const http = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    Accept: "application/json",
    Authorization: TOKEN,
  },
});

export const PATHS = {};
