//Refs and the DOM 
 Refs let you access and interact with DOM nodes created in the render() method. 
 They make it possible to do the more traditional DOM manipulation, and they are commonly used to access form elements and get their values.


//New AddPlayerForm.js
import React, { Component } from 'react';

class AddPlayerForm extends Component {
  //no needs that state statement

  playerInput = React.createRef();    //quick and easy way to get the value of the input field

  handleSubmit = (e) => {
    e.preventDefault();   //if not, it will result browser to post a request back to the server, which cause app reload and lose all the application state in the process
    this.props.addPlayer(this.playerInput.current.value); //pass it here
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          ref={this.playerInput}    //refer back to the React.createRef()
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



//Use refs inside a functional component:
const AddPlayerForm = ({ addPlayer }) => {

  let playerInput = React.createRef();
  let handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerInput.current.value);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        ref={playerInput}
        placeholder="Enter a player's name"
      />

      <input 
        type="submit" 
        value="Add Player" 
      />
    </form>
  ); 
}



//Old AddPlayerForm.js
import React, { Component } from 'react';

class AddPlayerForm extends Component {

  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
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
