//Using Routes
//index.js
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";   //import

import "./index.css";
import App from "./App";

ReactDOM.render(    //wrap the App
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//App.js
import { Route } from "react-router-dom";   //import

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (      //using <Route path="/{path}"> </Route> to wrap the component you would like to run with that URL
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
 
