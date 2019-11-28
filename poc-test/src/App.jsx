import React from 'react';
import { MyContextProvider } from './context/index';
import MyConsumer from './MyConsumer.jsx';

const App = () => {

  return (
    <MyContextProvider>
      <div className="App">
        <MyConsumer />
      </div>
    </MyContextProvider>
  );
}

export default App;
