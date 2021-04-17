import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: apiKey,
};

export const fetchTrendMovies = () => {
  return axios.get(`/trending/all/day`).then(({ data: { results } }) => {
    console.log(results);
    return results;
  });
};
export const searchMovies = (query = '') => {
  return axios
    .get(`/search/movie?query=${query}`)
    .then(({ data: { results } }) => {
      console.log(results);
      return results;
    });
};

export const fetchhMovieInfo = movieId => {
  return axios.get(`/movie/${movieId}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const fetchhMovieCast = movieId => {
  return axios.get(`/movie/${movieId}/credits`).then(({ data: { cast } }) => {
    console.log(cast);
    return cast;
  });
};

export const fetchhMovieReviews = movieId => {
  return axios
    .get(`/movie/${movieId}/reviews`)
    .then(({ data: { results } }) => {
      console.log(results);
      return results;
    });
};
