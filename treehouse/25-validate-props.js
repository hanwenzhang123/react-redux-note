//Validate Props with PropTypes
As your app grows, it is a good practice to type check or validate the data a component receives from props. 
PropTypes not only help you catch and avoid bugs, they also serve as a documentation for components. 
Other developers working on the same project will know exactly which props your components take, and what types they should be
//not required but useful for debugging

Type Checking in React
-PropTypes(library)
-TypeScript
-Flow


npm install --save prop-type
https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes


//With PropTypes Counter.js
import React from 'react';
import PropTypes from 'prop-types';   //import PropTypes

const Counter = ({ index, score, changeScore }) => {
  //let index = props.index;    - can be deleted, because we already assigned
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
    </div>
  );
}

Counter.propTypes = {     //Added here
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
}

export default Counter;


//With PropTypes Header.js
import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {players, title} = props
    return (
      <header>
        <Stats players={ players }/> 
        <h1>{ title }</h1>
        <Stopwatch />
      </header>
    );
  }

Header.propTypes = {    //add here outside of class
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)
  };

export default Header;



//With PropTypes Stats.js
import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {      //stateless function

    const totalPlayers = props.players.length;      //total number of the players, players from the values in the App.js
    const totalPoints = props.players.reduce((total, player) => {       //reduce method ends up with an accumulated value
        return total + player.score;
    }, 0);  //initialize a total to be 0

    return (
        <table className="stats">
            <tbody>
                <tr>
                <td>Players:</td>
                <td>{ totalPlayers }</td>
                </tr>
                <tr>
                <td>Total Points:</td>
                <td>{ totalPoints }</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {     //add here outside of class
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    }))
};

export default Stats;
 
