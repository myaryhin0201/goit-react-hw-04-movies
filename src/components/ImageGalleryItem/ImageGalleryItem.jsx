import PropTypes from 'prop-types';
import useStyles from './ImageGalleryItemStyles';

const ImageGalleryItem = ({ webformatURL, largeImageURL, alt, onClick }) => {
  const classes = useStyles();
  const handleClick = () => {
    onClick(largeImageURL, alt);
  };

  return (
    <li className={classes.ImageGalleryItem}>
      <img
        onClick={handleClick}
        src={webformatURL}
        alt={alt}
        className={classes.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
