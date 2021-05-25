//App.jsx
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {   //set the inputText as the parameters and use props
    setItems(prevItems => {   //set the inputText as the items
      return [...prevItems, inputText];   //spread the previous items with the new input text
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (      //add an InputArea, pass the value to the props
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        onAdd={addItem} 
      /> 
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



//InputArea.jsx
import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);   // set the new input using this function
  }

  return (    //handle the change when the input update to the inputText
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);   //when this button gets clicked, pass in the inputText that has currently typed in the input
          setInputText("");   //after pass the text input over, set it back as the empty string
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;



//ToDoList.jsx
import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
