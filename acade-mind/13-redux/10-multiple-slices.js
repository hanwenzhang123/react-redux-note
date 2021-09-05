//Working with multiple slices

//store/index.js
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true }; 

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,  //the initial state set above
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {    //add a new initial authentication state
  isAuthenticated: false,
};

const authSlice = createSlice({   //create another slice the same way just with different values
  name: 'authentication',   //set the name you want
  initialState: initialAuthState,   //set the initial state that is declared above
  reducers: {       //reducer can change the state
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({    //no matter how many slices you have, you only call the configureStore() once with one root reducer
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },  //combine multiple slices with its reducer
});   //will be automatically merged together as one reducer to the store

export const counterActions = counterSlice.actions;   //expose actions
export const authActions = authSlice.actions;   //expose actions

export default store;


//App.js
import { Fragment } from 'react';

import Counter from './components/Counter';
import Header from './components/Header';   //addinng
import Auth from './components/Auth';   //addinng


function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default App;
 
