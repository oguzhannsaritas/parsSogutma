import { ReferenceContent } from '../src/components/ReferenceContent';
import { getReferenceSeo, referencePageJsonLd } from '../src/seo/references';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { products } from '../src/data/products/index';
import type { Product } from '../src/data/products/types';
import { CategoryContent, CategoryLinks, ContactActions, HomeIntroduction, ProductBuyerGuide, ProductIntroduction, RelatedProducts } from '../src/components/CatalogContent';
import { getCanonicalProductId, getCategoryPath, getProductCategory, getProductDisplayName, isCanonicalProduct, productCategories } from '../src/data/catalog';
import { getReferencePath, projects, type ReferenceProject } from '../src/data/references';
import {
    absoluteUrl,
    breadcrumbJsonLd,
    categoryPageJsonLd,
    DEFAULT_SOCIAL_IMAGE,
    getProductImages,
    getProductMainImage,
    getProductPath,
    getProductSlug,
    getProductSeo,
    getProductTemperature,
    getCategorySeo,
    organizationJsonLd,
    productPageJsonLd,
    SITE_NAME,
    SITE_URL,
    slugify,
    staticPageSeo,
} from '../src/seo/config';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const baseHtml = await readFile(path.join(distDir, 'index.html'), 'utf8');
if (!baseHtml.includes('<!-- APP:START -->') || !baseHtml.includes('<!-- APP:END -->')) {
    throw new Error('SEO snapshot markers are missing. Run a fresh Vite build.');
}
const today = new Date().toISOString().slice(0, 10);
const canonicalProducts = products.filter(isCanonicalProduct);

function renderContent(element: ReactElement): string {
    return renderToStaticMarkup(createElement(MemoryRouter, null, element));
}

type Snapshot = {
    route: string;
    canonicalRoute?: string;
    title: string;
    description: string;
    image: string;
    preloadImage?: string;
    type?: 'website' | 'product';
    robots?: string;
    jsonLd?: unknown[];
    body: string;
};

function escapeHtml(value: unknown): string {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeXml(value: unknown): string {
    return escapeHtml(value);
}

function safeJson(value: unknown): string {
    return JSON.stringify(value).replace(/</g, '\\u003c');
}

function seoBlock(snapshot: Snapshot): string {
    const canonical = `${SITE_URL}${snapshot.canonicalRoute ?? snapshot.route}`;
    const image = absoluteUrl(snapshot.image);
    const robots = snapshot.robots ?? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    const scripts = (snapshot.jsonLd ?? []).map((data, index) => `    <script type="application/ld+json" data-seo-jsonld="static-${index}">${safeJson(data)}</script>`).join('\n');

    return `<!-- SEO:START -->
    <title>${escapeHtml(snapshot.title)}</title>
    <meta name="description" content="${escapeHtml(snapshot.description)}" />
    <meta name="robots" content="${escapeHtml(robots)}" />
    <meta name="googlebot" content="${escapeHtml(robots)}" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
${snapshot.preloadImage ? `    <link rel="preload" as="image" href="${escapeHtml(snapshot.preloadImage)}" fetchpriority="high" data-lcp-preload="product-detail-main" />` : ''}
    <meta property="og:title" content="${escapeHtml(snapshot.title)}" />
    <meta property="og:description" content="${escapeHtml(snapshot.description)}" />
    <meta property="og:type" content="${snapshot.type ?? 'website'}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta property="og:image:alt" content="${escapeHtml(snapshot.title)}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:locale" content="tr_TR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(snapshot.title)}" />
    <meta name="twitter:description" content="${escapeHtml(snapshot.description)}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />
${scripts}
    <!-- SEO:END -->`;
}

function snapshotHtml(snapshot: Snapshot): string {
    return baseHtml
        .replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, seoBlock(snapshot))
        .replace(
            /<!-- APP:START -->[\s\S]*?<!-- APP:END -->/,
            `<!-- APP:START --><div id="root"><div data-app-loader role="status" aria-live="polite"><span>Pars Soğutma yükleniyor</span></div><div data-seo-snapshot style="max-width:1200px;margin:0 auto;padding:32px 20px;font-family:Arial,sans-serif">${snapshot.body}</div></div><!-- APP:END -->`,
        );
}

