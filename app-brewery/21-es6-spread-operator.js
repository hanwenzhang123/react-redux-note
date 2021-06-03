//Spread syntax (...)

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

//using ..., we spread out the strings in citrus



const fullName = {
  fName: "James",
  lName: "Bond"
};

const user = {    //without the ..., we get the object fullName (key value pair) inside of the user object
  ...fullName,    //using ..., we will spread what is inside the object to add the key value in. 
  id: 1,
  username: "jamesbond007"
};

console.log(user);



//JavaScript set object key by variable 

{ [yourKeyVariable]: someValueArray } 

var key = "name";
var person = {[key]:"John"}; // same as var person = {"name" : "John"}
console.log(person); // should print  Object { name="John"}




//App.jsx
import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,   //spread out previous the fName, lName, email properties
        [name]: value   //your key variable inside [] to get the actual value we passes in
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;




//Question
setContact(prevValue => {

return {

  ...prevValue,

[name]: value

};


these two lines are inside of a object,
...prevValue is the previous value of the hook , shall be contact here
and the [name]:value comes from the event.target.name and event.target.value
while using the spread Operator , the name has to be in a square bracket or it's gonna be treated as string.

   
