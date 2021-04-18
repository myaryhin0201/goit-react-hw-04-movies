import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import useStyles from './NavigationStyles';

const Navigation = () => {
  const classes = useStyles();
  return (
    <nav className={classes.NAV}>
      <NavLink
        exact
        to={routes.home}
        className={classes.Navlink}
        activeClassName={classes.NavlinkActive}
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className={classes.Navlink}
        activeClassName={classes.NavlinkActive}
      >
        Movies
      </NavLink>
    </nav>
  );
};
export default Navigation;
