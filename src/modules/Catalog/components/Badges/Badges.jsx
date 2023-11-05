import PropTypes from 'prop-types';
import styles from './Badges.module.css';

const Badges = ({ className, badges = [] }) => {
  return (
    <div className={className}>
      {badges.map((items, i) => (
        <p key={i} className={styles.badges}>
          {items.map((txt, i) => (
            <span key={i}>{txt}</span>
          ))}
        </p>
      ))}
    </div>
  );
};

Badges.propTypes = {
  className: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

export default Badges;
