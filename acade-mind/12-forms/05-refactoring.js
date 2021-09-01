//Refactoring and Deriving States
//same code as the previous one, just refactoring for better reading

//Managing The Overall Form Validaty
//adding a formIsValid to check if we should display the submit button or not

//components/SimpleInput.js
import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');   //input value
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);    //touch state

  const enteredNameIsValid = enteredName.trim() !== '';   //check if it is valid from, the constance will store the result from the check
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;   //check if the input area has touched
  
  let formIsValid = false;

  if (enteredNameIsValid) {   //check if the enteredNameIsValid
    formIsValid = true;     //after the check, change the constant variable formIsValid to true to allow the submit button to show
  }
 
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {    //if it is not valid, then return back
      return;
    }

    console.log(enteredName);

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>     //disable and not allow to click the submit button to show if the form is invalid
      </div>
    </form>
  );
};

export default SimpleInput;
