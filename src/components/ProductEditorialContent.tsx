import { formatHeading } from '../lib/formatHeading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '../data/products/types';
import type { ProductEditorialContent } from '../data/productContentTypes';
import { getCategoryPath, getProductCategory, type CatalogLanguage } from '../data/catalog';
import { getProductDescription } from '../seo/config';
import RelatedBlogGuides from './RelatedBlogGuides';

const copy = {
    TR: { selection: 'Seçim yaparken', questions: 'Sık sorulan sorular' },
    EN: { selection: 'When choosing a model', questions: 'Frequently asked questions' },
};

export function ProductIntroduction({ product, language, content }: { product: Product; language: CatalogLanguage; content?: ProductEditorialContent }) {
    const category = getProductCategory(product);
    return (
        <div data-product-introduction={product.id} className="mb-6 space-y-3">
            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{content?.introduction ?? `${getProductDescription(product, language)} ${category.copy[language].productUse}`}</p>
            <Link to={getCategoryPath(category)} className="inline-flex items-center gap-2 text-sm font-medium text-[#0083bb] dark:text-[#72D5E3]">{category.copy[language].name}<ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
    );
}

export function ProductBuyerGuide({ product, language, content }: { product: Product; language: CatalogLanguage; content?: ProductEditorialContent }) {
    if (!content) return null;
    const selectionId = `product-selection-${product.id}`;
    const questionsId = `product-questions-${product.id}`;
    return (
        <div data-product-buyer-guide={product.id} className="mt-8 space-y-6">
            <section aria-labelledby={selectionId} className="pars-panel p-5 sm:p-6">
                <h2 id={selectionId} className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">{formatHeading(copy[language].selection, language)}</h2>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {content.selection.map(item => <li key={item}>{item}</li>)}
                </ul>
            </section>
            <section aria-labelledby={questionsId} className="pars-panel p-5 sm:p-6">
                <h2 id={questionsId} className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">{formatHeading(copy[language].questions, language)}</h2>
                <div className="divide-y divide-pars-line border-t border-pars-line dark:divide-slate-700 dark:border-slate-700">
                    {content.questions.map(item => <details key={item.question} className="py-4">
                        <summary className="cursor-pointer text-base font-medium leading-7 text-gray-900 marker:text-pars-link focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pars-blue dark:text-white dark:marker:text-sky-300">{formatHeading(item.question, language)}</summary>
                        <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{item.answer}</p>
                    </details>)}
                </div>
            </section>
            <RelatedBlogGuides categoryId={getProductCategory(product).id} language={language} />
        </div>
    );
}

