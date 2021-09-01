Understanding Redux
Managing App-Wide State with Redux
- what is redux? and why?
- redux basics & using redux with React
- redux toolkit (library, simplifies the redux)


What is Redux?
A state management system for cross-component or app-wide state

What is Cross-Component/App-Wide State?
- local state 
  state that belongs to a single component
  e.g. listening to user input in an input field; toggling a "show more" details field
  - should be managed component-internal with useState()/useReducer()
- cross-component state
  state that affects multiple components
  e.g. open/closed state of a modal overlay
  - requires "prop chains" / "prop drilling"
//OR: react context or redux - managing state that affects multiple components
- app wide state
  state that affects the entire app (most all components)
  e.g. user authentication status
  - requires "prop chains" / "prop drilling"
//OR: react context or redux - managing state that affects multiple components

React Context
component-wide, "behind-the-scenes" state storage
no direct connection, but passing down to other components to use

Redux vs React Context
React Context - potential disadvantages
- Complex setup/management
  in more complex apps, managing react context can lead to deeply nested JSX code and/or huge "context provider" components
- performance (context is for low frequency)
  react context is not optimized for high-frequency state changes

  
How Redux Works?
Core Redux Concepts
Reducer Function
  | Mutates (= changes / updates) Store Data
Central Data (state) Store - ONE store, only one store for all your state for your entire application 
  | Subscription
Components 
  | Dispatch
Action
  | Forwarded to
Reducer Function (the initial one)


Ultimately, we have data in that store, so that we can use it from inside our components.
Components subscribe to the store, and whenever the data changes, the store notifies components, and then components can get the data they need.

Components NEVER directly manipulate the store data!!!
So we have that subscription, but we do not have a data flow in the other direction.
Components do not directly manipulate that data in the store.

Reducer Function 
The reducer function is responsible for mutating, for changing the store state
Not useReducer() hook -> this "reducer function" are just a general concept
Reducer functions are functions, which takes some input, and then transform that input, they reduce it,
But they in general transform, inputs and spit out a new output a new result in a reduced form.

How do we now connect components and that reducer function?
Ultimately, it will be the components that should trigger a data change.
Trigger is a good word for that.
We have actions and components dispatch actions.
components trigger certain actions.

Action is a simple javascript object which describes the kind of operation the reducers should perform.
Redux then forwards actions to the reducer, reads that description of the desired operation, and then this operation is performed by the reducer.
  

Summary - How Redux Works?
So components dispatch actions, which describe what should be done, but do not do it directly,
then these actions are forwarded to the reducer, the reducer then does what the action wants the reducer to do.
And then the reducer, spits out a new state, which effectively will replace the existing state in that Central Data Store.
And when that happens, when that state in that data store is updated, subscribing components are notified, so that they can update their UI.
  
