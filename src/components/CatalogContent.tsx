import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, MessageCircle, Phone } from 'lucide-react';
import type { Product } from '../data/products/types';
import {
    getCategoryPath,
    getCategoryProducts,
    getProductCategory,
    getProductDisplayName,
    productCategories,
    type CatalogLanguage,
    type ProductCategory,
} from '../data/catalog';
import { getProductDescription, getProductMainImage, getProductPath } from '../seo/config';
import { getProductThumbnailUrl } from '../lib/productImages';
import { trackContactClick } from '../lib/googleAds';

const copy = {
    TR: {
        home: 'Ana Sayfa', products: 'Ürünler', groups: 'Ürün gruplarını keşfedin',
        quote: 'WhatsApp ile teklif alın', phone: 'Bizi arayın',
        models: 'Modelleri karşılaştırın', modelCount: 'model', details: 'Ürünü inceleyin',
        selection: 'Seçim yaparken', questions: 'Sık sorulan sorular', related: 'İlgili ürün grupları',
        quoteTitle: 'Projeniz için birlikte değerlendirelim',
        quoteText: 'Kullanılabilir alan ölçülerinizi, ürün grubunu ve beğendiğiniz modeli paylaşın. İşletmenize uygun seçenekler için bilgi ve teklif alın.',
        relatedModels: 'Aynı gruptaki diğer modeller', allModels: 'Bu gruptaki tüm modeller',
    },
    EN: {
        home: 'Home', products: 'Products', groups: 'Explore product groups',
        quote: 'Request a quote on WhatsApp', phone: 'Call us',
        models: 'Compare models', modelCount: 'models', details: 'View product',
        selection: 'When choosing a model', questions: 'Frequently asked questions', related: 'Related product groups',
        quoteTitle: 'Let us discuss your project',
        quoteText: 'Share the available dimensions, product group and preferred model. Discuss suitable options and request a quote for your business.',
        relatedModels: 'Other models in this group', allModels: 'View every model in this group',
    },
};

