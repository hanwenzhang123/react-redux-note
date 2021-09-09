Lazy Loading
- load code only when it is needed
split our code into multiple chunks, into multiple bundles, which are then each only downloaded when they are needed.

//.lazy()
a built-in method that will help us with code splitting.

//React.lazy(() => import('./pages/NewQuote'))
this function here we pass to React lazy, will be executed by React when this new quote component is needed.

//<Suspense> </Suspense>
We need to wrap this around the code, where we use React lazy.

//App.js
import React, { Suspense } from 'react';    //import Suspense 
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));    //implement Lazy Loading here, import() passing URL path to it
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));

function App() {
  return (
    <Layout>
      <Suspense   //using Suspense
        fallback={    //set a fallback prop
          <div className='centered'>
            <LoadingSpinner />    //fallback UI when the code is loading that takes a bit longer
          </div>
        }
      >
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
  
