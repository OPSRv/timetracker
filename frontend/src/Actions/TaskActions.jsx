import {
  LOAD_TASK,
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  ADD_COMMENT_TASK,
  ADD_TIME_LOG,
  START_LOADING,
  SUCSSES,
  ERROR,
} from "../Reducers/Types";

import store from "../Reducers/store";
import ApiService from "../Services/ApiService";
import api from "../Services/api";

export const deleteTask = (theme) => async (dispatch) => {
  await api.task.deleteTask(theme);
  return store.dispatch({
    type: DELETE_TASK,
    payload: theme,
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
