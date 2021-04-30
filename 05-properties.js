Every React component and element can receive a list of attributes called properties (or props). 

Props 
it's how you get data into a component.
A list of properties used to pass data to a component.
Components are customized and made reusable with props.
You can think of props as what React components use to talk to each other and share information.

<Component propName="propValue" />

Using Props
- defind the props in a component's JSX tag
- enable the use of props in a component

Components and Props
An important detail to remember about props is that they are "read only" (or immutable), 
which means that a component can only read the props given to it, never change them. 
The (parent) component higher in the tree owns and controls the property values.

For example, if you try to set or change a prop value like this:

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title = 'Fun Board' }</h1>
    </header>
  );
}
React will throw the error: // Cannot assign to read only property 'title' of object.


//app.js
{*/ props is standard but you can use any name for parameter here. */}

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1} />    {/* prop looks like html attributes, if use data other than string, use {} like number */}

      {/* Players list */}
      <Player />
    </div>
  );
}



//app.js
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
        {props.name}
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

const App = () => {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={1} 
      />

      {/* Players list */}
      <Player name="Guil" score={50} />
      <Player name="Treasure" score={90} />
      <Player name="Ashley" score={85} />
      <Player name="James" score={80} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



   
