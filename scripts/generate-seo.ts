import { pathToFileURL } from 'node:url';
import { getResponsiveImageProps, getContainedImageProps, PRODUCT_IMAGE_SIZES, CATEGORY_IMAGE_SIZES } from '../src/lib/responsiveImages';
import type { ProductPageData } from '../src/lib/productData';
import { getReferenceSeo, referencePageJsonLd } from '../src/seo/references';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { products } from '../src/data/products/index';
import { getCanonicalProductId, getCategoryPath, getProductCategory, getProductDisplayName, isCanonicalProduct, productCategories } from '../src/data/catalog';
import { getReferencePath, projects } from '../src/data/references';
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
const { renderPage } = await import(pathToFileURL(path.join(root, '.ssr-build/entry-server.js')).href) as {
    renderPage(route: string): Promise<{ markup: string; productId?: number; initialProduct?: ProductPageData }>;
};
type ManifestChunk = { file: string; imports?: string[]; isEntry?: boolean };
const buildManifest: Record<string, ManifestChunk> = JSON.parse(await readFile(path.join(distDir, '.vite/manifest.json'), 'utf8'));

function routeModulePreloads(route: string): string {
    const staticPages: Record<string, string> = { '/': 'Home', '/products': 'Products', '/references': 'References', '/about': 'About', '/contact': 'Contact', '/gallery': 'PhotoGallery', '/e-catalog': 'ECatalog', '/404': 'NotFound' };
    const page = staticPages[route] ?? (/^\/urunler\//.test(route) ? 'ProductCategory' : /^\/(products|urun|blog)\//.test(route) ? 'ProductDetail' : 'ReferenceDetail');
    const visited = new Set<string>();
    const files = new Set<string>();
    const visit = (key: string) => {
        if (visited.has(key)) return;
        visited.add(key);
        const chunk = buildManifest[key];
        if (!chunk) throw new Error(`Missing build module: ${key}`);
        if (!chunk.isEntry) files.add(chunk.file);
        for (const dependency of chunk.imports ?? []) visit(dependency);
    };
    visit(`src/pages/${page}.tsx`);
    return [...files].map(file => `    <link rel="modulepreload" crossorigin href="/${escapeHtml(file)}" />`).join('\n');
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
    const responsive = snapshot.preloadImage ? (snapshot.type === 'product'
        ? getContainedImageProps(snapshot.preloadImage, PRODUCT_IMAGE_SIZES)
        : getResponsiveImageProps(snapshot.preloadImage, CATEGORY_IMAGE_SIZES)) : undefined;

    return `<!-- SEO:START -->
    <title>${escapeHtml(snapshot.title)}</title>
    <meta name="description" content="${escapeHtml(snapshot.description)}" />
    <meta name="robots" content="${escapeHtml(robots)}" />
    <meta name="googlebot" content="${escapeHtml(robots)}" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
${responsive ? `    <link rel="preload" as="image" href="${escapeHtml(responsive.src)}"${responsive.srcSet ? ` imagesrcset="${escapeHtml(responsive.srcSet)}" imagesizes="${escapeHtml(responsive.sizes)}"` : ''} fetchpriority="high" data-lcp-preload="product-detail-main" />` : ''}
${routeModulePreloads(snapshot.route)}
    <script type="module" crossorigin data-contact-boot src="/${escapeHtml(buildManifest['src/contact-boot.ts'].file)}"></script>
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

function snapshotHtml(snapshot: Snapshot, page: { markup: string; productId?: number; initialProduct?: ProductPageData }): string {
    return baseHtml
        .replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, seoBlock(snapshot))
        .replace(
            /<!-- APP:START -->[\s\S]*?<!-- APP:END -->/,
            `<!-- APP:START --><div id="root" data-rendered="true" data-route="${escapeHtml(snapshot.route)}"${page.productId ? ` data-product-id="${page.productId}"` : ''}>${page.markup}</div>${page.initialProduct ? `<script type="application/json" id="pars-page-data">${safeJson(page.initialProduct)}</script>` : ''}<!-- APP:END -->`,
        );
}

async function writeSnapshot(snapshot: Snapshot) {
    const relative = snapshot.route === '/' ? 'index.html' : `${snapshot.route.replace(/^\//, '')}.html`;
    const destination = path.join(distDir, relative);
    await mkdir(path.dirname(destination), { recursive: true });
    const page = await renderPage(snapshot.route);
    await writeFile(destination, snapshotHtml(snapshot, page));
}

const staticRoutes = Object.keys(staticPageSeo);
for (const route of staticRoutes) {
    const seo = staticPageSeo[route].TR;
    await writeSnapshot({
        route,
        title: seo.title,
        description: seo.description,
        image: seo.image ?? DEFAULT_SOCIAL_IMAGE,
        jsonLd: [organizationJsonLd()],
    });
}

await writeSnapshot({
    route: '/404',
    title: 'Sayfa Bulunamadı | Pars Soğutma',
    description: 'Aradığınız sayfa bulunamadı. Pars Soğutma ürünlerini incelemek için ürünler sayfasına dönebilirsiniz.',
    image: DEFAULT_SOCIAL_IMAGE,
    robots: 'noindex, follow',
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
    const snapshot = { route, title, description, image: project.coverImage, jsonLd: data };
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
