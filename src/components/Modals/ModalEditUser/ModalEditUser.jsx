import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { ModalOverlay } from './ModalEditUser.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
const ModalEditUser = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEscape = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return createPortal(
    <ModalOverlay
      onClick={event => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {children}
    </ModalOverlay>,
    modalRoot
  );
};

ModalEditUser.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};


export default ModalEditUser;
