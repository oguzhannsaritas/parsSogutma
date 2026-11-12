import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { ProductBuyerGuide, ProductIntroduction } from '../src/components/ProductEditorialContent';
import { products } from '../src/data/products';
import { getProductContent, productContent, productContentGroups } from '../src/data/productContent';
import { getCategoryPath, getCategoryProducts, getProductCategory, isCanonicalProduct, productCategories } from '../src/data/catalog';
import { getProductDescription, getProductMainImage, getProductPath, getProductSlug, getProductTemperature, findProductByIdentifier, SITE_URL } from '../src/seo/config';
import { projects, getReferencePath } from '../src/data/references';
import { getReferenceSeo } from '../src/seo/references';
import vercel from '../vercel.json';
import { getLegacyProductRedirects } from './legacy-product-redirects';

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
        if (!match[1]) continue;
        if (path.extname(match[1]) && !match[1].endsWith('.html')) await access(path.join(dist, match[1]));
        else await readPage(match[1]);
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

// Authored buying advice must appear in the first HTML, and the shared client
// components must render the selected language without repeating the lead text.
assert.deepEqual(Object.keys(productContent).map(Number).sort((a, b) => a - b), canonicalProducts.map(item => item.id).sort((a, b) => a - b), 'Authored content must cover every canonical product without duplicate aliases');
for (const category of productCategories) {
    assert.deepEqual(Object.keys(productContentGroups[category.id]).map(Number).sort((a, b) => a - b), getCategoryProducts(category, products).map(item => item.id).sort((a, b) => a - b), `Editorial group membership differs: ${category.id}`);
}
const escapedText = (value: string) => renderToStaticMarkup(createElement('p', null, value)).slice(3, -4);
for (const language of ['TR', 'EN'] as const) {
    assert.equal(new Set(canonicalProducts.map(item => getProductDescription(item, language))).size, canonicalProducts.length, `Repeated ${language} product metadata`);
    assert.equal(new Set(canonicalProducts.map(item => getProductContent(item.id, language)?.introduction)).size, canonicalProducts.length, `Repeated ${language} product introduction`);
    for (const product of canonicalProducts) {
        const text = getProductContent(product.id, language);
        const category = getProductCategory(product);
        assert(text?.introduction && text.selection.length && text.questions.length, `Missing ${language} product guidance: ${product.id}`);
        assert(text.description.length <= 160, `Authored description should not need truncation: ${product.id} ${language}`);
        assert.equal(getProductDescription(product, language), text.description, `Generated metadata is stale: ${product.id} ${language}`);
        const rendered = renderToStaticMarkup(createElement(MemoryRouter, null,
            createElement(ProductIntroduction, { product, language, content: text }),
            createElement(ProductBuyerGuide, { product, language, content: text })));
        const html = language === 'TR' ? await readPage(getProductPath(product)) : rendered;
        for (const output of [rendered, html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')]) {
            assert.equal(output.split(escapedText(text.introduction)).length - 1, 1, `Product lead repeated or missing: ${product.id} ${language}`);
            assert(output.includes(`href="${getCategoryPath(category)}"`), `Product group unreachable: ${product.id}`);
            for (const item of text.selection) assert(output.includes(escapedText(item)), `Selection advice absent: ${product.id} ${language}`);
            for (const item of text.questions) {
                assert(output.includes(escapedText(item.question)) && output.includes(escapedText(item.answer)), `Question or answer absent: ${product.id} ${language}`);
            }
            assert.equal((output.match(/<details(?:\s|>)/g) ?? []).length, text.questions.length, `Questions must have accessible disclosure controls: ${product.id}`);
        }
        if (language === 'TR') {
            assert(html.includes(`name="description" content="${escapedText(text.description)}"`), `First HTML metadata is stale: ${product.id}`);
            const page = jsonLd(html).find(item => item['@type'] === 'ItemPage');
            assert.equal(page.description, text.description, `Structured description differs from metadata: ${product.id}`);
        }
    }
}

// Long model guidance is only needed on the lazy product screen. Descriptions
// remain available to shared SEO code without pulling all guides into the entry.
const manifest = JSON.parse(await readFile(path.join(dist, '.vite/manifest.json'), 'utf8'));
const mainScript = `/${manifest['index.html'].file}`;
assert(mainScript, 'Missing browser entry script');
const mainCode = await readFile(path.join(dist, mainScript), 'utf8');
for (const id of [1, 14, 97]) {
    assert(!mainCode.includes(getProductContent(id, 'TR')!.introduction), `Product guidance eagerly bundled into the main entry: ${id}`);
}

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
    const intro = html.match(/data-product-introduction="\d+"[^>]*><p[^>]*>(.*?)<\/p>/)?.[1];
    assert(intro, `Initial product introduction missing: ${product.id}`);
    const paragraphs = [...html.matchAll(/<p(?:\s[^>]*)?>(.*?)<\/p>/g)].map(match => match[1]);
    assert.equal(paragraphs.filter(text => text === intro || intro.startsWith(`${text} `)).length, 1, `Duplicate product lead in first HTML: ${product.id}`);
}
assert(vercel.redirects.some(item => item.source === '/products/42' && item.destination === '/products/12' && item.permanent), 'Duplicate route requires a permanent redirect');
const redirectSources = new Set<string>();
for (const redirect of vercel.redirects) {
    assert(!redirectSources.has(redirect.source), `Duplicate redirect source: ${redirect.source}`);
    redirectSources.add(redirect.source);
    assert(redirect.source !== redirect.destination, `Redirect loop: ${redirect.source}`);
    assert(!vercel.redirects.some(item => item.source === redirect.destination), `Redirect chain: ${redirect.source}`);
}
const legacyRedirects = getLegacyProductRedirects();
assert.equal(vercel.redirects.filter(item => /^\/(urun|blog)\//.test(item.source)).length, legacyRedirects.length, 'Legacy redirects are stale; run npm run redirects:generate');
for (const redirect of legacyRedirects) {
    assert(vercel.redirects.some(item => item.source === redirect.source && item.destination === redirect.destination && item.permanent), `Missing permanent redirect: ${redirect.source}`);
    // Compare against the independently generated legacy HTML, so changing a
    // shared slug's destination cannot silently send visitors to another model.
    const destination = `${SITE_URL}${redirect.destination}`;
    assert.equal(canonical(await readPage(redirect.source)), destination, `Legacy redirect changes the existing product mapping: ${redirect.source}`);
    assert.equal(canonical(await readPage(redirect.destination)), destination, `Redirect target must be a canonical page: ${redirect.source}`);
    assert(urls.includes(destination), `Redirect target is not in a sitemap: ${redirect.source}`);
}
for (const id of [19, 30]) assert(!redirectSources.has(`/products/${id}`), `Unconfirmed models must remain separate: ${id}`);
assert(!vercel.redirects.some(item => item.source.startsWith('/etiket/')), 'Archive redirects require a verified replacement, not a blanket rule');
console.log(`Legacy redirects checked: ${legacyRedirects.length} existing aliases point directly to canonical, indexable products.`);
assert.equal((await readFile(path.join(dist, 'google69e736d7d2eb3d7e.html'), 'utf8')).trim(), 'google-site-verification: google69e736d7d2eb3d7e.html');
console.log(`SEO checks passed: ${urls.length} canonical pages, ${productCategories.length} populated groups, ${canonicalProducts.length} bilingual product guides, ${projects.length} project narratives and reciprocal links, unique product leads, lazy guide loading, model identity and temperature guards, all catalogue aliases and assets.`);
