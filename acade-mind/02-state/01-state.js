User Interaction & State
Making Apps Interactive and Reactive (change when something happens)

//ExpenseItem.js
// import React overall object but only used once when we call it
//to call something to run again, we need to add named-import
//useState is a react hook, only be called inside react function
//useState always get back two values, the value itself and the updating function

import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //array destructuring, current state value + function updating the value

  const clickHandler = () => { //state on a per component instance basis, we have separate states, so no interrupts among states
    setTitle("Updated!");
    console.log(title);
  }; 
  
 return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );    //execute the clickHandler function when the event occur so inside the onClick no ()
};

export default ExpenseItem;

//React component is just a function, only difference is it returns JSX
//We have all the DOM button element listening events we can use
//however, React starts with on like onClick
   
 
