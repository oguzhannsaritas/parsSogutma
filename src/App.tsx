import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import FooterSection from './components/FooterSection';
import Home from './pages/Home';
import PageLoader from './components/PageLoader';
import { LanguageProvider } from './context/LanguageContext';

import { ThemeProvider } from './context/ThemeContext';
import WhatsAppButton from "@/src/components/WhatsAppButton.tsx";
import PhoneButton from "@/src/components/PhoneButton.tsx";
import SeoManager from './seo/SeoManager';

const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const References = lazy(() => import('./pages/References'));
const ReferenceDetail = lazy(() => import('./pages/ReferenceDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const PhotoGallery = lazy(() => import('./pages/PhotoGallery'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ECatalog = lazy(() => import('./pages/ECatalog'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppReady() {
  useEffect(() => {
    const appWindow = window as typeof window & { __parsAppFallbackTimer?: number };
    if (appWindow.__parsAppFallbackTimer) {
      window.clearTimeout(appWindow.__parsAppFallbackTimer);
      delete appWindow.__parsAppFallbackTimer;
    }
    document.documentElement.classList.remove('js-loading');
  }, []);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <AppReady />
          <SeoManager />
          <ScrollToTop />
          <div className="min-h-screen bg-white dark:bg-[#111827] font-sans transition-colors duration-300">
            <Header />
            <main>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
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
            <PhoneButton />
            <WhatsAppButton />
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}
