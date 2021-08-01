Component-Drivern User Interfaces
- building interactive & scalable UIs
React is a JavaScfript library for building user interfaces
React makes building complex, interactive and reactive user interfaces simpler

React is all about "Components"
- because all user interfaces in the end are made up of components
A component in React is just a JavaScript function that returns JSX


//What is a "Component"?
reusable building blocks in your user interface
components are a combination of HTML, CSS and JavaScript
You build these individual components and then you tell React how to compose them together into a final user interface.

//Why Components?
- reusability (do not repeat yourself)
- separation of concerns (do not do too many things in one and the same place (function))
split big chunks of code into multiple smaller functions

//How is a component built?
HTML, CSS, JavaScript
All React components are building a combination of all above, mainly HTML and JS

React allows you to create re-usable and reactive components consisting of HTML and JS (and CSS)
Declaretive Approach - using a specific way
Defind the desired target state(s) and let React figure out the actual JS DOM instructions
  
React is a single-page application which means only one HTML file 
that is delivered to the browser and hosted by the broswer and rendered by the browser
we use React to do user interfaces to modify that single page


//JSX
JSX is JavaScript XML, because HTML is XML in the end 
JSX is easy to write and will transform to codes that will be running on the browser
   
How React Works?
Build your own, custom HTML elements
We build components, react is all about components

You build a componenet tree
        <App />   - rendered into single HTML page
      /         \
<Header />      <Tasks />
              /     |     \
        <Task /> <Task /> <Task />
  
//React JSX Return requires 3 element
1. type element
2. object element
3. content/child element

 // <h1 id='main-title' title='this is a title>My first react element!<h1>

const title = React.createElement(  // requires 3 elements
    'h1',       //1 - type element
    { id: 'main-title', title: 'This is a title.' },    // 2 - object element: containing any attribute and value you want to give the object
                                                 // if you don't want to pass any attribute or value, the object element can be {} or null
    'My first react element!'          //3 - content or the chilren element you are creating
 )   
 
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );


//This is the first file to be execute
//index.js
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));    //we would only render once for our root component in this file


//index.html - only 1 html file
<div id="root"></div> 
//targeted by document.getElementById("root"), which will be replaced by <App />


//App.js
function App() {
  return (      //JSX below - JS XML, because HTML is XML in the end 
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
          
