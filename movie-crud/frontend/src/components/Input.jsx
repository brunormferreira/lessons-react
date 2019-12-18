import React, { useState } from 'react';

const Input = props => {
  const [name, setName] = useState("");
  return (
    <div style={{marginBottom: '20px'}}>
      <span data-testid="change-input-greeting">
        Welcome, {name === "" ? "Anonymous User" : name}!
      </span>
      <br />
      <input 
        type={props.type || 'text'}
        aria-label="user-name" 
        placeholder={props.placeholder || 'enter your name here'}
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
}

export default Input;