async function writeSnapshot(snapshot: Snapshot) {
    const relative = snapshot.route === '/' ? 'index.html' : `${snapshot.route.replace(/^\//, '')}.html`;
    const destination = path.join(distDir, relative);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, snapshotHtml(snapshot));
}

const dimensionsCache = new Map<string, Promise<string>>();

function imageDimensions(image: string): Promise<string> {
    let dimensions = dimensionsCache.get(image);
    if (!dimensions) {
        dimensions = sharp(path.join(root, 'public', image)).metadata()
            .then(({ width, height }) => width && height ? ` width="${width}" height="${height}"` : '')
            .catch((error: Error) => {
                console.warn(`Could not read image dimensions for ${image}: ${error.message}`);
                return '';
            });
        dimensionsCache.set(image, dimensions);
    }
    return dimensions;
}

async function productBody(product: Product): Promise<string> {
    const productPath = getProductPath(product);
    const name = getProductDisplayName(product, 'TR');
    const category = getProductCategory(product);
    const images = getProductImages(product);
    const technical = product.specs.technicalSpecification
        .slice(0, 12)
        .map((item) => `<li>${escapeHtml(item.TR)}</li>`)
        .join('');
    const figures = (await Promise.all(images
        .map(async (image, index) => `<figure style="margin:24px 0"><img src="${escapeHtml(image)}" alt="${escapeHtml(`${name} ürün görseli ${index + 1} - Pars Soğutma`)}"${await imageDimensions(image)} loading="${index === 0 ? 'eager' : 'lazy'}" style="max-width:720px;width:100%;height:auto" /><figcaption>${escapeHtml(`${name} - ${product.category.TR} - görsel ${index + 1}`)}</figcaption></figure>`)))
        .join('');

    return `<nav aria-label="İçerik yolu"><a href="/">Ana Sayfa</a> / <a href="/products">Ürünler</a> / <a href="${getCategoryPath(category)}">${escapeHtml(category.copy.TR.name)}</a> / ${escapeHtml(name)}</nav>
        <main>
            <h1>${escapeHtml(name)}</h1>
            ${renderContent(createElement(ProductIntroduction, { product, language: 'TR' }))}
            <dl>
                <dt>Kategori</dt><dd>${escapeHtml(product.category.TR)}</dd>
                <dt>Modül ölçüleri</dt><dd>${escapeHtml(product.specs.modules)}</dd>
                <dt>Çalışma sıcaklıkları</dt><dd>${escapeHtml(getProductTemperature(product, 'TR'))}</dd>
            </dl>
            ${renderContent(createElement(ContactActions, { subject: name, language: 'TR' }))}
            <h2>${escapeHtml(name)} teknik özellikleri</h2>
            <ul>${technical}</ul>
            ${renderContent(createElement(ProductBuyerGuide, { product, language: 'TR' }))}
            <h2>${escapeHtml(name)} görselleri</h2>
            ${figures}
            <p><a href="${productPath}">${escapeHtml(name)} ürün sayfası</a></p>
            ${renderContent(createElement(RelatedProducts, { product, products, language: 'TR' }))}
        </main>`;
}

function referenceBody(project: ReferenceProject): string {
    const media = project.images.map((image, index) => image.endsWith('.mp4')
        ? `<video controls preload="metadata" style="max-width:720px;width:100%"><source src="${escapeHtml(image)}" type="video/mp4" /></video>`
        : `<figure><img src="${escapeHtml(image)}" alt="${escapeHtml(`${project.title} soğutma projesi görseli ${index + 1}`)}" loading="${index === 0 ? 'eager' : 'lazy'}" style="max-width:720px;width:100%;height:auto" /><figcaption>${escapeHtml(`${project.title} - ${project.location} - proje görseli ${index + 1}`)}</figcaption></figure>`).join('');
    return `<nav><a href="/">Ana Sayfa</a> / <a href="/references">Referanslar</a> / ${escapeHtml(project.title)}</nav><main><h1>${escapeHtml(project.title)} Soğutma Projesi</h1><p>${escapeHtml(project.copy.TR.description)}</p>${media}${renderContent(createElement(ReferenceContent, { project, language: 'TR' }))}</main>`;
}

