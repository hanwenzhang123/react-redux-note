//What to add & Not to add as Dependencies
you should add "everything" you use in the effect function as a dependency - i.e. all state variables and functions you use in there.
but there are a few exceptions you should be aware of:
- You DO NOT need to add state updating functions (as we did in the last lecture with setFormIsValid)
  React guarantees that those functions never change, hence you do not need to add them as dependencies (you could though)
- You also DO NOT need to add "built-in" APIs or functions like fetch(), localStorage etc 
  (functions and features built-into the browser and hence available globally)
  These browser APIs / global functions are not related to the React component render cycle and they also never change
- You also DO NOT need to add variables or functions you might've defined OUTSIDE of your components 
  (e.g. if you create a new helper function in a separate file)
  Such functions or variables also are not created inside of a component function and hence changing them wo not affect your components 
  (components would not be re-evaluated if such variables or functions change and vice-versa)

//In short:
You must add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered. 

//Example:
import { useEffect, useState } from 'react';
 
let myTimer;
 
const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);
 
  const { timerDuration } = props; // using destructuring to pull out specific props values
 
  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};

//Explanation
timerIsActive is added as a dependency
  because it is component state that may change when the component changes (e.g. because the state was updated)

timerDuration is added as a dependency 
  because it is a prop value of that component - so it may change if a parent component changes that value 
    (causing this MyComponent component to re-render as well)

setTimerIsActive is NOT added as a dependency 
  because it is that exception: State updating functions could be added 
  but do not have to be added since React guarantees that the functions themselves never change

myTimer is NOT added as a dependency 
  because itis not a component-internal variable (i.e. not some state or a prop value) 
    - it's defined outside of the component and changing it (no matter where) would not cause the component to be re-evaluated

setTimeout is NOT added as a dependency because it is a built-in API (built-into the browser) 
   - it is independent from React and your components, it doesn't change

  
