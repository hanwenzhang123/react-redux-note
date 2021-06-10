//Unidirectional Data Flow
In React, data naturally flows down the component tree, from the app's top-level component down to the child components, via props. 

This is called "unidirectional data flow".

In our app, application state lives in the main app component and all of its child components can be given access to it.


//Lifting state up
In react, two or more components can share the same state
When two or more components need access to the same state, we move the state into their common parent. 
Moving state to our application parent component and communicating the data downwards through props.

This is called "lifting state up".

In our app, we put players object in the parent file to pass down to the children components that they can access to, which lifting state up 


//Communicating Between Components
using props to communicate with parent like a callback function to the parent

Instead of passing state to a child component the parent can pass down a callback function
The callback will allow you to communicate events and changes in your data upwards, while data continues to flow downwards.


//Update State Based on a Player's Index
finish writing the handleScoreChange function by updating state based on the index of a player object.

sharing state between components



//App.js
import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };


  handleScoreChange = (index, delta) => {         //Communicate Between Components, update state based on the index
    this.setState( prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [ ...prevState.players ];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        players: updatedPlayers
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length}    //lifting state up
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player                                     //lifting state up
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            changeScore={this.handleScoreChange}    //pass this callback, it will run later time when interact with child
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

export default App;


//Player.js
import React from 'react';
import Counter from './Counter';

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        { props.name }
      </span>

      <Counter                    //keep passing down, communicate
        score={props.score}
        index={props.index}   //pass the index
        changeScore={props.changeScore}  //invoke the change
      />
    </div>
  );
}

export default Player;



//Counter.js
import React from 'react';

const Counter = (props) => {

  let index = props.index;

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}> - </button>        //change, update
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment" onClick={() => props.changeScore(index, 1)}> + </button>         //change, update
    </div>
  );
}

export default Counter;



//Header.js
import React from 'react';

const Header = (props) => {
    return (
      <header>
        <h1>{ props.title }</h1>
        <span className="stats">Players: {props.totalPlayers}</span> 
      </header>
    );
  }

export default Header;
  
