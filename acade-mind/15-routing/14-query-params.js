useHistory - allows us to change the page history, so allows us to change the url, so we can add query parameter
useLocation - allows us to read the parameter value (the currently loaded url)

//components/quotes/QuoteList.js
import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {   //sorting logics
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();   //call the hook
  const location = useLocation(); //call the hook

  const queryParams = new URLSearchParams(location.search);   //built-in js class constructor URLSearchParams

  const isSortingAscending = queryParams.get('sort') === 'asc';   //sort as the key at current params, .get('sort') gives us value that is stored in the current key

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);    //isSortingAscending is boolean value

  const changeSortingHandler = () => {
    history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
  };  //push re-render the component, using push to the url before we change it, new path here is /quotes?sort=

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>   //once click, we dispatch the action to changeSortingHandler
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}    //button displays dynamically
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (    //using sortedQuotes instead of props.quotes because it included
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
