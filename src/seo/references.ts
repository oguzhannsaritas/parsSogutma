import { getCategoryPath, productCategories } from '../data/catalog';
import { getReferencePath, type ReferenceProject } from '../data/references';
import { absoluteUrl, SITE_URL, type SeoLanguage } from './config';

export function getReferenceSeo(project: ReferenceProject, language: SeoLanguage) {
    return {
        title: `${project.title} ${language === 'TR' ? 'Soğutma Projesi | Pars Soğutma' : 'Display Project | Pars Cooling'}`,
        description: project.copy[language].description,
        image: project.coverImage,
    };
}

export function referencePageJsonLd(project: ReferenceProject, language: SeoLanguage) {
    return {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: `${project.title} – ${project.copy[language].subject}`,
        description: project.copy[language].description,
        url: absoluteUrl(getReferencePath(project)),
        inLanguage: language === 'TR' ? 'tr-TR' : 'en',
        contentLocation: { '@type': 'Place', name: project.location },
        image: project.images.filter(image => !image.endsWith('.mp4')).map(absoluteUrl),
        about: productCategories.filter(category => project.categoryIds.includes(category.id)).map(category => ({
            '@type': 'Thing', name: category.copy[language].name, url: absoluteUrl(getCategoryPath(category)),
        })),
        creator: { '@id': `${SITE_URL}/#organization` },
    };
}
