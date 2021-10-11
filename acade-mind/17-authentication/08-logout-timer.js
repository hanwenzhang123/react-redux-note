//src/store/auth-context.js
import React, { useState, useEffect, useCallback } from "react";

let logoutTimer; //global variable, used for clear timer if the user logout manually

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

//add this function for adding auto-logout
const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime(); //get the current time in milliseconds
  const adjExpirationTime = new Date(expirationTime).getTime; //gonna be sometime in the future
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token"); //no need useEffect because localStorage is synchronous API
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);   //the function we declared above to calculate remainingDuration

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {  //when we call retrieveStoredToke, we get this object
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();    //we get the retrieved stored token data object
  let initialToken;
  if (tokenData) {    //check to make sure we did not return null above
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken); //to check if we have a token in local storage and set it as initial state if we have

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {   //we use useCallback due to useEffect to make sure not re-created unnecessarily to prevent infinite loops or unnecessary effect execution
    setToken(null); //setToken null due to log out status
    localStorage.removeItem("token"); //remove the key
    localStorage.removeItem("expirationTime"); //remove the expiration time

    if (logoutTimer) {
      //if logoutTimer set, when we log out, we also clear timeout
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);  //setToken to current token due to log in status
    localStorage.setItem("token", token); //store the token
    localStorage.setItem("expirationTime", expirationTime); //expirationTime is the string we pass to the param

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime); //automatically log the user out after the time expires
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);    //tokenData.duration is the milliseconds
    }     //we need to make sure logoutHandler not re-created unnecessarily to prevent infinite loops or unnecessary effect execution, so we use callback above
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
