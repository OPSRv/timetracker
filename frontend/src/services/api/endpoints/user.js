
import axios from "../axios";

const endpoints = {
    get_user_id: (url) => axios.get(url),
    get_users_list: () => axios.get("/auth/users"),
};

export default endpoints;