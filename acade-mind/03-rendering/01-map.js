Rendering lists & Conditional Content
working with really dynamic content
- how we can output arrays of data on our page 
and how we can show different content based on different conditions

//Rendering Lists of Data
map() creates a new array based on another array and transform every element in that original array 
map() takes a function as argument, and that function executes for every element in the array
and it gets that element for which it is currently executing as a parameter.


//Expenses.js
import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFiler={filterChangeHandler}
        />
        {props.items.map((expense) => ( {/* you can use  (expense, index) but may face bugs */}
          <ExpenseItem
            key={expense.id}  {/* add a key to help react identify the an individual item, need to set an unique value for each item */}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {/*map every expense in expenses array in the App.js, map every expense into an expense item JSX element. 
        no more hard-coded array, only dynamically*/}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
  

//App.js
import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [    //initial expenses
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); //DUMMY_EXPENSES as the initial expenses data
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      //pass a function to the state updating function which automatically receives the previous expenses state
      return [expense, ...prevExpenses]; //return new array with the new expense
    }); //passing the new expense as the parameter to the argument
  }; //...prevExpenses pulls out all the existing expenses

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
  
