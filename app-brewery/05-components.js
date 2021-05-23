//index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; //inside of the components file

ReactDOM.render(<App />, document.getElementById("root"));


//App.jsx
import React from "react";
import Heading from "./Heading";
import List from "./List";

function App() {
  return (
    <div>
      <Heading />
      <List />
      <List />    //we can reuse the component
    </div>
  );
}

export default App;


//Heading.jsx
import React from "react";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

export default Heading;


//List.jsx
import React from "react";

function List() {
  return (
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  );
}

export default List;




//React Components Practice
//index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


//App.jsx
import React from "react";
import Heading from "./Heading";

function App() {
  return (
    <div>
      <Heading />
    </div>
  );
}

export default App;


//Heading.jsx
import React from "react";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;

  