export function ContactActions({ subject, language }: { subject: string; language: CatalogLanguage }) {
    const labels = copy[language];
    const message = language === 'TR'
        ? `Merhaba, ${subject} için bilgi ve teklif almak istiyorum.`
        : `Hello, I would like information and a quote for ${subject}.`;
    return (
        <div className="flex flex-wrap items-center gap-3">
            <a href={`https://wa.me/905431707277?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" onClick={event => trackContactClick(event, 'whatsapp')} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#111827] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 sm:text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-500">
                <MessageCircle size={17} aria-hidden="true" />{labels.quote}
            </a>
            <a href="tel:+905431707277" onClick={event => trackContactClick(event, 'phone')} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-xs font-semibold text-gray-900 transition-colors hover:border-gray-600 dark:border-neutral-600 dark:text-white sm:text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-500">
                <Phone size={16} aria-hidden="true" />{labels.phone}
            </a>
        </div>
    );
}

export function CategoryLinks({ language, className = '' }: { language: CatalogLanguage; className?: string }) {
    return (
        <nav aria-label={copy[language].groups} className={className}>
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-900 dark:text-white sm:text-sm">{copy[language].groups}</h2>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
                {productCategories.map(category => (
                    <Link key={category.id} to={getCategoryPath(category)} className="text-xs text-gray-600 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-black hover:decoration-gray-700 dark:text-gray-300 dark:decoration-neutral-600 dark:hover:text-white sm:text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-500">
                        {category.copy[language].name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export function CatalogProductCard({ product, language, priority = false }: { product: Product; language: CatalogLanguage; priority?: boolean }) {
    const name = getProductDisplayName(product, language);
    return (
        <Link to={getProductPath(product)} title={name} className="group flex h-full min-w-0 cursor-pointer flex-col rounded-xl border border-gray-300 bg-white p-2 transition-all duration-300 hover:border-gray-500 hover:shadow-lg dark:border-neutral-800 dark:bg-[#1a2232] dark:hover:border-neutral-600 sm:p-3 lg:p-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-500">
            <div className="relative mb-2 aspect-square w-full shrink-0 overflow-hidden rounded-lg bg-white sm:mb-3 lg:mb-4">
                <img src={getProductThumbnailUrl(getProductMainImage(product))} alt={name} width={320} height={320} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" className="absolute inset-0 block h-full w-full max-w-full object-contain object-center p-2 transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-end space-y-1">
                <h3 className="min-h-[2.5em] line-clamp-2 break-words text-xs font-bold leading-tight text-gray-900 dark:text-white sm:text-sm md:text-base lg:text-lg">{name}</h3>
                <p className="truncate text-xs leading-tight text-gray-700 dark:text-gray-300 sm:text-sm">{product.category[language]}</p>
                <p className="truncate text-xs leading-tight text-gray-600 dark:text-gray-300 md:text-sm">{product.type[language]}</p>
            </div>
        </Link>
    );
}

export function CategoryContent({ category, products, language }: { category: ProductCategory; products: Product[]; language: CatalogLanguage }) {
    const text = category.copy[language];
    const labels = copy[language];
    const models = getCategoryProducts(category, products);
    const related = productCategories.filter(item => category.related.includes(item.id));
    return (
        <div className="min-h-screen bg-white pb-16 pt-24 text-gray-900 transition-colors dark:bg-[#111827] dark:text-white">
            <div className="mb-8 bg-[#111827] py-4 text-center text-white dark:bg-white dark:text-black md:mb-12 md:py-16">
                <div className="container mx-auto px-4 md:px-12"><h1 className="text-lg font-bold md:text-4xl">{text.name}</h1></div>
            </div>
            <div className="container mx-auto px-4 md:px-12">
                <nav aria-label={language === 'TR' ? 'İçerik yolu' : 'Breadcrumb'} className="mb-6 flex flex-wrap items-center gap-2 border-b border-gray-200 pb-4 text-xs text-gray-500 dark:border-neutral-700 dark:text-gray-400 md:mb-8 md:text-sm">
                    <Link to="/" className="hover:text-black dark:hover:text-white">{labels.home}</Link><ChevronRight size={14} aria-hidden="true" />
                    <Link to="/products" className="hover:text-black dark:hover:text-white">{labels.products}</Link><ChevronRight size={14} aria-hidden="true" />
                    <span aria-current="page" className="font-bold text-black dark:text-white">{text.name}</span>
                </nav>
                <div className="grid items-start gap-8 lg:grid-cols-[220px_minmax(0,1fr)] xl:gap-10">
                    <aside className="hidden lg:block">
                        <nav aria-label={labels.groups}>
                            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide">{labels.groups}</h2>
                            <ul className="border-t border-gray-200 dark:border-neutral-700">
                                {productCategories.map(item => <li key={item.id} className="border-b border-gray-200 dark:border-neutral-700"><Link to={getCategoryPath(item)} aria-current={item.id === category.id ? 'page' : undefined} className={`block py-3 text-sm transition-colors hover:text-black dark:hover:text-white ${item.id === category.id ? 'font-bold text-black dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>{item.copy[language].name}</Link></li>)}
                            </ul>
                        </nav>
                    </aside>
                    <section id="modeller" aria-labelledby="category-models-title" className="min-w-0 scroll-mt-28">
                        <div className="mb-5 flex flex-wrap items-end justify-between gap-3"><h2 id="category-models-title" className="text-base font-bold md:text-lg">{labels.models}</h2><span className="text-xs text-gray-500 dark:text-gray-400">{models.length} {labels.modelCount}</span></div>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-6">
                            {models.map((product, index) => <CatalogProductCard key={product.id} product={product} language={language} priority={index < 2} />)}
                        </div>
                    </section>
                </div>
                <section aria-label={text.name} className="mt-10 border-t border-gray-200 pt-7 dark:border-neutral-700 md:mt-14 md:pt-9">
                    <p className="max-w-5xl text-xs leading-7 text-gray-600 dark:text-gray-300 md:text-sm">{text.intro}</p>
                    <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-10">
                        {text.sections.map(section => <div key={section.heading}><h2 className="mb-2 text-sm font-bold md:text-base">{section.heading}</h2><p className="text-xs leading-7 text-gray-600 dark:text-gray-300 md:text-sm">{section.body}</p></div>)}
                    </div>
                    <div className="mt-6"><h2 className="mb-2 text-sm font-bold md:text-base">{labels.selection}</h2><ul className="list-disc space-y-1 pl-5 text-xs leading-7 text-gray-600 dark:text-gray-300 md:text-sm">{text.criteria.map(criterion => <li key={criterion}>{criterion}</li>)}</ul></div>
                </section>
                <section aria-labelledby="category-questions-title" className="mt-7 max-w-5xl">
                    <h2 id="category-questions-title" className="mb-3 text-sm font-bold md:text-base">{labels.questions}</h2>
                    <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-neutral-700 dark:border-neutral-700">
                        {text.questions.map(item => <details key={item.question} className="py-4"><summary className="cursor-pointer text-xs font-semibold leading-6 md:text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-500">{item.question}</summary><p className="mt-2 pr-4 text-xs leading-7 text-gray-600 dark:text-gray-300 md:text-sm">{item.answer}</p></details>)}
                    </div>
                </section>
                <section className="mt-7 border-b border-gray-200 pb-7 dark:border-neutral-700">
                    <h2 className="text-sm font-bold md:text-base">{labels.quoteTitle}</h2><p className="mb-4 mt-2 max-w-4xl text-xs leading-7 text-gray-600 dark:text-gray-300 md:text-sm">{labels.quoteText}</p>
                    <ContactActions subject={text.name} language={language} />
                    <Link to="/references" className="mt-4 inline-flex items-center gap-2 text-xs text-gray-600 underline underline-offset-4 hover:text-black dark:text-gray-300 dark:hover:text-white md:text-sm">{language === 'TR' ? 'Uygulama ve referans projelerini inceleyin' : 'Explore installations and reference projects'}<ArrowRight size={14} aria-hidden="true" /></Link>
                </section>
                <nav aria-label={labels.related} className="mt-7"><h2 className="mb-3 text-sm font-bold md:text-base">{labels.related}</h2><div className="flex flex-wrap gap-x-5 gap-y-3">{related.map(item => <Link key={item.id} to={getCategoryPath(item)} className="text-xs text-gray-600 underline underline-offset-4 hover:text-black dark:text-gray-300 dark:hover:text-white md:text-sm">{item.copy[language].name}</Link>)}</div></nav>
            </div>
        </div>
    );
}

export function ProductIntroduction({ product, language }: { product: Product; language: CatalogLanguage }) {
    const category = getProductCategory(product);
    return (
        <div data-product-introduction={product.id} className="mt-5 space-y-2">
            <p className="text-xs leading-7 text-gray-600 dark:text-gray-300 md:text-sm">{getProductDescription(product, language)} {category.copy[language].productUse}</p>
            <Link to={getCategoryPath(category)} className="inline-flex items-center gap-2 text-xs text-gray-700 underline decoration-gray-300 underline-offset-4 hover:text-black dark:text-gray-300 dark:hover:text-white md:text-sm">{category.copy[language].name}<ArrowRight size={14} aria-hidden="true" /></Link>
        </div>
    );
}

export function RelatedProducts({ product, products, language }: { product: Product; products: Product[]; language: CatalogLanguage }) {
    const category = getProductCategory(product);
    const related = getCategoryProducts(category, products).filter(item => item.id !== product.id).slice(0, 4);
    if (!related.length) return null;
    return (
        <section data-related-products className="mt-8 border-t border-gray-200 pt-6 dark:border-neutral-700">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><h2 className="text-base font-bold text-gray-900 dark:text-white md:text-lg">{copy[language].relatedModels}</h2><Link to={getCategoryPath(category)} className="text-xs text-gray-600 underline underline-offset-4 hover:text-black dark:text-gray-300 dark:hover:text-white md:text-sm">{copy[language].allModels}</Link></div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">{related.map(item => <CatalogProductCard key={item.id} product={item} language={language} />)}</div>
        </section>
    );
}

export function HomeIntroduction({ language }: { language: CatalogLanguage }) {
    return (
        <section className="border-t border-gray-100 bg-white py-6 text-gray-900 dark:border-neutral-800 dark:bg-[#111827] dark:text-white md:py-8">
            <div className="container mx-auto px-4 md:px-12">
                <h1 className="text-base font-bold md:text-xl">{language === 'TR' ? 'İşletmeniz için endüstriyel soğutma çözümleri' : 'Industrial refrigeration for your business'}</h1>
                <p className="mt-3 max-w-5xl text-xs leading-7 text-gray-600 dark:text-gray-300 md:text-sm">{language === 'TR' ? 'Market, kasap, pastane, kafe ve restoran projeleri için teşhir dolapları, soğuk hava depoları ve profesyonel mutfak ekipmanları. Ürün gruplarını inceleyin; model, ölçü ve teknik özellikleri karşılaştırarak işletmeniz için uygun seçeneklere ulaşın.' : 'Display cabinets, cold rooms and professional kitchen equipment for supermarkets, butchers, bakeries, cafes and restaurants. Explore product groups and compare models, dimensions and specifications for your business.'}</p>
                <Link to="/products" className="mt-3 inline-flex items-center gap-2 text-xs font-semibold underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 md:text-sm">{language === 'TR' ? 'Tüm ürünleri inceleyin' : 'Explore all products'}<ArrowRight size={14} aria-hidden="true" /></Link>
                <CategoryLinks language={language} className="mt-6" />
            </div>
        </section>
    );
}
