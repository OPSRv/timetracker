import {
  AUTHORIZATION,
  LOAD_USER_LIST,
  LOAD_USER_ID,
  LOAD_PROJECT_LIST,
  LOAD_PROJECT_ID,
  CREATE_PROJECT,
  DELETE_PROJECT,
  LOAD_CURRENT_USER,
  LOAD_TASK,
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  ADD_COMMENT_TASK,
  ADD_TIME_LOG,
  LOGOUT,
  START_LOADING,
  SUCSSES,
  ERROR,
} from "../Reducers/Types";

import store from "../Reducers/store";
import ApiService from "../Services/ApiService";
import api from "../Services/api";
import Cookies from "js-cookie";

export const getAuth = (data) => async (dispatch) => {
  console.log(data);
  const result = await api.auth
    .authorization(data)
    .then((res) => {
      dispatch({ type: START_LOADING });
      Cookies.set("auth_token", res.data.auth_token);
      return res.data.auth_token;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "AUTHORIZATION ERROR");
    })
    .finally(() => {
      dispatch({ type: SUCSSES });
    });
  dispatch(getUser());
  return store.dispatch({
    type: AUTHORIZATION,
    payload: result,
  });
};

export const getUser = () => async (dispatch) => {
  const result = await api.auth
    .getUser()
    .then(({ data }) => {
      if (data) {
        Cookies.set("isAuthenticated", true);
      }
      return data;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "AUTHORIZATION ERROR");
    })
    .finally(() => {
      dispatch({ type: SUCSSES });
    });

  return store.dispatch({
    type: LOAD_CURRENT_USER,
    payload: result,
  });
};

export const outLogin = () => async (dispatch) => {
  Cookies.remove("auth_token");
  return store.dispatch({
    type: LOGOUT,
    payload: "",
  });
};

export const getUsersList = () => async (dispatch) => {
  const res = await ApiService.getAll("/auth/users")
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error.message, "LOAD_USER_LIST ERROR");
    });

  return store.dispatch({
    type: LOAD_USER_LIST,
    payload: res,
  });
};

export const getUserId = (url) => async (dispatch) => {
  const res = await ApiService.get(url)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "LOAD_USER_ID ERROR");
    });
  return store.dispatch({
    type: LOAD_USER_ID,
    payload: res,
  });
};

export const getProjects = () => async (dispatch) => {
  dispatch({ type: START_LOADING });
  const res = await ApiService.getAll("/projects")
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "LOAD_PROJECT_LIST ERROR");
    })
    .finally(() => {
      dispatch({ type: SUCSSES });
    });

  return store.dispatch({
    type: LOAD_PROJECT_LIST,
    payload: res,
  });
};

export const createProject = (project_data) => async (dispatch) => {
  const res = await ApiService.project_create(project_data)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error.message, "CREATE_PROJECT ERROR");
    });

  return store.dispatch({
    type: CREATE_PROJECT,
    payload: res,
  });
};

export const deleteProject = (name) => async (dispatch) => {
  await api.project.deleteProject(name);
  return store.dispatch({
    type: DELETE_PROJECT,
    payload: name,
  });
};

export const deleteTask = (theme) => async (dispatch) => {
  await api.task.deleteTask(theme);
  return store.dispatch({
    type: DELETE_TASK,
    payload: theme,
  });
};

export const getProjectId = (url) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  const res = await ApiService.get(url)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      // dispatch({ type: ERROR });
      console.log(error.message, "LOAD_PROJECT_ID ERROR");
    })
    .finally(() => {
      dispatch({ type: SUCSSES });
    });
  return store.dispatch({
    type: LOAD_PROJECT_ID,
    payload: res,
  });
};

export const getTask = (path) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  const res = await ApiService.get(`task/${path}`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "LOAD_TASK ERROR");
    })
    .finally(() => {
      dispatch({ type: SUCSSES });
    });
  return store.dispatch({
    type: LOAD_TASK,
    payload: res,
  });
};

export const createTask = (task_data) => async (dispatch) => {
  const res = await ApiService.task_create(task_data)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error.message, "CREATE_TASK ERROR");
    });
  return store.dispatch({
    type: CREATE_TASK,
    payload: res,
  });
};

export const editTask = (theme, data) => async (dispatch) => {
  const res = await ApiService.task_edit(theme, data)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error.message, "EDIT_TASK");
    });
  return store.dispatch({
    type: EDIT_TASK,
    payload: res,
  });
};

export const addCommnetTask = (theme, data) => async (dispatch) => {
  const res = await ApiService.task_add_comment(theme, data)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error.message, "ADD_COMMENT_TASK");
    });
  return store.dispatch({
    type: ADD_COMMENT_TASK,
    payload: res.comments[0],
  });
};

export const addTimeLog = (timeLog_data) => async (dispatch) => {
  const res = await ApiService.timeLog_create(timeLog_data)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error.message, "ADD_TIME_LOG ERROR");
    });
  return store.dispatch({
    type: ADD_TIME_LOG,
    payload: res,
  });
};
