import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

// import MovieTable from './components/movieTable';
// import EditMovieForm from './components/editMovieForm'

describe('Movie Form', () => {
  it('should render crud title', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/CRUD/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should render movie table title', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/View/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should submit the form', () => {
    const { getByText, getByPlaceholderText } = render(<App />)

    const movieTitleInput = getByPlaceholderText('enter movie title')
    fireEvent.change(movieTitleInput, { target: { value: 'Deadpool' }})

    // const movieGenreInput = getByPlaceholderText('enter movie genre')
    // movieGenreInput.value = 'action'

    // fireEvent.click(
    //   getByText('Save')
    // )

    expect(movieTitleInput).toHaveProperty('value', 'Deadpool')
    // expect(movieGenreInput.value).toEqual('action')
  })
  
  // test('render movie table component', () => {
  //   const { getByPlaceholderText} = render(<MovieTable />);
  //   const linkElement = getByPlaceholderText(/enter/i);
  
  //   expect(linkElement).toBe(true);
  // })

});