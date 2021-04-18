import { useEffect, useState } from 'react';
import { fetchhMovieReviews } from '../../API/moviesAPI';

const Reviews = ({ match }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const movieId = Number(match.params.movieId);

  const fetchData = async () => {
    try {
      const movieReviews = await fetchhMovieReviews(movieId);
      setReviews(movieReviews);
      setError(false);
    } catch (err) {
      setError(`${err}`);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h5 className="AddTitle">Reviews</h5>
      {error && <p>Oops, error : {error}</p>}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, content, author }) => (
            <li key={id}>
              <p className="author">{author}</p>
              <p className="content">{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
