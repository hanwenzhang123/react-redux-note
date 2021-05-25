//to do list practice
//...prevItems - reutrn all the previous items in the todo list

import React, {useState} from "react";

function App() {

  const [inputText, setInputText] = useState("");

  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText]  //add all items from previous items then add new item which inside inputText
    });
    setInputText(""); //once we add an item, set the space back to empty
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value = {inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((todoItem) => <li> {todoItem} </li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;

// {items.map((todoItem) => <li> {todoItem} </li>)}  - need {} because it is js code
// map through each item
