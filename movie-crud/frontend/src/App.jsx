import React, { useState, useEffect } from 'react';
import './App.css'

import MovieTable from './components/movieTable';
import * as MoviesServices from './services/api'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    MoviesServices
      .getAllMovies()
        .then(data => {
        setMovies(data)
    })
  }, [])

  return (
    <div className="container">
      <h1>CRUD App-Movies with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add movie</h2>
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
