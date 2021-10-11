//Persisting The User Authentication Status
Not losing data when we reload the page, just stay logged in even when we reload the page
we need to store our token outside of the state
we can store in local storage

//Adding Auto-Logout
apply expiration time to the token based on remaining time

//src/store/auth-context.js
import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  //add this function for adding auto-logout
  const currentTime = new Date().getTime(); //get the current time in milliseconds
  const adjExpirationTime = new Date(expirationTime).getTime; //gonna be sometime in the future
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token"); //no need useEffect because localStorage is synchronous API
  const [token, setToken] = useState(initialToken); //to check if we have a token in local storage and set it as initial state if we have

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token"); //remove the key
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token); //store the token

    const remainingTime = calculateRemainingTime(expirationTime);

    setTimeout(logoutHandler, remainingTime); //automatically log the user out after the time expires
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;


//src/components/Auth/AuthForm.js
const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //Optional: Add validation

    setIsLoading(true);

    let url;
    if (isLogin) {
      //send sign-in request
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA69DiEktDbp4YUGmySMz3-A_y5DnlhAJ0";
    } else {
      //send sign-up request
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA69DiEktDbp4YUGmySMz3-A_y5DnlhAJ0";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date.getTime() + +data.expiresIn * 1000
        ); //+ converts to number, *1000 from seconds to milliseconds
        authCtx.login(data.idToken, expirationTime.toISOString);    //save a login expiration time
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
