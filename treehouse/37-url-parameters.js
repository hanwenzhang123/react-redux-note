//Using URL Parameters
With React Router, you're able to declare dynamic routes using special URL parameters. 
The data passed to the URL parameters can be displayed in your app.

Dynamic URL Pattern using /:{name}


//App.js
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={ () => <About title='About' /> } />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;



//Featured.js
import React from 'react';

const Featured = ({match}) => {
  let name = match.params.name;
  let topic = match.params.topic;
  
  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;
 
