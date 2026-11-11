import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { products } from '../src/data/products';
import { products as summaries } from '../src/data/productSummaries';
import { productContent } from '../src/data/productContent';
import { isCanonicalProduct } from '../src/data/catalog';
import { findProductByIdentifier, getProductSeo, productPageJsonLd, getProductMainImage } from '../src/seo/config';
import { getProductDataUrl, loadProductPageData } from '../src/lib/productData';
import { getResponsiveImageProps, PRODUCT_IMAGE_SIZES, CATEGORY_IMAGE_SIZES } from '../src/lib/responsiveImages';
import { responsiveImageManifest } from '../src/data/responsiveImageManifest';

for (const product of products) {
    const summary = summaries.find(item => item.id === product.id)!;
    assert(summary, `Missing summary: ${product.id}`);
    assert(!('technicalSpecification' in summary.specs), 'Technical arrays leaked into catalog summary');
    for (const language of ['TR', 'EN'] as const) {
        assert.deepEqual(getProductSeo(summary, language), getProductSeo(product, language));
        assert.deepEqual(productPageJsonLd(summary, language), productPageJsonLd(product, language));
    }
}
assert.equal(findProductByIdentifier(summaries, '42')?.id, 12);
for (const id of [19, 30]) assert.equal(findProductByIdentifier(summaries, String(id))?.id, id);
for (const product of products.filter(isCanonicalProduct)) {
    const json = JSON.parse(await readFile(path.join('dist', getProductDataUrl(product.id)), 'utf8'));
    assert.deepEqual(json, { version: 1, product, content: productContent[product.id] });
    const html = await readFile(`dist/products/${product.id}.html`, 'utf8');
    assert(html.includes(`as="fetch" href="${getProductDataUrl(product.id)}" crossorigin="anonymous"`));
    const responsive = getResponsiveImageProps(getProductMainImage(product), PRODUCT_IMAGE_SIZES);
    assert(html.includes(`as="image" href="${responsive.src}"`));
    assert(html.includes(`imagesizes="${PRODUCT_IMAGE_SIZES}"`));
    assert(/rel="modulepreload"[^>]+ProductDetail/.test(html));
}
const group = await readFile('dist/urunler/pasta-cikolata-dolaplari.html', 'utf8');
assert(group.includes(`imagesizes="${CATEGORY_IMAGE_SIZES}"`));
assert(/rel="modulepreload"[^>]+ProductCategory/.test(group));

for (const [source, image] of Object.entries(responsiveImageManifest)) {
    assert(image.widths.every((width, index) => width <= image.width && (!index || width > image.widths[index - 1])));
    for (const width of image.widths) {
        const filename = path.join('dist/images/responsive', String(width), source.slice('/images/'.length));
        const actual = await sharp(filename).metadata();
        assert.equal(actual.width, width, `Incorrect srcset descriptor: ${filename}`);
        assert(Math.abs(actual.height! / width - image.height / image.width) < 1 / width, `Image distorted: ${filename}`);
    }
}
const home = await readFile('dist/index.html', 'utf8');
const entry = home.match(/<script[^>]*type="module"[^>]*src="([^"]+)"/)![1];
const entrySize = (await stat(path.join('dist', entry))).size;
assert(entrySize < 800_000, `Catalog payload regression: entry ${entrySize} bytes`);
const detailFile = (await readdir('dist/assets')).find(file => /^ProductDetail-.*\.js$/.test(file))!;
const detail = await readFile(`dist/assets/${detailFile}`, 'utf8');
assert(Buffer.byteLength(detail) < 100_000, 'All product guidance has been bundled into the detail screen');
assert(!detail.includes(productContent[97]!.TR.introduction));
await stat('dist/images/home/youtube-cover.webp');

const originalFetch = globalThis.fetch;
const sample = JSON.parse(await readFile('dist/product-data/v1/14.json', 'utf8'));
let requests = 0;
let fail = true;
globalThis.fetch = async () => {
    requests++;
    return new Response(JSON.stringify(sample), { status: fail ? 503 : 200 });
};
try {
    const first = loadProductPageData(14);
    assert.strictEqual(loadProductPageData(14), first, 'Concurrent mounts issued duplicate requests');
    await assert.rejects(first, /503/);
    fail = false;
    assert.deepEqual(await loadProductPageData(14), sample, 'A failed model cannot be retried');
    assert.equal(requests, 2);
    assert.strictEqual(loadProductPageData(14), loadProductPageData(14));
    await assert.rejects(loadProductPageData(15), /mismatched/, 'Wrong model data was accepted');
    await assert.rejects(loadProductPageData(-1), /identifier/);
} finally {
    globalThis.fetch = originalFetch;
}
console.log(`Performance checks passed: 108 complete models, unchanged bilingual SEO, responsive aspect ratios, retryable requests; entry ${entrySize} B, detail ${Buffer.byteLength(detail)} B.`);
