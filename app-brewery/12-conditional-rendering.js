Ternary Operator
// ? : - IF ELSE
Condition ? Do if true : Do if false
isCloudy === true ? bringUmbrella(): bringSunscreen()
isLoggedIn ? <h1>Hello</h1> : <Login />
  
// && - once it is false, not going to value the right side   // (expression && expression) - JS (AND both true)
condition && expression -->left hand false, then skip right side, no point to look up the right side
true && expression
false && expression -->false 


//App.jsx
import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2019, 11, 1, 9).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/*AND Operator*/}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
