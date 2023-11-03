import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import advertsReducer from './slices/adverts/advertsSlice.js';
import favoritesReducer from './slices/favorites/favoritesSlice.js';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const persistConfig = {
  key: 'favorites',
  storage,
};

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: persistReducer(persistConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
