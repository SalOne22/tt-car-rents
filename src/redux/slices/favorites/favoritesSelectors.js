import { useSelector } from "react-redux";

const selectFavorite = (state) => state.favorites.items;

export const useFavorite = () => {
  const favorite = useSelector(selectFavorite);

  return { favorite, favoriteIds: favorite.map(({ id }) => id) };
};
