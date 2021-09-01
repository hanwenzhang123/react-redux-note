//Applying our Hook & Knowledge to a New Form
https://academind.com/tutorials/reactjs-a-custom-useform-hook/

//components/BasicForm.js
import useInput from '../hooks/use-input';    //import the custom hook

const isNotEmpty = (value) => value.trim() !== '';    //store the pass in function to a constance
const isEmail = (value) => value.includes('@');     //store the pass in function to a constance

const BasicForm = (props) => {
  const {     //check the first name value input
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);   //use the constance function as the argument 
  const {   //check the last name value input
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty); //use the constance function as the argument 
  const {     //check the email value input
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);  //use the constance function as the argument 

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {      //entire form validation, then we can enable the submit button
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {   //if the form is not valid, then we return, not submit
      return;
    }

    console.log('Submitted!');
    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstName();   //reset to empty through the custom hook
    resetLastName();    //reset to empty through the custom hook
    resetEmail();       //reset to empty through the custom hook
  };

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';   //CSS classes
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';   //CSS classes
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';     //CSS classes

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Please enter a first name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter a valid email address.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
