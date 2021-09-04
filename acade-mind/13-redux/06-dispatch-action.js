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
  

//Redux with class-based components
//same function as above
import { connect } from "react-redux"; //you can not use hooks in class-based component, here we import connect

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}
// const counter = useSelector((state) => state.counter); - equivalent to using hooks

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment' }),   //in the Counterr component, we have increment props that holds the function
    decrement: () => dispatch({ type: 'decrement' }),   //in the Counterr component, we have decrement props that holds the function
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); 
//connect()(Counter) - HOC - connect() returns a new function, to this return function, we pass Counter
//connect() would want 2 argument - mapStateToProps, mapDispatchToProps
 
