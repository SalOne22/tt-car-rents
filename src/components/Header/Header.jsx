import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <ul className={styles.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                clsx(styles.link, isActive && styles.active)
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                clsx(styles.link, isActive && styles.active)
              }
              to="/catalog"
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                clsx(styles.link, isActive && styles.active)
              }
              to="/favorites"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
