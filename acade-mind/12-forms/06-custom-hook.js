//Adding a Custom Input Hook
//Here we manage the value, the touch state, the validity in our custom hook
//this custom hook will be desigend to be flexible
//hooks (and custom hooks in general) should be generic - it is not limited to one specific input!

//hooks/use-input.js
import { useState } from 'react';

const useInput = (validateValue) => {   //expect a function as an argument to this custom hook, this parameter receives a function as a value
  const [enteredValue, setEnteredValue] = useState('');   //more generic, can be name input or email input, any input, more dynamic
  const [isTouched, setIsTouched] = useState(false);

  //better name for validition check
  const valueIsValid = validateValue(enteredValue);   //use the argument function validateValue and passing in enteredValue we currently have
  const hasError = !valueIsValid && isTouched;      //changed name to be more dynamic, not valid while being touched, store it to hasError

  const valueChangeHandler = (event) => {   //value change handler
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {   //blur handler
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {    //this custom hook will return the following
    value: enteredValue,      //value will be enteredValue
    isValid: valueIsValid,    //it is the constance variable valueIsValid returned value from the pass-in function validateValue(enteredValue); 
    hasError,
    valueChangeHandler,   //expose the function
    inputBlurHandler,     //expose the function
    reset
  };
};

export default useInput;


//components/SimpleInput.js
// import { useState } from 'react';    //we do not use useState here in this file any more, we put the logics in our custom hooks now

import useInput from '../hooks/use-input';    //import the custom hook

const SimpleInput = (props) => {
  const {                       //destructuring and store in a new name alias
    value: enteredName,         //name from the imported custom hook : alias will be used in this file
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');   //value => value.trim() !== '' is the validateValue function we passed in to the custom hook for name input
  
  const {     //here we use the custom hook to check the email input
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));   //(value) => value.includes('@') is the validation check function we pass to the custom hook for email input
  
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {    //overall form validity
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();     //reset the name input
    resetEmailInput();    //reset the email input
  };

  const nameInputClasses = nameInputHasError    //determine the CSS classes
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError    //determine the CSS classes
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

