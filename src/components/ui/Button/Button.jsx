import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Button;
