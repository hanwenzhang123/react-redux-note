//Listening
We can listen React.createContext by using Auth-Context consumer or by using a React useContext Hook

//When to consider useContext?
In most cases, you will use props to pass data to components
because props are your mechanism to configure components and to make them reusable.
Only if you have something which you would forward through a lot of components
and you are forwarding it to a component that does something very specific.
Like for example, the Navigation where this button will always log the user out.
In such cases, you wanna consider context.

//App.js
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler, //we can also pass down onLogout where we point at the logoutHandler function.
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

//MainHeader.js
const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation />
    </header>
  );
};

//Making context dynamic
//Navigation.js
import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctx = useContext(AuthContext); //what you get back is the context value

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
  
