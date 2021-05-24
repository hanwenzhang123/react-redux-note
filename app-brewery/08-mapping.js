//mapping is very useful especially handling arrays
//when use jaavascript inside of html, put it in {}

import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {    //key is not for use, we need to create a new 'id={contact.id}' if we want to access the data
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;


  
