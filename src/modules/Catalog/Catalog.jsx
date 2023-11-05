import PropTypes from 'prop-types';
import CatalogItem from './components/CatalogItem';
import styles from './Catalog.module.css';
import Control from './components/Control/index.js';

const Catalog = ({
  cars,
  favoritesIds,
  onFavorite,
  onLoadMore,
  canLoadMore = true,
  onFiltersChange,
}) => {
  return (
    <div>
      <div className={styles.control}>
        <Control onSubmit={onFiltersChange} />
      </div>
      <ul
        className={styles.list}
        style={{ marginBottom: !canLoadMore ? 0 : null }}
      >
        {cars.map(({ id, ...props }) => (
          <CatalogItem
            key={id}
            id={id}
            {...props}
            favorite={favoritesIds.includes(id)}
            onFavoriteChange={(e) => onFavorite(id, e.target.checked)}
          />
        ))}
      </ul>
      {canLoadMore && (
        <div className={styles.loadMoreWrapper}>
          <button
            className={styles.loadMoreBtn}
            type="button"
            onClick={onLoadMore}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

Catalog.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  favoritesIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFavorite: PropTypes.func.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  canLoadMore: PropTypes.bool,
  onFiltersChange: PropTypes.func.isRequired,
};

export default Catalog;
