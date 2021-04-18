import { useEffect, useState, Suspense, lazy } from 'react';
import { NavLink, Route, useHistory, useLocation } from 'react-router-dom';
import { fetchhMovieInfo } from '../API/moviesAPI';
import MovieDetails from '../components/MovieDetails';
import routes from '../routes';
import Loader from '../components/Loader';
import useStyles from '../components/Navigation/NavigationStyles';

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
  const [error, setError] = useState(false);
  const { state } = useLocation();
  const history = useHistory();

  const movieId = Number(match.params.movieId);

  const fetchData = async () => {
    try {
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
    } catch (err) {
      setError(`${err}`);
    }
  };

  useEffect(() => {
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
  const classes = useStyles();
  return (
    <>
      <button className="GoBackBtn" type="button" onClick={handleGoBack}>
        Go back
      </button>

      {error && <p>Oops, error : {error}</p>}
      <MovieDetails
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
      <div className="AddTitle">
        <h3>Additional information</h3>
        <ul className={classes.AddInformation}>
          <NavLink
            className={classes.Navlink}
            activeClassName={classes.NavlinkActive}
            to={{
              pathname: `${match.url}/cast`,
              state,
            }}
          >
            Cast
          </NavLink>

          <NavLink
            className={classes.Navlink}
            activeClassName={classes.NavlinkActive}
            to={{
              pathname: `${match.url}/reviews`,
              state,
            }}
          >
            Reviews
          </NavLink>
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
