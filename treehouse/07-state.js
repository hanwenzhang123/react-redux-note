//State
"state" is the data you want to track in your app.
State is what allows you to create components that are dynamic and interactive, and it is the only data that changes over time.
State is the one keep your app in sync with the data.
State only available in class components.

There are two ways of creating components in react, a function and a class.
Class components offer a more powerful way to build components because they are the only type of components that let you use state.


// create a component as a class
// extends - create subclass or child of another class  
// class needs to use this. when access to props

class Counter extends React.Component {   //extends from react.component
  render() {    //you need to define render() in the class component
    return (
      <div className="counter">     
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.props.score }</span>  
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}


// Create a Stateful Component
// create a stateful component by first defining an initial state inside the Counter class.
// score is our state in this app because it changes

class Counter extends React.Component {
// better way using structor super state
// state = {
// score: 0
// }
  constructor() {
    super()       //need super() before we use this, super is to call constructor of the component class that we are extending 
    this.state = {    //have to use this.state in order to have it work, and set it to an object
      score: 0      //initial state as 0
  }
    
  render() {    //change to this.state and it is for both state and props
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ this.state.score }</span>   /* this.state */
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
}

