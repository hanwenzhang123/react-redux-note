Use React Router's <Link> component to navigate between our routes.
<Link exact to="/">Home</Link>


//Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/teachers">Teachers</Link></li>
      <li><Link to="/courses">Courses</Link></li>
    </ul>    
  </header>
);

export default Header;
 


Styling Active Links
React Router provides a simple way to change the appearance of a link when it's active. 
The <NavLink> component is a special version of <Link> that can recognize when it matches the current URL


//Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/" activeStyle={{ background: 'tomato' }}>Home</NavLink></li>
      <li><NavLink to="/about" activeClassName='actyMcActiveFace'>About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;
