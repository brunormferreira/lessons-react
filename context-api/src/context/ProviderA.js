import React from 'react';
import ThemeContext from './ThemeContext';

export const state = {
  name: 'Bruno',
  age: 23,
}

const MyProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{
      state
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default MyProvider;