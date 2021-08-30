//App.js
import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';     //here we pass our custom hooks

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();    //here we call useHttp() our custom hooks
                                  //destructuring, rename sendRequest as fetchTasks inside this component function
  useEffect(() => {
    const transformTasks = (tasksObj) => {    //pass the tasksObj as the parameter
      const loadedTasks = [];

      for (const taskKey in tasksObj) {     //here we use for in loop to push each value to the loadedTasks
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);    //we save it to the state, guaranteed to not change so no needs to add as dependency
    };

    fetchTasks(   //this is the sendRequest in the useHttp() custom hook
      { url: 'https://react-http-6b4a6.firebaseio.com/tasks.json' },
      transformTasks      //create transformTasks for HTTP
    );
  }, [fetchTasks]);   //fetchTasks as the dependency in useEffect, every data or function which is setup inside of useEffect should be added as a dependency

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;


//hooks/use-http.js
import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {     //using callback
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);   //no dependency because all data is operating on is received as parameters, we have got no external dependencies here.

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;

  
