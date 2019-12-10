import React from 'react';
import './movieTable.css';

const MovieTable = props => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Genre</th>
        <th>Year</th>
        <th>Producer</th>
      </tr>
    </thead>
    <tbody>
    {props.movies.length > 0 ? (
        props.movies.map(movie => (
          <tr key={movie.id}>
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
