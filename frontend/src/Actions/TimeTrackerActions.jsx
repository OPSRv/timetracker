import {
  AUTHORIZATION_REQUEST,
  LOAD_USER_LIST,
  LOAD_USER_ID,
  LOAD_PROJECT_LIST,
  LOAD_PROJECT_ID,
  CREATE_PROJECT,
  LOAD_CURRENT_USER,
  LOAD_TASK,
  CREATE_TASK,
  EDIT_TASK,
  ADD_COMMENT_TASK,
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
      localStorage.setItem("isAuthenticated", true);
      return data.data;
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
    .catch((error) => {
      console.log(error.message, "CURRENT_USER ERR ApiService");
    })
    .finally(() => {});
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
  dispatch({ type: START_LOADING });
  const res = await ApiService.getAll("/projects")
    .then((data) => {
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
  const res = await ApiService.project_create(project_data)
    .then((data) => {
      dispatch({ type: START_LOADING });
      return data.data;
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
  dispatch({ type: START_LOADING });
  const res = await ApiService.get(url)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      // dispatch({ type: ERROR });
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
  const res = await ApiService.get(`task/${path}`)
    .then((data) => {
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

export const createTask = (task_data) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  const res = await ApiService.task_create(task_data)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "CREATE_TASK ERR ApiService");
    })
    .finally(() => {
      dispatch({ type: SUCSSES });
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
      console.log(error.message, "EDIT_TASK ApiService");
    });

  return store.dispatch({
    type: EDIT_TASK,
    payload: res,
  });
};

export const addCommnetTask = (theme, data) => async (dispatch) => {
  console.log(theme, data, "theme, data");

  const res = await ApiService.task_add_comment(theme, data)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      console.log(error.message, "ADD_COMMENT_TASK ApiService");
    });

  return store.dispatch({
    type: ADD_COMMENT_TASK,
    payload: res,
  });
};
