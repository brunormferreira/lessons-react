import React from 'react';
import './App.css';
import { MyContextProvider, useMyContext } from './context/index';

const App = () => {
  const { state, dispatch } = useMyContext();
  const { count } = state;
  
  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  }
  
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  }
  return (
    <MyContextProvider>
      <div className="App">
        <h2>Counter</h2>
        <div>
          <button onClick={handleIncrement}>-</button>
          <span>{count}</span>
          <button onClick={handleDecrement}>+</button>
        </div>
      </div>
    </MyContextProvider>
  );
}

export default App;
