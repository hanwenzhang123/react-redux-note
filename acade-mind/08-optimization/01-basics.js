//How does react work?
React - A JavaScript library for building user interfaces

//Components
React is all about components, we use components to build User Interfaces
It uses components to effectively compose user interfaces,
  and it uses components to effectively update user interfaces

//ReactDOM
ReactDOM - Interface to the web
React itself does not know the web, but ReactDOM
React manages the components, manages state and manages different component states
ReactDOM is responsible for working with the real DOM which is part of the browser
Components -> working with real DOM - what the user sees

//React
React only cares about components:
Props(data from parent)
State(internal data)
Context(component-wide data)


//Virtual DOM
it determines how the component tree which your app is building in the end
every component itself has a sub tree that JSX code returned by that component

React
React determines how the component tree currently looks like and what it should look like
=> information the handles to the ReactDOM
ReactDOM
ReactDOm receives the differences(i.e. required changes) and then manipulates the real DOM to match the real DOM


//React Evaluating Components != Re-rendering the DOM
Components 
- re-evaluated whenever props, state or context changes
- react executes component functions

Real DOM
- changes to the real DOM are only made for differences between evaluations
- working too mcuh with the realDOM can cause performance issue
- virtual DOM doing comparisons and only pass the changes between last snapshot and current one to the realDOM


//Vitural DOM Diffing
previous evalution result vs current evaluation result
then React would determine the different between the snapshsots and report the changes to the real DOM
changes are required and the rest should stay unchanged
  

//Components & States
components and their interaction with state management is a core aspect of React.
by using the useState Hook, and that is how this interaction between components and state is handled.

  
