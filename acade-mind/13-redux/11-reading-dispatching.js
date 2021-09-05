//Reading & Dispatching From New Slice

//components/Header.js
import { useSelector, useDispatch } from 'react-redux';   //import

import classes from './Header.module.css';
import { authActions } from '../store/index'; //import

const Header = () => {
  const dispatch = useDispatch(); //get access to the dispatch function
  const isAuth = useSelector((state) => state.auth.isAuthenticated);    //get the value if isAuthenticated from the store

  const logoutHandler = () => {  
    dispatch(authActions.logout());   //call dispatch, we pass authActions.logout because that then creates that logout action object
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>   //logout button
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;


//components/Auth.js
import { useDispatch } from 'react-redux';    //import it for dispatching actions

import classes from './Auth.module.css';
import { authActions } from '../store/index';

const Auth = () => {
  const dispatch = useDispatch();   //activate the useDispatch

  const loginHandler = (event) => {   //add this logics
    event.preventDefault();

    dispatch(authActions.login());    //dispatch the login action
  };    //execute the login since this is a action creator returning the actual action object

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>    //add the onSubmit
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;


//components/UserProfile.js
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
    </main>
  );
};

export default UserProfile;


//App.js
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';   //addinng


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);  //useSelector to read the value, always pass state as argument

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}   //if not authenticated
      {isAuth && <UserProfile />}   //if authenticated
      <Counter />
    </Fragment>
  );
}

export default App;

  
//store/index.js
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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

const initialAuthState = {    //state.auth.isAuthenticated
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({    //when we access data value, we use the names from here like state.auth.isAuthenticated
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
  
