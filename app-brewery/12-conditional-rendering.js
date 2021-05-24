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
     
       
//Input.jsx
import React from "react";

function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} />;
}

export default Input;
    
       
//Login.jsx
import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
      

       
//example2
//App.jsx
import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;

       
//Form.jsx
import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
