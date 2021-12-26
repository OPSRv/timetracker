import axios from "../axios";

const endpoints = {
    createAccount: (data) => axios.post("auth/users/", data),
    authorization: (data) => axios.post("auth-token/token/login", data),
    getUser: () => axios.get("auth/users/me/")
};

export default endpoints;