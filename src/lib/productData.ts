import type { Product } from '../data/products/types';
import type { ProductEditorialContent } from '../data/productContentTypes';

export type ProductPageData = {
    version: 1;
    product: Product;
    content: Record<'TR' | 'EN', ProductEditorialContent>;
};
const requests = new Map<number, Promise<ProductPageData>>();
export function getProductDataUrl(id: number): string {
    return `/product-data/v1/${id}.json`;
}

export function validateProductPageData(value: unknown, id: number): ProductPageData {
    const data = value as ProductPageData;
    if (!data || data.version !== 1 || data.product?.id !== id || !data.product.specs
        || !Array.isArray(data.product.specs.technicalSpecification)
        || !Array.isArray(data.product.specs.optionalAccessory)
        || !['TR', 'EN'].every(language => {
            const copy = data.content?.[language as 'TR' | 'EN'];
            return typeof copy?.introduction === 'string' && Array.isArray(copy.selection) && Array.isArray(copy.questions);
        })) throw new Error('Incomplete or mismatched model data');
    return data;
}

/** Seed the exact record used to generate this HTML; no extra initial request. */
export function seedProductPageData(value: unknown, id: number): ProductPageData {
    const data = validateProductPageData(value, id);
    requests.set(id, Promise.resolve(data));
    return data;
}

export function loadProductPageData(id: number): Promise<ProductPageData> {
    if (!Number.isSafeInteger(id) || id < 1) return Promise.reject(new Error('Invalid model identifier'));
    const cached = requests.get(id);
    if (cached) return cached;
    const request = fetch(getProductDataUrl(id)).then(async response => {
        if (!response.ok) throw new Error(`Model request failed: ${response.status}`);
        return validateProductPageData(await response.json(), id);
    }).catch(error => {
        requests.delete(id); // A failed request must remain retryable.
        throw error;
    });
    requests.set(id, request);
    return request;
}
