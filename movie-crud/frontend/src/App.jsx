import React, { useState, useEffect } from 'react';
import './App.css'

import MovieTable from './components/movieTable';
import * as MoviesServices from './services/api'

const App = () => {
  const initialFormState = { id: null, title: '', genre: '', year: '', producer: '', poster: '' }
  const [movies, setMovies] = useState([])
  const [newMovie, setNewMovie] = useState(initialFormState)

  useEffect(() => {
    MoviesServices
      .getAllMovies()
        .then(data => {
        setMovies(data)
    })
  }, [])

  const addMovie = (event) => {
    event.preventDefault()
    MoviesServices
      .saveMovies(newMovie)
      .then(data => {
        setMovies(movies.concat(data))
    })

    // if (!newMovie.title || !newMovie.genre || !newMovie.year) return
    setNewMovie(initialFormState)
  }
  
  const deleteMovie = (id) => {
    MoviesServices
      .deleteMovieById(id)
      .then(() => {
        const updatedMovies = movies.filter(movie => movie.id !== id)

        setMovies(updatedMovies)
      })
    }

  const handleMovieChange = (event) => {
    const { name, value } = event.target

    const objectMovie = {
      ...newMovie,
      [name]: value,
    }

    setNewMovie(objectMovie)
  }

  return (
    <div className="container">
      <h1>CRUD App-Movies with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add movie</h2>
          <form onSubmit={addMovie}>
            <label htmlFor="title">Title</label>
            <input type="text" value={newMovie.title} onChange={handleMovieChange} name="title" />

            <label htmlFor="genre">Genre</label>
            <input type="text" value={newMovie.genre} onChange={handleMovieChange} name="genre" />

            <label htmlFor="year">Year</label>
            <input type="text" value={newMovie.year} onChange={handleMovieChange} name="year" />

            <label htmlFor="producer">Producer</label>
            <input type="text" value={newMovie.producer} onChange={handleMovieChange} name="producer" />

            <label htmlFor="poster">Url Poster</label>
            <input type="text" value={newMovie.poster} onChange={handleMovieChange} name="poster" />
            <hr />
            <button className="button basic-button" type="submit">Save</button>
          </form>
        </div>
        <div className="flex-large">
          <h2>View movies</h2>
          <MovieTable movies={movies} deleteMovie={deleteMovie} />
        </div>
      </div>
    </div>
  );
}

export default App;
