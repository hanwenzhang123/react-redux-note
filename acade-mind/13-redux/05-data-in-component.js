//Using Redux Data in React Components
//components/Counter.js
import { useSelector } from "react-redux"; //import useSelector

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  //get access to the data management, pass in a function -> which piece of data we want to retrieve from state
  //when use useSelector, it will set up a subscription of that state to the component

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>  {/* output the counter value */}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
 
