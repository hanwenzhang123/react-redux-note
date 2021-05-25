//App.jsx
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


//ToDoItem.jsx
import React, {useState} from "react";

function ToDoItem(props) {

  const [isDone, setIsDone] = useState(false);  //initially no in-line through 

  function handleCLick() {
    setIsDone((prevValue) => {
      return !prevValue;   //opposite value
    });
  }

  return (
  <div onClick={handleCLick}>
  <li style={{textDecoration: isDone? 'line-through' : 'none'}}>
    {props.text}
  </li>
  </div>
  )
}

export default ToDoItem;

//if it is done is true, we will apply the line-through, else, nothing changes
//click then cross it out, then click again to erase the line through

  
