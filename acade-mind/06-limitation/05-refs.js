ref - reference
getting access to elements
they allow us to get access to other DOM elements and work with them.
with refs, we can set up a connection between a HTML element which is being rendered in the end and our other JavaScript code.

//Original Purpose - see code below:
//We simply have our state and with every keystroke, we update our state.
// With every keystroke, we update the value we get
// by the user and we store it in our state
// and we feed that state back into the input
// and we then use that state later on
// to reset the inputs but also to send it
// to the place where we need the data.

useRef() returns a value which allows us to work with that element to which we are going to connect it.

connecting ref by going to that element to which we wanna connect the ref and adding a special prop there, the ref prop.


//AddUser.js
import React, { useState, useRef } from 'react';    //import useRef

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  //This ref value, which is being generated here always is an object,
  //which always has a current prop, and the current prop holds the actual value that ref is connected with.
  const nameInputRef = useRef();    //useRef only used inside of components
  const ageInputRef = useRef();   //it returns a value which allows us to work with that ref later

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;   //We can just read it when the submit button is pressed.
    const enteredUserAge = ageInputRef.current.value;   //We can just read it when the submit button is pressed.
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = '';    //reset input by resettinng the state
    ageInputRef.current.value = '';     //uncontrolled component
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />  //add ref, fetch input data, inputs uncontrolled
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />    //connect HTML to reference, internal state
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;


//Uncontrolled Component
This approach of using refs to interact with dom elements specifically with input elements also has a special name.
We are talking about uncontrolled components if we access values with a ref.

The input above are internal state, so to value which is reflected in them is not controlled by React.
we are not controlling these state off the input element with react.

//Controlled Component
The approach we had before, where we manage our state and we updated that state on every keystroke
and we feed that state back into the input with the value prop
those input fields are controlled components because their internal state is controlled by react.
  
import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

  
  
