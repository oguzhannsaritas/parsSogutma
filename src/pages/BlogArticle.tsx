import { formatHeading } from '../lib/formatHeading';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BlogArticleCard from '../components/BlogArticleCard';
import ContactActions from '../components/ContactActions';
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
        <div className="pars-canvas pb-16 pt-24 text-pars-navy dark:text-white md:pb-20">
            <article data-blog-article={article.slug}>
                <div className="pars-band">
                    <div className="mx-auto max-w-6xl px-4 pb-8 pt-5 sm:px-8 lg:pb-12 lg:pt-7">
                        <nav aria-label={tr ? 'Sayfa yolu' : 'Breadcrumb'} className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-300">
                            <Link to="/" className="hover:text-white hover:underline">{tr ? 'Ana Sayfa' : 'Home'}</Link>
                            <ChevronRight size={14} aria-hidden="true" /><Link to="/blog" className="hover:text-white hover:underline">Blog</Link>
                            <ChevronRight size={14} aria-hidden="true" /><span aria-current="page" className="text-sky-200">{formatHeading(article.topic[language], language)}</span>
                        </nav>
                        <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
                            <header className="min-w-0">
                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-sky-200">{article.topic[language]}</p>
                                <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{formatHeading(article.title[language], language)}</h1>
                                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-300">
                                    <span>{tr ? 'Pars Soğutma' : 'Pars Cooling'}</span><span aria-hidden="true">·</span>
                                    <time dateTime={article.publishedOn}>{formatBlogDate(article.publishedOn, language)}</time>
                                </div>
                                <p className="mt-4 text-base leading-7 text-slate-200">{article.introduction[language]}</p>
                            </header>
                            <div className="pars-image-stage flex aspect-[16/10] max-h-[350px] min-w-0 items-center justify-center overflow-hidden rounded-2xl border border-white/60 p-4 sm:p-6">
                                <img
                                    {...getResponsiveImageProps(article.image, '(min-width: 1200px) 440px, (min-width: 1024px) 40vw, (min-width: 640px) calc(100vw - 112px), calc(100vw - 64px)')}
                                    alt={article.imageAlt[language]} className="h-full w-full object-contain"
                                    loading="eager" fetchPriority="high" decoding="async"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 pt-6 sm:px-8 md:pt-9 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8">
                    <aside className="pars-panel pars-panel-tint p-5 lg:sticky lg:top-28 lg:col-start-2 lg:row-start-1 lg:p-6">
                        <p className="mb-4 text-base font-bold">{formatHeading(tr ? 'Bu rehberde' : 'In this guide', language)}</p>
                        <nav aria-label={tr ? 'İçindekiler' : 'Table of contents'}>
                            <ol className="divide-y divide-[#cddfec] dark:divide-slate-700">
                                {content.sections.map((section, index) => (
                                    <li key={section.heading}><a href={'#bolum-' + (index + 1)} className="block py-2.5 text-sm leading-6 text-slate-700 hover:text-pars-link hover:underline dark:text-slate-200 dark:hover:text-sky-300">{formatHeading(section.heading, language)}</a></li>
                                ))}
                                <li><a href="#sorular" className="block py-2.5 text-sm leading-6 text-slate-700 hover:text-pars-link hover:underline dark:text-slate-200 dark:hover:text-sky-300">{formatHeading(tr ? 'Sık sorulan sorular' : 'Frequently asked questions', language)}</a></li>
                            </ol>
                        </nav>
                    </aside>
                    <div className="pars-panel min-w-0 space-y-8 p-5 sm:p-8 lg:col-start-1 lg:row-start-1">
                        {content.sections.map((section, index) => (
                            <section key={section.heading} id={'bolum-' + (index + 1)} className="scroll-mt-24 border-t border-pars-line pt-7 first:border-t-0 first:pt-0 dark:border-slate-700">
                                <h2 className="mb-4 text-xl font-bold leading-snug sm:text-2xl">{formatHeading(section.heading, language)}</h2>
                                {section.paragraphs.map(paragraph => <p key={paragraph} className="mb-4 text-base leading-8 text-slate-700 dark:text-slate-300">{paragraph}</p>)}
                                {section.items && <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-slate-700 marker:text-pars-link dark:text-slate-300 dark:marker:text-sky-300">{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
                                {section.figures && (
                                    <div className="my-5 grid gap-4 sm:grid-cols-2">
                                        {section.figures.map(figure => (
                                            <figure key={figure.to} className="pars-panel overflow-hidden rounded-xl">
                                                <div className="pars-image-stage aspect-[4/3] p-3">
                                                    <img {...getResponsiveImageProps(figure.image, '(min-width: 1024px) 340px, (min-width: 640px) 45vw, 85vw', 480)}
                                                        alt={figure.alt} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                                                </div>
                                                <figcaption className="border-t border-pars-line p-4 text-sm leading-6 dark:border-slate-700">
                                                    <Link to={figure.to} className="font-semibold text-pars-link underline underline-offset-4 dark:text-sky-300">{figure.caption}</Link>
                                                </figcaption>
                                            </figure>
                                        ))}
                                    </div>
                                )}
                                {section.table && (
                                    <div className="mt-5 overflow-x-auto rounded-xl border border-pars-line focus-visible:outline-2 focus-visible:outline-pars-blue dark:border-slate-700" role="region" aria-label={section.heading} tabIndex={0}>
                                        <table className="w-full min-w-[480px] border-collapse text-left text-sm leading-7">
                                            <caption className="sr-only">{section.heading}</caption>
                                            <thead className="bg-[#e8f2fa] dark:bg-[#162a3f]"><tr>{section.table.headers.map(heading => <th key={heading} scope="col" className="px-4 py-3 align-top font-semibold">{heading}</th>)}</tr></thead>
                                            <tbody className="divide-y divide-pars-line dark:divide-slate-700">{section.table.rows.map(row => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th key={i} scope="row" className="px-4 py-3 align-top font-medium">{cell}</th> : <td key={i} className="px-4 py-3 align-top text-slate-700 dark:text-slate-300">{cell}</td>)}</tr>)}</tbody>
                                        </table>
                                    </div>
                                )}
                                {section.links && (
                                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm leading-6">
                                        {section.links.map(link => (
                                            <li key={link.to}>
                                                <Link to={link.to} className="font-semibold text-pars-link underline decoration-current/40 underline-offset-4 hover:decoration-current dark:text-sky-300">{link.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}
                        <section id="sorular" className="scroll-mt-24 border-t border-pars-line pt-7 dark:border-slate-700">
                            <h2 className="mb-4 text-xl font-bold sm:text-2xl">{formatHeading(tr ? 'Sık sorulan sorular' : 'Frequently asked questions', language)}</h2>
                            <div className="divide-y divide-pars-line border-t border-pars-line dark:divide-slate-700 dark:border-slate-700">
                                {content.questions.map(item => <details key={item.question} className="py-4"><summary className="cursor-pointer text-base font-semibold leading-7 marker:text-pars-link focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pars-blue dark:marker:text-sky-300">{formatHeading(item.question, language)}</summary><p className="pt-3 text-base leading-8 text-slate-700 dark:text-slate-300">{item.answer}</p></details>)}
                            </div>
                        </section>
                        <section className="pars-quote p-4 sm:p-6">
                            <h2 className="mb-3 text-xl font-bold">{formatHeading(tr ? 'İlgili ürün grupları' : 'Related product groups', language)}</h2>
                            <ul className="flex flex-wrap gap-2">{categories.map(category => <li key={category.id}><Link to={getCategoryPath(category)} className="inline-flex min-h-10 items-center rounded-lg border border-white/50 bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20">{formatHeading(category.copy[language].name, language)}</Link></li>)}</ul>
                            <p className="mb-5 mt-5 text-base leading-7 text-slate-100">{tr ? 'Alan ölçülerinizi, ürünlerinizi ve beğendiğiniz modelin bağlantısını paylaşarak teklif talep edebilirsiniz.' : 'Share your dimensions, products and a preferred model link to request a quote.'}</p>
                            <ContactActions subject={article.topic[language]} language={language} />
                            <Link to="/contact" className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-sky-100 hover:text-white hover:underline">{tr ? 'Teklif için iletişime geçin' : 'Contact us for a quote'}<ArrowRight size={15} className="shrink-0" aria-hidden="true" /></Link>
                        </section>
                    </div>
                </div>
            </article>
            <div className="mx-auto max-w-6xl px-4 sm:px-8">
                <section className="mt-12 border-t border-pars-line pt-8 dark:border-slate-700">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                        <h2 className="text-xl font-bold sm:text-2xl">{formatHeading(tr ? 'Diğer rehberler' : 'More guides', language)}</h2>
                        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-pars-link hover:underline dark:text-sky-300"><ArrowLeft size={16} aria-hidden="true" />{tr ? 'Tüm yazılar' : 'All articles'}</Link>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">{related.map(item => <BlogArticleCard key={item.slug} article={item} language={language} />)}</div>
                </section>
            </div>
        </div>
    );
}
