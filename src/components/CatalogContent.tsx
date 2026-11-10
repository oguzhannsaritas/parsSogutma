import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, MessageCircle, Phone } from 'lucide-react';
import type { Product } from '../data/products/types';
import {
    getCategoryPath,
    getCategoryProducts,
    getFeaturedProduct,
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
        <div className="flex flex-col sm:flex-row gap-3">
            <a
                href={`https://wa.me/905431707277?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={event => trackContactClick(event, 'whatsapp')}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#009FE3] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0083bb] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#009FE3]"
            >
                <MessageCircle size={18} aria-hidden="true" />{labels.quote}
            </a>
            <a
                href="tel:+905431707277"
                onClick={event => trackContactClick(event, 'phone')}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-100 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#009FE3]"
            >
                <Phone size={17} aria-hidden="true" />{labels.phone}
            </a>
        </div>
    );
}

export function CategoryLinks({ language, className = '' }: { language: CatalogLanguage; className?: string }) {
    return (
        <nav aria-label={copy[language].groups} className={className}>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">{copy[language].groups}</h2>
            <div className="flex flex-wrap gap-2">
                {productCategories.map(category => (
                    <Link key={category.id} to={getCategoryPath(category)} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs sm:text-sm text-gray-700 transition-colors hover:border-[#009FE3] hover:text-[#0083bb] dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#009FE3]">
                        {category.copy[language].name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export function CatalogProductCard({ product, language }: { product: Product; language: CatalogLanguage }) {
    const name = getProductDisplayName(product, language);
    return (
        <Link to={getProductPath(product)} className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors hover:border-[#009FE3] dark:border-neutral-700 dark:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#009FE3]">
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-white">
                <img src={getProductThumbnailUrl(getProductMainImage(product))} alt={name} width={320} height={240} loading="lazy" decoding="async" className="absolute inset-0 block h-full w-full max-w-full object-contain object-center p-3 transition-transform duration-300 group-hover:scale-[1.03] sm:p-4" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-3 p-4 sm:p-5">
                <h3 className="min-h-11 break-words text-sm sm:text-base font-semibold leading-snug text-gray-900 dark:text-white">{name}</h3>
                <span className="mt-auto inline-flex items-center gap-2 text-xs font-medium text-[#0083bb] dark:text-[#72D5E3]">{copy[language].details}<ArrowRight size={15} aria-hidden="true" /></span>
            </div>
        </Link>
    );
}

export function CategoryContent({ category, products, language }: { category: ProductCategory; products: Product[]; language: CatalogLanguage }) {
    const text = category.copy[language];
    const labels = copy[language];
    const models = getCategoryProducts(category, products);
    const featured = getFeaturedProduct(category, products);
    const related = productCategories.filter(item => category.related.includes(item.id));
    return (
        <div className="bg-white pb-16 pt-28 text-gray-900 transition-colors dark:bg-[#111827] dark:text-white md:pt-32">
            <div className="container mx-auto px-4 md:px-12">
                <nav aria-label={language === 'TR' ? 'İçerik yolu' : 'Breadcrumb'} className="mb-8 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Link to="/" className="hover:text-[#0083bb]">{labels.home}</Link><ChevronRight size={13} aria-hidden="true" />
                    <Link to="/products" className="hover:text-[#0083bb]">{labels.products}</Link><ChevronRight size={13} aria-hidden="true" />
                    <span aria-current="page">{text.name}</span>
                </nav>
                <header className="grid items-center gap-8 border-b border-gray-200 pb-10 dark:border-neutral-700 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0083bb] dark:text-[#72D5E3]">Pars {language === 'TR' ? 'Soğutma' : 'Cooling'}</p>
                        <h1 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{text.name}</h1>
                        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">{text.intro}</p>
                        <div className="mt-6"><ContactActions subject={text.name} language={language} /></div>
                        <a href="#modeller" className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:text-[#0083bb]">{labels.models}<ArrowRight size={16} aria-hidden="true" /></a>
                    </div>
                    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-gray-100 bg-white p-5 shadow-sm dark:border-neutral-700 sm:p-8">
                        <img src={getProductMainImage(featured)} alt={getProductDisplayName(featured, language)} width={960} height={720} fetchPriority="high" decoding="async" className="h-full w-full object-contain" />
                        <span className="absolute bottom-4 right-4 rounded-full border border-gray-200 bg-white/95 px-3 py-1.5 text-xs text-gray-600">{models.length} {labels.modelCount}</span>
                    </div>
                </header>
                <section id="modeller" aria-labelledby="category-models-title" className="scroll-mt-28 py-10 md:py-14">
                    <div className="mb-6 flex flex-wrap items-end justify-between gap-3"><h2 id="category-models-title" className="text-xl font-bold md:text-2xl">{labels.models}</h2><span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">{models.length} {labels.modelCount}</span></div>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
                        {models.map(product => <CatalogProductCard key={product.id} product={product} language={language} />)}
                    </div>
                </section>
                <section className="grid gap-8 border-t border-gray-200 py-10 dark:border-neutral-700 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
                    <div className="space-y-7">
                        {text.sections.map(section => <div key={section.heading}><h2 className="mb-3 text-lg font-bold md:text-xl">{section.heading}</h2><p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{section.body}</p></div>)}
                    </div>
                    <aside className="self-start rounded-2xl bg-gray-50 p-6 dark:bg-neutral-900">
                        <h2 className="mb-4 text-lg font-bold">{labels.selection}</h2>
                        <ul className="space-y-4 text-sm leading-6 text-gray-600 dark:text-gray-300">{text.criteria.map((criterion, index) => <li key={criterion} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#009FE3]/10 text-xs font-semibold text-[#0083bb] dark:text-[#72D5E3]">{index + 1}</span><span>{criterion}</span></li>)}</ul>
                    </aside>
                </section>
                <section aria-labelledby="category-questions-title" className="max-w-4xl py-8">
                    <h2 id="category-questions-title" className="mb-5 text-xl font-bold">{labels.questions}</h2>
                    <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-neutral-700 dark:border-neutral-700">
                        {text.questions.map(item => <details key={item.question} className="group py-5"><summary className="cursor-pointer text-sm font-semibold leading-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#009FE3]">{item.question}</summary><p className="mt-3 pr-4 text-sm leading-7 text-gray-600 dark:text-gray-300">{item.answer}</p></details>)}
                    </div>
                </section>
                <section className="mt-8 rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-neutral-700 dark:bg-neutral-900 md:p-8">
                    <h2 className="text-xl font-bold">{labels.quoteTitle}</h2><p className="mb-5 mt-3 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300">{labels.quoteText}</p>
                    <ContactActions subject={text.name} language={language} />
                    <Link to="/references" className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:text-[#0083bb]">{language === 'TR' ? 'Uygulama ve referans projelerini inceleyin' : 'Explore installations and reference projects'}<ArrowRight size={15} aria-hidden="true" /></Link>
                </section>
                <nav aria-label={labels.related} className="mt-12"><h2 className="mb-4 text-lg font-semibold">{labels.related}</h2><div className="flex flex-wrap gap-3">{related.map(item => <Link key={item.id} to={getCategoryPath(item)} className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm hover:border-[#009FE3] dark:border-neutral-700">{item.copy[language].name}<ArrowRight size={15} aria-hidden="true" /></Link>)}</div></nav>
            </div>
        </div>
    );
}

export function ProductIntroduction({ product, language }: { product: Product; language: CatalogLanguage }) {
    const category = getProductCategory(product);
    return (
        <div data-product-introduction={product.id} className="mb-6 space-y-3">
            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{getProductDescription(product, language)} {category.copy[language].productUse}</p>
            <Link to={getCategoryPath(category)} className="inline-flex items-center gap-2 text-sm font-medium text-[#0083bb] dark:text-[#72D5E3]">{category.copy[language].name}<ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
    );
}

export function RelatedProducts({ product, products, language }: { product: Product; products: Product[]; language: CatalogLanguage }) {
    const category = getProductCategory(product);
    const related = getCategoryProducts(category, products).filter(item => item.id !== product.id).slice(0, 4);
    if (!related.length) return null;
    return (
        <section data-related-products className="mt-14 border-t border-gray-200 pt-8 dark:border-neutral-700">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3"><h2 className="text-xl font-bold text-gray-900 dark:text-white">{copy[language].relatedModels}</h2><Link to={getCategoryPath(category)} className="inline-flex items-center gap-2 text-sm text-[#0083bb] dark:text-[#72D5E3]">{copy[language].allModels}<ArrowRight size={16} aria-hidden="true" /></Link></div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">{related.map(item => <CatalogProductCard key={item.id} product={item} language={language} />)}</div>
        </section>
    );
}

export function HomeIntroduction({ language }: { language: CatalogLanguage }) {
    return (
        <section className="bg-white px-4 py-10 text-gray-900 dark:bg-[#111827] dark:text-white md:px-12 md:py-14">
            <div className="container mx-auto max-w-5xl text-center">
                <h1 className="text-2xl font-bold leading-tight md:text-3xl">{language === 'TR' ? 'İşletmeniz için endüstriyel soğutma çözümleri' : 'Industrial refrigeration for your business'}</h1>
                <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-gray-600 dark:text-gray-300 md:text-base">{language === 'TR' ? 'Market, kasap, pastane, kafe ve restoran projeleri için teşhir dolapları, soğuk hava depoları ve profesyonel mutfak ekipmanları. Ürün gruplarını inceleyin; model, ölçü ve teknik özellikleri karşılaştırarak işletmeniz için uygun seçeneklere ulaşın.' : 'Display cabinets, cold rooms and professional kitchen equipment for supermarkets, butchers, bakeries, cafes and restaurants. Explore product groups and compare models, dimensions and specifications for your business.'}</p>
                <Link to="/products" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0083bb] dark:text-[#72D5E3]">{language === 'TR' ? 'Tüm ürünleri inceleyin' : 'Explore all products'}<ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
        </section>
    );
}
