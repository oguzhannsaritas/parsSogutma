import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useRef } from 'react';
import Header from './components/Header';
import FooterSection from './components/FooterSection';
import PageLoader from './components/PageLoader';
import { LanguageProvider } from './context/LanguageContext';

import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'motion/react';
import { InitialPageProvider, useInitialPage } from './context/InitialPageContext';
import type { ProductPageData } from './lib/productData';
import { lazyPages, type InitialRoutePage } from './lib/pageModules';
import SeoManager from './seo/SeoManager';

function ScrollToTop() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);
  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const ContactWidgets = lazy(() => import('./components/ContactWidgets'));

function DeferredContactWidgets() {
  const { initialRender } = useInitialPage();
  return initialRender ? null : <Suspense fallback={null}><ContactWidgets /></Suspense>;
}

export default function App({ initialProduct, initialPage }: AppProps) {
  return <Router><AppContent initialProduct={initialProduct} initialPage={initialPage} /></Router>;
}

type AppProps = { initialProduct?: ProductPageData; initialPage?: InitialRoutePage };

export function AppContent({ initialProduct, initialPage }: AppProps) {
  const pages = initialPage ? { ...lazyPages, [initialPage.name]: initialPage.component } : lazyPages;
  const { Home, Products, ProductDetail, ProductCategory, References, ReferenceDetail, Contact, About, PhotoGallery, NotFound, ECatalog } = pages;
  return (
    <LanguageProvider>
      <ThemeProvider>
        <InitialPageProvider product={initialProduct}>
          <SeoManager />
          <ScrollToTop />
          <AnimatePresence initial={false}>
          <div className="min-h-screen bg-white dark:bg-[#111827] font-sans transition-colors duration-300">
            <Header />
            <main className="min-h-screen">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route path="/urunler/:categorySlug" element={<ProductCategory />} />
                  <Route path="/urun/:slug" element={<ProductDetail />} />
                  <Route path="/blog/:legacySlug" element={<ProductDetail />} />
                  <Route path="/references" element={<References />} />
                  <Route path="/references/:id" element={<ReferenceDetail />} />
                  <Route path="/referans/:slug" element={<ReferenceDetail />} />
                  <Route path="/gallery" element={<PhotoGallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/e-catalog" element={<ECatalog />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <FooterSection />
            <DeferredContactWidgets />
          </div>
          </AnimatePresence>
        </InitialPageProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
