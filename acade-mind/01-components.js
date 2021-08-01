Component-Drivern User Interfaces
- building interactive & scalable UIs

React is a JavaScfript library for building user interfaces
React makes building complex, interactive and reactive user interfaces simpler
React is all about "Components"
- because all user interfaces in the end are made up of components

What is a "Component"?
reusable building blocks in your user interface
components are a combination of HTML, CSS and JavaScript
You build these individual components and then you tell React how to compose them together into a final user interface.

Why Components?
- reusability (do not repeat yourself)
- separation of concerns (do not do too many things in one and the same place (function))
split big chunks of code into multiple smaller functions

How is a component built?
HTML, CSS, JavaScript
All React components are building a combination of all above, mainly HTML and JS

React allows you to create re-usable and reactive components consisting of HTML and JS (and CSS)
Declaretive Approach - using a specific way
Defind the desired target state(s) and let React figure out the actual JS DOM instructions
  
React is a single-page application which means only one HTML file 
that is delivered to the browser and hosted by the broswer and rendered by the browser
we use React to do user interfaces to modify that single page


//this is the first file to be execute
//index.js
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


//index.html - only 1 html file
<div id="root"></div> 
//targeted by document.getElementById('root'), which will be replaced by <App />


/*App.js*/
function App() {
  return (      //JSX below - JS XML, because HTML is XML in the end
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
 
   
