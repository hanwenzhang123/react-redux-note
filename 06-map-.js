Key
React gives elements a special built-in prop named key to quickly know which items were changed, added, or removed
A unique identifier that gives react a way to quickly and reliably identify an elemnt in the list

const players = [
  {
    name: "Guil",
    score: 50,
    id: 1   //set each different unique number
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

      <Counter score={props.score} />
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
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
        <Player         //iterate over data and render elements in React.
          name={player.name}
          score={player.score}
          key={player.id.toString()}            //use keys to track elements, convert our id to string use toString().
        />
      )}
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers={players} />,   
  document.getElementById('root')
);
//add a prop here with objects
