A syntax extension to JavaScript that is used with React to describe elements in the UI

//html
  <body>
    <div id="root"></div>

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type = "text/babel" src="./app.js"></script>
  </body>
  
//babel-standalone
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>



{/*   */}. //comment
{/* use className instead of class because it is reserved word*/}

const desc = 'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const name = 'Guil';

const header = (
  <header>
    <h1 id={myTitleID}>{ name }'s First React Element!</h1> 
    <p className="main-desc">{ desc }</p> 
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);



// Question

Which of the following JSX snippets applies a class of 'container' to the div?
 <div className="container">...</div>

 What tool do we use to translate JSX into standard JavaScript?
 Babel

What is the purpose of curly braces { } in JSX?
  They are used to evaluate JavaScipt expressions
  
Elements written in JSX get transpiled to: 
  React.createElement() functions

Is using JSX with React optional? 
  Yes


Display the value of the petName variable inside the <p> tags.

const petName =  'Ernie';
const header = (
  <header>
    <p>I have a pet named {petName}.</p> 
  </header>
);


   
