import { useEffect, useState } from 'react';
import { fetchhMovieCast } from '../../API/moviesAPI';
import useStyles from './CastStyles';
import defaultAvatar from '../../images/avatar.jpg';

const Cast = ({ match }) => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const movieId = Number(match.params.movieId);

  const fetchData = async () => {
    try {
      const movieCast = await fetchhMovieCast(movieId);
      setCast(movieCast);
      setError(false);
    } catch (err) {
      setError(`${err}`);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const classes = useStyles();
  return (
    <>
      <h5 className="AddTitle">Cast: </h5>
      {error && <p>Oops, error : {error}</p>}
      <ul className={classes.CastList}>
        {cast.map(({ id, name, character, profile_path }) => {
          const imgUrl = profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultAvatar;
          return (
            <li className={classes.CastListItem} key={id}>
              <img src={imgUrl} alt={name} />
              <div>
                <p>{name} </p>
                <p> {character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
