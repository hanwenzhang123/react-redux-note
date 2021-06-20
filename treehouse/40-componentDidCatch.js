One of the biggest changes in React 16 is how React handles JavaScript errors. 
It provides a built-in solution for handling errors gracefully, with a new lifecycle method called componentDidCatch().


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StudentForm from './components/StudentForm';

class App extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oh no! Something went wrong.</h1>
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <StudentForm />
        </div>
      );
    }
  }
}

export default App;
