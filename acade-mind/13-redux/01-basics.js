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
  
Core Redux Concepts
Central Data (state) Store - one store for all your state for your entire application 
  
