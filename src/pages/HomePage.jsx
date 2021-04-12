import { classes } from 'istanbul-lib-coverage';
import { useState, useEffect } from 'react';
import { fetchMovies } from '../API/moviesAPI';
import { createUseStyles } from 'react-jss';
import Loader from '../components/Loader';
const useStyles = createUseStyles({
  list: {
    margin: '20px 20px',
  },
  item: {
    fontSize: '25px',
    '&:not(:last-child)': {
      marginBottom: '10px',
    },
  },
});
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    setIsLoading(true);
    fetchMovies()
      .then(results => {
        const movieData = results.map(
          ({ id, original_title, poster_path }) => ({
            id,
            original_title,
            poster_path,
          }),
        );
        setMovies([...movieData]);
      })
      .catch(error => setError(error));
    setIsLoading(false);
  };
  const classes = useStyles();
  return (
    <>
      <h1>HomePage</h1>
      {error ? (
        <h2>OMG. Check connect to the internet(((</h2>
      ) : (
        <ul className={classes.list}>
          {isLoading && <Loader />}
          {movies.map(({ id, original_title, poster_path }) => (
            <li key={id} className={classes.item}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={original_title}
                width="250px"
              />
              {original_title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HomePage;
