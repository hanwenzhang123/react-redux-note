build a statistics component that displays the total number of players on the Scoreboard, as well as the total number of points.


//Stats.js
import React from 'react';

const Stats = (props) => {      //stateless function

    const totalPlayers = props.players.length;      //total number of the players, players from the values in the App.js
    const totalPoints = props.players.reduce((total, player) => {       //reduce method ends up with an accumulated value
        return total + player.score;
    }, 0);  //initialize a total to be 0

    return (
        <table className="stats">
            <tbody>
                <tr>
                <td>Players:</td>
                <td>{ totalPlayers }</td>
                </tr>
                <tr>
                <td>Total Points:</td>
                <td>{ totalPoints }</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;



//Header
import React from 'react';
import Stats from './Stats';

const Header = (props) => {
    return (
      <header>
        <Stats players={props.players}/> 
        <h1>{ props.title }</h1>
      </header>
    );
  }

export default Header;



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
          players={this.state.players}    //pass the players object to the children elements
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

        <AddPlayerForm />
      </div>
    );
  }
}

export default App;
