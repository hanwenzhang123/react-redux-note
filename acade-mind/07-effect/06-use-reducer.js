useReducer() for State Management
sometimes, you have more complex state - for example if it got multiple states, multiple ways of changing it or dependencies to other states
useState() then often becomes hard or error-prone to use - it is easy to write bad, inefficient or buggy code in such scenarios
useReducer() can be used as a replace for useState() if you need more powerful state management

Understanding useReducer()
const [state, dispatchFn) = useReducer(reducerFn, initialState, initFn);
state - used in the conponent re-render/re-evaluation cycle
dispatchFn - function that can be used to dispatch a new action (trigger an update of the state)
reducerFn - (prevState, action) => newState 
          - a function that is triggered automatically once an action is dispatched via dispatchedFn()
          - it receives the latest state snapshot and should return the new updated state
initialState - the initial state
initFn - A function to set the initial state programtically
