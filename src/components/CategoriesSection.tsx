import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/productSummaries';
import { getCategoryPath, getFeaturedProduct, productCategories } from '../data/catalog';
import { getProductMainImage } from '../seo/config';
import { getResponsiveImageProps } from '../lib/responsiveImages';

export default function CategoriesSection() {
    const { t, language } = useLanguage();
    return (
        <section className="w-full bg-white py-8 transition-colors dark:bg-[#111827] md:py-16">
            <div className="container mx-auto px-4 md:px-12">
                <h2 className="mb-6 text-center text-lg font-bold uppercase tracking-wide text-gray-900 dark:text-white md:mb-10 md:text-2xl">{t('cat.title')}</h2>
                <div className="grid grid-cols-2 gap-4 md:gap-7 lg:grid-cols-3">
                    {productCategories.map(category => (
                        <Link to={getCategoryPath(category)} key={category.id} className="group overflow-hidden rounded-2xl border border-gray-200 transition-colors hover:border-[#009FE3] dark:border-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#009FE3]">
                            <div className="aspect-[4/3] bg-white p-4 md:p-6">
                                <img {...getResponsiveImageProps(getProductMainImage(getFeaturedProduct(category, products)), '(min-width: 1536px) 413px, (min-width: 1280px) 328px, (min-width: 1024px) 243px, (min-width: 768px) 262px, (min-width: 640px) 254px, calc(50vw - 56px)', 320)} alt={category.copy[language].name} loading="lazy" decoding="async" className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
                            </div>
                            <div className="flex items-center justify-between gap-2 p-4 md:p-5">
                                <h3 className="text-xs font-semibold text-gray-900 dark:text-white md:text-base">{category.copy[language].name}</h3>
                                <ArrowUpRight size={18} className="shrink-0 text-[#0083bb] dark:text-[#72D5E3]" aria-hidden="true" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
