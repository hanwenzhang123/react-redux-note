//Redirecting a Route
React Router provides an <Redirect> component that instructs the router to redirect from one route to another.

//Courses.js
import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JavaScript from './courses/JavaScript';

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to='/courses/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here...    refirect to the HTML page once in the /courses route */}
    <Route exact path="/courses" render={ () => <Redirect to="/courses/html" /> } />
    <Route path="/courses/html" component={HTML} />
    <Route path="/courses/css" component={CSS} />
    <Route path="/courses/javascript" component={JavaScript} />
  </div>
);

export default Courses;



//Using the Match Object
The match object contains information about how a route is matching the URL. We can access this data from inside components being rendered by <Route>. 
Even if we change the URL in the parent file App.js changes, as long as the route matches, it works dynamically

//Courses.js
import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JavaScript from './courses/JavaScript';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
    <Route exact path={match.path} render={ () => <Redirect to={`${match.url}/html`} /> } />
    <Route path={`${match.url}/html`} component={HTML} />
    <Route path={`${match.url}/css`} component={CSS} />
    <Route path={`${match.url}/javascript`} component={JavaScript} />
  </div>
);

export default Courses;


//Review
Which component can redirect from one route to another route?
  <Redirect>
  
Which React Router component allows users to navigate between routes?
  <Link>
  
Which component lets you add styling to a link when it matches the current URL.
  <NavLink>
  
The _____ prop assigns a custom CSS class to NavLink when it's active.
activeClassName

Which <Route path> prop contains information about how a route matched the URL?
  match

Given this route:
<Route path='/products' render={() => <Redirect to='/products/books' />} />
Which of the following is true?
  The route renders a redirect to '/products/books' when the URL path is '/products'.

  
