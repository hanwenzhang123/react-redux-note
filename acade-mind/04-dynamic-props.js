//Dynamic Placeholder - {}
//you do not use hard code data in JSX
//using special {} for basic JavaScript expression

import "./ExpenseItem.css";

function ExpressItem() {
  const expenseDate = new Date(2021, 2, 28); // built-in Date constructor assigned to a constant variable
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpressItem;
 

//Passing data via "Props" 
//Props are properties like an attributes in HTML, we can set properties of our own custom components.

//In JavaScript, we make the function reusable by passing the parameters
//In React, we can make our components reusable by using parameters and a concept called "props" in react

//The dynamic variables lives in the App component
//Components can not just use data stored in other components
//we can pass data to a custom component by adding an attribute
//inside that component, we can then get access to all these attributes that have been set on our custom component

import ExpressItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpressItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpressItem>
      <ExpressItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpressItem>
      <ExpressItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpressItem>
      <ExpressItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpressItem>
    </div>
  );
}

export default App;


//In react, we only use one parameter which holds all the received attributes as properties
//Typically named props which is the object that holds all the values we get for the attributes on our custom element
//We get key-value pairs in this props object here which passes by React automatically
//the key you access on your props object has to be the same name you pick for the attribute

//ExpenseItem.js
import "./ExpenseItem.css";

function ExpressItem() {

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpressItem;

//Props is an important concept because it allows you to make your components reusable,
//and it allows you to pass data from another component to this component 
    
   
