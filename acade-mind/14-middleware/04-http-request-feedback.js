//Handling HTTP states & Feedback with Redux

//App.js
import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();   //for actions
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);   //notification state

  useEffect(() => {
    const sendCartData = async () => {  //since it is an async function, this send cart data function returns a promise, so we can call catch on it.
      dispatch(
        uiActions.showNotification({    //initial notification before the firebased updated successfully
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');   //throw the error if response not okay
      }

      dispatch(
        uiActions.showNotification({    //a new notification after sucessfully updated to the firebase
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    };

    if (isInitial) {    //if initial, and set it to false, return back, and then it would never happen again
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {   //catch the error that we get from throwing the data, we call catch since async function returns a promise
      dispatch(
        uiActions.showNotification({    //show notification for errors
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    });   //dispatch will never trigger this effect to re-run, only cart changes will.
  }, [cart, dispatch]);   //dispatch function that created by useDispatch() also a dependency

  return (
    <Fragment>
      {notification && (    //only render notification when it is truthy
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;


//store/ui-slice.js
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false, notification: null },   //add notification
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {   //add a new reducer
      state.notification = {      //expected object 
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
