HTML Attributes
https://www.w3schools.com/html/html_attributes.asp


//App.jsx
import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState('Hello');
  // [ h1 tag,  function (setState) ] = useState(initial value at the first item here is h1 tag)

  const [isMouseOver, setMouseOver] = useState(false);
  // isMouseOver initially set as false, then setMouseOver function changes it

  function handleClick() {
    setHeadingText('Submitted');
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor: isMouseOver ? "black" : "White"}} 
      onClick={handleClick}
      onMouseOver = {handleMouseOver}
      onMouseOut = {handleMouseOut}
      >
        Submit
        </button>
    </div>
  );
}

export default App;

  //because we are in javascript file, so all the attributes use camelCase like backgroundColor and onClick. 
//if isMouseOver is true, we set the backgroundColor to true, so it will be black, else if it is true, it will be white

//<button style={{ backgroundColor: isMouseOver ? "black" : "White"}}> 
- one set of {} - within JSX {variableName}, braces are needed to reference any JS variable or expression - e.g. style={divStyle}
- one set of {} - passing in as javascript object, creating an object

style={
  {
    backgroundImage: `url(${avatarURL})`,
    color: #ffffff,
    fontSize: 16px
  }
}

outer {} brackets are for returning a variable, and the inner {} brackets are for creating an object.
  
