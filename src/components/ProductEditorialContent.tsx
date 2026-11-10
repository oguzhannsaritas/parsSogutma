import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '../data/products/types';
import { getProductContent } from '../data/productContent';
import { getCategoryPath, getProductCategory, type CatalogLanguage } from '../data/catalog';
import { getProductDescription } from '../seo/config';

const copy = {
    TR: { selection: 'Seçim yaparken', questions: 'Sık sorulan sorular' },
    EN: { selection: 'When choosing a model', questions: 'Frequently asked questions' },
};

export function ProductIntroduction({ product, language }: { product: Product; language: CatalogLanguage }) {
    const category = getProductCategory(product);
    const content = getProductContent(product.id, language);
    return (
        <div data-product-introduction={product.id} className="mb-6 space-y-3">
            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{content?.introduction ?? `${getProductDescription(product, language)} ${category.copy[language].productUse}`}</p>
            <Link to={getCategoryPath(category)} className="inline-flex items-center gap-2 text-sm font-medium text-[#0083bb] dark:text-[#72D5E3]">{category.copy[language].name}<ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
    );
}

export function ProductBuyerGuide({ product, language }: { product: Product; language: CatalogLanguage }) {
    const content = getProductContent(product.id, language);
    if (!content) return null;
    const selectionId = `product-selection-${product.id}`;
    const questionsId = `product-questions-${product.id}`;
    return (
        <div data-product-buyer-guide={product.id} className="mt-8 space-y-8">
            <section aria-labelledby={selectionId}>
                <h2 id={selectionId} className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">{copy[language].selection}</h2>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {content.selection.map(item => <li key={item}>{item}</li>)}
                </ul>
            </section>
            <section aria-labelledby={questionsId}>
                <h2 id={questionsId} className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">{copy[language].questions}</h2>
                <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 px-4 dark:divide-neutral-700 dark:border-neutral-700 sm:px-5">
                    {content.questions.map(item => <details key={item.question} className="py-4">
                        <summary className="cursor-pointer text-sm font-medium leading-6 text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0083bb] dark:text-white">{item.question}</summary>
                        <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">{item.answer}</p>
                    </details>)}
                </div>
            </section>
        </div>
    );
}

