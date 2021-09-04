//index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //import provider

import "./index.css";
import App from "./App";
import store from "./store/index"; //import the store we created

ReactDOM.render(
  //provider wraps at the highest level, set the store props with the value of our redux store
  //now, all the children component can access to the store, get the data out of the store, can also dispatch actions
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
