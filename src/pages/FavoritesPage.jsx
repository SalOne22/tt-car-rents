import { useDispatch } from 'react-redux';
import { useFavorites } from '../redux/slices/favorites/favoritesSelectors.js';
import { getMoreAdverts } from '../redux/slices/adverts/advertsOperations.js';
import { add, remove } from '../redux/slices/favorites/favoritesSlice.js';
import Catalog from '../modules/Catalog/Catalog.jsx';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { favorites, favoriteIds } = useFavorites();

  const handleFavoriteChange = (id, favorite) => {
    if (favorite) {
      dispatch(add(favorites.find((advert) => advert.id === id)));
    } else {
      dispatch(remove(id));
    }
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <Catalog
            cars={favorites}
            onLoadMore={() => dispatch(getMoreAdverts())}
            canLoadMore={false}
            favoritesIds={favoriteIds}
            onFavorite={handleFavoriteChange}
          />
        </div>
      </section>
    </div>
  );
};

export default FavoritesPage;
