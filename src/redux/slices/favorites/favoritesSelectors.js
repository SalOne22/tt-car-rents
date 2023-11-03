import { useSelector } from 'react-redux';

const selectFavorite = (state) => state.favorites.items;

export const useFavorites = () => {
  const favorites = useSelector(selectFavorite);

  return { favorites, favoriteIds: favorites.map(({ id }) => id) };
};
