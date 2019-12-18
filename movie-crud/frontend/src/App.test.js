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

  it('should handle data input title form', () => {
    const { getByPlaceholderText } = render(<App />)
    const movieTitleInput = getByPlaceholderText('enter movie title')
    fireEvent.change(movieTitleInput, { target: { value: 'Deadpool' }})
    expect(movieTitleInput).toHaveProperty('value', 'Deadpool')   
  })

  it('should handle data input genre form', () => {
    const { getByPlaceholderText } = render(<App />)
    const movieGenreInput = getByPlaceholderText('enter movie genre')
    movieGenreInput.value = 'action'
    expect(movieGenreInput.value).toEqual('action')
  })

  it('should handle data input year and producer form', () => {
    const { getByPlaceholderText } = render(<App />)
    const movieYearInput = getByPlaceholderText('enter movie year')
    const movieProducerInput = getByPlaceholderText('enter movie producer')
    fireEvent.change(movieYearInput, { target: { value: '1989' }})
    movieProducerInput.value = 'Meeko Matram'
    expect(movieYearInput).toHaveProperty('value', '1989')
    expect(movieProducerInput.value).toEqual('Meeko Matram')
  })

  it('should dispair button submit event', () => {
    const { getByTestId } = render(<App />)
    const submitButton = getByTestId('submit-button');
    fireEvent.click(getByTestId('submit-button'))
    expect(submitButton).toBeInTheDocument();
  })

  // it.only('should not handle wrong data input', () => {
  //   const { getByPlaceholderText } = render(<App />)
  //   const movieTitleInput = getByPlaceholderText('enter movie title')
  //   movieTitleInput.value = null
  //   expect(movieTitleInput.value).toBeNull()
  // })

  // it.only('should render image input', () => {
  //   const movieImageInput = render(<App />);
  //   expect(movieImageInput.find("img").prop("src")).to.have.length(1)
  // })
});