1. How should you NOT listen to events when working with React?
Adding an event listener (e.g. via "addEventListener") Manully
because this is how you should NOT set up event listening. 
This would be imperative code, you are not using React is features with this code 
and you would trigger some function that lives outside of React components 
and hence would not be able to interact with React component state.

2.Which value should you pass to event listener props like onClick?
A pointer at the function that should execute when the event occurs. 
you want to pass a "pointer" at the to-be-executed function as a value to onClick etc. 
Then, this function gets executed "on your behalf" by React when the event occurs.

3. How can you communicate from one of your components to a parent (i.e. higher level) component?
You can accept a function via props and call it form the inside the lower-level (child) component to then trigger some action in the parent component
(which passed the function)
In JavaScript, functions are just objects (i.e. regular values) and hence you can pass them as values via props to a component. 
If that component then calls that function, it executes 
- and that is how you can trigger a function defined in a parent component from inside a child component.

4. How can you change what a component displays on the screen?
create some "state" value (via useState) which you can then change and output in JSX.

5. Why do you need this extra "state" concept instead of regular JS variables which you change and use?
Because standard JS variables do not cause React components to be re-evaluated
React does not care whether you changed some variable values. It will not re-evaluate the component function. 
It only does that for changes to registered state values (created via useState)

6. Which statement about useState is correct?
Calling useState again will simply create a new state.
It receives an (optional) initial state value as an argument
It returns an array with exactly two elements

7. How can you update component state (created via useState)?
You can call the state updating function which useState also returned
useState returns an array with exactly two elements - the second element is always a function which you can call to set a new value for your state. 
Calling that function will then also trigger React to re-evaluate the component.

8. How much state may you manage in one single component?
You can have as many state slices as you need/want 

9. What is wrong about this code snippet?
const [counter, setCounter] = useState(1);
...
setCounter(counter + 1);
If you update state that depends on the previous state, you should use the "function form" of the state updating function instead. 
 
A stateful component class stores information as state.
A stateless component class displays that state.
A different stateless component class displays a way to change that state.
  
