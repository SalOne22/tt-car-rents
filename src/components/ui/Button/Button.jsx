import PropTypes from 'prop-types';
import styles from './Button.module.css';
import clsx from 'clsx';

const Button = ({ as: As = 'button', className, ...props }) => {
  return <As className={clsx(styles.btn, className)} {...props} />;
};

Button.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
};

export default Button;
