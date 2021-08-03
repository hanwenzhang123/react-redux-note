Parent.js
import React, {useState} from 'react';
improt './Parent.css';
improt Child from './components/Child';

function Parent() {
  const [word, setWord] = useState("Parent");
  
  return(
    <div className = "parent">
      <h1>{Word}</h1>
      <Child 
        changeWord={word => setWord(word)}/>    //set the parameter word to word
    </div>
    );
}
export default Parent;

//Child.js
import React from 'react';
improt './Child.css';

function Child(props) {
  return(
    <div className = "child">
      <h1>Child</h1>
      <button onClick={()=> props.changeWord("Hello World")}>      //onClick then we want something to happen
        Click to Change the Word      //props.changeWord from parent
      </button>
    </div>
    );
}
export default Child;
