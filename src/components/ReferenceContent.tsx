import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getCategoryPath, productCategories, type CatalogLanguage } from '../data/catalog';
import type { ReferenceProject } from '../data/references';
import { ContactActions } from './CatalogContent';

export function ReferenceContent({ project, language }: { project: ReferenceProject; language: CatalogLanguage }) {
    const copy = project.copy[language];
    const categories = productCategories.filter(category => project.categoryIds.includes(category.id));
    return (
        <section aria-labelledby="reference-details-title" data-reference-content={project.id} className="mt-12 border-t border-gray-200 pt-10 text-gray-900 dark:border-neutral-700 dark:text-white md:mt-16">
            <div className="max-w-4xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0083bb] dark:text-[#72D5E3]">{project.location}</p>
                <h2 id="reference-details-title" className="text-xl font-bold md:text-2xl">{copy.subject}</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600 dark:text-gray-300 md:text-base">
                    {copy.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <nav aria-label={language === 'TR' ? 'Bu uygulamayla ilgili ürün grupları' : 'Product groups for this application'} className="mt-7">
                    <h3 className="mb-3 text-sm font-semibold">{language === 'TR' ? 'İlgili ürün gruplarını inceleyin' : 'Explore related product groups'}</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                        {categories.map(category => <Link key={category.id} to={getCategoryPath(category)} className="inline-flex items-center gap-2 text-sm font-medium text-[#0083bb] hover:underline dark:text-[#72D5E3]">{category.copy[language].name}<ArrowRight size={15} aria-hidden="true" /></Link>)}
                    </div>
                </nav>
                <div className="mt-9 border-t border-gray-200 pt-7 dark:border-neutral-700">
                    <h3 className="mb-3 text-lg font-semibold">{language === 'TR' ? 'İşletmeniz için benzer bir uygulama planlayalım' : 'Discuss a similar installation for your business'}</h3>
                    <p className="mb-5 text-sm leading-7 text-gray-600 dark:text-gray-300">{language === 'TR' ? 'Alan ölçülerinizi ve sergilemek istediğiniz ürünleri paylaşın. Tezgâh yerleşimi ve uygun ürün seçenekleri için bizimle iletişime geçin.' : 'Share your available dimensions and the products you want to display. Contact us to discuss the counter layout and suitable display options.'}</p>
                    <ContactActions subject={copy.subject} language={language} />
                </div>
            </div>
        </section>
    );
}