const productsBody = `<main><h1>Endüstriyel Soğutma Ürünleri</h1><p>${escapeHtml(staticPageSeo['/products'].TR.description)}</p>${renderContent(createElement(CategoryLinks, { language: 'TR' }))}<ul>${canonicalProducts
    .map((product) => `<li><a href="${getProductPath(product)}"><img src="${escapeHtml(getProductMainImage(product))}" alt="${escapeHtml(`${getProductDisplayName(product, 'TR')} - Pars Soğutma`)}" loading="lazy" width="240" /> <span>${escapeHtml(getProductDisplayName(product, 'TR'))}</span></a></li>`)
    .join('')}</ul></main>`;

const referencesBody = `<main><h1>Referans Projeler</h1><p>${escapeHtml(staticPageSeo['/references'].TR.description)}</p><ul>${projects
    .map((project) => `<li><a href="${getReferencePath(project)}"><img src="${escapeHtml(project.coverImage)}" alt="${escapeHtml(`${project.title} soğutma projesi`)}" loading="lazy" width="320" /> <span>${escapeHtml(project.title)} - ${escapeHtml(project.location)}</span></a></li>`)
    .join('')}</ul></main>`;

const staticRoutes = Object.keys(staticPageSeo);
for (const route of staticRoutes) {
    const seo = staticPageSeo[route].TR;
    const body = route === '/products'
        ? productsBody
        : route === '/'
            ? `<main>${renderContent(createElement(HomeIntroduction, { language: 'TR' }))}${renderContent(createElement(CategoryLinks, { language: 'TR' }))}</main>`
        : route === '/references'
            ? referencesBody
        : `<main><h1>${escapeHtml(seo.title.split('|')[0].trim())}</h1><p>${escapeHtml(seo.description)}</p><nav><a href="/products">Ürünler</a> · <a href="/about">Hakkımızda</a> · <a href="/references">Referanslar</a> · <a href="/contact">İletişim</a></nav></main>`;

    await writeSnapshot({
        route,
        title: seo.title,
        description: seo.description,
        image: seo.image ?? DEFAULT_SOCIAL_IMAGE,
        jsonLd: [organizationJsonLd()],
        body,
    });
}

await writeSnapshot({
    route: '/404',
    title: 'Sayfa Bulunamadı | Pars Soğutma',
    description: 'Aradığınız sayfa bulunamadı. Pars Soğutma ürünlerini incelemek için ürünler sayfasına dönebilirsiniz.',
    image: DEFAULT_SOCIAL_IMAGE,
    robots: 'noindex, follow',
    body: '<main><h1>Sayfa Bulunamadı</h1><p>Aradığınız içerik bulunamadı.</p><p><a href="/">Ana Sayfa</a> · <a href="/products">Ürünler</a></p></main>',
});

const generatedLegacyProductRoutes = new Set<string>();
for (const sourceProduct of products) {
    const product = products.find(item => item.id === getCanonicalProductId(sourceProduct.id))!;
    const route = getProductPath(product);
    const category = getProductCategory(product);
    const seo = getProductSeo(product, 'TR');
    const data = [
        organizationJsonLd(),
        productPageJsonLd(product, 'TR'),
        breadcrumbJsonLd([
            { name: 'Ana Sayfa', path: '/' },
            { name: 'Ürünler', path: '/products' },
            { name: category.copy.TR.name, path: getCategoryPath(category) },
            { name: getProductDisplayName(product, 'TR'), path: route },
        ]),
    ];
    const snapshot = {
        route,
        title: seo.title,
        description: seo.description,
        image: seo.image ?? DEFAULT_SOCIAL_IMAGE,
        preloadImage: getProductMainImage(product),
        type: 'product' as const,
        jsonLd: data,
        body: await productBody(product),
    };
    await writeSnapshot({ ...snapshot, route: `/products/${sourceProduct.id}`, canonicalRoute: route });

    // Önceki sitedeki ürün/blog adreslerinin Google sinyalini yeni üründe toplar.
    for (const legacyRoute of [`/blog/${slugify(sourceProduct.name.TR)}`, `/urun/${getProductSlug(sourceProduct)}`, `/urun/${slugify(sourceProduct.name.TR)}`]) {
        if (generatedLegacyProductRoutes.has(legacyRoute)) continue;
        generatedLegacyProductRoutes.add(legacyRoute);
        await writeSnapshot({ ...snapshot, route: legacyRoute, canonicalRoute: route });
    }
}

