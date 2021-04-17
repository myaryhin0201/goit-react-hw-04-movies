import { Link, withRouter, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import notAvailable from '../../images/notFound.jpg';

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

const MoviesList = ({ movies, query }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <ul className={classes.list}>
      {movies.map(({ id, title, name, poster_path }) => {
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : notAvailable;
        return (
          <li key={id} className={classes.item}>
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
