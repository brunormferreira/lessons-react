import React from 'react';
import './movieTable.css';

const MovieTable = props => (
  <table>
    <thead>
      <tr>
        <th>Poster</th>
        <th>Title</th>
        <th>Genre</th>
        <th>Year</th>
        <th>Producer</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.movies.length > 0 ? (
        props.movies.map(movie => (
          <tr key={movie.id}>
            <td>
              <img src={movie.poster} alt={movie.title} />
            </td>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
            <td>{movie.producer}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No movies</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default MovieTable;
