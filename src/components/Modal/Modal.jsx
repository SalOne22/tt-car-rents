import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { useEffect } from 'react';
import XIcon from '../../assets/icons/x.svg?react';
import clsx from 'clsx';

const Modal = ({ className, onClose, children }) => {
  useEffect(() => {
    const eventHandler = (e) => {
      if (e.keyCode === 27) onClose();
    };

    window.addEventListener('keyup', eventHandler);
    return () => window.removeEventListener('keyup', eventHandler);
  }, []);

  useEffect(() => {
    let bodyEl = document.getElementsByTagName('body')[0];
    bodyEl.classList.add('scroll-lock');

    return () => bodyEl.classList.remove('scroll-lock');
  }, []);

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={clsx(styles.modal, className)}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          <XIcon />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modals'),
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
