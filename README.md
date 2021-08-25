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
# React Boilplate
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
# Documentations
[React Doc](https://reactjs.org/docs/hello-world.html)\
[React Tutorial](https://reactjs.org/tutorial/tutorial.html)\
[W3 School](https://www.w3schools.com/react/default.asp)\
[Life Cycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram)\
[CodeSandBox](https://codesandbox.io/s/new)
