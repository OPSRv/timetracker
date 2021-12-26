import RootReducer from "./RootReducer";
import { createStore, applyMiddleware, compose } from "redux";

// import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
