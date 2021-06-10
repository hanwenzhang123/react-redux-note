//Destructuring Props
 A special kind of syntax you can use to "unpack" (or extract) values from arrays, or properties from objects, into distinct variables. 
 Developers often use destructuring in React to make their components cleaner and easier to understand. 
 It provides a more concise way to write your props.
 

 //Player.js
import React, { PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent {
  render() {
    const { 
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props;
    
      return (
        <div className="player">
          <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
            { name }
          </span>
    
          <Counter 
            score={score}
            index={index}   //pass the index
            changeScore={changeScore}  //invoke the change
          />
        </div>
      );
  }
}

export default Player;
  
