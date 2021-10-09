//Preventing Possibly Unwanted Route Transitions with the "Prompt" Component
<Prompt when={} messaage={} /> - prevent unwanted transitions

//src/components/quotes/QuoteForm.js
import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';    //a special component "prompt"

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);  //a new local state, an entering state when a user starts working on the form

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt   //needs two props: when and message
        when={isEntering}   //when props, passing true or false, defining if the prompt should show if the user changes the url
        message={(location) =>    //show this message if when is true and the user tries to leave the page
          'Are you sure you want to leave? All your entered data will be lost!'
        }     //message takes a function return the text in string when user tries to leave, location holds information about the page that we try to go to
      />
      <Card>
        <form     //onFocus then we trigger the local action
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>Add Quote</button>
          </div>    //once the form finished, click the submit button that triggers the function
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
