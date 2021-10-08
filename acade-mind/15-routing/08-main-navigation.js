Adding a Layout Wrapper Component

//components/layout/MainNavigation.js
import { NavLink } from 'react-router-dom';   //for links, do not use <a> which will trigger a new request

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}> 
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;


//layout/Layout.js
import { Fragment } from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
 
