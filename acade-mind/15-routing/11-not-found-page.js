//Adding A Not Found Page
//404 Page

//src/pages/NotFound.js
const NotFound = () => {
  return (
    <div className='centered'>
      <p>Page not found!</p>
    </div>
  );
};

export default NotFound;


//src/App.js
import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
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
        <Route path='*'>    //no other route match, then we go not found page, * is the wild card
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
