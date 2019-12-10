import React, { useState, useEffect } from 'react';

import MovieTable from './components/movieTable';
import * as MoviesServices from './services/api'

const App = () => {
  const initialMovieState = [
    {
    "id": 1,
    "title": "X-MEN: APOCALYPSE",
    "genre": "Action",
    "year": "2016",
    "producer": "Fox",
    "poster": "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e6/Xmen_apocalypse_ver18.jpg/250px-Xmen_apocalypse_ver18.jpg"
    },
    {
    "id": 2,
    "title": "Friday 13",
    "genre": "Horror",
    "year": "2016",
    "producer": "X",
    }
  ]

  const [movies, setMovies] = useState(initialMovieState)
  const [data, setData] = useState({})

  useEffect(() => {
    MoviesServices
      .getAllMovies()
      .then(r => {
        setData(r.data)
        console.log(r)
        console.log(data)
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
