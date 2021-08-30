//Using Custom Hooks
If we use a custom hook in multiple components, every component will receive its own state.
For every component, the custom hook is executed again.
And every component instance then receives its own state.
So it is just a logic which has shared, not the concrete state.

//hooks/use-counter.js - a custom hook function
import { useState, useEffect } from 'react';

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;


//components/ForwardCounter.js
import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter();     //receives its own state, use just like the build-in hooks

  return <Card>{counter}</Card>;    //use the counter for the useCounter return value
};

export default ForwardCounter;
  
