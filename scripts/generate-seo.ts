import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { products } from '../src/data/products/index';
import type { Product } from '../src/data/products/types';
import { getReferencePath, projects, type ReferenceProject } from '../src/data/references';
import {
    absoluteUrl,
    breadcrumbJsonLd,
    DEFAULT_SOCIAL_IMAGE,
    getProductDescription,
    getProductImages,
    getProductPath,
    getProductSlug,
    getProductSeo,
    organizationJsonLd,
    productJsonLd,
    SITE_NAME,
    SITE_URL,
    slugify,
    staticPageSeo,
} from '../src/seo/config';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const baseHtml = await readFile(path.join(distDir, 'index.html'), 'utf8');
const today = new Date().toISOString().slice(0, 10);

type Snapshot = {
    route: string;
    canonicalRoute?: string;
    title: string;
    description: string;
    image: string;
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
    const scripts = (snapshot.jsonLd ?? []).map((data) => `    <script type="application/ld+json">${safeJson(data)}</script>`).join('\n');

    return `<!-- SEO:START -->
    <title>${escapeHtml(snapshot.title)}</title>
    <meta name="description" content="${escapeHtml(snapshot.description)}" />
    <meta name="robots" content="${escapeHtml(robots)}" />
    <meta name="googlebot" content="${escapeHtml(robots)}" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
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
            '<div id="root"></div>',
            `<div id="root"><div data-seo-snapshot style="max-width:1200px;margin:0 auto;padding:32px 20px;font-family:Arial,sans-serif">${snapshot.body}</div></div>`,
        );
}

async function writeSnapshot(snapshot: Snapshot) {
    const relative = snapshot.route === '/' ? 'index.html' : `${snapshot.route.replace(/^\//, '')}.html`;
    const destination = path.join(distDir, relative);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, snapshotHtml(snapshot));
}

function productBody(product: Product): string {
    const productPath = getProductPath(product);
    const images = getProductImages(product);
    const technical = product.specs.technicalSpecification
        .slice(0, 12)
        .map((item) => `<li>${escapeHtml(item.TR)}</li>`)
        .join('');
    const figures = images
        .map((image, index) => `<figure style="margin:24px 0"><img src="${escapeHtml(image)}" alt="${escapeHtml(`${product.name.TR} ürün görseli ${index + 1} - Pars Soğutma`)}" loading="${index === 0 ? 'eager' : 'lazy'}" style="max-width:720px;width:100%;height:auto" /><figcaption>${escapeHtml(`${product.name.TR} - ${product.category.TR} - görsel ${index + 1}`)}</figcaption></figure>`)
        .join('');

    return `<nav aria-label="İçerik yolu"><a href="/">Ana Sayfa</a> / <a href="/products">Ürünler</a> / ${escapeHtml(product.name.TR)}</nav>
        <main>
            <h1>${escapeHtml(product.name.TR)}</h1>
            <p>${escapeHtml(getProductDescription(product, 'TR'))}</p>
            <dl>
                <dt>Kategori</dt><dd>${escapeHtml(product.category.TR)}</dd>
                <dt>Modül ölçüleri</dt><dd>${escapeHtml(product.specs.modules)}</dd>
                <dt>Çalışma sıcaklıkları</dt><dd>${escapeHtml(product.specs.temp)}</dd>
            </dl>
            <h2>${escapeHtml(product.name.TR)} teknik özellikleri</h2>
            <ul>${technical}</ul>
            <h2>${escapeHtml(product.name.TR)} görselleri</h2>
            ${figures}
            <p><a href="${productPath}">${escapeHtml(product.name.TR)} ürün sayfası</a></p>
        </main>`;
}

function referenceDescription(project: ReferenceProject): string {
    return `${project.title} için ${project.location} konumunda gerçekleştirilen Pars Soğutma endüstriyel soğutma ve teşhir dolabı projesinin uygulama görsellerini inceleyin.`;
}

function referenceBody(project: ReferenceProject): string {
    const media = project.images.map((image, index) => image.endsWith('.mp4')
        ? `<video controls preload="metadata" style="max-width:720px;width:100%"><source src="${escapeHtml(image)}" type="video/mp4" /></video>`
        : `<figure><img src="${escapeHtml(image)}" alt="${escapeHtml(`${project.title} soğutma projesi görseli ${index + 1}`)}" loading="${index === 0 ? 'eager' : 'lazy'}" style="max-width:720px;width:100%;height:auto" /><figcaption>${escapeHtml(`${project.title} - ${project.location} - proje görseli ${index + 1}`)}</figcaption></figure>`).join('');
    return `<nav><a href="/">Ana Sayfa</a> / <a href="/references">Referanslar</a> / ${escapeHtml(project.title)}</nav><main><h1>${escapeHtml(project.title)} Soğutma Projesi</h1><p>${escapeHtml(referenceDescription(project))}</p>${media}</main>`;
}

const productsBody = `<main><h1>Endüstriyel Soğutma Ürünleri</h1><p>${escapeHtml(staticPageSeo['/products'].TR.description)}</p><ul>${products
    .map((product) => `<li><a href="${getProductPath(product)}"><img src="${escapeHtml(getProductImages(product)[0])}" alt="${escapeHtml(`${product.name.TR} - Pars Soğutma`)}" loading="lazy" width="240" /> <span>${escapeHtml(product.name.TR)}</span></a></li>`)
    .join('')}</ul></main>`;

const referencesBody = `<main><h1>Referans Projeler</h1><p>${escapeHtml(staticPageSeo['/references'].TR.description)}</p><ul>${projects
    .map((project) => `<li><a href="${getReferencePath(project)}"><img src="${escapeHtml(project.coverImage)}" alt="${escapeHtml(`${project.title} soğutma projesi`)}" loading="lazy" width="320" /> <span>${escapeHtml(project.title)} - ${escapeHtml(project.location)}</span></a></li>`)
    .join('')}</ul></main>`;

const staticRoutes = Object.keys(staticPageSeo);
for (const route of staticRoutes) {
    const seo = staticPageSeo[route].TR;
    const body = route === '/products'
        ? productsBody
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
for (const product of products) {
    const route = getProductPath(product);
    const seo = getProductSeo(product, 'TR');
    const data = [
        organizationJsonLd(),
        productJsonLd(product, 'TR'),
        breadcrumbJsonLd([
            { name: 'Ana Sayfa', path: '/' },
            { name: 'Ürünler', path: '/products' },
            { name: product.name.TR, path: route },
        ]),
    ];
    const snapshot = {
        route,
        title: seo.title,
        description: seo.description,
        image: seo.image ?? DEFAULT_SOCIAL_IMAGE,
        type: 'product' as const,
        jsonLd: data,
        body: productBody(product),
    };
    await writeSnapshot(snapshot);

    // Önceki sitedeki ürün/blog adreslerinin Google sinyalini yeni üründe toplar.
    for (const legacyRoute of [`/blog/${slugify(product.name.TR)}`, `/urun/${getProductSlug(product)}`, `/urun/${slugify(product.name.TR)}`]) {
        if (generatedLegacyProductRoutes.has(legacyRoute)) continue;
        generatedLegacyProductRoutes.add(legacyRoute);
        await writeSnapshot({ ...snapshot, route: legacyRoute, canonicalRoute: route });
    }
}

for (const project of projects) {
    const route = getReferencePath(project);
    const title = `${project.title} Soğutma Projesi | Pars Soğutma`;
    const description = referenceDescription(project);
    const images = project.images.filter((image) => !image.endsWith('.mp4')).map(absoluteUrl);
    const data = [
        organizationJsonLd(),
        {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: `${project.title} Soğutma Projesi`,
            description,
            url: `${SITE_URL}${route}`,
            contentLocation: project.location,
            image: images,
            creator: { '@id': `${SITE_URL}/#organization` },
        },
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

const productsXml = products
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

await writeFile(path.join(distDir, 'sitemap-pages.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pagesXml}\n</urlset>\n`);
await writeFile(path.join(distDir, 'sitemap-products.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${productsXml}\n</urlset>\n`);
await writeFile(path.join(distDir, 'sitemap-references.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${referencesXml}\n</urlset>\n`);
await writeFile(path.join(distDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${SITE_URL}/sitemap-pages.xml</loc><lastmod>${today}</lastmod></sitemap>\n  <sitemap><loc>${SITE_URL}/sitemap-products.xml</loc><lastmod>${today}</lastmod></sitemap>\n  <sitemap><loc>${SITE_URL}/sitemap-references.xml</loc><lastmod>${today}</lastmod></sitemap>\n</sitemapindex>\n`);

console.log(`SEO snapshots generated: ${staticRoutes.length} pages, ${products.length} products, ${projects.length} references, ${products.reduce((total, product) => total + getProductImages(product).length, 0)} product images.`);
