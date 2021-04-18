import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { fetchTrendMovies } from '../API/moviesAPI';
import MoviesList from '../components/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const moviesData = await fetchTrendMovies();
      setMovies(moviesData);
      setError(false);
    } catch (err) {
      setError(`${err}`);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="PageTitle">Most popular movies in the world</h1>
      {error && <p>Oops, error : {error}</p>}
      <CSSTransition
        in={!isLoading}
        classNames="fade"
        unmountOnExit
        timeout={1000}
      >
        <MoviesList movies={movies} />
      </CSSTransition>
    </>
  );
};

export default HomePage;
