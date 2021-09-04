install these 2 packages to the redux project
npm install redux react-redux

//store/index.js
//redux logics
import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter + 1,
    };
  }
  return state; //unchanged state
};

const store = createStore(counterReducer); //create our store. createStore() passing the reducer function

export default store;
