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
      <input type="text" value={movie.title} onChange={handleEditMovieChange} name="title" placeholder="enter movie title" />

      <label htmlFor="genre">Genre</label>
      <input type="text" value={movie.genre} onChange={handleEditMovieChange} name="genre" placeholder="enter movie genre" />

      <label htmlFor="year">Year</label>
      <input type="text" value={movie.year} onChange={handleEditMovieChange} name="year" placeholder="enter movie year" />

      <label htmlFor="producer">Producer</label>
      <input type="text" value={movie.producer} onChange={handleEditMovieChange} name="producer" placeholder="enter movie producer" />

      <label htmlFor="poster">Url Poster</label>
      <input type="text" value={movie.poster} onChange={handleEditMovieChange} name="poster" placeholder="enter movie poster" />
      <hr />
      <button className="button rox-button">Update Movie</button>
      <button onClick={() => props.setEditing(false)} className="button basic-button">
        Cancel
      </button>
    </form>
  )
}

export default EditMovieForm