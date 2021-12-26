
import axios from "../axios";

const endpoints = {
    deleteTask: (theme) => axios.delete(`task-create/${theme}`),
};

export default endpoints;