//Optimize Performance with PureComponent

React provides a special type of component, called PureComponent, that helps prevent unnecessary re-renders. 
If your component’s render() method renders the same result given the same props and state, you can use PureComponent for a performance boost in some cases.


REACT component patterns
- destructure props
- validate props
- access DOM nodes with refs
- practice creating react components


 //New Player.js
import React, { PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent {
  render() {
    console.log(this.props.name + ' rendered');
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
          { this.props.name }
        </span>
  
        <Counter 
          score={this.props.score}
          index={this.props.index}
          changeScore={this.props.changeScore} 
        />
      </div>
    );
  }
}

export default Player;


//Old Player.js
import React from 'react';
import Counter from './Counter';

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        { props.name }
      </span>

      <Counter 
        score={props.score}
        index={props.index}
        changeScore={props.changeScore} 
      />
    </div>
  );
}

export default Player;


  
