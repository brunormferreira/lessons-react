import axios from 'axios';

const pathUrl = '/movies'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/'
});

const getAllMovies = async () => {
  return axiosInstance
    .get(pathUrl)
    .then(({ data }) => data)
}

export { getAllMovies }