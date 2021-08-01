# Create a New React App
https://reactjs.org/docs/create-a-new-react-app.html
> create app
> go to project folder
> install dependencies
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
## app.js 
- ReactDOM.render(what to show, where to show it);
- React.createElement()
React requires 3 element
1. type element
2. object element
3. content/child element
``` javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
```
## App.jsx
``` javascript
import React from "react"; 

function App() {
  return (
  )
}

export default App;
```
## index.html
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
