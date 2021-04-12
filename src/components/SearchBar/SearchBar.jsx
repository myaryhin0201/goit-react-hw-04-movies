import { useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from './SearchBarStyles';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const classes = useStyles();

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={classes.Searchbar}>
      <form className={classes.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={classes.SearchFormButton}>
          <span className={classes.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={classes.SearchFormInput}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
