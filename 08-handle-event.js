To make the Counter component interactive, we need to be able to trigger changes to the data in state.
We'll first create an event handler that updates state, using React's built-in setState() method. 
Then we'll give the buttons an onClick event that calls the event handler when clicked.


In React, state is never modified directly. 
The only way React allows you to update a component's state is by using its built-in setState() method.


When you create a class component that extends from React.Component, any custom methods you create are not bound to the component by default. 
You need to bind your custom methods, so that this refers to the component instance (the parent that owns the method). 

incrementScore() {   
    this.setState({   
      score: this.state.score + 1
    })  
  }
  
onClick={this.incrementScore.bind(this)} - bind it first then use this in the render() method
onClick={() => this.incrementScore()}


We don't need to bind it if we use arrow function because the function gets to bind in the component instance

incrementScore() => {   
    this.setState({   
      score: this.state.score + 1
    })  
  }

onClick={this.incrementScore}>
  

//app.js
class Counter extends React.Component {
  state = {
    score: 0
  };
//update the score state
incrementScore = () => {    //this.setState() is a built-in one let react know the state has changed and update based on the value you put in
    this.setState({   //update the value and tell the react this component needs to be rerendered to update the UI
      score: this.state.score + 1
    })    // this keyword usually refers to the parent class which is Counter here
  }

decrementScore = () => {
  this.setState({
    score: this.state.score -1
  });
}

render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>                           
    );
  }
}//use onClick because it is a react build-in event, 
// use onClick={this.incrementScore} istead of incrementScore(), we want to increase the score only when the button is clicked



//Questions - state and event review
What type of components allow you to initialize state?
  class components
  
The only required method in a class component is:
render

You can define any stateless functional component as a class

Complete the code to define a class component named Modal.
class Modal extends React.Component {
  ...
}
  
  
Complete the code to define a time state with an initial value of 0. Note that the state object is not inside a constructor().
class Timer extends React.Component {
  state = {
    time: 0
  };
  render() { ... }
}
  

In the function below, update an isRunning state to true.
startTimer = () => {
  this.setState({ isRunning: true });
}

Add the code that will call a function named startTimer when the button is clicked.
<button onClick={this.startTimer} >Start</button>
  
  
    
