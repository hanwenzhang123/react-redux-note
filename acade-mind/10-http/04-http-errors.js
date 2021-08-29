//Handling HTTP Errors
when we use async await, we use try catch to catch any potential error
if we use fetch .then(), we use .catch() to catch the error

fetch API has a ok field in the response we get
the response also has a status field which holds the concrete response status code

//using useEffect() for Requests

//App.js
import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);   //handle error, initally null, we have no errors

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {   //if the response from the url api is not okay
        throw new Error('Something went wrong!'); //throw an error so we would not go next steps in lines
      }               //we would go straight to the catch block from the error we throw

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {   //catch if any error
      setError(error.message);  //error is the string, message is 'Something went wrong!'
    }
    setIsLoading(false);      //set the loading to false at the end no matter successful or failed
  }
  
  //content is dynamic, we set the content based on the if check
  let content = <p>Found no movies.</p>; 

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
