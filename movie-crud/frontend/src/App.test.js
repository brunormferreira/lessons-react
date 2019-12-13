import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('tests about app component', () => {
  test('render crud title', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/CRUD/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('render movie table title', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/View/i);
    expect(linkElement).toBeInTheDocument();
  });
});