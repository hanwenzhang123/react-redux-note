//Working with Nested Routes
You are not limited to defining routes in one place only, you can define routes wherever you want.
And if they are on a component which is currently active, they will be evaluated by React Router DOM.

Nested Routes like the comment section that you would like to display on the same page with the main route. 

//pages/Welcome.js
import { Route } from 'react-router-dom';   //we can again import and define the Route wherever you want 

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">   // we are on /welcome, hence this component is loaded, we define another route for /new-user after /welcome
        <p>Welcome, new user!</p>   //can not be path="/products" because we can never be on that welcome page for a path that starts with slash products.
      </Route>
    </section>
  );
};

export default Welcome;
   

//pages/QuoteDetail.js
import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";  //import Route for nested routes
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      // this route path is constructed dynamically and it depends on the quote id for which this quote detail component was loaded.
      <Route path={`/quotes/${params.quoteId}/comments`}> 
        <Comments />    //the <Comments /> only shows when we are on "/quotes/${params.quoteId}/comments" for URL
      </Route>    //alternatively, since we are defining a route here (not a link), you can also set "path='/quotes/:quoteId/comments'"
    </Fragment>
  );
};

export default QuoteDetail;


//Getting Creative with Nested Routes
//src/pages/QuoteDetail.js
import { Fragment } from 'react';
import { useParams, Route, Link } from 'react-router-dom';   //import Link, useRouteMatch 

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>   //this route active if the path matches exactly, without the /comments
        <div className='centered'>
          <Link className='btn--flat' to=`/quotes/${params.quoteId}/comments`}> 
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}> 
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;

