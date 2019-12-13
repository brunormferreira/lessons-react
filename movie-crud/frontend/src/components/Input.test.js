import React from 'react';
import Input from './Input';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Input', () => {
  it('displays the correct greeting', () => {
    const { getByLabelText, getByTestId } = render(<Input />);
    
    const input = getByLabelText("user-name");
    const greeting = getByTestId("change-input-greeting");

    expect(input.value).toBe("");
    expect(greeting.textContent).toBe("Welcome, Anonymous User!")
    
    fireEvent.change(input, { target: { value: "Thiago" }});

    expect(input.value).toBe("Thiago");
    expect(greeting.textContent).toBe("Welcome, Thiago!");
  });

  it('should render input with password type', () => {
    const { getByLabelText } = render(<Input type="password" />);

    const input = getByLabelText("user-name")

    expect(input.type).toBe("password")
  })

  it('should render input with correct placeholder', () => {
    const { getByLabelText } = render(<Input placeholder="meu placeholder" />);

    const input = getByLabelText("user-name")

    expect(input.placeholder).toBe("meu placeholder")
  })
})