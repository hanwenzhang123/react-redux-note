Introducing Styled Components
a package that helps you to build componnets which have certian styles attached to them 
where the styles really only affect the components to which they were attached and not any other components

npm install --save styled-components


//Button.js
import styled from "styled-components"; //import the package

//``is called tagged template literal, a default js feature, which will be executed as a method behind the scene
//button is a method from package, then using `` for passing the method to the button
//styled.button``will provide a button, can be h1 p or other html tags
//& always refers back to the component which being created, like you can use for pseudo selectors or nested classes

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  
  @media (min-width: 768px) {
//   media queries - now you just put the styles into that media query
//   which should affect this element when that condition here is met.
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
// this button will give us the styles as above
// the button which is returned applies all the props you might be passing to your own button component which we are exporting here in the end.

// const Button = (props) => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
  
