import React from 'react';
import './App.css';

import MovieTable from './components/movieTable';

const App = () => {
  const initialMovieState = {
    "id": 1,
    "title": "X-MEN: APOCALYPSE",
    "genre": "action",
    "year": "2016",
    "producer": "Fox",
    "poster": "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e6/Xmen_apocalypse_ver18.jpg/250px-Xmen_apocalypse_ver18.jpg"
  }

  return (
    <div className="container">
      <h1>CRUD App-Movies with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add movie</h2>
        </div>
        <div className="flex-large">
          <h2>View movies</h2>
          <MovieTable />
        </div>
      </div>
    </div>
  );
}

export default App;
