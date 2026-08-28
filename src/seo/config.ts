import type { Product } from '../data/products/types';

export const SITE_URL = 'https://parsogutma.com';
export const SITE_NAME = 'Pars Soğutma';
export const DEFAULT_SOCIAL_IMAGE = '/images/home/sogutmareyon.webp';

export type SeoLanguage = 'TR' | 'EN';

export type PageSeo = {
    title: string;
    description: string;
    image?: string;
};

export const staticPageSeo: Record<string, Record<SeoLanguage, PageSeo>> = {
    '/': {
        TR: {
            title: 'Endüstriyel Soğutma Sistemleri | Pars Soğutma',
            description: 'Market, kasap, pastane ve profesyonel mutfaklar için soğutmalı reyon, soğuk hava deposu ve endüstriyel soğutma çözümleri.',
        },
        EN: {
            title: 'Industrial Refrigeration Systems | Pars Cooling',
            description: 'Refrigerated display cabinets, cold rooms and industrial refrigeration solutions for markets, butchers, bakeries and professional kitchens.',
        },
    },
    '/about': {
        TR: {
            title: 'Hakkımızda | Pars Soğutma',
            description: 'Pars Soğutma’nın üretim yaklaşımı, endüstriyel soğutma deneyimi, projeye özel tasarım ve satış sonrası servis hizmetleri hakkında bilgi alın.',
            image: '/images/about/abouts.webp',
        },
        EN: {
            title: 'About Us | Pars Cooling',
            description: 'Learn about Pars Cooling’s manufacturing approach, industrial refrigeration experience, custom design and after-sales services.',
            image: '/images/about/abouts.webp',
        },
    },
    '/products': {
        TR: {
            title: 'Endüstriyel Soğutma Ürünleri | Pars Soğutma',
            description: 'Kasap dolabı, soğutmalı reyon, sütlük, pasta teşhir dolabı, soğuk hava deposu ve endüstriyel mutfak ekipmanlarını inceleyin.',
            image: '/images/products/servisReyonlari/kasapDolabiDikCamli/kasapDolabiDikCamlix.webp',
        },
        EN: {
            title: 'Industrial Refrigeration Products | Pars Cooling',
            description: 'Explore butcher cabinets, refrigerated displays, dairy cabinets, pastry displays, cold rooms and industrial kitchen equipment.',
            image: '/images/products/servisReyonlari/kasapDolabiDikCamli/kasapDolabiDikCamlix.webp',
        },
    },
    '/references': {
        TR: {
            title: 'Referans Projeler | Pars Soğutma',
            description: 'Market, kasap, restoran ve pastaneler için tamamladığımız endüstriyel soğutma, teşhir dolabı ve anahtar teslim proje uygulamalarını inceleyin.',
            image: '/images/refences/byKasap/byKasap1.webp',
        },
        EN: {
            title: 'Reference Projects | Pars Cooling',
            description: 'Explore our industrial refrigeration, display cabinet and turnkey projects completed for markets, butchers, restaurants and bakeries.',
            image: '/images/refences/byKasap/byKasap1.webp',
        },
    },
    '/gallery': {
        TR: {
            title: 'Soğutma Sistemleri Foto Galeri | Pars Soğutma',
            description: 'Pars Soğutma üretimi soğutmalı reyon, kasap dolabı, pasta dolabı, market ekipmanı ve soğuk oda uygulama görsellerini inceleyin.',
        },
        EN: {
            title: 'Refrigeration Systems Photo Gallery | Pars Cooling',
            description: 'View Pars Cooling product and project photos including refrigerated displays, butcher cabinets, pastry cabinets and cold rooms.',
        },
    },
    '/contact': {
        TR: {
            title: 'İletişim ve Teklif | Pars Soğutma',
            description: 'Endüstriyel soğutma, soğutmalı reyon ve soğuk hava deposu projeleriniz için Pars Soğutma ile iletişime geçin ve teklif alın.',
            image: '/images/about/meeting.webp',
        },
        EN: {
            title: 'Contact and Quote | Pars Cooling',
            description: 'Contact Pars Cooling for industrial refrigeration, refrigerated display and cold room projects and request a quote.',
            image: '/images/about/meeting.webp',
        },
    },
    '/e-catalog': {
        TR: {
            title: 'Endüstriyel Soğutma E-Katalog | Pars Soğutma',
            description: 'Pars Soğutma endüstriyel soğutma ürünleri, soğutmalı reyonlar, soğuk odalar ve mutfak ekipmanları e-kataloğunu inceleyin.',
            image: '/images/eCatalog/kapak.webp',
        },
        EN: {
            title: 'Industrial Refrigeration E-Catalog | Pars Cooling',
            description: 'Browse the Pars Cooling e-catalog for industrial refrigeration products, refrigerated displays, cold rooms and kitchen equipment.',
            image: '/images/eCatalog/kapak.webp',
        },
    },
};

