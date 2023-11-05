import { useDispatch } from 'react-redux';
import { useAdverts } from '../redux/slices/adverts/advertsSelectors.js';
import Catalog from '../modules/Catalog/Catalog.jsx';
import {
  getFirstAdverts,
  getMoreAdverts,
} from '../redux/slices/adverts/advertsOperations.js';
import ScreenLoader from '../components/ScreenLoader.jsx';
import { useEffect, useMemo, useState } from 'react';
import { useFavorites } from '../redux/slices/favorites/favoritesSelectors.js';
import { add, remove } from '../redux/slices/favorites/favoritesSlice.js';
import api from '../service/api.js';
import { filterAdverts } from '../helpers/index.js';

const CatalogPage = () => {
  const [filters, setFilters] = useState({});
  const dispatch = useDispatch();
  const { adverts, error, canLoadMore } = useAdverts();
  const { favoriteIds } = useFavorites();

  // FIXME: Filter currently on client, for proper pagination filter must be on the backend
  const filteredAdverts = useMemo(() => {
    return filterAdverts(filters, adverts);
  }, [adverts, filters]);

  useEffect(() => {
    dispatch(getFirstAdverts());
  }, [dispatch]);

  const handleFilters = (data) => {
    setFilters(data);
    api.setFilters({
      make: data.make,
    });
    dispatch(getFirstAdverts());
  };

  const handleFavoriteChange = (id, favorite) => {
    if (favorite) {
      dispatch(add(adverts.find((advert) => advert.id === id)));
    } else {
      dispatch(remove(id));
    }
  };

  if (error) return <div>Something went wrong...</div>;

  if (filteredAdverts)
    return (
      <div>
        <section className="section">
          <div className="container">
            <Catalog
              cars={filteredAdverts}
              onLoadMore={() => dispatch(getMoreAdverts())}
              canLoadMore={canLoadMore}
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

export default CatalogPage;
