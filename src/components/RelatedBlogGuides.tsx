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
        <aside data-related-blog-guides={categoryId} className="my-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-neutral-700 dark:bg-neutral-900 sm:p-6">
            <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                {language === 'TR' ? 'İlgili seçim rehberleri' : 'Related buying guides'}
            </h2>
            <p className="mb-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {language === 'TR' ? 'Model seçimi ve ölçülerinizi hazırlamak için bu rehberleri inceleyebilirsiniz.' : 'Explore these guides to compare models and prepare your measurements.'}
            </p>
            <ul className="space-y-3">
                {articles.map(article => (
                    <li key={article.slug}>
                        <Link to={getBlogArticlePath(article)} className="inline-flex min-w-0 items-start gap-2 text-sm font-medium leading-7 text-[#0083bb] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0083bb] dark:text-[#72D5E3]">
                            <span>{article.title[language]}</span><ArrowRight size={15} className="mt-1.5 shrink-0" aria-hidden="true" />
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
