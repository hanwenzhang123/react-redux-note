//component trees & component dependecies
when there is no direct connections, how components communicate through each other
Original - use props  and functions passed via props
React Context - trigger an action in Component-wide "behind the scenes" state storage
                directly pass to the component that is interested without building such a long prop chain. 

//create a new folder named store and a new file named auth-context.js
                
//auth-context.js
import React from "react";

const AuthContext = React.createContext({  //get back an object that will contain components
    isLoggedIn: false,
}); //create a context object

export default AuthContext;

// if we know that we need this Context
// everywhere in the entire application.
// So in all components possibly,
// we wanna wrap everything in app component with it.


//App.js
  return (
    <AuthContext.Provider>
      {/* AuthContext itself is not a component, but with a dot, we can access to its property */}
      {/* on this AuthContext object that contains a component and that's the  provider. */}
      {/* Auth-Context provider is a component we can use in our JSX code, and we
        can wrap it around other components and those other components and all
        their descendant components. So all their children and their children's
        children and so on, all those components will now have access to that
        Context. */}
      {/* all their children will have access to Auth-Context. */}
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}


//Listening
We can listen by using Auth-Context consumer or by using a React Hook

//Example - AuthContext.Consumer
<AuthContext.Consumer> takes a function
{(ctx) => {}}   //as argument, you will get your context data, in our case, the object data isLoggedIn: false

//App.js
  return (
    <AuthContext.Provider
      value={{    //has to be value here because it is not our component
        isLoggedIn: isLoggedIn,
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
         
//MainHeader.js
const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

//Navigation.js
import React from "react";
import AuthContext from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
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
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>;
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
