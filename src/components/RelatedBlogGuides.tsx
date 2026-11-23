import { formatHeading } from '../lib/formatHeading';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBlogArticlePath, getCategoryBlogArticles } from '../data/blog';
import type { CatalogLanguage, CategoryId } from '../data/catalog';

export default function RelatedBlogGuides({ categoryId, language }: {
    categoryId: CategoryId; language: CatalogLanguage;
}) {
    const articles = getCategoryBlogArticles(categoryId);
    if (!articles.length) return null;
    return (
        <aside data-related-blog-guides={categoryId} className="pars-panel my-8 p-5 sm:p-6">
            <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                {formatHeading(language === 'TR' ? 'İlgili seçim rehberleri' : 'Related buying guides', language)}
            </h2>
            <p className="mb-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {language === 'TR' ? 'Model seçimi ve ölçülerinizi hazırlamak için bu rehberleri inceleyebilirsiniz.' : 'Explore these guides to compare models and prepare your measurements.'}
            </p>
            <ul className="space-y-2">
                {articles.map(article => (
                    <li key={article.slug}>
                        <Link to={getBlogArticlePath(article)} className="pars-panel flex min-h-11 min-w-0 items-center justify-between gap-3 rounded-lg px-4 py-2 text-sm font-semibold leading-6 text-pars-link hover:border-pars-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pars-blue dark:text-sky-300 dark:hover:border-pars-blue">
                            <span>{formatHeading(article.title[language], language)}</span><ArrowRight size={15} className="shrink-0" aria-hidden="true" />
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
