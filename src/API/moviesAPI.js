import axios from 'axios';

const apiKey = '907ef2490a0f9ad89c1d3bf5ec5b623a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// {
//   // searchQuery = '',
//   // currentPage = 1,
//   // perPage = 9,
// },

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

export const fetchMovies = (searchQuery = '', currentPage = 1, perPage = 9) => {
  return axios
    .get(`trending/movie/week?api_key=${apiKey}`)
    .then(({ data: { results } }) => results);
};
