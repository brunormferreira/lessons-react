import axios from 'axios';

const pathUrl = 'http://localhost:3001/movies'

const getAllMovies = async () => {
  return axios
    .get(pathUrl)
    .then(({ data }) => data)
}

export { getAllMovies }