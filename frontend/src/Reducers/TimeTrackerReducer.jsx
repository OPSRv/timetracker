import {
  AUTHORIZATION_REQUEST,
  LOAD_USER_LIST,
  LOAD_USER_ID,
  LOAD_CURRENT_USER,
  LOAD_PROJECT_LIST,
  LOAD_PROJECT_ID,
  CREATE_PROJECT,
  LOAD_TASK,
} from "./Types";

const initialState = {
  Authorization: {
    auth_token: localStorage.getItem("auth_token"),
    username: "",
    user_id: "",
  },
  UserList: [],
  UserId: [],
  SelectedUser: [],
  CurrentUser: [],
  ProjectList: [],
  ProjectId: [],
  CurrentTask: [],
};

const TimeTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION_REQUEST:
      return {
        ...state,
        Authorization: action.payload,
      };
    case LOAD_USER_LIST:
      return {
        ...state,
        UserList: action.payload,
      };
    case LOAD_PROJECT_LIST:
      return {
        ...state,
        ProjectList: action.payload,
      };
    case LOAD_USER_ID:
      return {
        ...state,
        UserId: action.payload,
      };
    case LOAD_PROJECT_ID:
      return {
        ...state,
        ProjectId: action.payload,
      };
    case LOAD_CURRENT_USER:
      return {
        ...state,
        CurrentUser: action.payload,
      };

    case LOAD_TASK:
      return {
        ...state,
        CurrentTask: action.payload,
      };
    case CREATE_PROJECT:
      return {
        ...state,
        ProjectList: action.payload,
      };

    default:
      return state;
  }
};
export default TimeTrackerReducer;
