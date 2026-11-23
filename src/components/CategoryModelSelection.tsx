import { formatHeading } from '../lib/formatHeading';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductDisplayName, type CatalogLanguage, type CategoryId } from '../data/catalog';
import { catalogModelSelections } from '../data/catalogModelSelections';
import type { ProductSummary } from '../data/products/types';
import { getProductDescription, getProductPath } from '../seo/config';

export const modelSelectionId = 'model-secimi';
export const modelSelectionLabel = { TR: 'İşletmeme uygun modeli bul', EN: 'Find the right model for my business' };

const copy = {
    TR: { compare: 'Modelleri yan yana karşılaştırın', details: 'Ürünü inceleyin', lengths: 'Modül boyları (mm)' },
    EN: { compare: 'Compare models side by side', details: 'View product', lengths: 'Module lengths (mm)' },
};

export function CatalogModelFacts({ product, language }: { product: ProductSummary; language: CatalogLanguage }) {
    const description = getProductDescription(product, language);
    const firstSentenceEnd = description.indexOf('. ');
    const note = firstSentenceEnd < 0 ? description : description.slice(0, firstSentenceEnd + 1);
    const modules = product.specs.modules.trim();
    // Lists separated by commas or slashes are the catalogue's lengths in millimetres.
    // VENUS has one unconfirmed entry. Omit it until the catalogue value is confirmed.
    const lengths = /^\d+(?:\s*[,/]\s*\d+)+$/.test(modules)
        ? modules.split(/\s*[,/]\s*/).filter(length => product.id !== 15 || length !== '31255')
        : [];

    return (
        <div className="space-y-2 break-words text-xs leading-5 text-gray-600 dark:text-gray-300">
            <p>{note}</p>
            {lengths.length > 0 && (
                <p>
                    <span className="block font-medium text-gray-800 dark:text-gray-100">{copy[language].lengths}</span>
                    <span data-catalog-module-lengths>{lengths.join(' · ')}</span>
                </p>
            )}
        </div>
    );
}

export default function CategoryModelSelection({ categoryId, models, language }: { categoryId: CategoryId; models: ProductSummary[]; language: CatalogLanguage }) {
    const { question, choices } = catalogModelSelections[categoryId];

    return (
        <section id={modelSelectionId} aria-labelledby="model-selection-title" className="pars-panel pars-panel-tint mt-8 scroll-mt-28 p-5 sm:p-6 lg:p-8">
            <h2 id="model-selection-title" className="text-xl font-bold md:text-2xl">{formatHeading(modelSelectionLabel[language], language)}</h2>
            <p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">{question[language]}</p>
            <ul data-model-selection-options className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {choices.map(choice => {
                    const [label, description] = choice.copy[language];
                    const linkClass = 'pars-panel flex h-full items-start gap-3 rounded-xl p-4 transition-colors hover:border-pars-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pars-blue dark:hover:border-pars-blue';
                    const contents = <>
                        <span className="min-w-0 flex-1">
                            <span className="block text-base font-semibold leading-snug">{formatHeading(label, language)}</span>
                            <span className="mt-1.5 block text-sm leading-6 text-slate-700 dark:text-slate-300">{description}</span>
                        </span>
                        <ArrowRight size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-[#0083bb] dark:text-[#72D5E3]" />
                    </>;
                    return (
                        <li key={choice.href}>
                            {choice.href.startsWith('#')
                                ? <a href={choice.href} className={linkClass}>{contents}</a>
                                : <Link to={choice.href} className={linkClass}>{contents}</Link>}
                        </li>
                    );
                })}
            </ul>
            {choices.filter(choice => choice.compareModelIds).map(choice => {
                const id = choice.href.slice(1);
                const comparisonModels = models.filter(model => choice.compareModelIds?.includes(model.id));
                return (
                    <section key={id} id={id} aria-labelledby={`${id}-title`} tabIndex={-1} className="mt-6 hidden scroll-mt-28 border-t border-sky-200 pt-5 target:block dark:border-sky-900">
                        <h3 id={`${id}-title`} className="mb-4 text-base font-semibold md:text-lg">{formatHeading(copy[language].compare, language)}</h3>
                        <ul className="grid grid-cols-2 gap-2 sm:gap-4">
                            {comparisonModels.map(product => (
                                <li key={product.id} className="min-w-0">
                                    <Link to={getProductPath(product)} className="pars-panel flex h-full flex-col gap-3 rounded-xl p-3 transition-colors hover:border-pars-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pars-blue dark:hover:border-pars-blue sm:p-4">
                                        <h4 className="break-words text-sm font-semibold leading-snug">{formatHeading(getProductDisplayName(product, language), language)}</h4>
                                        <CatalogModelFacts product={product} language={language} />
                                        <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-[#0083bb] dark:text-[#72D5E3]">{copy[language].details}<ArrowRight size={14} aria-hidden="true" className="shrink-0" /></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                );
            })}
        </section>
    );
}
