import { products } from '../src/data/products';
import { getProductPath, getProductSlug, slugify } from '../src/seo/config';

// Match the existing snapshot generator's first-product-wins behavior for
// shared names. Numeric model URLs remain separate unless already canonicalized.
export function getLegacyProductRedirects() {
    const destinations = new Map<string, string>();
    for (const product of products) {
        for (const source of [
            `/blog/${slugify(product.name.TR)}`,
            `/urun/${getProductSlug(product)}`,
            `/urun/${slugify(product.name.TR)}`,
        ]) {
            if (!destinations.has(source)) destinations.set(source, getProductPath(product));
        }
    }
    return [...destinations].map(([source, destination]) => ({ source, destination, permanent: true }));
}
