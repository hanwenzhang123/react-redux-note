The stopwatch will have two main states visible to the user. 
It will be either in a running state, or a stopped state. 
The buttons on the interface should change based on the running state. 


//Stopwatch.js
import React, { Component } from 'react';       //will be a stateful component

class Stopwatch extends Component {

    state = {       //stateful, can change
        isRunning: false
    };

    handleStopwatch =() => {        //onClick change
        this.setState({
            isRunning: !this.state.isRunning
        });
    }

    render () {
        return (
            <div className='stopwatch'>
                <h2>Stopwatch</h2>
                <span className='stopwatch-time'>0</span>
                <button onClick={this.handleStopwatch}>
                    {this.state.isRunning ? 'Stop' : 'Start'}
                </button>
                <button>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;
  


Conditional rendering with if...else:

render() {
  let button;
  if (this.state.isRunning) {
    button = <button>Stop</button>;
  } else {
    button = <button>Start</button>;
  }

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">...</span>
      { button }
      <button onClick={this.handleReset}>Reset</button>
    </div>
  );
}
