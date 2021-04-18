import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  MoviesList: {
    marginTop: '20px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  MoviesListItem: {
    fontSize: '20px',
    backgroundColor: 'white',
    borderRadius: '20px',
    marginBottom: '15px',
    padding: '15px 10px 0 10px',
    '&:hover, &:focus': {
      '& a img': {
        transform: 'scale(1.05)',
      },
    },
    '& a': {
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      //   justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    '& a img': {
      transition: 'all .2s ease-in-out',
      borderRadius: '20px ',
    },
    '& a p': {
      display: 'flex',
      height: '100%',
      padding: '10px',
      color: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  '@media screen and (max-width: 480px)': {
    MoviesListItem: {
      width: '100%',
      marginRight: '0',
      '&:last-child': {
        marginBottom: '0',
      },
      '&:hover, &:focus': {
        '& a img': {
          transform: 'scale(1.03)',
        },
      },
    },
  },
  '@media screen and (min-width: 481px)': {
    '@media screen and (max-width: 768px)': {
      MoviesListItem: {
        width: 'calc((100% - 2*30px)/2)',
        marginRight: '30px',
        '&:nth-child(2n)': {
          marginRight: '0',
        },
        '&:hover, &:focus': {
          '& a img': {
            transform: 'scale(1.03)',
          },
        },
      },
    },
  },
  '@media screen and (min-width: 769px)': {
    MoviesListItem: {
      width: 'calc((100% - 5 * 15px) / 4)',
      marginRight: '15px',
      '&:nth-child(4n)': {
        marginRight: '0',
      },
    },
  },
});

export default useStyles;
