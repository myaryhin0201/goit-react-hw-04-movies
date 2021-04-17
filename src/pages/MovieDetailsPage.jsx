import { useEffect, useState, Suspense, lazy } from 'react';
import { NavLink, Route, useHistory, useLocation } from 'react-router-dom';
import { fetchhMovieInfo } from '../API/moviesAPI';
import MovieDetail from '../components/MovieDetail';
import routes from '../routes';
import Loader from '../components/Loader';

const Cast = lazy(() =>
  import('../components/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews' /* webpackChunkName: "reviews" */),
);

const MovieDetailsPage = ({ match }) => {
  const [movie, setMovie] = useState({
    title: null,
    overview: null,
    poster_path: null,
    genres: null,
    budget: null,
    homepage: null,
    release_date: '',
    vote_average: '',
    tagline: '',
  });
  const { state } = useLocation();
  const history = useHistory();

  const movieId = Number(match.params.movieId);

  useEffect(() => {
    async function fetchData() {
      const movieInfo = await fetchhMovieInfo(movieId);
      const normalizedDate = await movieInfo.release_date
        .split('-')
        .reverse()
        .join('.');
      const normalizedBudget = await movieInfo.budget
        .toString()
        .split(/(?=(?:\d{3})+(?!\d))/)
        .join('.');
      setMovie({
        ...movieInfo,
        release_date: normalizedDate,
        budget: normalizedBudget,
      });
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoBack = () => {
    history.push({
      pathname: state?.from.pathname || routes.home,
      search: state?.from.search,
      state,
    });
  };

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      {movie.poster_path ? (
        <MovieDetail
          title={movie.title}
          overview={movie.overview}
          poster_path={movie.poster_path}
          genres={movie.genres}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          budget={movie.budget}
          homepage={movie.homepage}
          tagline={movie.tagline}
        />
      ) : (
        <h2>Details not found</h2>
      )}
      <div>
        <h3>Additional information</h3>
        <ul className="add-info-block">
          <li>
            <NavLink
              className="add-info"
              activeClassName="add-info--active"
              to={{
                pathname: `${match.url}/cast`,
                state,
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className="add-info"
              activeClassName="add-info--active"
              to={{
                pathname: `${match.url}/reviews`,
                state,
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
