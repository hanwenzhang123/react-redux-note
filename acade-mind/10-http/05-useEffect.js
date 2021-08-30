//using useEffect() for Requests
fetch data as soon as a certain component loads, immediately start fetching data
sending HTTP request is a side effect which ultimately changes our component states
side effect goes into useEffect as componen render cycle

here we use useEffect for requests
send a HTTP request immediately when a component loads and not just when a button is clicked


//App.js
import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {    //useCallback Hooks to avoid external infinite tasks
    setIsLoading(true);         //if we have external state do task with this function that causes infinite loop to effect as dependecy
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/'); //fetch is global browser api, not a dependency
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);     //updated function do not need to add as dependencies because react guarantees they never change
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);   //dependency for useCallback, here no callback dependency

  useEffect(() => {   //click the button or when the component re-evaluated
    fetchMoviesHandler();   //call fetchMoviesHandler() function
  }, [fetchMoviesHandler]);   //dependency of this effect, we would call only if the dependency changes to avoid infinite task

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
