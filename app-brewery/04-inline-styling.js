//https://www.w3schools.com/cssref/

import React from "react";
import ReactDOM from "react-dom";

const customStyle = { //do not forget that we are in javascript, so follow js rule
  color: 'red',
  fontSize: '20px',
  border: '1px solid black'
}

//<h1 style={{ color: 'red' }}> -> one set {} for css style, one set {} for js object

customStyle.color = 'blue';   //change the color to blue

ReactDOM.render(
<h1 style={customStyle}>Hello World!</h1>, 
document.getElementById("root")
);


//Why do you need 2 curly braces for React inline styling?

//The exterior set of curly braces are the same as the one as before: they're letting JSX know you want a JS expression. 
//The interior set of curly braces represent a JavaScript object, meaning you're passing in a object to the style attribute.

<button style={{ backgroundColor: isMouseOver ? "black" : "White"}} >

  
  
  
//React Styling Practice

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;   //set the value empty first then manipulate

const customStyle = {   //set the value empty first then manipulate
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);

 
