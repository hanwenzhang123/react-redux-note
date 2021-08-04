//Styling Components
//Make You Apps Look Good
- conditional & dynamic styles
- styled components
- CSS modules

//App.js
import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals]; //all the prevGoals on the list
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() }); //add the new goal to the top of the list
      return updatedGoals; //return all the goals, previous and the new one
    });
  };

  const deleteItemHandler = (goalId) => {
    //passing the goalID as an argument
    setCourseGoals((prevGoals) => {
      //passing the previous goals in the list
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId); //filter out and display all the goals which the goalId is not the goalId
      return updatedGoals; //return the new list where the item with goalId will be excluded
    });
  };

  let content = ( //initialize the content be nothing, if the length > 0, the content will change
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = ( //if there is something in the goal list, display the whole content
      //courseGoal will show the items as the original goals in the list
      //deleteItemHandler will pass the function and filter out the passing goalId
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;


//CourseGoalList.js
import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = (props) => {
  //items and onDeleteItem are from parent by using props to pass down
  //mapping through the items declared in parent, courseGoals, there are default values and can add more
  //onDelete then passing through back to the parent, then the function is at App.js
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem} //when onDelete triggers, it goes up to the onDeleteItem in App.js
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  ); // {goal.text} show the text of the goal on the screen
};

export default CourseGoalList;


//CourseGoalItem.js
import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    //the deleteHandler function will pass up to the parent
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id); //the id for the specific item
  };

  return (
    //passing the goal item list to display but if click, it will trigger the deleteHandler
    //{props.children} list the goal items in the list
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;


//CourseInput.js
import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);    //updating the input change
  };

  const formSubmitHandler = event => {
    event.preventDefault();           //prevent default when submit forms
    props.onAddGoal(enteredValue);    //onAddGoal goes to the function in App.js {addGoalHandler}
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />   {/* onChange for once the value changes */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;


//Button.js
import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    //the button will pass down props to all the children
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
  
