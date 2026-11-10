import type { Product } from '../data/products/types';
import { getCanonicalProductId, getCategoryPath, getCategoryProducts, getFeaturedProduct, getProductDisplayName, type ProductCategory } from '../data/catalog';

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
    return `/products/${getCanonicalProductId(product.id)}`;
}

export function findProductByIdentifier(products: Product[], identifier?: string): Product | undefined {
    if (!identifier) return undefined;
    const resolve = (product?: Product) => product
        ? products.find(item => item.id === getCanonicalProductId(product.id)) ?? product
        : undefined;
    const exact = products.find((product) => getProductSlug(product) === identifier);
    if (exact) return resolve(exact);

    const legacySlug = products.find((product) => slugify(product.name.TR) === identifier);
    if (legacySlug) return resolve(legacySlug);

    if (/^\d+$/.test(identifier)) {
        return resolve(products.find((product) => product.id === Number(identifier)));
    }

    const idMatch = identifier.match(/-(\d+)$/);
    return idMatch ? resolve(products.find((product) => product.id === Number(idMatch[1]))) : undefined;
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

export function getProductMainImage(product: Product): string {
    return getProductImages(product).find(image => !(product.drawingImage ?? []).map(normalizeAssetPath).includes(image))
        ?? getProductImages(product)[0];
}

const productDescriptions: Record<number, Record<SeoLanguage, string>> = {
    54: {
        TR: 'Pasta ve çikolata sunumuna yönelik teşhir dolabı. Ölçüleri, çalışma sıcaklıklarını ve teknik özellikleri inceleyin; işletmeniz için teklif alın.',
        EN: 'A display cabinet for pastry and chocolate presentation. Explore dimensions, operating temperatures and technical specifications and request a quote.',
    },
    55: {
        TR: 'Ekler ve pasta sunumu için teşhir dolabı. Modül ölçülerini, sıcaklık bilgilerini ve uygulama görsellerini inceleyin; projeniz için teklif alın.',
        EN: 'A display cabinet for eclairs and pastries. Review module sizes, temperature information and application images and request a project quote.',
    },
    66: {
        TR: 'Kuru pasta sunumu için teşhir dolabı. Katalog ölçülerini ve teknik özelliklerini inceleyin; pastanenize uygun seçenekler için teklif alın.',
        EN: 'A cabinet for dry pastry presentation. Explore catalogue dimensions and technical details and request a quote for your bakery layout.',
    },
    67: {
        TR: 'Cephe pasta teşhir dolabı: pastane vitrininiz için modül ölçülerini, çalışma sıcaklıklarını ve ürün görsellerini inceleyerek teklif alın.',
        EN: 'Facade pastry display cabinet: review module dimensions, operating temperatures and product images for your bakery and request a quote.',
    },
    68: {
        TR: 'Yatay pasta teşhir dolabı: modül ölçüleri, cam ve raf özellikleri ile uygulama görsellerini karşılaştırın. Kafe ve pastane projeniz için teklif alın.',
        EN: 'Horizontal pastry display cabinet: compare module dimensions, glass and shelf specifications and application images. Request a cafe or bakery quote.',
    },
    69: {
        TR: 'Pastane ve kafeler için pasta teşhir dolabı. Modül ölçülerini, cam ve raf detaylarını inceleyin; projenize uygun seçenekler için teklif alın.',
        EN: 'Pastry display cabinet for bakeries and cafes. Explore module dimensions, glass and shelf details and request a quote for your project.',
    },
    92: {
        TR: 'Soğuk odalar için split, merkezi, monoblok ve bireysel soğutma sistemi seçeneklerini inceleyin. Projenizin çalışma koşulları için bilgi ve teklif alın.',
        EN: 'Explore split, central, monoblock and individual refrigeration options for cold rooms. Discuss the operating requirements of your project and request a quote.',
    },
};

export function getProductDescription(product: Product, language: SeoLanguage): string {
    const custom = productDescriptions[getCanonicalProductId(product.id)]?.[language];
    if (custom) return truncateDescription(custom);
    const name = getProductDisplayName(product, language);
    const dimensions = product.specs.modules.trim();
    const numericModules = /^\d+(?:\s*\/\s*\d+)*$/.test(dimensions)
        ? dimensions.split('/').map(Number)
        : [];
    const dimensionText = numericModules.length
        ? `${Math.min(...numericModules)}${numericModules.length > 1 ? `–${Math.max(...numericModules)}` : ''} mm`
        : '';
    if (language === 'EN') {
        return truncateDescription(`${name}${dimensionText ? `: ${dimensionText} module options` : ' by Pars Cooling'}. View technical specifications and product images and request a project quote.`);
    }
    return truncateDescription(`${name}${dimensionText ? `: ${dimensionText} modül seçenekleri` : ''}. Teknik özellikleri ve uygulama görsellerini inceleyin; projeniz için teklif alın.`);
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
        title: `${getProductDisplayName(product, language)} | ${suffix}`,
        description: getProductDescription(product, language),
        image: getProductMainImage(product),
    };
}

export function getCategorySeo(category: ProductCategory, products: Product[], language: SeoLanguage): PageSeo {
    return {
        title: `${category.copy[language].name} | ${language === 'TR' ? SITE_NAME : 'Pars Cooling'}`,
        description: category.copy[language].description,
        image: getProductMainImage(getFeaturedProduct(category, products)),
    };
}

export function categoryPageJsonLd(category: ProductCategory, products: Product[], language: SeoLanguage) {
    const pageUrl = `${SITE_URL}${getCategoryPath(category)}`;
    return {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: category.copy[language].name,
        description: category.copy[language].description,
        inLanguage: language === 'TR' ? 'tr-TR' : 'en',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: getCategoryProducts(category, products).map((product, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `${SITE_URL}${getProductPath(product)}`,
                name: getProductDisplayName(product, language),
            })),
        },
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

export function productPageJsonLd(product: Product, language: SeoLanguage) {
    const path = getProductPath(product);
    const images = getProductImages(product).map(absoluteUrl);
    const pageUrl = `${SITE_URL}${path}`;
    const imageObjects = images.map((contentUrl, index) => ({
        '@type': 'ImageObject',
        '@id': `${pageUrl}#image-${index + 1}`,
        contentUrl,
        url: contentUrl,
        name: `${getProductDisplayName(product, language)} ${language === 'TR' ? 'ürün görseli' : 'product image'} ${index + 1}`,
        caption: `${getProductDisplayName(product, language)} - ${product.category[language]}`,
        representativeOfPage: contentUrl === absoluteUrl(getProductMainImage(product)),
    }));

    return {
        '@context': 'https://schema.org',
        '@type': 'ItemPage',
        '@id': `${pageUrl}#webpage`,
        name: getProductDisplayName(product, language),
        description: getProductDescription(product, language),
        url: pageUrl,
        inLanguage: language === 'TR' ? 'tr-TR' : 'en',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        primaryImageOfPage: absoluteUrl(getProductMainImage(product)),
        image: imageObjects,
        mainEntity: {
            // This is a quote-based catalogue: no public offers or reviews exist.
            // Keep a descriptive entity rather than incomplete product rich-result markup.
            '@type': 'Thing',
            '@id': `${pageUrl}#catalog-item`,
            name: getProductDisplayName(product, language),
            description: getProductDescription(product, language),
            image: images,
            identifier: String(product.id),
        },
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
