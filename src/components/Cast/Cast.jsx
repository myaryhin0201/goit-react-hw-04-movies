import { useEffect, useState } from 'react';
import { fetchhMovieCast } from '../../API/moviesAPI';
import defaultAvatar from '../../images/avatar.jpg';

const Cast = ({ match }) => {
  const [cast, setCast] = useState([]);
  const movieId = Number(match.params.movieId);

  useEffect(() => {
    async function fetchData() {
      const movieCast = await fetchhMovieCast(movieId);
      setCast(movieCast);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h5>Cast: </h5>
      <ul>
        {cast.map(({ id, name, character, profile_path }) => {
          const imgUrl = profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultAvatar;
          return (
            <li key={id}>
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
