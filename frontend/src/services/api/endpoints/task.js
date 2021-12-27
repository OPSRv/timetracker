
import axios from "../axios";

const endpoints = {
    get_task: (theme) => axios.get(`task/${theme}`),
    timeLog_create: (data) => axios.post("timelog/", data),
    task_create: (data) => axios.post("task-create/", data),
    deleteTask: (theme) => axios.delete(`task-create/${theme}`),
    task_edit: (theme, data) => axios.patch(`task-create/${theme}/`, data),
    task_add_comment: (theme, data) => axios.patch(`task-create/${theme}/`, data),
};

export default endpoints;