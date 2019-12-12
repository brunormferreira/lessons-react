import axiosInstance from './config'

const pathUrl = '/movies'

const getAllMovies = async () => {
  return axiosInstance
    .get(pathUrl)
    .then(({ data }) => data)
}

const saveMovies = async (movieObject) => {
  return axiosInstance
    .post(pathUrl, movieObject)
    .then(({ data }) => data)
}

const deleteMovieById = async (id) => {
  return axiosInstance
    .delete(`${pathUrl}/${id}`)
    .then(({ data }) => data)
}

export { getAllMovies, saveMovies, deleteMovieById }