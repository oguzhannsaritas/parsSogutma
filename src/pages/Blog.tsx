import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BlogArticleCard from '../components/BlogArticleCard';
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
        <div className="bg-white pb-16 pt-32 text-gray-950 dark:bg-[#111827] dark:text-white md:pb-24 md:pt-40">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                <nav aria-label={tr ? 'Sayfa yolu' : 'Breadcrumb'} className="mb-8 flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Link to="/" className="hover:text-[#0079ad]">{tr ? 'Ana Sayfa' : 'Home'}</Link>
                    <span aria-hidden="true">/</span>
                    {page === 1 ? <span aria-current="page">Blog</span> : (
                        <>
                            <Link to="/blog" className="hover:text-[#0079ad]">Blog</Link>
                            <span aria-hidden="true">/</span><span aria-current="page">{pageLabel} {page}</span>
                        </>
                    )}
                </nav>
                <header className="mb-10 max-w-3xl md:mb-14">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#0079ad] dark:text-sky-400">{tr ? 'Soğutma rehberi' : 'Refrigeration guides'}</p>
                    <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{tr ? 'Pars Soğutma Blog' : 'Pars Cooling Blog'}</h1>
                    <p className="max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
                        {tr
                            ? 'İşletmenize uygun dolabı seçerken ihtiyaç duyacağınız bilgiler. Model karşılaştırmaları, yerleşim önerileri ve özel ölçü üretim için teklif rehberleri.'
                            : 'Practical information for choosing a cabinet for your business. Explore model comparisons, layout considerations and guides to requesting a custom manufacturing quote.'}
                    </p>
                </header>
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
                                            className={'flex size-11 items-center justify-center rounded-md text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0079ad] ' + (active
                                                ? 'bg-[#0079ad] text-white dark:bg-[#72D5E3] dark:text-slate-950'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700')}>
                                            {number}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                )}
                <aside className="mt-12 rounded-2xl bg-gray-50 p-6 dark:bg-gray-800 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">{tr ? 'İşletmenizin ölçülerine göre değerlendirelim.' : 'Let’s review your available space.'}</h2>
                        <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{tr ? 'Alan ölçülerini ve sergileyeceğiniz ürünleri paylaşarak teklif talep edebilirsiniz.' : 'Share your dimensions and the products you will display to request a quote.'}</p>
                    </div>
                    <Link to="/contact" className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#0079ad] px-5 py-3 text-sm font-semibold text-white hover:bg-[#00658f] sm:mt-0">
                        {tr ? 'Teklif için iletişime geçin' : 'Contact us for a quote'}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </aside>
            </div>
        </div>
    );
}
