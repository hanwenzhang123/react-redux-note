//Using CSS Modules
//Dynamic Styles with CSS Modules

//Button.js
import React from "react";

import styles from "./Button.module.css"; //import CSS modules, change the css file name as well
// import styled from 'styled-components';

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = (props) => {
  return (
    //className={styles.button} - instead of just button as a string, you apply something dynamic
    //apply button class to a special way to this button element here
    //global non scoped styles had to make sure not accidentally reusing names, class names.

    //CSS modules ensures scoped to components we import this file into where we use them.
    //because we then access those classes as properties on the imported styles object.
    //make the connection between these dynamically generated class names, which we don't know in advance and our components here.

    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
  
