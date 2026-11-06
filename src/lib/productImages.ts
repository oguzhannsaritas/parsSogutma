const PRODUCT_IMAGE_PREFIX = '/images/products/';
const THUMBNAIL_IMAGE_PREFIX = '/images/product-thumbnails/';

/** Generated during predev/prebuild; full-size sources remain available for the gallery/lightbox. */
export function getProductThumbnailUrl(source: string): string {
    if (!source.startsWith(PRODUCT_IMAGE_PREFIX) || !source.endsWith('.webp')) return source;
    return `${THUMBNAIL_IMAGE_PREFIX}${source.slice(PRODUCT_IMAGE_PREFIX.length)}`;
}
