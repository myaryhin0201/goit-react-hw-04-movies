import { Route, Switch, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Container from './components/Container';
import AppBar from './components/AppBar';
import Loader from './components/Loader';
import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetail} component={MovieDetailsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
