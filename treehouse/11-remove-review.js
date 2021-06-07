//Remove Items From State
use the filter() array iteration method to remove an object from the players array in state.

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>   /* add the button */
        { props.name }
      </span>

      <Counter />
    </div>
  );
}

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score + 1
    }));
  }

  decrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score - 1
    }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };
              //this will be called at later interaction when clicked delete button which will change the state at the parent component
  handleRemovePlayer = (id) => {    //take an id parameters for the players to remove from the state.
    this.setState( prevState => {   //update state
      return {                      //filter used to remove an element from the array without affecting the original array
        players: prevState.players.filter( p => p.id !== id ) //return players except for the one we want to remove
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
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}     // each player component contains a removePlayer function
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



//questions
In react, state is never modified directly. 
The only way react allows you to update is by using its build-in setState() method.

Data from state is distributed through the application via ___.
props

State may be updated asynchronously. Whenever you need to update state based on previous state, you shouldn not rely on _____ to calculate the next state.
this.state()

What type of state is available to the entire app?
  Application state

Complete the code so that the isConfirmed state updates its value based on the previous state.
confirmGuest = () => {
  this.setState( prevState => ({ 
    isConfirmed: !.isConfirmed
  }));
}

Complete the code to display the value of a prop named time. Note that Clock is a class component.
class Clock extends React.Component {
  render() {
    return (
      <span className="time">{this.props.time}</span>    
    );
  }
}
  
