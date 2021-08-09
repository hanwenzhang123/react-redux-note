often you need dependencies because you do not just want to run this effect function once when the app starts up
but after every component reevaluation if a certain dependency changed
the main job for useState is to handle side effect and often http requestsbut also listen to every keystroke and save entered data.

//useEffect useful
useEffect helps us make sure that we have one code, in one place, instead of as before in multiple places
which reruns, whenever one of the dependencies changed.
it is not just for when a component was created for the first time
but it is equally common to use it to rerun logic when certain data, typically some state or some props changed.

//Why useEffect?
useEffect in general, is a super important hook that helps you deal with code that should be executed in response to something.
And something could be the component being loaded.
It could be the email address being updated.
It could be anything, whenever you have an action that should be executed in response to some other action,
that is a side effect and that is where a useEffect is able to help you.


//Login.js
import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      //we want to re-evaluate for every keystroke changes
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);
  //either dependencies changes, trigger another action in response to that - re-run useEffect function.
  //you add as dependencies, what you're using in your side effect function.

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
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
  
