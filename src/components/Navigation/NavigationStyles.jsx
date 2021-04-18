import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  NAV: {
    display: 'flex',
    padding: '40px 0 ',
    justifyContent: 'center',
    alignItems: 'center',
  },
  AddInformation: {
    display: 'flex',
    margin: '30px 0',
  },
  Addlink: {
    '&:not(:last-child)': {
      marginRight: '30px',
    },
  },
  Navlink: {
    backgroundColor: 'grey',
    padding: '10px',
    fontSize: '25px',
    fontWeight: 'bold',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '0px 0px 14px 5px #FFFFFF',
    textTransform: 'uppercase',
    '&:hover, &:focus': {
      boxShadow: '0px 0px 14px 5px orange',
    },
    '&:not(:last-child)': {
      marginRight: '30px',
    },
  },
  NavlinkActive: {
    backgroundColor: 'orange',
    color: 'white',
  },
  '@media (min-width: 768px)': {
    NAV: {
      justifyContent: 'flex-start',
      marginLeft: '50px',
    },
  },
});

export default useStyles;
