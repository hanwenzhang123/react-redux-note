//Displaying 404 Error Routes using Switch
A user-friendly app gives immediate feedback when something goes wrong, like when a user mistypes a URL or visits a broken link. 
React Router lets you create a 404-like error route that displays when a URL's path does not match any of the paths defined in your routes.

Switch will only render the first Route that matches the URL.
For example, at the /teachers path, Switch looks for a Route component that matches that path.
And the first one that matches it will render a component. Then Switch stops looking for matches.
And if Switch does not find a matching route, it is going to fall back to this sort of catch all route, and render the NotFound component.

//App.js
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
    <Header />
    
    <Switch>
      <Route exact path ='/' component={Home} />
      <Route path ='/about' render={ () => <About title='About'/> } /> 
      <Route path ='/teacher' component={Teachers} />
      <Route path ='/courses' component={Courses} />
      <Route component={NotFound} />
    </Switch>
    </div>
  </BrowserRouter>
); 

export default App;
 
