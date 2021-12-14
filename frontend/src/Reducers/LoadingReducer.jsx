import { START_LOADING, SUCSSES, ERROR } from "./Types";

const initialState = {
  isLoading: false,
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case SUCSSES:
      return { ...state, isLoading: false };
    case ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
export default LoadingReducer;
