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
```
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
```
npm run deploy
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
# Redux
## index,js - setup Redux
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
