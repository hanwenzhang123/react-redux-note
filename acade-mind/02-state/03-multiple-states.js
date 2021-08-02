//you can have multiple states per component
//all of these states inside of one at the same component will then all to be totally separated from each other

import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  //   //it will always be a string so initialize with ""
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  const [useInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); //you have to update all three ones together if you use the way above

  const titleChangeHandler = (event) => {
    //always update the value
    //setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...useInput, //take an object, pull out all key-value pairs and add to the new object
    //   enteredTitle: event.target.value, // override this key-value pair only
    // }); //we ensure the other values are not thrown away but are always a part of that new state.

    //whenever you update state and you depend on the previous state: a safer way 
    //pass in prevState as argument which receive the latest state snapshot for state you called
    //then change the value of the enteredTitle 
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });

  };

  const amountChangeHandler = (event) => {
    //setEnteredAmount(event.target.value);
    setUserInput({
      ...useInput, //copy in values in old state
      enteredAmount: event.target.value, // override this field only
    });
  };

  const dateChangeHandler = (event) => {
    //setEnteredDate(event.target.value);
    setUserInput({
      ...useInput, //copy in values in old state
      enteredDate: event.target.value, // override this field only
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
  
