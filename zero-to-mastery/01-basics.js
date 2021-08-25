//breaking into components
state is always something that changes because user interaction
state usually lives in one location or a specific state only one location, it trickles down as props
one way data flow, data pass down through props

if a state changes, it is going to happen through setState
it will anounce passing down to re-render
each component is a function that renders
if state changes, it is going to notify its component run the render function again


//VirtualDOM
A virtual DOM is a complete copy of the actual DOM but in JavaScript
React has the ability to build out virtual DOMs and then compare against the real DOM to see what changes
and then make the appropriate updates to exactly the right notes.

//Unidirectional Data Flow
React has no reason to render anything above this note because the data only
affects the children below this note.

//state -> views -> actions
from the state of data to building out the views 
from the views there might be interactions that make actions that will update the data.
this idea of unidirectional data flow is what makes react code so predictable and less prone to errors.


//Asynchronous setState
setState is an asynchronous call
Synchronous action is something that we can expect to happen almost immediately, knows the amount of time it will take.
So JavaScript will wait for that thing to finish before it continues. Running the rest of the code afterwards.

An asynchronous action or event is something that actually takes an indefinite amount of time that JavaScript does not know.
So what it does is it actually runs the rest of the code after and then when the asynchronous event finishes, it then runs that finished event.

constructor(props) {
  super(props)
  this.state = {
    meaningOfLife: 47
  }
  //this.props=props    //you can use it here because we pass it through super and constructor
}

// handleClick = () => {
//   this.setState({meaningOfLife: this.state.meaningOfLife + 1})
//   console.log(this.state.meaningOfLife)   //wrong, number always 1 behind, state has not being updated yet
// }

handleClick = () => {
  this.setState((prevState, prevProps) => {
    return {meaningOfLife: prevState.meaningOfLife + prevProps.increment}    //latest prevState, we have <App icnrement={1} /> in index.js
  },
  () => console.log(this.state.meaningOfLife))   //good, have a second parameter as a callback function
}


//lifecycle methods
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
lifecycle methods are essentially methods that get automatically called at different stages of when this component gets rendered.
lifecycle has three phases: mounting, updating, unmounting

//Mounting 
- The mounting phase is the phase when the component is being put on the dome for the first time.
- call the constructor first
- then call the render method to know what the component looks like
- React updates DOM and refs
componentDidMount - put our components on the page, it is mounting and rendering onto the DOM for the first time.
shouldComponentUpdate - determine whether or not the whole chain needs to happen
//constructor!
//render!
//componentDidMount!

//Updating 
no needs to re-mount, it is already mounted, we re-render, goes to the update phase, selectively change the HTML
- render - new props, setSate(), forceUpdate() - (triggers the updating phase happen)
- React updates DOM and refs - (update the DOM)
componentDidUpdate - called after the update done.
//shouldComponentUpdate!
//render!
//componentDidUpdate!

//Unmounting
- If there is anything regarding our component that might need some tidying up.
- And this usually has to do with if we want to remove anything that might be a memory leak
- which just means that there is some leftover code that the computer does not need to be aware of
- that the garbage collection can not access, which just uses up excess memory inside of our browser that it does not need to.
componentWillUnmount - no longer mounting, call componentWillUnmountt in case there is anything it needs to do before I remove it from the DOM.
//componentWillUnmount!    - will be the last thing during the lifecycle


//lifecycles.component.jsx 
import React from 'react';

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log('constructor!'); 
  }

  componentDidMount() {   //base state, first time render
    console.log('componentDidMount!');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate!'); 
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  shouldComponentUpdate(nextProps, nextState) {   //determine whether or not the whole chain needs to happen
    console.log('shouldComponentUpdate!', nextProps);
    return nextProps.text !== this.props.text;    //for performance, if texts are different, then we update; otherwise, no updates
  }

  render() {
    console.log('render!'); 
    return (
      <div className='lifecycles'>
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;


//Quiz
We want to create a new component in React that does not need any local state management or access to lifecycle methods in the component. 
What kind of component should we make?
Functional components are the best type of component to render if you do not need access to state or lifecycle methods! 
It has benefits of being easy to test, easier to read, and easier to write!
    
