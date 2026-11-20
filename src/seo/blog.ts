import { blogIndexPaths, getBlogArticlePath, getBlogIndexArticles, type BlogArticleSummary } from '../data/blog';
import { absoluteUrl, SITE_NAME, SITE_URL, staticPageSeo, type SeoLanguage } from './config';

export function getBlogArticleSeo(article: BlogArticleSummary, language: SeoLanguage) {
    return {
        title: article.title[language] + ' | ' + (language === 'TR' ? SITE_NAME : 'Pars Cooling'),
        description: article.description[language],
        image: article.image,
    };
}

export function getBlogIndexSeo(page: number, language: SeoLanguage) {
    const seo = staticPageSeo['/blog'][language];
    if (page === 1) return seo;
    const pageLabel = language === 'TR' ? 'Sayfa' : 'Page';
    return { ...seo, title: seo.title + ' · ' + pageLabel + ' ' + page };
}

export function blogIndexJsonLd(language: SeoLanguage, page: number) {
    const url = SITE_URL + blogIndexPaths[page - 1];
    return {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': url + '#blog',
        url,
        name: language === 'TR' ? 'Pars Soğutma Blog' : 'Pars Cooling Blog',
        description: staticPageSeo['/blog'][language].description,
        inLanguage: language === 'TR' ? 'tr-TR' : 'en',
        publisher: { '@id': SITE_URL + '/#organization' },
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: getBlogIndexArticles(page).map((article, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: SITE_URL + getBlogArticlePath(article),
                name: article.title[language],
            })),
        },
    };
}

export function blogArticleJsonLd(article: BlogArticleSummary, language: SeoLanguage) {
    const url = SITE_URL + getBlogArticlePath(article);
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': url + '#article',
        url,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        headline: article.title[language],
        description: article.description[language],
        image: [absoluteUrl(article.image)],
        datePublished: article.publishedOn,
        dateModified: article.updatedOn,
        inLanguage: language === 'TR' ? 'tr-TR' : 'en',
        author: { '@type': 'Organization', '@id': SITE_URL + '/#organization', name: SITE_NAME, url: SITE_URL + '/about' },
        publisher: { '@id': SITE_URL + '/#organization' },
        isPartOf: { '@id': SITE_URL + '/blog#blog' },
    };
}
