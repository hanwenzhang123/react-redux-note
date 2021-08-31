//Dealing with Form Submission & Getting User Input Values
two ways dealing user input values
- useState()
- useRef()

How do you decide which one to use? 
It depends what you plan to do with the entered value.
- use useRef()
  If you are only interested in it once, when the form is submitted, a ref might be better
  because logging and updating the state value with every keystroke is a bit overkill then.
- use useState()
  If you of course need the value, the entered value after every keystroke, for example, for instant validation,
  then using the state is better because with a ref you can not really do that.
  Another reason for using a state instead of a ref could be, if you want to reset the entered input.

//components/SimpleInput.js
import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    //default behavior, http request send to the server automatically
    //here we do not have a server so we do not want this request to be sent
    event.preventDefault(); //just tell the http do nothing
    
    console.log(enteredName);
    
    const enteredValue = nameInputRef.current.value; //ref is always an object, always have a value property to point to the value current in t hat property
    console.log(enteredValue);
    
    setEnteredName("");    //reset the enetered iput
    nameInputRef.current.value = "";    //it works, but not ideal for resetting user input, we directly manipulate the dom here, do not do that
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref="nameInputRef"
          type="text"
          id="name"
          onChange={nameInputChangeHandler} 
          value = {enteredName}       //reset the enetered iput
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
  
