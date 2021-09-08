//Where to put our logic (code)? Where should our logic (code) go?
Fat Reducers vs Fat Components vs Fat Actions
- synchoronous, side-effect free code (i.e. data transformations)
    - prefer reducers
    - avoid action creatos or components
- async code or code with side-effects
    - prefer action creatos or components
    - avoid reducers

//A Problem with useEffect()
We face one problem when using useEffect the way we currently do it: It will execute when our app starts.
Why is this an issue?
It is a problem because this will send the initial (i.e. empty) cart to our backend and overwrite any data stored there.


//App.js
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart); //hold the overall cart, useSelector will get the most updated one

  useEffect(() => {
    //you can set the useEffect anywhere in the project
    fetch("https://react-http-6b4a6.firebaseio.com/cart.json", {
      method: "PUT", //store data, overwrite existing data
      body: JSON.stringify(cart),
    });
  }, [cart]); //dependency, re-execute the useEffect function when the cart changes

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;


//components/Shop/ProductItem.js
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
  
