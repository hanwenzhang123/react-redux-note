To manage an input field's state, we need to build a "controlled component." 
A controlled component renders a form element whose values are controlled by React, with state.


create a controlled component
- initialize state for the value of the input
- listen for changes on the input to detect when value is updated
- create an event handler that updates the value state


//AddPlayerForm.js
import React, { Component } from 'react';

class AddPlayerForm extends Component {   //stateful component

  state = {   //controlled component, controlled by state
    value: ''
  };

  handleValueChange = (e) => {    //event handler
    this.setState({ value: e.target.value });
  }

  render() {
    console.log(this.state.value)
    return (
      <form>
        <input 
          type="text"
          value={this.state.value}    //stateful
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
