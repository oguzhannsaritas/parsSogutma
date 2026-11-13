import { ChevronRight } from 'lucide-react';
import type { TranslatedString } from '../data/products/types';

type Props = {
    kind: 'technical' | 'accessories';
    title: string;
    items?: TranslatedString[];
    language: keyof TranslatedString;
    fallback: string;
};

// Keep the complete list in the initial HTML. Native disclosure controls work
// without hydration and do not require a crawler to activate a button.
export function ProductSpecificationDetails({ kind, title, items, language, fallback }: Props) {
    return (
        <details data-product-disclosure={kind} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between border-b border-dotted border-gray-100 pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#009FE3] dark:border-neutral-800 [&::-webkit-details-marker]:hidden">
                <span className="text-xs font-bold text-black dark:text-white md:text-sm">{title}</span>
                <ChevronRight size={16} className="text-gray-600 transition-transform duration-200 group-open:rotate-90 dark:text-gray-400" aria-hidden="true" />
            </summary>
            <div className="pb-2 pt-3 text-xs text-gray-600 dark:text-gray-300 md:text-sm">
                {items?.length ? (
                    <ul className="list-none space-y-1 pl-0">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="leading-5 text-[#009FE3]" aria-hidden="true">•</span>
                                <span>{item[language]}</span>
                            </li>
                        ))}
                    </ul>
                ) : <span>{fallback}</span>}
            </div>
        </details>
    );
}
