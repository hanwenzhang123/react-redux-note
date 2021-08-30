//Configuring Custom Hooks
We make them reusable and configurable, by accepting arguments, parameters.
Just as our components receive props, and just as any function in JavaScript,
or programming in general, can accept parameters,
custom hooks, since they are just functions can also accept parameters.


//use-counter.js
import { useState, useEffect } from 'react';

const useCounter = (forwards = true) => {   //parameter - indicator that control how the counter changes, we set a default value
  const [counter, setCounter] = useState(0);

  useEffect(() => {     //so that this EFFECT will rerun whenever this dependency changes.
    const interval = setInterval(() => {
      if (forwards) {           //update counter based on the condition
        setCounter((prevCounter) => prevCounter + 1); 
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);     //it is a value that we get as a parameter, we have to add the argument as dependency

  return counter;
};

export default useCounter;


//ForwardCounter.js
import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter();   //here we do not need an argument since we have a default value as true

  return <Card>{counter}</Card>;
};

export default ForwardCounter;


//BackwardCounter.js
import Card from './Card';
import useCounter from '../hooks/use-counter';

const BackwardCounter = () => {
  const counter = useCounter(false);    //set it as false, so we go backwards

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
 
