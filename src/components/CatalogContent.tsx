import { formatHeading } from '../lib/formatHeading';
import { getResponsiveImageProps, CARD_IMAGE_SIZES, CATEGORY_IMAGE_SIZES } from '../lib/responsiveImages';
import { projects, getReferencePath } from '../data/references';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { ProductSummary } from '../data/products/types';
import { categoryModelGroupLabel, getCategoryModelGroups } from '../data/catalogModelGroups';
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
import { getProductMainImage, getProductPath } from '../seo/config';
import ContactActions from './ContactActions';
import RelatedBlogGuides from './RelatedBlogGuides';
import CategoryModelSelection, { CatalogModelFacts, modelSelectionId, modelSelectionLabel } from './CategoryModelSelection';

const copy = {
    TR: {
        home: 'Ana Sayfa', products: 'Ürünler', groups: 'Ürün gruplarını keşfedin',
        models: 'Modelleri karşılaştırın', modelCount: 'model', details: 'Ürünü inceleyin',
        selection: 'Seçim yaparken', questions: 'Sık sorulan sorular', related: 'İlgili ürün grupları',
        relatedModels: 'Aynı gruptaki diğer modeller', allModels: 'Bu gruptaki tüm modeller',
    },
    EN: {
        home: 'Home', products: 'Products', groups: 'Explore product groups',
        models: 'Compare models', modelCount: 'models', details: 'View product',
        selection: 'When choosing a model', questions: 'Frequently asked questions', related: 'Related product groups',
        relatedModels: 'Other models in this group', allModels: 'View every model in this group',
    },
};

