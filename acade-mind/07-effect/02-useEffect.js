Where we can use useEffect()?
when you reload your application, your entire react script restarts and all variables from the last execution are lost.
since we lose all the data, when this restarts it would be nice to store it somewhere where it persists the reload.
even better we also want to make sure that whenever this app does start, we check if the data was persisted.
if it is we log the user in automatically so that the user does not need to re-enter the details.

//Storing the data
Common storage for browser: cookie, local storage
storage mechanism built into the browser totally independent of react.


//   localStorage.setItem("isLoggedIn", "1");
localStorage is a global object which is available in the browser
set item and give the item any string identifier of choice
second argument should also be a string which you store
for example, we can use "1" for loggedIn and "0" for not LoggedIn or anything your choice


//   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

//   if (storedUserLoggedInInformation === "1") {
//     setIsLoggedIn(true);
//   }

DevTool under application under storage under local storage, there is a key value pair
the user left the page and comes back or simply because we reload the page.
then we wanna check if in local storage we have that key value pair.
However, it can be an infinite loop
Therefore, we need to use useEffect() because it controls when it should run


//  import React, { useState, useEffect } from 'react';   //import useEffect
//  useEffect(() => {}, []);    //anonymous function, dependencies

//App.js
import React, { useState, useEffect } from "react"; //import useEffect

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //react State

  useEffect(() => {
    //this anonymous function will only run after every component re-evaluation
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      localStorage.removeItem("isLoggedIn");  //clear data from local storage
      setIsLoggedIn(true);
    }
  }, []); //here we have no dependencies so no changes, only run the function once the app restart

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1"); //set/store the data at the local storage
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
  
  
