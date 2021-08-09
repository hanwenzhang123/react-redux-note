semantically and from a "clean HTML structure" perspective, having below nested modal is not ideal.
it is an overlay to the entire page after all (that is similar for side-drawers, other dialogs, etc.)

//origin
  return (
    <React.Fragment>
      <MyModal />
      <MyInputForm />
    </React.Fragment>
  );

//real DOM
<Section>
  <h2>Some Other Content</h2>
  <div class="my-modal">
    <h2>A Modal Title!</h2>
  </div>
  <form>
      <label>Username</label>
      <input type="text" />
  </form>
</Section>

It is a bit like styling a <div> like a <button> and adding an event listener to it
//it will work but not a goood practice
<div onClick={clickHandler}>click me, it is a bad button</div>


//portal
we can use portal to keep writing our components the way we want
but to still render this differently, render the modal HTML content somewhere else than it would normally go to.

//real DOM
<div class="my-modal">
  <h2>A Modal Title!</h2>
</div>
<Section>
  <h2>Some Other Content</h2>
  <form>
      <label>Username</label>
      <input type="text" />
  </form>
</Section>


//Implementation
Portals need two things.
You need a place you wanna port the Component to
and then you need to let the Component know that it should have a portal to that place.

//index.html - mark that place
In the HTML we add:
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="backdrop-root"></div>
    <div id="overlay-root"></div>
    <div id="root"></div>
   </body>

//ErrorModal.js
import React from 'react';
import ReactDOM from 'react-dom';   //import

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(                       //JSX expression
        <Backdrop onConfirm={props.onConfirm} />,   //component
        document.getElementById('backdrop-root')    //pointer, to where
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;


we can communicate with it as we did before,
we can use it as if it would be rendered here, it just isn't.
React DOM createPortal can be used anywhere where you would otherwise use JSX code.

wherever you would normally just use the Component, you can use createPortal to portal,
to move that Component HTML content somewhere else, only in the actual DOM that is being rendered.
In JSX, in your Components,you continue working with those Components as you did before.
  
