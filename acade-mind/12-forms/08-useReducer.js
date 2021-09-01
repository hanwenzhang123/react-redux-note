//Bonus: Using useReducer()
useState() vs useReducer()
generally, you will know when you need useReducer() ( when using useState() becomes cumbersome or you are getting a lot of bugs/unintended behaviors)
useState()
- the main state manegement tool
- great for independent pieces of state/data
- great if state updates are easy and limited to a few kinds of updates
useReducer()
- great if you need more power
- should be considered if you have related pieces of state/data
- can be helpful if you have more complex state updates


//hooks/use-input.js
import { useReducer } from 'react';   //import useReducer

const initialInputState = {   //the initial state
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {    //the previous state and the action to the state, both automatically passed by react
  if (action.type === 'INPUT') {      //check the input type return from the useReducer()
    return { value: action.value, isTouched: state.isTouched };   //using the previous state with its isTouched value
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };   //set isTouched back to false with an empty value
  }
  return inputStateReducer;   //return a new state snapshot inputStateReducer which has been through the logics
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(  //useReducer takes 2 argument, state by the reducer, a dispatch function allows you to dispatch against that reducer
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {    //return from the useReducer
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
 
