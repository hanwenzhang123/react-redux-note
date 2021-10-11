//Persisting The User Authentication Status
Not losing data when we reload the page, just stay logged in even when we reload the page
we need to store our token outside of the state
we can store in local storage

//src/store/auth-context.js
import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token"); //no need useEffect because localStorage is synchronous API
  const [token, setToken] = useState(initialToken); //to check if we have a token in local storage and set it as initial state if we have

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token); //store the token
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token"); //remove the key
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
