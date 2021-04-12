import Spinner from 'react-loader-spinner';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  spinner: {
    margin: '0 auto',
  },
});

const Loader = () => {
  const classes = useStyles();
  return (
    <Spinner
      className={classes.spinner}
      type="Puff"
      color="orange"
      height={100}
      width={100}
    />
  );
};

export default Loader;
