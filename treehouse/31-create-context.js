Provider
  - lives the top level of your app, and provide the actual data that needs to be shared throughout the component tree
  - The provider component requires a value prop to share data
  
Consumer
  -using anything inside the consumer, using a render prop
  -render prop is a technique for sharing code between React components using a prop whose value is a function

<Component render= {data => (
   <h1>Hello, {data.user}!</h1>
)} />

//Context/index.js

import React from 'react';

const ScoreboardContext = React.createContext();    //create new context

export const Provider = ScoreboardContext.Provider;   //export provider 
export const Consumer = ScoreboardContext.Consumer;   //export consumer


//App.js
import { Provider } from './Context';   //import the provider

  render() {    //wrap all the jsx and return statement with the provider tag
    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header players={this.state.players} />

          <PlayerList 
            players={this.state.players} 
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}   
          />
          
          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </Provider>
    );
  }
}

// Stats.js (new)
import React from 'react';
import { Consumer } from './Context';

const Stats = () => {
  return (
    <Consumer>
      { context => {
        const totalPlayers = context.length;    //context
        const totalPoints = context.reduce( (total, player) => {    //context
          return total + player.score;
        }, 0);

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
      }}
    </Consumer>
  );
}

export default Stats;


//Stats.js (old)
import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {

  const totalPlayers = props.players.length;
  const totalPoints = props.players.reduce( (total, player) => {
    return total + player.score;
  }, 0);

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

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  })).isRequired
};
   
export default Stats;

  
//Playerlist.js(new)
import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = (props) => {
  return (
    <Consumer>
      { context => (  //react.fragment groups a list a sibling elements or components without having to add an unnecessary reaper element
        <React.Fragment>
          {context.map( (player, index) =>
            <Player 
              {...player}   //name, id, score in the player.js
              key={player.id.toString()} 
              index={index}
              changeScore={props.changeScore}
              removePlayer={props.removePlayer}           
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
  );
}

PlayerList.propTypes = {
  changeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default PlayerList;



//Playerlist.js(old)

import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const PlayerList = (props) => {
  return (
    <React.Fragment>
      {props.players.map( (player, index) =>
        <Player 
          {...player}
          key={player.id.toString()} 
          index={index}
          changeScore={props.changeScore}
          removePlayer={props.removePlayer}           
        />
      )}
    </React.Fragment>
  );
}

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  changeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default PlayerList;
