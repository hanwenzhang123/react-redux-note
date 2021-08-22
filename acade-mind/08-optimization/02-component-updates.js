React will only rerun this function and re-evaluate what is on the screen
if state, props or context changes.

state changes, prop changes and context changes,
would result in this component function being executed again.


//Code
import { COMPARISON_BINARY_OPERATORS } from "@babel/types";
import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState();

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  
  //Only the difference between those virtual snapshots, was considered for the updates made through the real DOM.
  //Here is the <p> below when we toggle to show the paragraph

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
