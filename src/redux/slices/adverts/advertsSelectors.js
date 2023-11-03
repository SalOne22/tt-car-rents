import { useSelector } from 'react-redux';

const selectAdverts = (state) => state.adverts.items;
const selectAdvertsLoading = (state) => state.adverts.loading;
const selectAdvertsError = (state) => state.adverts.error;
const selectAdvertsCanLoadMore = (state) => state.adverts.canLoadMore;

export const useAdverts = () => {
  const adverts = useSelector(selectAdverts);
  const loading = useSelector(selectAdvertsLoading);
  const error = useSelector(selectAdvertsError);
  const canLoadMore = useSelector(selectAdvertsCanLoadMore);

  return { adverts, loading, error, canLoadMore };
};
