import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import useStyles from './ModalStyles';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  const classes = useStyles();
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={classes.Overlay} onClick={handleBackdrop}>
      <div className={classes.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
