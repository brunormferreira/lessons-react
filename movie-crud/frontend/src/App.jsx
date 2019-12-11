import React, { useState, useEffect } from 'react';
import './App.css'

import MovieTable from './components/movieTable';
import * as MoviesServices from './services/api'

const App = () => {
  const [movies, setMovies] = useState([])
  // const [newMovie, setNewMovie] = useState([])

  useEffect(() => {
    MoviesServices
      .getAllMovies()
        .then(data => {
        setMovies(data)
    })
  }, [])

  // const addMovie = (event) => {
  //   event.preventDefault()
  //   const movieObject = {
  //     newMovie
  //   }
    
  //   MoviesServices
  //   .saveMovies(movieObject)
  //   .then(data => {
  //       setMovies(movies.concat(data))
  //       setNewMovie([])
  //     })
  //   }
    
  // const handleMovieChange = (event) => {
  //   const { id, title, genre, year, producer, poster, value } = event.target
  //   setNewMovie(event.target.value)
  // }
  // Read => https://stackoverflow.com/questions/54159255/display-data-from-axios-post-request-in-react-using-hooks

  return (
    <div className="container">
      <h1>CRUD App-Movies with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add movie</h2>
          {/* <form onSubmit={addMovie}>
            <input
              value={newMovie}
              onChange={handleMovieChange}
            />
            <button type="submit">save</button>
          </form> */}
        </div>
        <div className="flex-large">
          <h2>View movies</h2>
          <MovieTable movies={movies} />
        </div>
      </div>
    </div>
  );
}

export default App;
