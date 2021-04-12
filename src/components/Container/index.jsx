import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '16px',
    paddingBottom: '24px',
    '& h2': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '25px',
      fontSize: '35px',
      fontWeight: 'bold',
      color: 'red',
    },
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
