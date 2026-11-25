import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { products } from '../src/data/products';
import { isCanonicalProduct } from '../src/data/catalog';
import { getProductPath, getProductTemperature } from '../src/seo/config';

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
    const summary = doc.querySelector('[data-product-specifications]');
    const values = [...(summary?.querySelectorAll('dd') ?? [])].map(cell => normalize(cell.textContent!));
    assert(values.every(value => value && !/^[-–—]+$/.test(value)), `Placeholder in technical table: ${route}`);
    const temperature = normalize(getProductTemperature(product, 'TR'));
    if (temperature && temperature !== '-') {
        assert(values.includes(temperature), `Missing working temperature: ${route}`);
    }
    for (const { label, value } of product.specs.technicalOverview ?? []) {
        const term = [...(summary?.querySelectorAll('dt') ?? [])].find(cell => normalize(cell.textContent!) === label.TR);
        const expected = typeof value === 'string' ? value : value.TR;
        assert.equal(term?.nextElementSibling?.textContent?.trim(), expected, `Missing or mislabeled specification: ${route} ${label.TR}`);
    }
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
