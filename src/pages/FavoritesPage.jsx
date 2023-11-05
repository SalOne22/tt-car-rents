import { useDispatch } from 'react-redux';
import { useFavorites } from '../redux/slices/favorites/favoritesSelectors.js';
import { getMoreAdverts } from '../redux/slices/adverts/advertsOperations.js';
import { add, remove } from '../redux/slices/favorites/favoritesSlice.js';
import Catalog from '../modules/Catalog/Catalog.jsx';
import { useMemo, useState } from 'react';
import ScreenLoader from '../components/ScreenLoader';
import { filterAdverts } from '../helpers/index.js';

const FavoritesPage = () => {
  const [filters, setFilters] = useState({});
  const dispatch = useDispatch();
  const { favorites, favoriteIds } = useFavorites();

  const filteredAdverts = useMemo(() => {
    return filterAdverts(filters, favorites, true);
  }, [favorites, filters]);

  const handleFavoriteChange = (id, favorite) => {
    if (favorite) {
      dispatch(add(favorites.find((advert) => advert.id === id)));
    } else {
      dispatch(remove(id));
    }
  };

  const handleFilters = (data) => {
    setFilters(data);
  };

  if (filteredAdverts)
    return (
      <div>
        <section className="section">
          <div className="container">
            <Catalog
              cars={filteredAdverts}
              onLoadMore={() => dispatch(getMoreAdverts())}
              canLoadMore={false}
              favoritesIds={favoriteIds}
              onFavorite={handleFavoriteChange}
              onFiltersChange={handleFilters}
            />
          </div>
        </section>
      </div>
    );

  return <ScreenLoader />;
};

export default FavoritesPage;
