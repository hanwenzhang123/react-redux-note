component lifecycle

every component instance follows a cycle: 
- it is mounted onto the DOM, 
- it is updated with changes in data, 
- and it is unmounted from the DOM.


React Lifecycle Methods

componentDidMount() 
React's built-in lifecycle methods get called at each point in a component's life-cycle. 
The methods act as hooks you can use to run code at key times in the life-cycle. 
This gives you the ability to control what happens when a component mounts, updates and unmounts.
We use componentDidMount() lifecycle method in our app to make the stopwatch tick.
this.intervalID = setInterval(() => this.tick(), 100);

componentWillUnmount()
Prevent Memory Leaks
Since components do not always stay in the DOM, React also provides the componentWillUnmount lifecycle method to help you handle unmounting of components. 
This can help prevent memory leaks in your application when no longer needs to run, no longer run endlessly and uselessly. 
We use componentWillUnmount() lifecycle method to stop the stopwatch keep running in the memory after stopping the timewatch
clearInterval(this.intervalID);


//Stopwatch.js
import React, { Component } from 'react';       //will be a stateful component

class Stopwatch extends Component {

    state = {       //stateful, can change
        isRunning: false, 
        elapsedTime: 0,
        previousTime: 0
    };

    componentDidMount(){        //React Lifecycle Methods - called by react as soon as it is mounted by the DOM
        this.intervalID = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {    //Prevent Memory Leaks
        clearInterval(this.intervalID);
    }

    tick = () => {          //run seconds after seconds
        if(this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
            }));
        }
    }

    handleStopwatch = () => {           //onClick change
        this.setState( prevState => ({          //prevState always makes sure the correct time
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning) {
            this.setState({ previousTime: Date.now() });
        }
        };
        
    handleReset = () => {       //we pass this function to the button click below
        this.setState({ elapsedTime: 0 });
    };

    render() {
        const seconds = Math.floor(this.state.elapsedTime / 1000);     //to the second that we use daily

        return (
            <div className='stopwatch'>
                <h2>Stopwatch</h2>
                <span className='stopwatch-time'>
                { seconds }
                </span>
                <button onClick={this.handleStopwatch}>
                    {this.state.isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    };
};

export default Stopwatch;
