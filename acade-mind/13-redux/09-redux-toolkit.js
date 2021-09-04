//Redux Challenges & Introducing Redux Toolkit
potential problem
- action unique identifier misspelling/mismatch
  -> better to define identifier once and then reuse them
  -> we can export the action, and import and use it in the component to be sure
- return state properties (overwrite), reducer would be too big

Redux Toolkit to avoid these potential problem
//https://redux-toolkit.js.org/
npm install @reduxjs/toolkit

//Connecting Redux Toolkit State

//store/index.js
//import { createStore, combineReducers } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({    //createSlice() wants an object as argument, save to counterSlice
  name: 'counter',
  initialState,   //initialState: initialState,
  reducers: {         //create unique action indentifiers through createSlice
    increment(state) {    //automatically receive the latest state
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {   //we need a payload, an extra data here
      state.counter = state.counter + action.payload;   //with a default name payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const store = configureStore({    //pass a configuration object
  reducer: counterSlice.reducer   //pass reducer as the main reducer function for the global state
  //when we have a larger application, we can pass an object like reducer: {counter: counterSlice.reducer}
});
//instead of using createStore(counterSlice.reducer), but here we would only pass one reducer to create the store, we can use combineReducers 
//we use configureStore() for a bigger application with multiple state slices

export const counterActions = counterSlice.actions;   //export actions with unique action indentifiers

export default store;

   
//components/Counter.js
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index';    //import the actions
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());   //execute as a method that is set with unique indentifier
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
