import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { searchMovies } from '../API/moviesAPI';
import MoviesList from '../components/MoviesList';

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [inputquery, setInputQuery] = useState(location?.state?.query || '');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!inputquery) return;
    searchMovies(inputquery).then(query => {
      setMovies(query);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = e => {
    setInputQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(inputquery).then(query => {
      setMovies(query);
      history.push({ ...location, search: `?query=${inputquery}` });
    });
  };
  return (
    <>
      <h1>Search your favourite movie</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={inputquery}
          autoComplete="off"
          autoFocus
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      {movies.length === 0 && <p>No results</p>}
      <MoviesList movies={movies} query={inputquery} />
    </>
  );
};

export default MoviesPage;
