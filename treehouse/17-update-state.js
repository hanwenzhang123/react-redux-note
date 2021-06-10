//recommended way to update
We're passing in a callback to setState here as opposed to an object. 
This is the strategy that let's use make sure that we avoid any bugs with state being set asynchronously. 
The parameter here was named prevState, so we should use that as opposed to directly accessing the state object.

handleAddPlayer = (name) => {
    this.setState( prevState => {   //update based on previously state, make sure this.state always holds the correct updated state
      return{
        players: [
          ...prevState.players,    //presState - all previous players will the included , bring the copy of all the players previously existing objects with the new array we are modified
          {
            name,   //name: name
            score: 0,
            id: this.prevPlayerId += 1    //increase 1 whenever the function is called
          }
        ]
      }
    });
  }
  
//Update the players state using the concat() method  
handleAddPlayer = (name) => {
  let newPlayer = {
    name,
    score: 0,
    id: this.prevPlayerId += 1
  };
  this.setState( prevState => ({
    players: prevState.players.concat(newPlayer)
  }));
}

//Old way, works, may run into issues if the app is large
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
