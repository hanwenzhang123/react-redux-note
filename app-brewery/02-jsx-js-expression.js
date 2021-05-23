//Javascript Expressions in JSX & ES6 Template Literals
import React from "react";
import ReactDOM from "react-dom";

const name = 'Hanwen';
const num = 8;
const fname = 'Hanwen';
const lname = 'Zhang';
//pull the data from the variable to the {} iterator, any js expression but statement
ReactDOM.render(
<div>
  <h1>Hello {name}!</h1>
  <h2>Hello {fname + ' ' + lname}!</h2>
  <p>Your lucky number is {Math.floor(Math.random())}.</p>
</div>, 
document.getElementById("root")
);



 //Javascript Expressions in JSX Practice
import React from "react";
import ReactDOM from "react-dom";

const name = 'Hanwen';
const year = new Date().getFullYear();

ReactDOM.render(
<div>
  <p>Created by {name}!</p>
  <p>Copyright {year}.</p>
</div>, 
document.getElementById("root")
);

 
