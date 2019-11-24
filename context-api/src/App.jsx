import React from 'react';
import MyProvider from './context/ProviderA';
import './App.css';

import B from './ComponentB';

const App = () => {
  return (
    <MyProvider>
      <div>
        <B />
      </div>
    </MyProvider>
  );
} 

export default App;
