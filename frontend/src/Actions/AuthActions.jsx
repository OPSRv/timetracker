import {
  AUTHORIZATION,
  CREATE_USER,
  LOAD_CURRENT_USER,
  LOGOUT,
  START_LOADING,
  SUCSSES,
  ERROR,
} from "../Reducers/Types";

import store from "../Reducers/store";
import api from "../Services/api";
import Cookies from "js-cookie";

export const getAuth = (data) => async (dispatch) => {
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
    .get_user()
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

export const createUser = (data) => async (dispatch) => {
  const result = await api.user
    .create_account(data)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "LOAD_USER_ID ERROR");
    });
  return store.dispatch({
    type: CREATE_USER,
    payload: result,
  });
};

export const outLogin = () => async (dispatch) => {
  Cookies.remove("auth_token");
  Cookies.remove("isAuthenticated");
  return store.dispatch({
    type: LOGOUT,
    payload: "",
  });
};
