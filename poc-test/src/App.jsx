import React from 'react';
import './App.css';
import { MyContextProvider, useMyContext } from './context/index';

const App = () => {
  // extract to a new component
  const { state, dispatch } = useMyContext();
  const { count } = state;
  
  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT_ONE' });
  }
  
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT', payload: 5 });
  }
  return (
    <MyContextProvider>
      // extract to a new component
      <div className="App">
        <h2>Counter</h2>
        <div>
          <button onClick={handleIncrement}>+</button>
          <span>{count}</span>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
    </MyContextProvider>
  );
}

export default App;
