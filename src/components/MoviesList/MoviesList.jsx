import { Link, withRouter, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useStyles from './MoviesListStyles';
import notAvailable from '../../images/notFound.jpg';

const MoviesList = ({ movies, query }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <ul className={classes.MoviesList}>
      {movies.map(({ id, title, name, poster_path }) => {
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : notAvailable;
        return (
          <li key={id} className={classes.MoviesListItem}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location, query },
              }}
            >
              <img src={poster} alt={title} />
              <p>{title ? title : name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.defaultProps = {
  query: '',
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})),
  query: PropTypes.string,
};

export default withRouter(MoviesList);
