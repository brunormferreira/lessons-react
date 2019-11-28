import React from 'react';
import './MyConsumer.css';
import { useMyContext } from './context/index';

const MyConsumer = () => {
  const { state, dispatch } = useMyContext();
  const { count } = state;
  
  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT_ONE' });
  }
  
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT', payload: 5 });
  }
  return (
    <div className="App">
      <h2>Counter</h2>
      <div>
        <button onClick={handleIncrement}>+</button>
        <span>{count}</span>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

export default MyConsumer;
