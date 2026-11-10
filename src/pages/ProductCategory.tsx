import { useParams } from 'react-router-dom';
import { CategoryContent } from '../components/CatalogContent';
import { useLanguage } from '../context/LanguageContext';
import { findCategory } from '../data/catalog';
import { products } from '../data/products';
import NotFound from './NotFound';

export default function ProductCategoryPage() {
    const { categorySlug } = useParams();
    const { language } = useLanguage();
    const category = findCategory(categorySlug);
    if (!category) return <NotFound />;
    return <CategoryContent category={category} products={products} language={language} />;
}
