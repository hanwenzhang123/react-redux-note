import React, {useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event){
    setName(event.target.value)
  }

  function handleClick(event){
    setHeading(name)    //no need {}
    event.preventDefault();   //in our event is to prevent the default form submission
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form>
        <input 
          onChange={handleChange} 
          type="text" 
          placeholder="What's your name?" 
          value={name}
        />
        <button 
          type="submit"
          onClick={handleClick}
          >Submit</button>
        </form>
    </div>
  );
}

export default App;
