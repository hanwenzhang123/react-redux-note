//Implementing Programmatic (Imperative) Navigation

//src/pages/NewQuote.js
import { useHistory } from 'react-router-dom';    //import the hook useHistory that changes browser history

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => { 
    console.log(quoteData);
    
    history.push('/quotes');    //trigger history changes, navigate to the /quotes page
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;


//src/components/quotes/QuoteForm.js
import { useRef } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {   //submit the form, the action
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    props.onAddQuote({ author: enteredAuthor, text: enteredText });       //the method we got from the parent component NewQuote
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>    //submit the form -> triggers the local function submitFormHandler with its content as event passed to argument
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
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
