import axios from "../axios";

const endpoints = {
    get_user: () => axios.get("auth/users/me/"),
    create_account: (data) => axios.post("auth/users/", data),
    authorization: (data) => axios.post("auth-token/token/login", data),
};

export default endpoints;