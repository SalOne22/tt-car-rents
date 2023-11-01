import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ as: As = 'button', ...props }) => {
  return <As className={styles.btn} {...props} />;
};

Button.propTypes = {
  as: PropTypes.elementType,
};

export default Button;
