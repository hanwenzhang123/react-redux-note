//https://reactjs.org/docs/create-a-new-react-app.html

//npx create-react-app my-app
//cd my-app
//npm start

//ReactDOM.render(what to show, where to show it);


import React from "react";    // let React = require("react");
import ReactDOM from "react-dom";

ReactDOM.render(      //display, take only a single HTML element
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")   //inject our html code
);



//vanilla javascript, same code

let h1 = document.createElement('h1');
h1.innerhtml = 'Hello World!';
document.getElementById('root').appendChild(h1);
  
