import React from 'react';
import ThemeContext from './ThemeContext';

const MyProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{
      name: 'Bruno',
      age: 23
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default MyProvider;