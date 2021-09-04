npm init -y
npm install redux

The Reducer Function
- should be a pure function -> same input leads to same output
//inputs: old state + dispatched action
//output: new state object
a reducer is a function that takes the given inputs, which are provided by Redux
and then produces the expected output, a new state object.


//CODE
const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state; 
};

const store = redux.createStore(counterReducer);

console.log(store.getState()); //{ counter: 0 }

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" }); //{ counter: 1 }
store.dispatch({ type: "decrement" }); //{ counter: 0 }


//EXPLANATION
const redux = require("redux"); //import 3rd party package

//reducer function - always receives 2 pieces of inputs, 2 parameters
//the old or existing state and the action that is dispatched
//must return a certain output, always return a new state object
// a reducer function should be a pure function same values for the inputs always should produce exactly the same output.
// no side effects inside of the function, no HTTP, or write something to local storage, or fetch
const counterReducer = (state = { counter: 0 }, action) => {
  //current state and action, receives by default because the reducer will auto executed
  //this code will run when the store is created, we should give the state parameter a default value
  return {
    //return a new state replaces old state
    counter: state.counter + 1, //existing state accessing old counter value and adding one to it for the new counter value
  };
};

//create store, manage data, the data determined by the reducer function
//because the reducer function will produce new state snapshots whenever an action reaches it
//the reducer will also be executed with a default action that should spit out the initial state.
const store = redux.createStore(counterReducer); //passing the counterReducer since store needs to know which reducer is responsible for changing the store
//createStore need to pass a reducer function as an argument
//store wants to know who the reducer function is that will manipulate the data

console.log(store.getState()); //{ counter: 1 }

//subscribe to the store
const counterSubscriber = () => {
  //getState() is a method available on store createStore(), it will give the lasted state after updates.
  const latestState = store.getState();
  console.log(latestState);
};

//function should be executed whenever state changes
store.subscribe(counterSubscriber); //point at the counterSubscriber too subscribe

//create and dispatch action
//dispatch() is a method that dispatch the action
//here we dispatch an action that has a type "increment"
store.dispatch({ type: "increment" });  //{ counter: 2 }
//dispatch a new action that cause the function counterReducer to run again, so the counter increment again to 2


//CONDITION
const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  //in the reducer, we can look into the action, we can check if the action type matches a certain condition
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state; //default, then we return the unchanged initial state
};

const store = redux.createStore(counterReducer);

console.log(store.getState()); //{ counter: 0 }

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" }); //{ counter: 1 }
store.dispatch({ type: "decrement" }); //{ counter: 0 }

  
