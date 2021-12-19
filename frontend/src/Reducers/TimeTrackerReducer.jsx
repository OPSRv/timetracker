import {
  AUTHORIZATION_REQUEST,
  LOAD_USER_LIST,
  LOAD_USER_ID,
  LOAD_CURRENT_USER,
  LOAD_PROJECT_LIST,
  LOAD_PROJECT_ID,
  CREATE_PROJECT,
  LOAD_TASK,
  CREATE_TASK,
  ADD_COMMENT_TASK,
  EDIT_TASK,
} from "./Types";

const token = localStorage.getItem("auth_token");
const isAuth = localStorage.getItem("isAuthenticated");

const initialState = {
  Authorization: {
    auth_token: token ? token : "",
    username: "",
    user_id: "",
  },
  isAuthenticated: isAuth ? isAuth : false,
  UserList: [],
  UserId: [],
  CurrentUser: {},
  ProjectList: [],
  ProjectId: {
    tasks: [],
    performers: [],
  },
  CurrentTask: {},
};

const TimeTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION_REQUEST:
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true,
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
      console.log("LOAD_PROJECT_ID action.payload", action.payload);
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
      console.log(action.payload);
      return {
        ...state,
        ProjectList: [...state.ProjectList, action.payload],
      };

    case CREATE_TASK:
      console.log("CREATE_TASK", action.payload);
      return {
        ...state,
        ProjectId: {
          ...state.ProjectId,
          tasks: state.ProjectId.tasks.concat(action.payload),
        },
      };
    case EDIT_TASK:
      return {
        ...state,
        CurrentTask: action.payload,
      };
    case ADD_COMMENT_TASK:
      console.log(action.payload, "action.payload");
      return {
        ...state,
        CurrentTask: action.payload,
      };

    default:
      return state;
  }
};
export default TimeTrackerReducer;
