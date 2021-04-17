/* eslint-disable react/jsx-no-target-blank */
import PropTypes from 'prop-types';

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
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="350px"
        />
        <div>
          <h2>{title}</h2>
          <h3>{tagline}</h3>
          <p>Release date: {release_date}</p>
          {budget !== '0' ? <p>Budget: {budget}$</p> : <></>}
          <p>
            <a href={homepage} target="_blank">
              WebSite
            </a>
          </p>

          <p>Rating: {vote_average}</p>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
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
