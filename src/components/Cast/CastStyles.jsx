import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  CastList: {
    marginTop: '20px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  CastListItem: {
    fontSize: '20px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '20px',
    marginBottom: '15px',
    padding: '15px 10px 0 10px',
    '& img': {
      borderRadius: '20px ',
    },
    '& p': {
      display: 'flex',
      //   height: '100%',
      textAlign: 'center',
      padding: '10px',
      color: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  '@media screen and (max-width: 480px)': {
    CastListItem: {
      width: '100%',
      marginRight: '0',
      '&:last-child': {
        marginBottom: '0',
      },
      '&:hover, &:focus': {
        '& img': {
          transform: 'scale(1.03)',
        },
      },
    },
  },
  '@media screen and (min-width: 481px)': {
    '@media screen and (max-width: 768px)': {
      CastListItem: {
        width: 'calc((100% - 3*20px)/3)',
        marginRight: '20px',
        '&:nth-child(3n)': {
          marginRight: '0',
        },
      },
    },
  },
  '@media screen and (min-width: 769px)': {
    CastListItem: {
      width: 'calc((100% - 5 * 15px) / 5)',
      marginRight: '15px',
      '&:nth-child(5n)': {
        marginRight: '0',
      },
    },
  },
});

export default useStyles;
