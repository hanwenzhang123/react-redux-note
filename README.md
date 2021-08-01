# Create a New React App
https://reactjs.org/docs/create-a-new-react-app.html
```
npx create-react-app my-app
cd my-app
npm start
```
## app.js 
- ReactDOM.render(what to show, where to show it);
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