for (const category of productCategories) {
    const route = getCategoryPath(category);
    const seo = getCategorySeo(category, products, 'TR');
    await writeSnapshot({
        route,
        title: seo.title,
        description: seo.description,
        image: seo.image ?? DEFAULT_SOCIAL_IMAGE,
        preloadImage: seo.image,
        jsonLd: [organizationJsonLd(), categoryPageJsonLd(category, products, 'TR'), breadcrumbJsonLd([
            { name: 'Ana Sayfa', path: '/' },
            { name: 'Ürünler', path: '/products' },
            { name: category.copy.TR.name, path: route },
        ])],
        body: renderContent(createElement(CategoryContent, { category, products, language: 'TR' })),
    });
}

for (const project of projects) {
    const route = getReferencePath(project);
    const { title, description } = getReferenceSeo(project, 'TR');
    const data = [
        organizationJsonLd(),
        referencePageJsonLd(project, 'TR'),
        breadcrumbJsonLd([
            { name: 'Ana Sayfa', path: '/' },
            { name: 'Referanslar', path: '/references' },
            { name: project.title, path: route },
        ]),
    ];
    const snapshot = { route, title, description, image: project.coverImage, jsonLd: data, body: referenceBody(project) };
    await writeSnapshot(snapshot);
    await writeSnapshot({ ...snapshot, route: `/references/${project.id}`, canonicalRoute: route });
}

const pagesXml = staticRoutes
    .map((route) => `  <url><loc>${escapeXml(`${SITE_URL}${route}`)}</loc><lastmod>${today}</lastmod><changefreq>${route === '/' || route === '/products' ? 'weekly' : 'monthly'}</changefreq></url>`)
    .join('\n');

const productsXml = canonicalProducts
    .map((product) => {
        const route = getProductPath(product);
        const images = getProductImages(product)
            .map((image) => `    <image:image><image:loc>${escapeXml(absoluteUrl(image))}</image:loc></image:image>`)
            .join('\n');
        return `  <url>\n    <loc>${escapeXml(`${SITE_URL}${route}`)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n${images}\n  </url>`;
    })
    .join('\n');

const referencesXml = projects.map((project) => {
    const images = project.images.filter((image) => !image.endsWith('.mp4')).map((image) => `    <image:image><image:loc>${escapeXml(absoluteUrl(image))}</image:loc></image:image>`).join('\n');
    return `  <url>\n    <loc>${escapeXml(`${SITE_URL}${getReferencePath(project)}`)}</loc>\n    <lastmod>${today}</lastmod>\n${images}\n  </url>`;
}).join('\n');

const categoriesXml = productCategories.map(category => `  <url><loc>${escapeXml(`${SITE_URL}${getCategoryPath(category)}`)}</loc><lastmod>${today}</lastmod></url>`).join('\n');

await writeFile(path.join(distDir, 'sitemap-pages.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pagesXml}\n</urlset>\n`);
await writeFile(path.join(distDir, 'sitemap-products.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${productsXml}\n</urlset>\n`);
await writeFile(path.join(distDir, 'sitemap-references.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${referencesXml}\n</urlset>\n`);
await writeFile(path.join(distDir, 'sitemap-categories.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${categoriesXml}\n</urlset>\n`);
await writeFile(path.join(distDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${SITE_URL}/sitemap-pages.xml</loc><lastmod>${today}</lastmod></sitemap>\n  <sitemap><loc>${SITE_URL}/sitemap-products.xml</loc><lastmod>${today}</lastmod></sitemap>\n  <sitemap><loc>${SITE_URL}/sitemap-references.xml</loc><lastmod>${today}</lastmod></sitemap>\n  <sitemap><loc>${SITE_URL}/sitemap-categories.xml</loc><lastmod>${today}</lastmod></sitemap>\n</sitemapindex>\n`);

console.log(`SEO snapshots generated: ${staticRoutes.length} pages, ${canonicalProducts.length} canonical products, ${productCategories.length} categories, ${projects.length} references, ${products.reduce((total, product) => total + getProductImages(product).length, 0)} product images.`);
