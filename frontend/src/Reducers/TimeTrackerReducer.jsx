import {
  AUTHORIZATION,
  LOGOUT,
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
  ADD_TIME_LOG,
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
  UserId: {},
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
    case AUTHORIZATION:
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true,
        Authorization: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        Authorization: {
          ...state.Authorization,
          auth_token: undefined,
          username: undefined,
          user_id: undefined,
        },
        CurrentUser: {},
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
    case CREATE_PROJECT:
      console.log(action.payload, "CREATE_PROJECT");
      return {
        ...state,
        ProjectList: [...state.ProjectList, action.payload],
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
        CurrentTask: {
          ...state.CurrentTask,
          comments: state.CurrentTask.comments.concat(action.payload),
        },
      };
    case ADD_TIME_LOG:
      console.log(action.payload, "action.payload");
      return {
        ...state,
        CurrentTask: {
          ...state.CurrentTask,
          timelog: state.CurrentTask.timelog.concat(action.payload),
        },
      };
    default:
      return state;
  }
};
export default TimeTrackerReducer;
