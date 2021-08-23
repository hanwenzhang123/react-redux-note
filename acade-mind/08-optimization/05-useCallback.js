//Preventing Function Re-creation with useCallback()
useCallback is a hook that allows us to basically store a function across component executions.
So it allows us to tell React that we wanna save a function 
and that this function should not be recreated with every execution.

//useCallback() and its dependencies
in JavaScript, functions are closures,
which means they close over the values that are available in their environment.


//Code
import React, { useState, useCallback } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState();
  const [allowToggle, setAllowToggle] = useState();

  //we know it never changes, then useCallback to store it, so here setShowParagraph function will never change
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]); //dependencies are like useEffect
  //always use the latest allowToggle

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
 
