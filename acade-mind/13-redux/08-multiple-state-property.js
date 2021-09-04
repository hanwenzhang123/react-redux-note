//Working with multiple state properties

//store/index.js - Redux Store
import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };  //add a new field

const counterReducer = (state = initialState, action) => {    //set the state as the initialState variable 
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter    //still need to set the showCounter, because we return overall state object which will be replaced
    };  //will return the original showCounter value since we are not changing anything 
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter    //still need to set the showCounter, because we return overall state object which will be replaced
    };  //will return the original showCounter value since we are not changing anything
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter    //still need to set the showCounter, because we return overall state object which will be replaced
    };  //will return the original showCounter value since we are not changing anything
  }

  if (action.type === 'toggle') { //toogle identifier, return a new object
    return {
      showCounter: !state.showCounter,    //true/false
      counter: state.counter    //keep the existing state counter since we do not want to change its value
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;


//components/Counter.js
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter); //useSelector to retrive different pieces of data from the state

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });   //dispatch the toggle action
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}  //only rendering the div if the show is trusy
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
 
