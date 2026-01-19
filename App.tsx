import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

// Lazy Load Pages for Performance
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Custom ScrollToTop component to reset scroll on route change
const ScrollToTopWrapper = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading Spinner Component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollToTopWrapper />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            } />
            <Route path="catalog" element={
              <Suspense fallback={<PageLoader />}>
                <Catalog />
              </Suspense>
            } />
            <Route path="catalog/:category" element={
              <Suspense fallback={<PageLoader />}>
                <Catalog />
              </Suspense>
            } />
            <Route path="catalog/:category/:ageGroup" element={
              <Suspense fallback={<PageLoader />}>
                <Catalog />
              </Suspense>
            } />
            <Route path="product/:productId" element={
              <Suspense fallback={<PageLoader />}>
                <ProductDetails />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={<PageLoader />}>
                <NotFound />
              </Suspense>
            } />
          </Route>
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;