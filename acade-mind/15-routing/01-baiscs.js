Single Page Application Routing
Multiple pages in single page app
- what is client side routing
- using react router
- advanced features: dynamic and nested routes

//What is Routing? Why?
URL changes, visible content changes
//Traditional Multi-page Routing
HTML is requested & loaded
Page change = new request + response
//Building Single Page application
when building complex user interfaces, we typically build Single Page Application (SPAs)
Only one initial HTML request & response
Page (URL) changes are then handled by client-side (React) code -> changes the visible content without fetching a new HTML file

// React Router 
  - npm install react-router-dom
https://reactrouter.com/
https://github.com/remix-run/react-router
 
the goal is that we are able to handle different paths on our page
and load (render) different components for the different paths 
//different path in URL
our-domain.com/ => Component A
our-domain.com/product => Component B
 (conditionally render component)
 

//Set up
//index.js
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//App.js
import { Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
  
