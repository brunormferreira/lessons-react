import React, { useState, useEffect } from 'react'
import './editMovieForm.css'

const EditMovieForm = props => {
  const [movie, setMovie] = useState(props.movieUpdated)

  useEffect(() => {
    setMovie(props.movieUpdated)
  }, [props])

  const handleEditMovieChange = event => {
    const { name, value } = event.target

    setMovie({ ...movie, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.editMovie(movie.id, movie)
      }}
    >
      <label htmlFor="title">Title</label>
      <input type="text" value={movie.title} onChange={handleEditMovieChange} name="title" />

      <label htmlFor="genre">Genre</label>
      <input type="text" value={movie.genre} onChange={handleEditMovieChange} name="genre" />

      <label htmlFor="year">Year</label>
      <input type="text" value={movie.year} onChange={handleEditMovieChange} name="year" />

      <label htmlFor="producer">Producer</label>
      <input type="text" value={movie.producer} onChange={handleEditMovieChange} name="producer" />

      <label htmlFor="poster">Url Poster</label>
      <input type="text" value={movie.poster} onChange={handleEditMovieChange} name="poster" />
      <hr />
      <button className="button rox-button">Update Movie</button>
      <button onClick={() => props.setEditing(false)} className="button basic-button">
        Cancel
      </button>
    </form>
  )
}

export default EditMovieForm