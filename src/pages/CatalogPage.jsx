import { useDispatch } from 'react-redux';
import { useAdverts } from '../redux/slices/adverts/advertsSelectors.js';
import Catalog from '../modules/Catalog/Catalog.jsx';
import {
  getFirstAdverts,
  getMoreAdverts,
} from '../redux/slices/adverts/advertsOperations.js';
import ScreenLoader from '../components/ScreenLoader.jsx';
import { useEffect } from 'react';
import { useFavorite } from '../redux/slices/favorites/favoritesSelectors.js';
import { add, remove } from '../redux/slices/favorites/favoritesSlice.js';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { adverts, error, canLoadMore } = useAdverts();
  const { favoriteIds } = useFavorite();

  useEffect(() => {
    dispatch(getFirstAdverts());
  }, [dispatch]);

  const handleFavoriteChange = (id, favorite) => {
    if (favorite) {
      dispatch(add(adverts.find((advert) => advert.id === id)));
    } else {
      dispatch(remove(id));
    }
  };

  if (error) return <div>Something went wrong...</div>;

  if (adverts)
    return (
      <div>
        <section className="section">
          <div className="container">
            <Catalog
              cars={adverts}
              onLoadMore={() => dispatch(getMoreAdverts())}
              canLoadMore={canLoadMore}
              favoritesIds={favoriteIds}
              onFavorite={handleFavoriteChange}
            />
          </div>
        </section>
      </div>
    );

  return <ScreenLoader />;
};

export default CatalogPage;
