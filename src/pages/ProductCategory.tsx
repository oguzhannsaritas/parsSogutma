import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { CategoryContent } from '../components/CatalogContent';
import { useLanguage } from '../context/LanguageContext';
import { findCategory } from '../data/catalog';
import { products } from '../data/productSummaries';
import NotFound from './NotFound';

export default function ProductCategoryPage() {
    const { categorySlug } = useParams();
    const { hash, pathname } = useLocation();
    const { language } = useLanguage();
    const category = findCategory(categorySlug);

    useEffect(() => {
        if (!hash) return;
        const frame = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
        return () => cancelAnimationFrame(frame);
    }, [hash, pathname]);

    if (!category) return <NotFound />;
    return <CategoryContent category={category} products={products} language={language} />;
}
