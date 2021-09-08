if we use <a> with the link, we send new request, not a single page applicatiion
we could lose data information like items in the shopping cart 

//components/MainHeader.js
import { Link } from "react-router-dom";  //import link

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>  //add <Link to="/{actual address we want to link to}"> </Link> for links
          </li>
          <li>
            <Link to="/products">Products</Link>    //for links, stay on the same page, not send new request
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;


//<NavLink to="/{actual address we want to link to}"> </NavLink>
Basically like the standard link.
It still creates an anchored tag catches the click, prevents the browser default
NavLink also will set a CSS class on the active anchor item.

//components/MainHeader.js
import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/welcome'>    //change to NavLink and add activeClassName prop if link is active
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/products'>   //change to NavLink and add activeClassName prop if link is active
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