export function CategoryLinks({ language }: { language: CatalogLanguage }) {
    return (
        <nav aria-labelledby="catalog-category-links" className="pars-panel pars-panel-tint mb-8 p-4 sm:p-6">
            <h2 id="catalog-category-links" className="mb-4 text-lg font-bold text-pars-navy dark:text-white">{formatHeading(copy[language].groups, language)}</h2>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
                {productCategories.map(category => (
                    <Link key={category.id} to={getCategoryPath(category)} className="pars-panel flex min-h-12 min-w-0 items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-sm font-medium leading-snug text-pars-navy transition-colors hover:border-pars-blue hover:text-pars-link focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pars-blue dark:text-slate-100 dark:hover:border-pars-blue dark:hover:text-sky-300 sm:px-4">
                        <span className="min-w-0 break-words">{formatHeading(category.copy[language].name, language)}</span>
                        <ChevronRight size={16} aria-hidden="true" className="shrink-0 text-pars-link dark:text-sky-300" />
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export function CatalogProductCard({ product, language, headingLevel = 3, showSelectionDetails = false }: { product: ProductSummary; language: CatalogLanguage; headingLevel?: 3 | 4; showSelectionDetails?: boolean }) {
    const name = getProductDisplayName(product, language);
    const Heading = headingLevel === 4 ? 'h4' : 'h3';
    return (
        <Link to={getProductPath(product)} id={showSelectionDetails ? `model-${product.id}` : undefined} className="pars-panel group flex h-full min-w-0 scroll-mt-28 flex-col overflow-hidden shadow-sm transition-colors hover:border-pars-blue target:border-pars-blue target:ring-2 target:ring-pars-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pars-blue dark:hover:border-pars-blue">
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden border-b border-pars-line bg-white dark:border-slate-700">
                <img {...getResponsiveImageProps(getProductMainImage(product), CARD_IMAGE_SIZES, 320)} alt={name} loading="lazy" decoding="async" className="absolute inset-0 block h-full w-full max-w-full object-contain object-center p-3 transition-transform duration-300 group-hover:scale-[1.03] sm:p-4" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-3 p-4 sm:p-5">
                <Heading className="min-h-11 break-words text-sm sm:text-base font-semibold leading-snug text-gray-900 dark:text-white">{formatHeading(name, language)}</Heading>
                {showSelectionDetails && <CatalogModelFacts product={product} language={language} />}
                <span className="mt-auto inline-flex items-center gap-2 text-xs font-medium text-[#0083bb] dark:text-[#72D5E3]">{copy[language].details}<ArrowRight size={15} aria-hidden="true" /></span>
            </div>
        </Link>
    );
}

export function CategoryContent({ category, products, language }: { category: ProductCategory; products: ProductSummary[]; language: CatalogLanguage }) {
    const text = category.copy[language];
    const labels = copy[language];
    const models = getCategoryProducts(category, products);
    const modelGroups = getCategoryModelGroups(category.id, models);
    const featured = getFeaturedProduct(category, products);
    const related = productCategories.filter(item => category.related.includes(item.id));
    return (
        <div className="pars-canvas pb-16 pt-24 text-pars-navy dark:text-white">
            <div className="pars-band">
                <div className="container mx-auto px-4 pb-8 pt-5 sm:px-6 lg:px-12 lg:pb-12 lg:pt-7">
                    <nav aria-label={language === 'TR' ? 'İçerik yolu' : 'Breadcrumb'} className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-300">
                        <Link to="/" className="hover:text-white hover:underline">{labels.home}</Link><ChevronRight size={14} aria-hidden="true" />
                        <Link to="/products" className="hover:text-white hover:underline">{labels.products}</Link><ChevronRight size={14} aria-hidden="true" />
                        <span aria-current="page" className="text-sky-200">{formatHeading(text.name, language)}</span>
                    </nav>
                    <header className="grid items-center gap-7 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
                        <div className="min-w-0">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-sky-200">Pars {language === 'TR' ? 'Soğutma' : 'Cooling'}</p>
                            <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl xl:text-5xl">{formatHeading(text.name, language)}</h1>
                            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:mt-5">{text.intro}</p>
                            <div className="mt-6"><ContactActions subject={text.name} language={language} /></div>
                            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                                <a href={`#${modelSelectionId}`} className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-sky-200 hover:text-white hover:underline">{formatHeading(modelSelectionLabel[language], language)}<ArrowRight size={16} className="shrink-0" aria-hidden="true" /></a>
                                <a href="#modeller" className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-slate-200 hover:text-white hover:underline">{formatHeading(labels.models, language)}<ArrowRight size={16} className="shrink-0" aria-hidden="true" /></a>
                            </div>
                        </div>
                        <div className="pars-image-stage relative flex aspect-[8/5] max-h-[390px] min-w-0 items-center justify-center overflow-hidden rounded-2xl border border-white/60 p-3 sm:p-5">
                            <img {...getResponsiveImageProps(getProductMainImage(featured), CATEGORY_IMAGE_SIZES)} alt={getProductDisplayName(featured, language)} fetchPriority="high" decoding="async" className="h-full w-full object-contain" />
                            <span className="absolute bottom-3 right-3 rounded-full border border-pars-line bg-white px-3 py-1 text-xs font-medium text-slate-700">{models.length} {labels.modelCount}</span>
                        </div>
                    </header>
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <CategoryModelSelection categoryId={category.id} models={models} language={language} />
                <section id="modeller" aria-labelledby="category-models-title" className="scroll-mt-28 py-10 md:py-14">
                    <div className="mb-6 flex flex-wrap items-end justify-between gap-3"><h2 id="category-models-title" className="text-xl font-bold md:text-2xl">{formatHeading(labels.models, language)}</h2><span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">{models.length} {labels.modelCount}</span></div>
                    {modelGroups.length ? (
                        <>
                            <nav aria-label={categoryModelGroupLabel[language]} className="mb-8 flex flex-wrap gap-2">
                                {modelGroups.map(group => <a key={group.id} href={`#modeller-${group.id}`} className="pars-panel rounded-full px-4 py-2 text-sm font-medium text-pars-link hover:border-pars-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pars-blue dark:text-sky-300 dark:hover:border-pars-blue">{formatHeading(group.name[language], language)}</a>)}
                            </nav>
                            <div className="space-y-10">
                                {modelGroups.map(group => (
                                    <section key={group.id} id={`modeller-${group.id}`} data-category-model-group={group.id} aria-labelledby={`model-group-${group.id}`} className="scroll-mt-28">
                                        <div className="mb-4 flex items-baseline justify-between gap-3 border-l-4 border-pars-blue pl-3"><h3 id={`model-group-${group.id}`} className="text-base font-semibold md:text-lg">{formatHeading(group.name[language], language)}</h3><span className="shrink-0 text-xs text-slate-600 dark:text-slate-300">{group.products.length} {labels.modelCount}</span></div>
                                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
                                            {group.products.map(product => <CatalogProductCard key={product.id} product={product} language={language} headingLevel={4} showSelectionDetails />)}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
                            {models.map(product => <CatalogProductCard key={product.id} product={product} language={language} showSelectionDetails />)}
                        </div>
                    )}
                </section>
                <section className="grid gap-6 border-t border-pars-line py-8 dark:border-slate-700 lg:grid-cols-[1.35fr_1fr] lg:items-start lg:gap-8">
                    <div className="space-y-7">
                        {text.sections.map(section => {
                            const product = models.find(model => model.id === section.productId);
                            return (
                                <div key={section.heading} className="pars-panel p-5 sm:p-6">
                                    <h2 className="mb-3 text-lg font-bold md:text-xl">{formatHeading(section.heading, language)}</h2>
                                    <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{section.body}</p>
                                    {product && (
                                        <Link to={getProductPath(product)} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0083bb] underline underline-offset-4 dark:text-[#72D5E3]">
                                            {section.productLinkText ?? getProductDisplayName(product, language)}
                                            <ArrowRight size={15} aria-hidden="true" />
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <aside className="pars-panel pars-panel-tint self-start p-5 sm:p-6">
                        <h2 className="mb-4 text-lg font-bold">{formatHeading(labels.selection, language)}</h2>
                        <ul className="space-y-4 text-sm leading-6 text-gray-600 dark:text-gray-300">{text.criteria.map((criterion, index) => <li key={criterion} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#009FE3]/10 text-xs font-semibold text-[#0083bb] dark:text-[#72D5E3]">{index + 1}</span><span>{criterion}</span></li>)}</ul>
                    </aside>
                </section>
                <CategoryReferences category={category} language={language} />
                <section aria-labelledby="category-questions-title" className="pars-panel my-8 p-5 sm:p-7">
                    <h2 id="category-questions-title" className="mb-5 text-xl font-bold">{formatHeading(labels.questions, language)}</h2>
                    <div className="divide-y divide-pars-line border-t border-pars-line dark:divide-slate-700 dark:border-slate-700">
                        {text.questions.map(item => <details key={item.question} className="py-4"><summary className="cursor-pointer text-base font-semibold leading-7 marker:text-pars-link focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pars-blue dark:marker:text-sky-300">{formatHeading(item.question, language)}</summary><p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">{item.answer}</p></details>)}
                    </div>
                </section>
                <RelatedBlogGuides categoryId={category.id} language={language} />
                <section id="teklif" className="pars-quote mt-8 scroll-mt-28 p-5 sm:p-7 md:p-8">
                    <h2 className="text-xl font-bold">{formatHeading(text.quote.title, language)}</h2>
                    <p className="mb-5 mt-3 max-w-3xl text-base leading-7 text-slate-100">{text.quote.body}</p>
                    <ContactActions subject={text.name} language={language} />
                    <Link to="/references" className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-sky-100 hover:text-white hover:underline">{language === 'TR' ? 'Uygulama ve referans projelerini inceleyin' : 'Explore installations and reference projects'}<ArrowRight size={15} className="shrink-0" aria-hidden="true" /></Link>
                </section>
                <nav aria-label={labels.related} className="mt-10">
                    <h2 className="mb-4 text-lg font-semibold">{formatHeading(labels.related, language)}</h2>
                    <div className="flex flex-wrap gap-3">
                        {related.map(item => <Link key={item.id} to={getCategoryPath(item)} className="pars-panel inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-pars-link hover:border-pars-blue dark:text-sky-300 dark:hover:border-pars-blue">{formatHeading(item.copy[language].name, language)}<ArrowRight size={15} className="shrink-0" aria-hidden="true" /></Link>)}
                    </div>
                </nav>
            </div>
        </div>
    );
}

export function RelatedProducts({ product, products, language }: { product: ProductSummary; products: ProductSummary[]; language: CatalogLanguage }) {
    const category = getProductCategory(product);
    const related = getCategoryProducts(category, products).filter(item => item.id !== product.id).slice(0, 4);
    if (!related.length) return null;
    return (
        <section data-related-products className="pars-panel pars-panel-tint mt-10 p-4 sm:p-6">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3"><h2 className="text-xl font-bold text-gray-900 dark:text-white">{formatHeading(copy[language].relatedModels, language)}</h2><Link to={getCategoryPath(category)} className="inline-flex items-center gap-2 text-sm text-[#0083bb] dark:text-[#72D5E3]">{copy[language].allModels}<ArrowRight size={16} aria-hidden="true" /></Link></div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">{related.map(item => <CatalogProductCard key={item.id} product={item} language={language} />)}</div>
        </section>
    );
}

export function HomeIntroduction({ language }: { language: CatalogLanguage }) {
    return (
        <section className="pars-canvas border-y border-pars-line px-4 py-10 text-pars-navy dark:border-slate-700 dark:text-white md:px-12 md:py-14">
            <div className="container mx-auto max-w-5xl text-center">
                <h1 className="text-2xl font-bold leading-tight md:text-3xl">{formatHeading(language === 'TR' ? 'İşletmeniz için endüstriyel soğutma çözümleri' : 'Industrial refrigeration for your business', language)}</h1>
                <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-gray-600 dark:text-gray-300 md:text-base">{language === 'TR' ? 'Market, kasap, pastane, kafe ve restoran projeleri için teşhir dolapları, soğuk hava depoları ve profesyonel mutfak ekipmanları. Ürün gruplarını inceleyin; model, ölçü ve teknik özellikleri karşılaştırarak işletmeniz için uygun seçeneklere ulaşın.' : 'Display cabinets, cold rooms and professional kitchen equipment for supermarkets, butchers, bakeries, cafes and restaurants. Explore product groups and compare models, dimensions and specifications for your business.'}</p>
                <Link to="/products" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0083bb] dark:text-[#72D5E3]">{language === 'TR' ? 'Tüm ürünleri inceleyin' : 'Explore all products'}<ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
        </section>
    );
}

export function CategoryReferences({ category, language }: { category: ProductCategory; language: CatalogLanguage }) {
    const relevantProjects = projects.filter(project => project.categoryIds.includes(category.id));
    if (!relevantProjects.length) return null;
    return (
        <section aria-labelledby="category-references-title" className="pars-panel pars-panel-tint p-5 sm:p-7">
            <h2 id="category-references-title" className="mb-3 text-xl font-bold">{formatHeading(language === 'TR' ? 'Bu ürün grubuyla ilgili uygulamalar' : 'Installations for this product group', language)}</h2>
            <p className="mb-5 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">{language === 'TR' ? 'İlgili referans projelerinde teşhir düzenini ve mağaza içindeki yerleşimi inceleyin.' : 'Explore related reference projects to see display arrangements and shop layouts.'}</p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {relevantProjects.map(project => <li key={project.id} className="pars-panel p-4"><Link to={getReferencePath(project)} className="inline-flex items-center gap-2 text-sm font-semibold text-pars-link hover:underline dark:text-sky-300">{formatHeading(project.title, language)}<ArrowRight size={15} className="shrink-0" aria-hidden="true" /></Link><p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{project.location}</p></li>)}
            </ul>
        </section>
    );
}
