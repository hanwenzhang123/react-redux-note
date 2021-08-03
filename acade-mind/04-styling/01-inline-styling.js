//Styling Components
//Make You Apps Look Good
- conditional & dynamic styles
- styled components
- CSS modules


//CourseInput.js
import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      //once we start typing, the isValid becomes true
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      //you can not enter empty input, if the length is 0 then update isValid to false
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {/* the label will become red color if we have not entered anything, camel case for CSS here due to JavaScript */}
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{ borderColor: !isValid ? "salmon" : "transparent" }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
