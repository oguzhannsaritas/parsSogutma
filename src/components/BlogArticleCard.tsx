import { formatHeading } from '../lib/formatHeading';
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
            <Link to={getBlogArticlePath(article)} className="pars-panel group flex h-full flex-col overflow-hidden shadow-sm transition-colors hover:border-pars-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pars-blue dark:hover:border-pars-blue">
                <div className="flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-pars-line bg-white p-5 dark:border-slate-700 sm:p-8">
                    <img
                        {...getResponsiveImageProps(article.image, '(min-width: 1280px) 560px, (min-width: 768px) calc(50vw - 48px), calc(100vw - 64px)')}
                        alt={article.imageAlt[language]}
                        className="h-full w-full object-contain motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.03]"
                        loading={priority ? 'eager' : 'lazy'}
                        fetchPriority={priority ? 'high' : undefined}
                        decoding="async"
                    />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                    <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="font-semibold text-pars-link dark:text-sky-300">{formatHeading(article.topic[language], language)}</span>
                        <span aria-hidden="true">·</span>
                        <time dateTime={article.publishedOn}>{formatBlogDate(article.publishedOn, language)}</time>
                    </div>
                    <h2 className="mb-3 text-xl font-bold leading-snug text-pars-navy dark:text-white sm:text-2xl">{formatHeading(article.title[language], language)}</h2>
                    <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">{article.description[language]}</p>
                    <span className="mt-auto inline-flex self-start items-center gap-2 rounded-lg bg-sky-50 px-3 py-2 text-sm font-semibold text-pars-link transition-colors group-hover:bg-sky-100 dark:bg-slate-800 dark:text-sky-200 dark:group-hover:bg-slate-700">
                        {language === 'TR' ? 'Yazıyı okuyun' : 'Read the guide'}<ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
                    </span>
                </div>
            </Link>
        </article>
    );
}
