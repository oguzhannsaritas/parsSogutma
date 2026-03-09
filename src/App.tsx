import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import FooterSection from './components/FooterSection';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import References from './pages/References';
import ReferenceDetail from './pages/ReferenceDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import PhotoGallery from './pages/PhotoGallery';
import PageLoader from './components/PageLoader';
import { LanguageProvider } from './context/LanguageContext';

import { ThemeProvider } from './context/ThemeContext';
import WhatsAppButton from "@/src/components/WhatsAppButton.tsx";
import NotFound from "@/src/pages/NotFound.tsx";

function LoaderController() {
  const location = useLocation();
  const [loading, setLoading] = useState(true); // Start true for initial load

  useLayoutEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2s delay to ensure animation completes

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {loading && <PageLoader />}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <LoaderController />
          <div className="min-h-screen bg-white dark:bg-[#111827] font-sans transition-colors duration-300">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/references" element={<References />} />
                <Route path="/references/:id" element={<ReferenceDetail />} />
                <Route path="/gallery" element={<PhotoGallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <FooterSection />
              <WhatsAppButton />
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}
