UI = f(State)
User interface changes depending on State changes
UI is like ice while State is the temperature, once 60 degree, ice melt


//Vanilla JavaScript - DOM

import React from "react";

function Strike() {
  document.getElementById('root').style.textDecoration='line-through';
}

function unStrike() {
  document.getElementById('root').style.textDecoration=null;
}

function App() {
  return (
    <div>
      <p>Buy Milk</p>
     <button onClick={Strike}>Change to strike through</button>
     <button onClick={unStrike}>Change back</button>
    </div>
  );
}



//however, the following code is not working!!!
import React from "react";

var isDone = false;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
