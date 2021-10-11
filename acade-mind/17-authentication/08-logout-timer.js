//src/store/auth-context.js
import React, { useState, useEffect, useCallback } from "react";

let logoutTimer; //global variable, used for clear timer if the user logout manually

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

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token"); //no need useEffect because localStorage is synchronous API
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken); //to check if we have a token in local storage and set it as initial state if we have

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {   //we use useCallback due to useEffect
    setToken(null);
    localStorage.removeItem("token"); //remove the key
    localStorage.removeItem("expirationTime"); //remove the expiration time

    if (logoutTimer) {
      //if logoutTimer set, when we log out, we also clear timeout
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token); //store the token
    localStorage.setItem("expirationTime", expirationTime); //expirationTime is the string we pass to the param

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime); //automatically log the user out after the time expires
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }     //we need to make sure logoutHandler not recreated unnecessarily to prevent infinite loops or unnecessary effect execution, so we use callback
  }, [tokenData, logoutHandler]); 

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
