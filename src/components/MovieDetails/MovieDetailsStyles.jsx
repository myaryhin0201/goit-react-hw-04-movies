import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  MovieDetailsContainer: {
    display: 'flex',
    borderRadius: '10px',
    backgroundColor: 'white',
    color: 'black',
    padding: '15px',
    '& img ': {
      width: '400px',
    },
  },
  MovieDetails: {
    marginLeft: '20px',
  },
  Genres: {
    marginLeft: '20px',
  },
  MovieBaseDetails: {
    lineHeight: '25px',
    '& span': {
      backgroundColor: 'orange',
      borderRadius: '5px',
      padding: ' 5px',
      lineHeight: '35px',
    },
  },
  MovieDetailsTitle: {
    fontSize: '35px',
    marginBottom: '15px',
  },
  MovieDetailsTagline: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  '@media screen and (max-width: 768px)': {
    MovieDetailsContainer: {
      margin: '0 auto',
      flexDirection: 'column',
      maxWidth: '450px',
      alignItems: 'center',
      '& img': {
        marginBottom: '25px',
      },
    },
    MovieDetailsTitle: {
      textAlign: 'center',
    },
    MovieBaseDetails: {
      margin: '0 20px',
    },
    MovieDetails: {
      marginLeft: '0',
    },
  },
});

export default useStyles;
