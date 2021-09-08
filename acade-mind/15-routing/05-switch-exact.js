//Using "Switch" and "exact" For Configuring Routes
//Switch
The switch component, can be wrapped around your route components.
So you add the opening and closing tags around all these routes.
And then only one of these routes, will be active at the same time.
And it will be the route which is matched first.

//exact
With exact, we do not look at the beginning of the path but we only match full paths.
The route should only lead to a match if we have an exact route match.

  
//App.js
import { Route, Switch } from 'react-router-dom';   // import Switch

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>    //wrap around all these routes between the Switch tag - then only one of these routes will be active at the same time.
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>  //add "exact" prop - this should only lead to a match if we have an exact match.
            <Products />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>    //wrap around all these routes between the Switch tag - then only one of these routes will be active at the same time.
      </main>
    </div>
  );
}

export default App;


//pages/Products.js - Adding Links
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>A Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
