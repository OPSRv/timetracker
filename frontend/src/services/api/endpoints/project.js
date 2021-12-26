
import axios from "../axios";

const endpoints = {
    deleteProject: (name) => axios.delete(`project-create/${name}`),
};

export default endpoints;