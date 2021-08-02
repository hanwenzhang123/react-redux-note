User Interaction & State
Making Apps Interactive and Reactive (change when something happens)


//ExpenseItem.js
import React, { useState } from "react"; // import React overall object but only used once when we call it
//to call something to run again, we need to add named-import
//useState is a react hook, only be called inside react function

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //array destructuring, current state value + function updating the value

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  }; //execute this function when the event occur so inside the onClick no ()

  //React component is just a function, only difference is it returns JSX
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

//We have all the DOM button element listening events we can use
//however, React starts with on like onClick
   
