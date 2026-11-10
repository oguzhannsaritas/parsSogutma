import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { products } from '../src/data/products';
import { getCategoryPath, getCategoryProducts, getProductCategory, isCanonicalProduct, productCategories } from '../src/data/catalog';
import { getProductMainImage, getProductPath, getProductSlug, findProductByIdentifier, SITE_URL } from '../src/seo/config';
import vercel from '../vercel.json';

const dist = path.join(process.cwd(), 'dist');
const canonicalProducts = products.filter(isCanonicalProduct);
const readPage = (route: string) => readFile(path.join(dist, route === '/' ? 'index.html' : `${route.slice(1)}.html`), 'utf8');
const canonical = (html: string) => html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
const jsonLd = (html: string): any[] => [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));

const sitemapIndex = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
const sitemapPaths = [...sitemapIndex.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
assert(sitemapPaths.includes('/sitemap-categories.xml'), 'Category sitemap must be discoverable');
const urls: string[] = [];
for (const sitemapPath of sitemapPaths) {
    const xml = await readFile(path.join(dist, sitemapPath), 'utf8');
    urls.push(...[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]));
}
assert.equal(new Set(urls).size, urls.length, 'Sitemaps must not repeat canonical URLs');
assert(!urls.includes(`${SITE_URL}/products/42`), 'Duplicate cabinet must not be submitted for indexing');

for (const url of urls) {
    const route = new URL(url).pathname;
    const html = await readPage(route);
    assert.equal(canonical(html), url, `Self canonical missing on ${route}`);
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `Exactly one initial HTML heading required on ${route}`);
    assert.match(html, /<title>[^<]+<\/title>/, `Title missing on ${route}`);
    assert.match(html, /<meta name="description" content="[^"]+"/, `Description missing on ${route}`);
    assert(!/content="noindex/.test(html), `Indexable route is noindex: ${route}`);
    jsonLd(html);
    for (const match of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
        if (!match[1].startsWith('/')) continue;
        await access(path.join(dist, match[1]));
    }
    for (const match of html.matchAll(/<a[^>]+href="(\/[^"?#]*)/g)) {
        if (match[1]) await readPage(match[1]);
    }
}

const home = await readPage('/');
const listing = await readPage('/products');
const membership = new Set<number>();
for (const category of productCategories) {
    const categoryPath = getCategoryPath(category);
    const html = await readPage(categoryPath);
    const models = getCategoryProducts(category, products);
    assert(models.length > 0, `Empty group: ${category.id}`);
    assert(models.some(product => product.id === category.featuredProductId), `Featured cabinet must belong to ${category.id}`);
    assert(home.includes(`href="${categoryPath}"`) && listing.includes(`href="${categoryPath}"`), `Group must be linked from home and catalogue: ${category.id}`);
    const pageData = jsonLd(html).find(item => item['@type'] === 'CollectionPage');
    assert.equal(pageData.mainEntity.itemListElement.length, models.length, `Visible models and structured list differ: ${category.id}`);
    for (const product of models) {
        assert(!membership.has(product.id), `Cabinet ${product.id} appears in more than one primary group`);
        membership.add(product.id);
        assert(html.includes(`href="${getProductPath(product)}"`), `Missing model link: ${product.id}`);
    }
    for (const language of ['TR', 'EN'] as const) {
        assert(category.copy[language].name && category.copy[language].intro && category.copy[language].questions.length, `Missing ${language} content in ${category.id}`);
    }
}
assert.equal(membership.size, canonicalProducts.length, 'Every canonical product needs a primary group');

for (const product of products) {
    const canonicalProduct = findProductByIdentifier(products, String(product.id))!;
    const expected = `${SITE_URL}${getProductPath(canonicalProduct)}`;
    for (const route of [`/products/${product.id}`, `/urun/${getProductSlug(product)}`]) {
        assert.equal(canonical(await readPage(route)), expected, `Legacy address must retain its destination: ${route}`);
    }
    assert.equal(findProductByIdentifier(products, getProductSlug(product))?.id, canonicalProduct.id);
    await access(path.join(dist, getProductMainImage(product)));
    const html = await readPage(getProductPath(canonicalProduct));
    assert(html.includes(`href="${getCategoryPath(getProductCategory(canonicalProduct))}"`), `Missing parent group link on ${product.id}`);
}
assert(vercel.redirects.some(item => item.source === '/products/42' && item.destination === '/products/12' && item.permanent), 'Duplicate route requires a permanent redirect');
assert.equal((await readFile(path.join(dist, 'google69e736d7d2eb3d7e.html'), 'utf8')).trim(), 'google-site-verification: google69e736d7d2eb3d7e.html');
console.log(`SEO checks passed: ${urls.length} canonical pages, ${productCategories.length} populated groups, all catalogue aliases, assets and internal links.`);
