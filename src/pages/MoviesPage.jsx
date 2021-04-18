import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { searchMovies } from '../API/moviesAPI';
import MoviesList from '../components/MoviesList';

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [inputquery, setInputQuery] = useState(location?.state?.query || '');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const moviesData = await searchMovies(inputquery);
      setMovies(moviesData);
      setError(false);
      history.push({ ...location, search: `?query=${inputquery}` });
    } catch (err) {
      setError(`${err}`);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!inputquery) return;
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    setInputQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchData();
  };
  return (
    <>
      <h1 className="PageTitle">Search your favourite movie</h1>
      <div className="form">
        <form className="form__group" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={inputquery}
            autoComplete="off"
            autoFocus
            onChange={handleChange}
          />
          <button type="submit" className="form__group__btn">
            Search
          </button>
        </form>
      </div>
      {error && <p className="notification error">Oops, error : {error}</p>}
      {movies.length === 0 && <p className="notification">No results</p>}
      <CSSTransition
        in={!isLoading}
        classNames="fade"
        unmountOnExit
        timeout={1000}
      >
        <MoviesList movies={movies} query={inputquery} />
      </CSSTransition>
    </>
  );
};

export default MoviesPage;
