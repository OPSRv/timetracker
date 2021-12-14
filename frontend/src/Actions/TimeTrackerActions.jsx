import {
  AUTHORIZATION_REQUEST,
  LOAD_USER_LIST,
  LOAD_USER_ID,
  LOAD_PROJECT_LIST,
  LOAD_PROJECT_ID,
  CREATE_PROJECT,
  LOAD_CURRENT_USER,
  LOAD_TASK,
  START_LOADING,
  SUCSSES,
  ERROR,
} from "../Reducers/Types";

import store from "../store";
import ApiService from "../Services/ApiService";

export const getAuth = (auth) => async (dispatch) => {
  const res = await ApiService.authorization(auth)
    .then((data) => {
      dispatch({ type: START_LOADING });
      localStorage.setItem("auth_token", `Token ${data.data.auth_token}`);
      let res = data.data;
      return res;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "AUTHORIZATION ERR ApiService");
    })
    .finally(() => {
      dispatch({ type: SUCSSES });
    });

  return store.dispatch({
    type: AUTHORIZATION_REQUEST,
    payload: res,
  });
};

export const getCurrentUsers = (token) => async (dispatch) => {
  const res = await ApiService.getAll("/auth/users/me")
    .then((data) => {
      localStorage.setItem("userCurrent", data.data.username);
      return data.data;
    })
    .catch((error) =>
      console.log(error.message, "CURRENT_USER ERR ApiService")
    );
  return store.dispatch({
    type: LOAD_CURRENT_USER,
    payload: res,
  });
};

export const getUsers = () => async (dispatch) => {
  const res = await ApiService.getAll("/auth/users")
    .then((data) => {
      dispatch({ type: START_LOADING });
      return data.data;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "LOAD_USER_LIST ERR ApiService");
    })
    .finally(() => {
      dispatch({ type: SUCSSES });
    });
  return store.dispatch({
    type: LOAD_USER_LIST,
    payload: res,
  });
};

export const getUserId = (url) => async (dispatch) => {
  const res = await ApiService.get(url)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "LOAD_USER_ID ERR ApiService");
    });
  return store.dispatch({
    type: LOAD_USER_ID,
    payload: res,
  });
};

export const getProjects = () => async (dispatch) => {
  const res = await ApiService.getAll("/projects")
    .then((data) => {
      dispatch({ type: START_LOADING });
      return data.data;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "PROJECT_LIST ERR ApiService");
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
  console.log(project_data, "project_data");
  const res = await ApiService.project_create(project_data)
    .then((data) => {
      console.log(data, "ACTION createProject data");
      dispatch({ type: START_LOADING });
      return res;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "AUTHORIZATION ERR ApiService");
    })
    .finally(() => {
      dispatch({ type: SUCSSES });
    });

  return store.dispatch({
    type: CREATE_PROJECT,
    payload: res,
  });
};

export const getProjectId = (url) => async (dispatch) => {
  const res = await ApiService.get(url)
    .then((data) => {
      dispatch({ type: START_LOADING });
      console.log(data.data);
      return data.data;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "LOAD_PROJECT_ID ERR ApiService");
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
  const res = await ApiService.get(path)
    .then((data) => {
      console.log(data.data);
      dispatch({ type: START_LOADING });
      return data.data;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "LOAD_TASK ERR ApiService");
    })
    .finally(() => {
      dispatch({ type: SUCSSES });
    });
  return store.dispatch({
    type: LOAD_TASK,
    payload: res,
  });
};
