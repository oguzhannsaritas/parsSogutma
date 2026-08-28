import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';
import { findReference, getReferencePath } from '../data/references';
import {
    absoluteUrl,
    breadcrumbJsonLd,
    DEFAULT_SOCIAL_IMAGE,
    findProductByIdentifier,
    getProductPath,
    getProductSeo,
    organizationJsonLd,
    SITE_NAME,
    SITE_URL,
    staticPageSeo,
    productJsonLd,
} from './config';

type SeoState = {
    title: string;
    description: string;
    canonicalPath: string;
    image: string;
    type: 'website' | 'product';
    robots: string;
    jsonLd: unknown[];
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
    let element = document.head.querySelector<HTMLMetaElement>(selector);
    if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
    }
    Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

function upsertCanonical(href: string) {
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
    }
    canonical.href = href;
}

export default function SeoManager() {
    const location = useLocation();
    const { language } = useLanguage();

    const seo = useMemo<SeoState>(() => {
        const pathname = location.pathname !== '/' ? location.pathname.replace(/\/+$/, '') : '/';
        const productMatch = pathname.match(/^\/(?:urun|products|blog)\/([^/]+)$/);
        const product = productMatch ? findProductByIdentifier(products, decodeURIComponent(productMatch[1])) : undefined;

        if (product) {
            const pageSeo = getProductSeo(product, language);
            const canonicalPath = getProductPath(product);
            return {
                ...pageSeo,
                image: pageSeo.image ?? DEFAULT_SOCIAL_IMAGE,
                canonicalPath,
                type: 'product',
                robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
                jsonLd: [
                    organizationJsonLd(),
                    productJsonLd(product, language),
                    breadcrumbJsonLd([
                        { name: language === 'TR' ? 'Ana Sayfa' : 'Home', path: '/' },
                        { name: language === 'TR' ? 'Ürünler' : 'Products', path: '/products' },
                        { name: product.name[language], path: canonicalPath },
                    ]),
                ],
            };
        }

        const referenceMatch = pathname.match(/^\/(?:referans|references)\/([^/]+)$/);
        const project = referenceMatch ? findReference(referenceMatch[1]) : undefined;
        if (project) {
            const canonicalPath = getReferencePath(project);
            const description = language === 'TR'
                ? `${project.title} için ${project.location} konumunda gerçekleştirilen Pars Soğutma endüstriyel soğutma ve teşhir dolabı projesinin uygulama görsellerini inceleyin.`
                : `View the Pars Cooling industrial refrigeration and display cabinet project completed for ${project.title} in ${project.location}.`;
            return {
                title: `${project.title} Soğutma Projesi | ${language === 'TR' ? 'Pars Soğutma' : 'Pars Cooling'}`,
                description,
                image: project.coverImage,
                canonicalPath,
                type: 'website',
                robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
                jsonLd: [
                    organizationJsonLd(),
                    {
                        '@context': 'https://schema.org',
                        '@type': 'CreativeWork',
                        name: `${project.title} Soğutma Projesi`,
                        description,
                        url: `${SITE_URL}${canonicalPath}`,
                        contentLocation: project.location,
                        image: project.images.filter((image) => !image.endsWith('.mp4')).map(absoluteUrl),
                        creator: { '@id': `${SITE_URL}/#organization` },
                    },
                    breadcrumbJsonLd([
                        { name: language === 'TR' ? 'Ana Sayfa' : 'Home', path: '/' },
                        { name: language === 'TR' ? 'Referanslar' : 'References', path: '/references' },
                        { name: project.title, path: canonicalPath },
                    ]),
                ],
            };
        }

        const pageSeo = staticPageSeo[pathname]?.[language];
        if (pageSeo) {
            return {
                ...pageSeo,
                image: pageSeo.image ?? DEFAULT_SOCIAL_IMAGE,
                canonicalPath: pathname,
                type: 'website',
                robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
                jsonLd: pathname === '/'
                    ? [
                        organizationJsonLd(),
                        {
                            '@context': 'https://schema.org',
                            '@type': 'WebSite',
                            '@id': `${SITE_URL}/#website`,
                            name: SITE_NAME,
                            url: `${SITE_URL}/`,
                            inLanguage: language === 'TR' ? 'tr-TR' : 'en',
                        },
                    ]
                    : [organizationJsonLd()],
            };
        }

        return {
            title: language === 'TR' ? 'Sayfa Bulunamadı | Pars Soğutma' : 'Page Not Found | Pars Cooling',
            description: language === 'TR' ? 'Aradığınız sayfa bulunamadı.' : 'The requested page could not be found.',
            canonicalPath: pathname,
            image: DEFAULT_SOCIAL_IMAGE,
            type: 'website',
            robots: 'noindex, follow',
            jsonLd: [],
        };
    }, [language, location.pathname]);

    useEffect(() => {
        const canonicalUrl = `${SITE_URL}${seo.canonicalPath}`;
        const imageUrl = absoluteUrl(seo.image);
        const locale = language === 'TR' ? 'tr_TR' : 'en_US';

        document.documentElement.lang = language === 'TR' ? 'tr' : 'en';
        document.title = seo.title;
        upsertCanonical(canonicalUrl);
        upsertMeta('meta[name="description"]', { name: 'description', content: seo.description });
        upsertMeta('meta[name="robots"]', { name: 'robots', content: seo.robots });
        upsertMeta('meta[name="googlebot"]', { name: 'googlebot', content: seo.robots });
        upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title });
        upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description });
        upsertMeta('meta[property="og:type"]', { property: 'og:type', content: seo.type });
        upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
        upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
        upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: seo.title });
        upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
        upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: locale });
        upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
        upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title });
        upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description });
        upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });

        document.head.querySelectorAll('script[data-seo-jsonld]').forEach((node) => node.remove());
        seo.jsonLd.forEach((value, index) => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.dataset.seoJsonld = String(index);
            script.textContent = JSON.stringify(value).replace(/</g, '\\u003c');
            document.head.appendChild(script);
        });

        return () => {
            document.head.querySelectorAll('script[data-seo-jsonld]').forEach((node) => node.remove());
        };
    }, [language, seo]);

    return null;
}
