//Creating the Application State
  // Data that is avaiable the entire application
  //state  is a an object that stores all the data that the component itself needs and data that might get passed down to its children.

class App extends React.Component {

  state = {
    players: [    //set it as an array
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
            key={player.id.toString()}            
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
  
  
//component State
 state that is specific to a componen and not shared outside of the component
 
 class Counter extends React.Component { }




     
