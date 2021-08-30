//Building Custom React Hooks
Building Custom Hooks -reusing hooks
Hooks like useState, useEffect, starting with use
- What & Why?
- Building a custom hook
- custom hook rules and practices

//Rules of Hooks
1. only call react hooks in React Function
- react component functions
- custom hook
2. only call react hooks at the top level
- do not call them in nested functions
- do not call them in any block statements
extra unofficial rule for useEffect(): always add everything you refer to inside of useEffect() as a dependency

//What are custom hooks?
Outsource stateful logic into re-usable functions
You can build custom hooks, these custom hook functions to outsource stateful logic into reusable functions.
custom hooks can use other React hooks, including other custom hooks.

Unlike "regular function", custom hooks can use other React hooks and React state

//Creating a Custom React Hook Function
create a new folder side-by-side to the components called hooks
create a file named like use-counter.js
always start with use in the function name and you can name whatever you want after it
const useCounter = () = {};
  
