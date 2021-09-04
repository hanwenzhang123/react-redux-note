//components/Counter.js
import { useSelector, useDispatch } from "react-redux"; //import useDispatch

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch(); //give us back a dispatch function against our redux store
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" }); //the value of the type should be one of the identifier we used in our reducer
  }; //an action is an object with a type property

  const decrementHandler = () => {
    dispatch({ type: "decrement" }); //the value of the type should be one of the identifier we used in our reducer
  }; //an action is an object with a type property

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        {/* point the handler function to the onClick event listener */}
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
  
