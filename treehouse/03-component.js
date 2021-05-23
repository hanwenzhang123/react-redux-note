A component is a piece of UI that you can reuse. 
Everything you use in React is component
Everything in react is considered to be a component
Just like you're able to reuse code in JavaScript with functions, a component lets you reuse code that renders a part of your UI. 
Being able to split your UI code into independent, reusable pieces, and think about each piece in isolation is one the most embraced features of React.

//create a header component
function Header() {   //react component begin with capital 
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className='stats'>Players: 1</span>
    </header>
  );
}



//Use a Component with JSX
//JSX lets you define your own tags. 
//A JSX tag can not only represent an HTML element (like <h1>, <span>, and <header>), it can also represent a user-defined component.


//ReactDOM.render() - controls the contents of the container node you pass in
ReactDOM.render(
  <Header />, //it needs to be matched exactly the same one as the function, this is a self closing tag
  document.getElementById('root')
);  //capital name is important to differentiate, User-Defined Components Must Be Capitalized




//question
A ________ renders a reusable piece of the UI.
component

How do you create a React component?
  As either a Javascript function or class
  
React components are written in plain JavaScript, with the help of JSX.


Define a component that creates a reusable 'footer'.

function Footer() {
  return (
    <footer>
      <h2>The Footer</h2>
      <span>This is the awesome footer!</span> 
    </footer>
  );
}


Use a JSX tag to render a component named Scoreboard into the DOM.

ReactDOM.render(
  <Scoreboard />,
  document.getElementById('root')
);


   
