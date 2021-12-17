import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./Components/App";
import "./assets/css/index.scss";
// import reportWebVitals from './reportWebVitals';

import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// reportWebVitals(console.log);
