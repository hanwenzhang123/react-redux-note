//send data up to the component tree


//AppPlayerForm.js
import React, { Component } from 'react';

class AddPlayerForm extends Component {

  state = {   //controlled component, controlled by state
    value: ''
  };

  handleValueChange = (e) => {    //event handler
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();   //if not, it will result browser to post a request back to the server, which cause app reload and lose all the application state in the process
    this.props.addPlayer(this.state.value); //pass it here
    this.setState({ value: '' });   //to an empty string when submit a new name
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.value}    
          onChange={this.handleValueChange}   //trigger immediately after change
          placeholder="Enter a player's name"
        />
        
        <input 
          type="submit"
          value="Add Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;



//App.js
import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm.js';

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

  //player id counter
  prevPlayerId = 4;


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

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,    //bring the copy of all the players previously existing objects with the new array we are modified
        {
          name,   //name: name
          score: 0,
          id: this.prevPlayerId += 1    //increase 1 whenever the function is called
        }
      ]
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

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>   
      </div>    //pass the function down
    );
  }
}

export default App;
