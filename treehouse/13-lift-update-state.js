//Lifting state up
When two or more components need access to the same state, we move the state into their common parent. 
This is called "lifting state up".

//Communicating Between Components
using props to communicate with parent like a callback function to the parent

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


  handleScoreChange = (index, delta) => {
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
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            changeScore={this.handleScoreChange}    //this will run later time when interact
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

      <Counter 
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
      <button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment" onClick={() => props.changeScore(index, 1)}> + </button>
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
  
