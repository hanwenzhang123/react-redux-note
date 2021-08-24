Class-based component lifecycle
- side effects in functional components: useEffect()
- class-based components can not use react hooks
Mounting means putting elements into the DOM.

componentDidMount() - called once component mounted (was evaluated and rendered) - useEffect(...,[])
componentDidUpdate() - called once component updated (was evaluated and rendered) - useEffect(..., [someValue])
componentWillUnmount() - called right before component is unmounted (removed from DOM) - useEffect(() => {return () => {...}}, [])


//Lifecycle of Components
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
The three phases are: Mounting, Updating, and Unmounting.

Mounting: Mounting means putting elements into the DOM.
The componentDidMount() method is called after the component is rendered.
The componentDidUpdate method is called after the component is updated in the DOM.
The componentWillUnmount method is called when the component is about to be removed from the DOM.


//example
//UserFinder.js
import { Fragment, useState, useEffect, Component } from 'react'; //import component

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
  constructor() {
    super();    //always super
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {   //only run once when the page loads, after it will be componentDidUpdate
    // Send http request...
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {  //call once the function get re-evaluated
    if (prevState.searchTerm !== this.state.searchTerm) { //only if the search term changes
      this.setState({     //set the state
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {    //will be merged
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />    //point to the searchChangeHandler with bound "this"
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);    //check if the searchTerm changes, then re-run the logics

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;


//User.js
import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
  componentWillUnmount() {    //will be print 3 times because we have 3 users
    console.log('User will unmount!');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  } 
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
