//components
react is component based, we are building components that each only care about one thing

//breaking into components
state is always something that changes because user interaction
state usually lives in one location or a specific state only one location, it trickles down as props
one way data flow, data pass down through props

if a state changes, it is going to happen through setState
it will anounce passing down to re-render
each component is a function that renders
if state changes, it is going to notify its component run the render function again


//setState is an asynchronous call
Synchronous action is something that we can expect to happen almost immediately, knows the amount of time it will take.
So JavaScript will wait for that thing to finish before it continues. Running the rest of the code afterwards.

An asynchronous action or event is something that actually takes an indefinite amount of time that JavaScript does not know.
So what it does is it actually runs the rest of the code after and then when the asynchronous event finishes, it then runs that finished event.


//lifecycle methods
essentially methods that get automatically called at different stages of when this component gets rendered.
componentDidMount - puts our components on the page, it renders onto the DOM for the first time.




 
