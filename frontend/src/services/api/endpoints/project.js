
import axios from "../axios";

const endpoints = {
    get_projects: () => axios.get('projects/'),
    get_project_detail: (url) => axios.get(`${url}`),
    create_project: (data) => axios.post('project-create/', data),
    delete_project: (name) => axios.delete(`project-create/${name}`),
};

export default endpoints;