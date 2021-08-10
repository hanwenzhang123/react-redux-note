useReducer() for State Management
sometimes, you have more complex state - for example if it got multiple states, multiple ways of changing it or dependencies to other states
useState() then often becomes hard or error-prone to use - it is easy to write bad, inefficient or buggy code in such scenarios
useReducer() can be used as a replace for useState() if you need more powerful state management

Understanding useReducer()
const [state, dispatchFn) = useReducer(reducerFn, initialState, initFn);
state - used in the conponent re-render/re-evaluation cycle
dispatchFn - function that can be used to dispatch a new action (trigger an update of the state)
reducerFn - (prevState, action) => newState 
          - a function that is triggered automatically once an action is dispatched via dispatchedFn()
          - it receives the latest state snapshot and should return the new updated state
initialState - the initial state
initFn - A function to set the initial state programtically

useState() vs useReducer()
generally, you know when you need useReducer() - when using useState becomes crumbersome or you are getting a lot of bugs/unintended behaviours
useState()
- the main state management "tool"
- great for independent pieces of state/data
- great if state updates are easy and limited to a few kinds of updates
useReducer()
- great if you need more power
- should be considered if you have related pieces of state/data
- can be helpful if you have more complex state updates

//Login.js
import React, { useState, useEffect, useReducer } from "react"; //import useReducer

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

//useReducer as a first argument takes a function as the first reducerFn
//reducerFn - (prevState, action) => newState
//we separate anonymous function outside because we won't need any data that's generated inside of the component function.
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    //whenever receives a user input action, check if match below
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
    //state.value is for the last value entered
  }
  return { value: "", isValid: false };
  //return a new state which will be an empty object if above condition not met
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    //name can be the same
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  //combine the value and the validity into one state managed by useReducer
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //dispatchEmail is so-called action, it is a function, dispatch function
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    //the initial state
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value }); //action, holds normally objects

    setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
 
