//Sending HTTP requests (connecting to a database)
- how do react apps interact with database?
- sending HTTP requests and using responses
- handling errors and loading state

//How to (not) connect to a database
browser-side apps do not directly talk to databases
React App -X- Database (SQL, NoSQL) - Backend App (NodeJS App, PHP App) - React App
Database credential would be exposed in the broswer performance issues

React is able to talk to a backend but not to a database directly for a security and performance reasons.


//Backend API 
//API - Application Programming Interface - rules to do certain tasks
use the fetch API or a third-party libraries to perform the request,
get the response, analyze the response and maybe throw and generate an error if it is needed,
or work with the data you get back as part of the response.
You can send both get and post requests,
you can handle different States which are involved with sending requests.
A loading and an error State.
 

//Initial Code
//App.js
import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;


//MovieList
import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;


//Movie.js
import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
 
