import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CatalogLanguage } from '../data/catalog';
import { formatBlogDate, getBlogArticlePath, type BlogArticleSummary } from '../data/blog';
import { getResponsiveImageProps } from '../lib/responsiveImages';

export default function BlogArticleCard({ article, language, priority = false }: {
    article: BlogArticleSummary; language: CatalogLanguage; priority?: boolean;
}) {
    return (
        <article className="h-full">
            <Link to={getBlogArticlePath(article)} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-[#0083bb] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0083bb] dark:border-gray-700 dark:bg-gray-900">
                <div className="flex aspect-[16/9] items-center justify-center overflow-hidden bg-white p-5 sm:p-8">
                    <img
                        {...getResponsiveImageProps(article.image, '(min-width: 1280px) 560px, (min-width: 768px) calc(50vw - 48px), calc(100vw - 64px)')}
                        alt={article.imageAlt[language]}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                        loading={priority ? 'eager' : 'lazy'}
                        fetchPriority={priority ? 'high' : undefined}
                        decoding="async"
                    />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                    <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-semibold text-[#0079ad] dark:text-sky-400">{article.topic[language]}</span>
                        <span aria-hidden="true">·</span>
                        <time dateTime={article.publishedOn}>{formatBlogDate(article.publishedOn, language)}</time>
                    </div>
                    <h2 className="mb-3 text-xl font-semibold leading-snug text-gray-950 dark:text-white sm:text-2xl">{article.title[language]}</h2>
                    <p className="mb-6 text-sm leading-7 text-gray-600 dark:text-gray-300">{article.description[language]}</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#0079ad] dark:text-sky-400">
                        {language === 'TR' ? 'Yazıyı okuyun' : 'Read the guide'}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                </div>
            </Link>
        </article>
    );
}
