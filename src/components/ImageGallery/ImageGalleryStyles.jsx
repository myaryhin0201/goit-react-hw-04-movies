import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  ImageGallery: {
    display: 'grid',
    maxWidth: 'calc(100vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridGap: '16px',
    marginTop: '20px',
    marginBottom: '0',
    padding: '0',
    listStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
export default useStyles;
