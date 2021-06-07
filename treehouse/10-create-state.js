Creating the Application State
Data that is avaiable the entire application
state is a an object that stores all the data that the component itself needs and data that might get passed down to its children.


Types of State
- Application State: main state - sata that is avaiable the entire application
// class App extends React.Component { }
- Component State - state that is specific to a component and not shared outside of the component, like a local state
// class Counter extends React.Component { }



class App extends React.Component {
  state = {   //first set state equals to an object
    players: [    //set players to an array
      {   //cut all the object to the players array
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

  render() {    //render to App
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length}     //change to this.state
        />
  
        {/* Players list */}
        {this.state.players.map( player =>    //change to this.state
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
  
    
