import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import ScreenLoader from './components/ScreenLoader.jsx';

const MainPage = lazy(() => import('./pages/MainPage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage.jsx'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

const App = () => {
  return (
    <Suspense fallback={<ScreenLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
