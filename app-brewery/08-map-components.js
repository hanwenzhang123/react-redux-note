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


//Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
//<dl> element represents a description list. <dt> a list of groups of terms. <dd> a list of groups of descriptions 

import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary"> {emojipedia.map(createEntry)} </dl>
    </div>
  );
}

export default App;
   
