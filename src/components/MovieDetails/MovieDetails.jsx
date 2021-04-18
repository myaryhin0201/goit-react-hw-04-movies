/* eslint-disable react/jsx-no-target-blank */
import PropTypes from 'prop-types';
import useStyles from './MovieDetailsStyles';

const MovieDetails = ({
  title,
  tagline,
  overview,
  poster_path,
  genres,
  release_date,
  vote_average,
  budget,
  homepage,
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.MovieDetailsContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="400px"
        />
        <div className={classes.MovieDetails}>
          <h2 className={classes.MovieDetailsTitle}>{title}</h2>
          <div className={classes.MovieBaseDetails}>
            <h3 className={classes.MovieDetailsTagline}>{tagline}</h3>
            <p>
              Release date: <span>{release_date}</span>
            </p>
            {budget !== '0' ? (
              <p>
                Budget: <span>{budget}$</span>
              </p>
            ) : (
              <></>
            )}
            <p>
              Official website:{' '}
              <a href={homepage} target="_blank">
                {homepage}
              </a>
            </p>
            <p>
              Rating: <span>{vote_average}</span>
            </p>
            <p>Overview: {overview}</p>
            <h4>Genres</h4>
            <ul className={classes.Genres}>
              {genres &&
                genres.map(({ id, name }) => (
                  <li key={id}>
                    <span>{name}</span>{' '}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  budget: PropTypes.string.isRequired,
  homepage: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MovieDetails;
