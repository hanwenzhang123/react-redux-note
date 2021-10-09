//Adding User Setup
//Firebase Auth REST API
https://firebase.google.com/docs/reference/rest/auth

//sign-up:
https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

//sign-in:
https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

//src/components/Auth/AuthForm.js
import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef(); //create refs and point to the inputs accordingly
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true); //login mode
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //prevent browser default that sends the form automatically

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //Optional: Add validation

    setIsLoading(true);

    if (isLogin) {
    } else {
      //send signup request
      fetch(
        //fetch returns promise so you can handle error and chain .then()
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA69DiEktDbp4YUGmySMz3-A_y5DnlhAJ0",
        {
          method: "POST",
          body: JSON.stringify({
            //the data we want to send
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        } //2nd argument in fetch function, an object describe and configure the request we send (overwrites)
      ).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          //...
        } else {
          return res.json().then((data) => {
            //show an error modal
            //show feedback to the user
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
          });
        }
      });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
