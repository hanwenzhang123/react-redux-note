npm install @reduxjs/toolkit
npm install react-redux

//index.js
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/index"; //bring the store to the entire application
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//store/index.js
import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";

const store = configureStore({    //create the store
  reducer: { ui: uiSlice.reducer },
});

export default store;


//store/ui-slice.js
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({ 
  name: "ui",
  initialState: { cartIsVisible: false },
  reducer: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
 
