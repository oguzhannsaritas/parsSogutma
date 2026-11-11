import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { products } from '../src/data/products';
import { getCategoryPath, isCanonicalProduct, productCategories } from '../src/data/catalog';
import { getProductPath, staticPageSeo } from '../src/seo/config';
import { getReferencePath, projects } from '../src/data/references';

const routes = [...Object.keys(staticPageSeo), ...products.filter(isCanonicalProduct).map(getProductPath),
    ...productCategories.map(getCategoryPath), ...projects.map(getReferencePath)];
for (const route of routes) {
    const html = await readFile(`dist/${route === '/' ? 'index' : route.slice(1)}.html`, 'utf8');
    assert(html.includes('data-rendered="true"'), `Missing complete initial page: ${route}`);
    assert(!/js-loading|data-app-loader|data-seo-snapshot/.test(html), `Initial content still hidden behind a loader: ${route}`);
    assert(!html.includes('<!--$?-->') && !html.includes('<!--$!-->'), `Unfinished Suspense content: ${route}`);
    assert(!/<div hidden|\$RC\(|\$RV\(/.test(html), `Initial page requires a reveal script: ${route}`);
    assert(/<script[^>]+data-contact-boot/.test(html), `Initial contact links are unmeasured: ${route}`);
}
for (const route of ['/', '/products/14', '/urunler/pasta-cikolata-dolaplari']) {
    const html = await readFile(`dist/${route === '/' ? 'index' : route.slice(1)}.html`, 'utf8');
    // Default JSDOM executes no scripts: the heading and primary image must
    // already be present and have no hidden ancestor before application code.
    const dom = new JSDOM(html);
    try {
        const doc = dom.window.document;
        const heading = doc.querySelector('#root main h1');
        const image = doc.querySelector('#root main img[fetchpriority="high"]');
        assert(heading && image, `First screen unavailable without JavaScript: ${route}`);
        for (const element of [heading, image]) {
            let ancestor = element as HTMLElement | null;
            while (ancestor) {
                assert(!ancestor.hidden && ancestor.style.opacity !== '0'
                    && ancestor.style.display !== 'none' && ancestor.style.visibility !== 'hidden',
                `First screen hidden by initial animation: ${route}`);
                ancestor = ancestor.parentElement;
            }
        }
        assert(!doc.head.innerHTML.includes('ContactWidgets-'), 'Floating widgets block initial module loading');
        if (route === '/products/14') {
            assert.equal(doc.querySelectorAll('[data-product-introduction="14"]').length, 1);
            assert.equal(doc.querySelectorAll('[data-product-buyer-guide="14"]').length, 1);
            assert.equal(doc.querySelector('#root')?.getAttribute('data-product-id'), '14');
        }
    } finally { dom.window.close(); }
}
const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'));
const visited = new Set<string>();
let contactBytes = 0;
async function inspectContactEntry(key: string) {
    if (visited.has(key)) return;
    visited.add(key);
    assert.notEqual(key, 'index.html', 'Contact tracking waits for the entire application');
    const chunk = manifest[key];
    assert(chunk, `Missing early contact module: ${key}`);
    contactBytes += (await stat(`dist/${chunk.file}`)).size;
    for (const dependency of chunk.imports ?? []) await inspectContactEntry(dependency);
}
await inspectContactEntry('src/contact-boot.ts');
assert(contactBytes < 20_000, `Early contact tracking is too large: ${contactBytes} bytes`);
console.log(`First-paint checks passed: ${routes.length} complete static pages; heading and image visible without application JavaScript; no loading overlay or Suspense reveal script.`);
