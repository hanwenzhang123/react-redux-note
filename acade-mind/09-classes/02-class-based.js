//User.js
import { Component } from 'react';    //import

import classes from './User.module.css';

class User extends Component {  //extends
  render() {    //what to render
    return <li className={classes.user}>{this.props.name}</li>;
  } 
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
 
