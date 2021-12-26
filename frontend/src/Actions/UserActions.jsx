import { LOAD_USER_ID, LOAD_USER_LIST, ERROR } from "../Reducers/Types";

import store from "../Reducers/store";
import ApiService from "../Services/ApiService";
import api from "../Services/api";
import Cookies from "js-cookie";

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
