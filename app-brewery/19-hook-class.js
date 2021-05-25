//hook - 2018

import React from "react";

function App() {
  return <h1>hello</h1>
}

export default App;

import React, { useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default FunctionalComponent;





import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}




//class

import React from "react";

class App extends React.Component {
  return <h1>hello</h1>
}

export default App;




import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default ClassComponent;
