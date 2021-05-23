//Javascript ES6 - Import, Export and Modules

//index.js
import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math.js"; //local file
              //name matters in {}, but default one you name it
ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

//import * from "./math.js";  - not encouraged to use the wildcard
//ReactDOM.render(
//  <ul>
//    <li>{pi.default}</li>
//    <li>{pi.doublePi()}</li>    //doublePi is function so needs ()
//    <li>{pi.triplePi()}</li>    //triplePi is function so needs ()
//  </ul>,
//  document.getElementById("root")
//);


//math.js
const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi;    //we have to export to use elsewhere
export { doublePi, triplePi };    //non-default export



//Javascript ES6 Import, Export and Modules Practice

//index.js
import React from "react";
import ReactDOM from "react-dom";
import { add, multiply, subtract, divide } from "./calculator.js";
//order does not matter but names matter.

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import * as Cals from "./calculator.js";
// //alernative wildcard way

// ReactDOM.render(
//   <ul>
//     <li>{Cals.add(1, 2)}</li>
//     <li>{Cals.multiply(2, 3)}</li>
//     <li>{Cals.subtract(7, 2)}</li>
//     <li>{Cals.divide(5, 2)}</li>
//   </ul>,
//   document.getElementById("root")
// );


//calculator.js
function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

//export first before import elsewhere
export { add, multiply, subtract, divide };
  
 
