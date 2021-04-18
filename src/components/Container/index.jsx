import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Container: {
    maxWidth: '1200px',
    paddingLeft: '15px',
    paddingRight: '15px',
    margin: '0 auto',
  },
});

const Container = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.Container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
