import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { products } from '../src/data/products';
import { getCategoryPath, getCategoryProducts, getProductCategory, isCanonicalProduct, productCategories } from '../src/data/catalog';
import { getProductMainImage, getProductPath, getProductSlug, getProductTemperature, findProductByIdentifier, SITE_URL } from '../src/seo/config';
import { projects, getReferencePath } from '../src/data/references';
import { getReferenceSeo } from '../src/seo/references';
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

// The project narrative must survive without JavaScript, agree with its metadata,
// and remain reachable from the associated product group in both directions.
for (const project of projects) {
    const route = getReferencePath(project);
    const html = await readPage(route);
    assert.equal(canonical(await readPage(`/references/${project.id}`)), `${SITE_URL}${route}`, `Legacy reference changed: ${project.id}`);
    const data = jsonLd(html).find(item => item['@type'] === 'CreativeWork');
    assert.equal(data.description, getReferenceSeo(project, 'TR').description);
    assert.equal(data.contentLocation.name, project.location);
    assert.equal(data.about.length, project.categoryIds.length);
    for (const language of ['TR', 'EN'] as const) {
        const text = project.copy[language];
        assert(text.description && text.subject && text.paragraphs.length >= 2, `Incomplete ${language} reference: ${project.id}`);
        assert.equal(new Set(projects.map(item => item.copy[language].description)).size, projects.length, `Reference descriptions must be distinct in ${language}`);
    }
    for (const paragraph of project.copy.TR.paragraphs) assert(html.includes(paragraph), `Project content absent from first HTML: ${project.id}`);
    assert(project.categoryIds.length > 0, `Missing reference category: ${project.id}`);
    for (const categoryId of project.categoryIds) {
        const category = productCategories.find(item => item.id === categoryId);
        assert(category, `Unknown reference category: ${categoryId}`);
        assert(html.includes(`href="${getCategoryPath(category)}"`), `Missing project-to-group link: ${project.id}`);
        assert((await readPage(getCategoryPath(category))).includes(`href="${route}"`), `Missing group-to-project link: ${project.id}`);
    }
}

for (const id of [58, 59, 60, 61, 63, 65, 66, 67]) {
    const product = products.find(item => item.id === id)!;
    assert.equal(product.specs.temp, '-', `Unconfirmed refrigeration range on neutral/heated cabinet ${id}`);
    const html = await readPage(getProductPath(product));
    assert(!html.includes('M2 (-1 / +7 C°)'), `Copied refrigeration range still visible on ${id}`);
    assert(html.includes(getProductTemperature(product, 'TR')), `Missing version-specific temperature guidance on ${id}`);
}
for (const id of [19, 30]) {
    const product = products.find(item => item.id === id)!;
    assert.equal(findProductByIdentifier(products, String(id))?.id, id, 'Unconfirmed model identities must remain separate');
    assert(!/Full Moon|New Moon/i.test(JSON.stringify(product.specs)), `Unconfirmed Moon identity still in cabinet ${id}`);
}
const newMoon = products.find(item => item.id === 18)!;
assert(getProductMainImage(newMoon).includes('newMoon'), 'New Moon must use its own product photo');

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
console.log(`SEO checks passed: ${urls.length} canonical pages, ${productCategories.length} populated groups, ${projects.length} project narratives and reciprocal links, model identity and temperature guards, all catalogue aliases and assets.`);
