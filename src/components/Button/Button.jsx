import PropTypes from 'prop-types';
import useStyles from './ButtonStyles';

const Button = ({ onClick }) => {
  const classes = useStyles();
  return (
    <button type="button" className={classes.Button} onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
