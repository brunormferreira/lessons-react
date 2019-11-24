import React from 'react';
import ThemeContext from './ThemeContext';

const C = () => (
  <ThemeContext.Consumer>
    {context => (
      <React.Fragment>
        <p>Age: {context.age}</p>
        <p>Name: {context.name}</p>
      </React.Fragment>
    )}
  </ThemeContext.Consumer>
);

export default C;

// const color = React.useContext(ThemeContext);