export function slugify(value: string): string {
    return value
        .trim()
        .toLocaleLowerCase('tr-TR')
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export function normalizeAssetPath(path: string): string {
    return path.startsWith('/') ? path : `/${path}`;
}

export function absoluteUrl(path: string): string {
    if (/^https?:\/\//i.test(path)) return path;
    return `${SITE_URL}${normalizeAssetPath(path)}`;
}

export function getProductSlug(product: Product): string {
    return `${slugify(product.name.TR)}-${product.id}`;
}

export function getProductPath(product: Product): string {
    return `/products/${product.id}`;
}

export function findProductByIdentifier(products: Product[], identifier?: string): Product | undefined {
    if (!identifier) return undefined;
    const exact = products.find((product) => getProductSlug(product) === identifier);
    if (exact) return exact;

    const legacySlug = products.find((product) => slugify(product.name.TR) === identifier);
    if (legacySlug) return legacySlug;

    if (/^\d+$/.test(identifier)) {
        return products.find((product) => product.id === Number(identifier));
    }

    const idMatch = identifier.match(/-(\d+)$/);
    return idMatch ? products.find((product) => product.id === Number(idMatch[1])) : undefined;
}

export function getProductImages(product: Product): string[] {
    return Array.from(
        new Set(
            [product.image, ...(product.thumbnails ?? []), ...(product.drawingImage ?? [])]
                .filter(Boolean)
                .map(normalizeAssetPath),
        ),
    );
}

export function getProductDescription(product: Product, language: SeoLanguage): string {
    const name = product.name[language];
    if (language === 'EN') {
        return truncateDescription(`${name} by Pars Cooling: view technical specifications, module sizes, operating temperatures and product application images.`);
    }
    return truncateDescription(`Pars Soğutma ${name}: teknik özellikleri, modül ölçülerini, çalışma sıcaklıklarını ve ürün uygulama görsellerini inceleyin.`);
}

function truncateDescription(value: string, maxLength = 160): string {
    if (value.length <= maxLength) return value;
    const shortened = value.slice(0, maxLength - 1);
    const lastSpace = shortened.lastIndexOf(' ');
    return `${shortened.slice(0, lastSpace > 120 ? lastSpace : maxLength - 1)}…`;
}

export function getProductSeo(product: Product, language: SeoLanguage): PageSeo {
    const suffix = language === 'TR' ? 'Pars Soğutma' : 'Pars Cooling';
    return {
        title: `${product.name[language]} | ${suffix}`,
        description: getProductDescription(product, language),
        image: getProductImages(product)[0],
    };
}

export function organizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': ['Organization', 'LocalBusiness'],
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: absoluteUrl('/images/home/parsLogo.webp'),
        image: absoluteUrl(DEFAULT_SOCIAL_IMAGE),
        email: 'info@parsogutma.com',
        telephone: ['+90 543 170 72 77', '+90 537 645 82 91'],
        sameAs: [
            'https://instagram.com/parsogutma/',
            'https://x.com/ParsSogutma',
            'https://www.youtube.com/@parssogutma',
            'https://tr.pinterest.com/parsogutma/',
            'https://linkedin.com/in/parsogutma',
            'https://www.facebook.com/parsogutma/',
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Aydınlar Mah. Mermerciler Cad. No:22',
            addressLocality: 'Çekmeköy',
            addressRegion: 'İstanbul',
            addressCountry: 'TR',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 41.0166396,
            longitude: 29.2367502,
        },
    };
}

export function productJsonLd(product: Product, language: SeoLanguage) {
    const path = getProductPath(product);
    const images = getProductImages(product).map(absoluteUrl);
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        '@id': `${SITE_URL}${path}#product`,
        name: product.name[language],
        description: getProductDescription(product, language),
        url: `${SITE_URL}${path}`,
        image: images,
        category: product.category[language],
        brand: { '@type': 'Brand', name: SITE_NAME },
        manufacturer: { '@id': `${SITE_URL}/#organization` },
        additionalProperty: [
            { '@type': 'PropertyValue', name: language === 'TR' ? 'Modüller' : 'Modules', value: product.specs.modules },
            { '@type': 'PropertyValue', name: language === 'TR' ? 'Çalışma sıcaklığı' : 'Operating temperature', value: product.specs.temp },
            { '@type': 'PropertyValue', name: language === 'TR' ? 'Yan kapak' : 'Side panel', value: String(product.specs.sidePanel) },
        ],
    };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.path}`,
        })),
    };
}
