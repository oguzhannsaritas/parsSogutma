import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BlogArticleCard from '../components/BlogArticleCard';
import { useLanguage } from '../context/LanguageContext';
import { blogArticles, findBlogArticle, formatBlogDate } from '../data/blog';
import { blogContent } from '../data/blogContent';
import { getCategoryPath, productCategories } from '../data/catalog';
import { getResponsiveImageProps } from '../lib/responsiveImages';
import NotFound from './NotFound';

export default function BlogArticle() {
    const { pathname } = useLocation();
    const { language } = useLanguage();
    const article = findBlogArticle(pathname);
    if (!article) return <NotFound />;
    const content = blogContent[article.slug]?.[language];
    if (!content) return <NotFound />;
    const tr = language === 'TR';
    const categories = article.relatedCategoryIds.map(id => productCategories.find(category => category.id === id)!);
    const related = blogArticles.filter(item => item.slug !== article.slug).slice(0, 2);

    return (
        <div className="bg-white pb-16 pt-32 text-gray-950 dark:bg-[#111827] dark:text-white md:pb-24 md:pt-40">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <nav aria-label={tr ? 'Sayfa yolu' : 'Breadcrumb'} className="mb-8 flex flex-wrap items-center gap-2 text-xs leading-6 text-gray-500 dark:text-gray-400">
                    <Link to="/" className="hover:text-[#0079ad]">{tr ? 'Ana Sayfa' : 'Home'}</Link>
                    <span aria-hidden="true">/</span><Link to="/blog" className="hover:text-[#0079ad]">Blog</Link>
                    <span aria-hidden="true">/</span><span aria-current="page">{article.topic[language]}</span>
                </nav>
                <article data-blog-article={article.slug}>
                    <header className="max-w-4xl">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#0079ad] dark:text-sky-400">{article.topic[language]}</p>
                        <h1 className="mb-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{article.title[language]}</h1>
                        <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-gray-500 dark:text-gray-400">
                            <span>{tr ? 'Pars Soğutma' : 'Pars Cooling'}</span><span aria-hidden="true">·</span>
                            <time dateTime={article.publishedOn}>{formatBlogDate(article.publishedOn, language)}</time>
                        </div>
                        <p className="text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">{article.introduction[language]}</p>
                    </header>
                    <div className="my-8 flex aspect-[16/9] max-h-[420px] items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 sm:p-10 md:my-10">
                        <img
                            {...getResponsiveImageProps(article.image, '(min-width: 1280px) 1056px, calc(100vw - 64px)')}
                            alt={article.imageAlt[language]} className="h-full w-full object-contain"
                            loading="eager" fetchPriority="high" decoding="async"
                        />
                    </div>
                    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
                        <aside className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800 lg:sticky lg:top-28 lg:col-start-2 lg:row-start-1 lg:p-6">
                            <p className="mb-4 text-sm font-semibold">{tr ? 'Bu rehberde' : 'In this guide'}</p>
                            <nav aria-label={tr ? 'İçindekiler' : 'Table of contents'}>
                                <ol className="space-y-3">
                                    {content.sections.map((section, index) => (
                                        <li key={section.heading}><a href={'#bolum-' + (index + 1)} className="block text-sm leading-6 text-gray-600 hover:text-[#0079ad] dark:text-gray-300 dark:hover:text-sky-400">{section.heading}</a></li>
                                    ))}
                                    <li><a href="#sorular" className="block text-sm leading-6 text-gray-600 hover:text-[#0079ad] dark:text-gray-300">{tr ? 'Sık sorulan sorular' : 'Frequently asked questions'}</a></li>
                                </ol>
                            </nav>
                        </aside>
                        <div className="min-w-0 space-y-10 lg:col-start-1 lg:row-start-1">
                            {content.sections.map((section, index) => (
                                <section key={section.heading} id={'bolum-' + (index + 1)} className="scroll-mt-28">
                                    <h2 className="mb-4 text-xl font-semibold leading-snug sm:text-2xl">{section.heading}</h2>
                                    {section.paragraphs.map(paragraph => <p key={paragraph} className="mb-4 text-base leading-8 text-gray-600 dark:text-gray-300">{paragraph}</p>)}
                                    {section.items && <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-gray-600 marker:text-[#0079ad] dark:text-gray-300">{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
                                    {section.table && (
                                        <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700" role="region" aria-label={section.heading} tabIndex={0}>
                                            <table className="w-full min-w-[480px] border-collapse text-left text-sm leading-7">
                                                <caption className="sr-only">{section.heading}</caption>
                                                <thead className="bg-gray-50 dark:bg-gray-800"><tr>{section.table.headers.map(heading => <th key={heading} scope="col" className="px-4 py-3 align-top font-semibold">{heading}</th>)}</tr></thead>
                                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">{section.table.rows.map(row => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th key={i} scope="row" className="px-4 py-3 align-top font-medium">{cell}</th> : <td key={i} className="px-4 py-3 align-top text-gray-600 dark:text-gray-300">{cell}</td>)}</tr>)}</tbody>
                                            </table>
                                        </div>
                                    )}
                                </section>
                            ))}
                            <section id="sorular" className="scroll-mt-28">
                                <h2 className="mb-5 text-xl font-semibold sm:text-2xl">{tr ? 'Sık sorulan sorular' : 'Frequently asked questions'}</h2>
                                <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                                    {content.questions.map(item => <details key={item.question} className="py-4"><summary className="cursor-pointer text-base font-medium leading-7">{item.question}</summary><p className="pt-3 text-base leading-8 text-gray-600 dark:text-gray-300">{item.answer}</p></details>)}
                                </div>
                            </section>
                            <section className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-800 sm:p-7">
                                <h2 className="mb-3 text-xl font-semibold">{tr ? 'İlgili ürün grupları' : 'Related product groups'}</h2>
                                <ul className="flex flex-wrap gap-2">{categories.map(category => <li key={category.id}><Link to={getCategoryPath(category)} className="inline-flex rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-[#0079ad] hover:border-[#0079ad] dark:border-gray-600 dark:bg-gray-900 dark:text-sky-400">{category.copy[language].name}</Link></li>)}</ul>
                                <p className="mb-4 mt-6 text-sm leading-7 text-gray-600 dark:text-gray-300">{tr ? 'Alan ölçülerinizi, ürünlerinizi ve beğendiğiniz modelin bağlantısını paylaşarak teklif talep edebilirsiniz.' : 'Share your dimensions, products and a preferred model link to request a quote.'}</p>
                                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#0079ad] px-5 py-3 text-sm font-semibold text-white hover:bg-[#00658f]">{tr ? 'Teklif için iletişime geçin' : 'Contact us for a quote'}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                            </section>
                        </div>
                    </div>
                </article>
                <section className="mt-16 border-t border-gray-200 pt-10 dark:border-gray-700">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                        <h2 className="text-xl font-semibold sm:text-2xl">{tr ? 'Diğer rehberler' : 'More guides'}</h2>
                        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0079ad] dark:text-sky-400"><ArrowLeft className="h-4 w-4" aria-hidden="true" />{tr ? 'Tüm yazılar' : 'All articles'}</Link>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">{related.map(item => <BlogArticleCard key={item.slug} article={item} language={language} />)}</div>
                </section>
            </div>
        </div>
    );
}
