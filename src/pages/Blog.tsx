import { formatHeading } from '../lib/formatHeading';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BlogArticleCard from '../components/BlogArticleCard';
import ContactActions from '../components/ContactActions';
import { useLanguage } from '../context/LanguageContext';
import { blogIndexPaths, getBlogIndexArticles, getBlogIndexPage } from '../data/blog';

export default function Blog() {
    const { language } = useLanguage();
    const { pathname } = useLocation();
    const tr = language === 'TR';
    const page = getBlogIndexPage(pathname) ?? 1;
    const pageLabel = tr ? 'Sayfa' : 'Page';
    const articles = getBlogIndexArticles(page);
    return (
        <div className="pars-canvas pb-16 pt-24 text-pars-navy dark:text-white md:pb-20">
            <div className="pars-band px-4 pb-9 pt-7 text-center sm:px-6 md:pb-12 md:pt-9">
                <header className="mx-auto max-w-3xl">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">{tr ? 'Soğutma rehberi' : 'Refrigeration guides'}</p>
                    <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{formatHeading(tr ? 'Pars Soğutma Blog' : 'Pars Cooling Blog', language)}</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
                        {tr
                            ? 'İşletmenize uygun dolabı seçerken ihtiyaç duyacağınız bilgiler. Model karşılaştırmaları, yerleşim önerileri ve özel ölçü üretim için teklif rehberleri.'
                            : 'Practical information for choosing a cabinet for your business. Explore model comparisons, layout considerations and guides to requesting a custom manufacturing quote.'}
                    </p>
                </header>
            </div>
            <div className="mx-auto max-w-6xl px-4 sm:px-8">
                <nav aria-label={tr ? 'Sayfa yolu' : 'Breadcrumb'} className="flex flex-wrap items-center gap-2 py-5 text-sm text-slate-600 dark:text-slate-300 md:py-6">
                    <Link to="/" className="hover:text-pars-link hover:underline dark:hover:text-sky-300">{tr ? 'Ana Sayfa' : 'Home'}</Link>
                    <ChevronRight size={14} aria-hidden="true" />
                    {page === 1 ? <span aria-current="page" className="font-semibold">Blog</span> : (
                        <>
                            <Link to="/blog" className="hover:text-pars-link hover:underline dark:hover:text-sky-300">Blog</Link>
                            <ChevronRight size={14} aria-hidden="true" /><span aria-current="page" className="font-semibold">{pageLabel} {page}</span>
                        </>
                    )}
                </nav>
                <section aria-label={tr ? 'Blog yazıları' : 'Blog articles'} className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    {articles.map((article, index) => <BlogArticleCard key={article.slug} article={article} language={language} priority={index === 0} />)}
                </section>
                {blogIndexPaths.length > 1 && (
                    <nav aria-label={tr ? 'Blog sayfaları' : 'Blog pages'} className="mt-10">
                        <ul className="flex flex-wrap justify-center gap-2.5">
                            {blogIndexPaths.map((path, index) => {
                                const number = index + 1;
                                const active = number === page;
                                return (
                                    <li key={path}>
                                        <Link to={path} aria-label={pageLabel + ' ' + number} aria-current={active ? 'page' : undefined}
                                            className={'flex size-11 items-center justify-center rounded-lg border text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pars-blue ' + (active
                                                ? 'border-pars-link bg-pars-link text-white dark:border-sky-300 dark:bg-sky-300 dark:text-slate-950'
                                                : 'pars-panel text-slate-700 hover:border-pars-blue hover:text-pars-link dark:text-slate-100 dark:hover:border-pars-blue dark:hover:text-sky-300')}>
                                            {number}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                )}
                <aside className="pars-quote mt-12 p-5 sm:p-7 lg:flex lg:items-center lg:justify-between lg:gap-8">
                    <div>
                        <h2 className="mb-2 text-xl font-bold">{formatHeading(tr ? 'İşletmenizin ölçülerine göre değerlendirelim.' : 'Let’s review your available space.', language)}</h2>
                        <p className="max-w-xl text-base leading-7 text-slate-100">{tr ? 'Alan ölçülerini ve sergileyeceğiniz ürünleri paylaşarak teklif talep edebilirsiniz.' : 'Share your dimensions and the products you will display to request a quote.'}</p>
                    </div>
                    <div className="mt-5 lg:mt-0 lg:shrink-0">
                        <ContactActions subject={tr ? 'soğutma dolabı' : 'a refrigeration cabinet'} language={language} />
                        <Link to="/contact" className="mt-2 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-sky-100 hover:text-white hover:underline">
                            {tr ? 'Teklif için iletişime geçin' : 'Contact us for a quote'}<ArrowRight size={15} className="shrink-0" aria-hidden="true" />
                        </Link>
                    </div>
                </aside>
            </div>
        </div>
    );
}
