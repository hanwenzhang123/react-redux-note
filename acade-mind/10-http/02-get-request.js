//Sending a GET request
Axios - sending HTTP request - https://github.com/axios/axios
Fetch API - build in methods in JavaScript

//App.js
import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);   //state updating function

  //fetch .then() way getting response
  function fetchMoviesHandler() {     //fetch API here
    fetch('https://swapi.dev/api/films/')   //async task, promise based, default - get
      .then((response) => {       //react to the response
        return response.json();   //transform response body by build-in method .json()
      })                          //return the promise; json - exchanging data, 
      .then((data) => {         //passing in the data transformed from json body
        const transformedMovies = data.results.map((movieData) => {   //convert every objectc in the result array, store the result
          return {      //return a new object, transform the data to our format
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);   //set it as new "movies" state
      });
  }
  
  //async await way getting response - same as above
    async function fetchMoviesHandler() {
    const response = await fetch('https://swapi.dev/api/films/');
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
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
