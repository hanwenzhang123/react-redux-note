npm init -y
npm install redux

The Reducer Function
- should be a pure function -> same input leads to same output
//inputs: old state + dispatched action
//output: new state object
a reducer is a function that takes the given inputs, which are provided by Redux
and then produces the expected output, a new state object.

const redux = require("redux"); //import 3rd party package

//create store, manage data, the data determined by the reducer function
//because the reducer function will produce new state snapshots whenever an action reaches it
//the reducer will also be executed with a default action that should spit out the initial state.
const store = redux.createStore(counterReducer); //passing the counterReducer since store needs to know which reducer is responsible for changing the store
//store wants to know who the reducer function is that will manipulate the data

//reducer function - always receives 2 pieces of inputs, 2 parameters
//the old or existing state and the action that is dispatched
//must return a certain output, always return a new state object
// a reducer function should be a pure function same values for the inputs always should produce exactly the same output.
// no side effects inside of the function, no HTTP, or write something to local storage, or fetch
const counterReducer = (state, action) => {
  //current state and action, receives by default because the reducer will auto executed
  return {
    //return a new state replaces old state
    counter: state.counter + 1, //existing state accessing old counter value and adding one to it for the new counter value
  };
};
