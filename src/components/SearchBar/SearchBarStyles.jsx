import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Searchbar: {
    top: 0,
    left: 0,
    position: 'sticky',
    zIndex: '1100',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '64px',
    paddingRight: '24px',
    paddingLeft: '24px',
    paddingTop: '12px',
    paddingBottom: '12px',
    color: '#fff',
    backgroundColor: 'orange',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
  SearchForm: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  SearchFormButton: {
    display: 'inline-block',
    width: '48px',
    height: '48px',
    border: 0,

    backgroundImage:
      "url('https://image.flaticon.com/icons/svg/149/149852.svg')",
    backgroundColor: 'white',
    backgroundSize: '40%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: '0.6',
    transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    outline: 'none',
    '&:hover': {
      opacity: 1,
    },
  },

  SearchFormButtonLabel: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    overflow: 'hidden',
    clip: ' rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    clipPath: ' inset(50%)',
    border: 0,
  },

  SearchFormInput: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    font: 'inherit',
    fontSize: '18px',
    border: 'none',
    outline: 'none',
    paddingLeft: ' 4px',
    paddingRight: '4px',
    '&::placeholder': {
      font: 'inherit',
      fontSize: '18px',
    },
  },
});

export default useStyles;
