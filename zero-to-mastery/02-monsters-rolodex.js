//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


//App.js 
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();    //helps us with this by calling react.component's constructor()

    this.state = {  //dynamic content
      monsters: [],   //initially state empty
      searchField: ''
    };
  }

  componentDidMount() {   //puts our components on the page, it renders onto the DOM for the first time.
    fetch('https://jsonplaceholder.typicode.com/users')   //fetching content
      .then(response => response.json())    //get the actual body in the json format
      .then(users => this.setState({ monsters: users })); //setState to set data
  }

  onSearchChange = event => {   //arrow function allows you to set this when it defines in first place, so we do not need to bind as the regular function
    this.setState({ searchField: event.target.value });   //setState is not happening immediately because it is async call
  };

  render() {
    const { monsters, searchField } = this.state;   //destructuring from this.state, pulling out the value to the constance
    const filteredMonsters = monsters.filter(monster =>   //get back a new array after filtering
      monster.name.toLowerCase().includes(searchField.toLowerCase())    //includes returns true or false
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;


//components
//card-list.component.jsx 
import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (    //props that have passed down from parents
  <div className='card-list'>
    {props.monsters.map(monster => (    //we decide how the card looks like in the Card component
      <Card key={monster.id} monster={monster} />
    ))}
  </div> 
);    //{prop.children} - Children are actually what you pass in between the brackets of our component that gets called.


//card.component.jsx
import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
);      // we pass individual monster to the card component
  
  
//search-box.component.jsx      //the search box component, make it reusable
import React from 'react';
import './search-box.styles.css';

export const SearchBox = props => (   //props for the data passing down from App
  <input
    className='search-box'
    type='search'
    placeholder='search monsters'
    onChange={props.onSearchChange}
  />
  
