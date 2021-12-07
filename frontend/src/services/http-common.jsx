import axios from "axios";

// const isAuthenticated = localStorage.getItem("isAuthenticated");
const token = localStorage.getItem("token");
// console.log(token, "token http");

const asyncLocalStorage = {
  setItem: async function (key, value) {
    await null;
    return localStorage.setItem(key, value);
  },
  getItem: async function (key) {
    await null;
    return localStorage.getItem(key);
  },
};

console.log(token);
export default axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    Accept: "application/json",
    Authorization: token,
  },
});
