import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import NotFound from './pages/NotFound';

// import Layout from './components/Layouts';
// import Searchbar from './components/SearchBar';
// import ImageGallery from './components/ImageGallery';
// import Button from './components/Button';
// import Loader from './components/Loader';
// import Modal from './components/Modal';

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink
            exact
            to="/goit-react-hw-04-movies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/goit-react-hw-04-movies/movies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/goit-react-hw-04-movies" component={HomePage} />
        <Route path="/goit-react-hw-04-movies/movies" component={MoviesPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
// <Layout>
// {
/* <div className="App">
        <Searchbar onSubmit={onChangeQuery} />
        {error ? (
          <h2>OMG. Check connect to the internet(((</h2>
        ) : (
          <>
            {images.length === 0 ? (
              <h2>Enter your request</h2>
            ) : (
              <>
                <ImageGallery images={images} onClick={openModal} />
                {isLoading && <Loader />}
                {loadMoreButton && <Button onClick={fetchArticles} />}
                {largeImgUrl && (
                  <Modal onClose={closeModal}>
                    <img src={largeImgUrl} alt={alt} />
                  </Modal>
                )}
              </>
            )}
          </>
        )}
      </div> */
// }
/* </Layout> */

export default App;
