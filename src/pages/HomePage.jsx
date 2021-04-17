import { useState, useEffect } from 'react';
import { fetchTrendMovies } from '../API/moviesAPI';
import MoviesList from '../components/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const moviesData = await fetchTrendMovies();
      setMovies(moviesData);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Most popular movies in the world</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
