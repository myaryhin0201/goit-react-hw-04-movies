import PropTypes from 'prop-types';
import useStyles from './ImageGalleryStyles';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  const classes = useStyles();

  return (
    <ul className={classes.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          onClick={onClick}
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          alt={tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ImageGallery;
