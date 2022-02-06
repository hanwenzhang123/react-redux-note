# Create a New React App 
https://reactjs.org/docs/create-a-new-react-app.html
> create app\
> go to project folder\
> install dependencies\
> start live server
```
npx create-react-app my-app
cd my-app
npm start
```
```
npm install
npm start
```

# Deploying a React App on GitHub
```js
npm install gh-pages --save-dev
```
```json
"http://{username}.github.io/{repo-name}"

"homepage": "http://hanwenzhang123.github.io/my-app"

"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
```js
npm run deploy
```

## MERN APP => Running Concurrently

**Please go to the folder backend, and run `npm start` to start the server**

- No longer need a separate server and go to the folder frontend run `npm start` to start the client since it is now both run concurrently.

> npm install --save concurrently
- added the following script in `package.json` of the backend file:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon app.js",
    "client": "cd .. && cd frontend && npm start",
    "start": "concurrently \"npm run dev\" \"npm run client\""
},
```
```json
 "dependencies": {
     "concurrently": "^7.0.0",
 }
 ```
 
# Functional React Boilerplate
## index.js 
ReactDOM.render(what to show, where to show it);
``` javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
```
## App.js
A jsx file, js is good
``` javascript
import React from "react"; 

function App() {
  return (
      <div>
      <h2>Let's get started!</h2>
    </div>
  )
}

export default App;
```
## index.html
Everything will insert to the div
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
    <link rel="stylesheet" href="styles.css" />   //css file
  </head>
  <body>
    <div id="root"></div>
    <script src="../src/index.js"></script> 
  </body>
</html>
```
## index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello World!</h1>,
  document.getElementById('root')
);
```
# Class-based Component
```javascript
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
```
# Redux - Functional Component
## index.js - setup Redux
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
## App.js - display the component
```javascript
import Counter from './components/Counter';

function App() {
  return (
    <Counter />
  );
}

export default App;
```
## store/index.js - action/reducer
```javascript
import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
```
## components/Counter.js
```javascript
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```
# Redux - Class-based Component
## index.js - setup Redux
```javascript
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import App from "./App";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
```
## App.js - make the connection - connect(mapStateToProps, mapDispatchToProps)(App)
```javascript
import React from "react";
import { connect } from "react-redux"; 
import * as counterActions from "./action";

class App extends React.Component {
  render() {
    const { numberForApp, incHandler, decHandler } = this.props; 

    return (
      <div className="App">
        <h3>{numberForApp}</h3> 
        <button onClick={incHandler}>+</button> 
        <button onClick={decHandler}>-</button> 
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ 
  numberForApp: state.counterReducer 
});

const mapDispatchToProps = (dispatch) => ({
  incHandler: () => dispatch({ type: "INCREMENT" }), 
  decHandler: () => dispatch(counterActions.decAction()) 
});

const ConnectedApp = connect( 
  mapStateToProps,
  mapDispatchToProps, 
)(App)

export default ConnectedApp
```
## action.js - define action functions will be used in switch statements
```javascript
const incAction = () => {
  return {
    type: "INCREMENT"
  }
}
const decAction = () => {
  return {
    type: "DECREMENT"
  }
}
export {
  incAction,
  decAction 
}
```
## reducer.js - reply on the input and local state to get a predictable output
```javascript
import { combineReducers } from "redux";

const INIT_STATE = 1;   

const counterReducer = (state = INIT_STATE, action) => { 
  switch (action.type) { 
    case "INCREMENT":  
      return state + 1; 
    case "DECREMENT":  
      return state - 1; 
    default:
      return state; 
  }
};

const rootReducer = combineReducers({   
  counterReducer
});
export default rootReducer;
```
# Documentations
[React Docs](https://reactjs.org/docs/hello-world.html)\
[React Tutorial](https://reactjs.org/tutorial/tutorial.html)\
[W3 School](https://www.w3schools.com/react/default.asp)\
[Life Cycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram)\
[CodeSandBox](https://codesandbox.io/s/new)
[Redux Docs](https://redux.js.org/)
 
