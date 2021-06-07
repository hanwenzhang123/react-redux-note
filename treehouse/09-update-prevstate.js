//Update State Based on Previous State

Whenever you need to update state based on previous state, you should not rely on this.state to calculate the next state.
State updates may be asynchronous, so it may not always lead to the component re-rendering with new data, and could cause state inconsistency. 
setState() accepts a callback function that produces state based on the previous state in a more reliable way.


//both works, the second one need () 

  incrementScore = () => {
    this.setState( prevState => {   //check the previous state, guarantee to update correctly
      return {
        score: prevState.score + 1
      };
    });
  }

  decrementScore = () => {
    this.setState( prevState => ({
        score: prevState.state.score - 1
    }));
  }
  
 
  
//App.js
const players = [
  {
    name: "Guil",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
];

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

  incrementScore = () => {      //prevState - Update
    this.setState( prevState => ({
      score: prevState.score + 1
    }));
  }

  decrementScore = () => {    //prevState - Update
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

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={props.initialPlayers.length} 
      />

      {/* Players list */}
      {props.initialPlayers.map( player =>
        <Player 
          name={player.name}
          key={player.id.toString()}            
        />
      )}
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);
  
