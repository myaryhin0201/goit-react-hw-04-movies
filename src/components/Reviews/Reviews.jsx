import { useEffect, useState } from 'react';
import { fetchhMovieReviews } from '../../API/moviesAPI';

const Reviews = ({ match }) => {
  const [reviews, setReviews] = useState([]);
  const movieId = Number(match.params.movieId);

  useEffect(() => {
    async function fetchData() {
      const movieReviews = await fetchhMovieReviews(movieId);
      setReviews(movieReviews);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h5>Reviews</h5>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, content, author }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
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
