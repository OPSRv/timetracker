import { LOAD_USER_ID, LOAD_USER_LIST, ERROR } from "../Reducers/Types";

import store from "../Reducers/store";
import api from "../Services/api";

export const getUsersList = () => async (dispatch) => {
  const result = await api.user
    .get_users_list()
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error.message, "LOAD_USER_LIST ERROR");
    });

  return store.dispatch({
    type: LOAD_USER_LIST,
    payload: result,
  });
};

export const getUserId = (url) => async (dispatch) => {
  const result = await api.user
    .get_user_id(url)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      dispatch({ type: ERROR });
      console.log(error.message, "LOAD_USER_ID ERROR");
    });
  return store.dispatch({
    type: LOAD_USER_ID,
    payload: result,
  });
};
