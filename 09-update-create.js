//Update State Based on Previous State

Whenever you need to update state based on previous state, you shouldn't rely on this.state to calculate the next state.
State updates may be asynchronous, so it may not always lead to the component re-rendering with new data, and could cause state inconsistency. 
setState() accepts a callback function that produces state based on the previous state in a more reliable way.


//both works, the second one need () 

  incrementScore = () => {
    this.setState( prevState => {
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
  
  

//Creating the Application State
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
  
  
