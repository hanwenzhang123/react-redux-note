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
