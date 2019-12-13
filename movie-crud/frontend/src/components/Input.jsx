import React, { useState } from 'react';

const Input = props => {
  const [name, setName] = useState("");
  return (
    <div>
      <span data-testid="change-input-greeting">
        Welcome, {name === "" ? "Anonymous User" : name}!
      </span>
      <br />
      <input 
        type={props.type || 'text'}
        aria-label="user-name" 
        placeholder={props.placeholder || 'Default placeholder'}
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
}

export default Input;