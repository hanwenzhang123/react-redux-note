the component where you manage state or where you have props or context
and that state props or context changes
that component will be re-evaluated and re-executed

child components are also re-executed and re-evaluated just because the parent component changed
because they are part of the parent components, function body.

if the parent component function runs again,
of course the child component functions also run again.

Changes in props might lead to actual changes on the real DOM
but for the function to be re-evaluated, it is enough that the parent component was re-evaluated.

if a component is re-executed all its child components will also be re-executed and re-evaluated.


//App.js
import { COMPARISON_BINARY_OPERATORS } from "@babel/types";
import React, { useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState();

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      {/* this continuous down the component tree */}
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}


//DemoOutput.js 
import React from "react";

const DemoOutput = (props) => { //will be re-evaulated through the App, The only prop, which it has is hard coded.
  //the props will change for every click, the text will show based on the props
  return <p>{props.show ? "this is new!" : ""}</p>;
};

export default DemoOutput;
 
