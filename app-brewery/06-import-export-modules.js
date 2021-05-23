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


