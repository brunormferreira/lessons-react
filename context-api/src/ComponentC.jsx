import React from 'react';
import ThemeContext from './context/ThemeContext';

const C = () => (
  <ThemeContext.Consumer>
    {context => (
      <React.Fragment>
        <p>Age: {context.state.age}</p>
        <p>Name: {context.state.name}</p>
      </React.Fragment>
    )}
  </ThemeContext.Consumer>
);

export default C;

// const color = React.useContext(ThemeContext);