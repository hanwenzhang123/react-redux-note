//https://reactjs.org/docs/hooks-reference.html#usestate
Rule: must use hooks inside of a function component

const [red, green, blue] = [9, 132, 227];
console.log(blue) //277

const state = useState(123);
console.log(state)  //[123{initial value}, function];



//useState - The setState function is used to update the state.

const [state, setState] = useState(initialState);

setState(newState);


function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}


//APP.jsx - counting
import React, { useState } from "react";    //useState from the React module

function App() {
  const [count, setCount] = useState(0);

  function increase() {   //count is a current value in ()
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    //output
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;



//useState Hook Practice - Update local time clock

import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);    //time updates every second

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);    //starting point - now

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
   
