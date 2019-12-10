import React from 'react';
import './movieTable.css';

const MovieTable = () => (
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
      <tr>
        <td>Batman</td>
        <td>Action</td>
        <td>1989</td>
        <td>Mr. Test</td>
        <td>
          <button className="button muted-button">Edit</button>
          <button className="button muted-button">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
)

export default MovieTable;
