import {
  LOAD_PROJECT_LIST,
  LOAD_PROJECT_ID,
  CREATE_PROJECT,
  DELETE_PROJECT,
  START_LOADING,
  SUCSSES,
  ERROR,
} from "../Reducers/Types";

import store from "../Reducers/store";
import ApiService from "../Services/ApiService";
import api from "../Services/api";

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
