//Building a custom HTTP hooks
a custom hook is more generic so we can pass down to use it with components

//hooks/use-http.js
import { useState } from 'react';

const useHttp = (requestConfig, applyData) => {   //must start with use, pass in params requestConfig object and applyData function
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {     //send request with a more generic name
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {   //the requestConfig is passed in with dynamic url 
        method: requestConfig.method ? requestConfig.method : 'GET',    //check with a default value
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,  //json transformation
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);    //here we pass the data converted through json to the function applyData that passed as an argument
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return {    //return where the custom hoook are used, here we return an object
    isLoading,      //isLoading: isLoading (same property names so we can use new JS shortcut syntax)
    error,          //error: error
    sendRequest,    //sendRequest: sendRequest
  };
};

export default useHttp;
  
