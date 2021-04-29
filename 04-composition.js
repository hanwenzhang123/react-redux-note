Composing Components
When a component contains another component, it's called composition.

{/* 
Components as Arrow Functions

original code without the error function: function Header(){ return } 
-- const Header = () => { return() }

original code without the error function: function Player(){ return } 
-- const Player = () => { return() }  -- return and {} are optional here
*/}

const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

const Player = () => {    
  return (
    <div className='player'>
      <span className='player-name'>
        Guil
      </span>

      <Counter />   {/* composition */}
    </div>
  )
}

const Counter = () => { 
  return (
    <div className='counter'>
      <button className='counter-action decrement'> - </button>
      <span className='counter-sore'>35</span>
     <button className='counter-action increment'> + </button>
  </div>
  );
}

const App = () => {
  return (
    <div class='scoreboard'>
      <Header />

      {/* Players list composition */}
      <Player />

    </div>
  )
}

ReactDOM.render(
  header,
  document.getElementById('root')
);



//Questions
Why is a capital letter necessary in the component name?
  To differentiate custom components from native DOM elements

When should you break a component into smaller components?
  When the component has too many responsibilities

Which component do you usually pass to ReactDOM.render()?
  The top-level component

When a component contains other components, it's called:
  composition

Complete the code below to create a Navigation component as a function.
const Navigation = () => {
  return (
    <nav>
      <ul> ... </ul>
    </nav>
  );
}

   
