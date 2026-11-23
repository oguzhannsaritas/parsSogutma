import type { CatalogLanguage } from '../data/catalog';

export function formatHeading(heading: string, language: CatalogLanguage): string {
    const locale = language === 'TR' ? 'tr-TR' : 'en';
    return heading.replace(/(^|[^\p{L}\p{M}\p{N}'’])(\p{L})/gu,
        (_match, boundary: string, initial: string) => boundary + initial.toLocaleUpperCase(locale));
}
