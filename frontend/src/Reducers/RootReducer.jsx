import { combineReducers } from "redux";

import TimeTrackerReducer from "./TimeTrackerReducer";
import LoadingReducer from "./LoadingReducer";

export default combineReducers({
  timetracker: TimeTrackerReducer,
  loading: LoadingReducer,
});
