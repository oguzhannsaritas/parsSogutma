import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { products } from '../src/data/products';
import { isCanonicalProduct } from '../src/data/catalog';
import { getProductPath } from '../src/seo/config';

const normalize = (value: string) => value.replace(/\s+/g, ' ').trim();
let technicalCount = 0;
let accessoryCount = 0;
const canonicalProducts = products.filter(isCanonicalProduct);
for (const product of canonicalProducts) {
    const route = getProductPath(product);
    const html = await readFile(`dist${route}.html`, 'utf8');
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
    assert(main, `Missing initial product body: ${route}`);
    // Parse only real HTML nodes, excluding JSON and any later React render.
    const doc = JSDOM.fragment(main);
    for (const [kind, items] of [
        ['technical', product.specs.technicalSpecification ?? []],
        ['accessories', product.specs.optionalAccessory ?? []],
    ] as const) {
        const details = doc.querySelector<HTMLDetailsElement>(`details[data-product-disclosure="${kind}"]`);
        assert(details && details.querySelector('summary'), `Missing native disclosure: ${route} ${kind}`);
        assert(!details.open, `Initial collapsed layout changed: ${route} ${kind}`);
        assert.deepEqual([...details.querySelectorAll('li')].map(item => normalize(item.lastElementChild!.textContent!)),
            items.map(item => normalize(item.TR)), `Technical text missing or changed in initial HTML: ${route} ${kind}`);
        if (kind === 'technical') technicalCount += items.length;
        else accessoryCount += items.length;
    }
}
console.log(`Product disclosure checks passed: ${canonicalProducts.length} canonical products; ${technicalCount} technical and ${accessoryCount} accessory items present before JavaScript, with collapsed native controls.`);
