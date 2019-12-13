import React, { useState, useEffect, Fragment } from 'react';
import './App.css'

import MovieTable from './components/movieTable';
import EditMovieForm from './components/editMovieForm'
import * as MoviesServices from './services/api'

const App = () => {
  const initialFormState = { id: null, title: '', genre: '', year: '', producer: '', poster: '' }

  const [movies, setMovies] = useState([])
  const [newMovie, setNewMovie] = useState(initialFormState)
  // eslint-disable-next-line
  const [editing, setEditing] = useState(false)
  const [movieUpdated, setMovieUpdated] = useState(initialFormState)

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
    setNewMovie(initialFormState)
  }
  
  const deleteMovie = (id) => {
    setEditing(false)
    MoviesServices
      .deleteMovieById(id)
      .then(() => {
        const updatedMovies = movies.filter(movie => movie.id !== id)
        setMovies(updatedMovies)
      })
  }

  const editMovie = (id, updatedMovie) => {
    setEditing(false)
    MoviesServices
      .updateMovie(id, updatedMovie)
      .then(() => {
        const updatedEditMovieState = movies.map(movie => (movie.id === id ? updatedMovie : movie))
        setMovieUpdated(updatedEditMovieState)
        setMovies(updatedEditMovieState)
      })
  }
    
  const editRow = movie => {
    setEditing(true)

    setMovieUpdated({ 
      id: movie.id, 
      title: movie.title, 
      genre: movie.genre, 
      year: movie.year, 
      producer: movie.producer, 
      poster: movie.poster 
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
        {editing ? (
          <Fragment>
            <h2>Edit movie</h2>
            <EditMovieForm
              editing={editing}
              setEditing={setEditing}
              movieUpdated={movieUpdated}
              editMovie={editMovie}
            />
          </Fragment>
        ) : (
          <Fragment>
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
          </Fragment>
        )}
        </div>
        <div className="flex-large">
          <h2>View movies</h2>
          <MovieTable movies={movies} deleteMovie={deleteMovie} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
