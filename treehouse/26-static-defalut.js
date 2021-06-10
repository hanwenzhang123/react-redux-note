//Static PropTypes and Default Props
In class components, it is common to define propTypes inside the class with the static keyword. 
You can also set a default value for your props, with a defaultProps object.


//With static propTypes Player.js
import React, { PureComponent } from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';   //add here

class Player extends PureComponent {

  static propTypes = {        //add here inside the class function
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  };

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


//Default Props with Header.js
import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object).isRequired
};

Header.defaultProps = {   //add a default props just in case that we do not have a title assigned in the parent title
  title: 'Scoreboard'
};

export default Header;

  
