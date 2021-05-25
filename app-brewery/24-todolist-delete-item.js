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

  function deleteItem(id) {   //id here is for the index of the item
    setItems(prevItems => {
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }   //the id is not equal to the item that passes over
      )
    })
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
          {items.map((todoItem, index) => (
            <ToDoItem 
            key={index}
            id={index}
            text={todoItem} 
            onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//when we map, we should always have a key - a unique identifier, like uuid
// {items.map((todoItem, index) => (
//   <ToDoItem 
//   key={index}
//   id={index}
//   text={todoItem} 
//   onChecked={deleteItem}
//   />
// ))}
//here we use index as the id to pass over to the todoItem




//ToDoItem.jsx
import React from "react";

function ToDoItem(props) {

  return (  //only when the item clicked, we pass the item id until the div detects a click
  <div onClick={() => {   //we call the function rather than passing, the function only get called when onclick get triggered
    props.onChecked(props.id);
    }}>
  <li>
    {props.text}
  </li>
  </div>
  );
}

export default ToDoItem;
 
