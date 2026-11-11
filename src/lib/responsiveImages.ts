import { responsiveImageManifest } from '../data/responsiveImageManifest';

export const PRODUCT_IMAGE_SIZES = '(min-width: 1536px) 688px, (min-width: 1280px) 560px, (min-width: 1024px) 444px, (min-width: 768px) 672px, (min-width: 640px) 608px, calc(100vw - 32px)';
export const CATEGORY_IMAGE_SIZES = '(min-width: 1536px) 580px, (min-width: 1280px) 461px, (min-width: 1024px) 342px, (min-width: 768px) 608px, (min-width: 640px) 544px, calc(100vw - 72px)';
export const CARD_IMAGE_SIZES = '(min-width: 1536px) 313px, (min-width: 1280px) 249px, (min-width: 1024px) 264px, (min-width: 768px) 179px, (min-width: 640px) 266px, calc(50vw - 46px)';
export const HOME_IMAGE_SIZES = '(min-width: 1536px) 960px, (min-width: 1280px) 768px, (min-width: 1024px) 640px, (min-width: 768px) 672px, (min-width: 640px) 608px, calc(100vw - 32px)';

export function getResponsiveImageProps(source: string, sizes: string, preferredWidth = 960): {
    src: string; srcSet?: string; sizes?: string; width?: number; height?: number;
} {
    const image = responsiveImageManifest[source];
    if (!image) return { src: source };
    const url = (width: number) => `/images/responsive/${width}/${source.slice('/images/'.length)}`;
    const width = image.widths.find(value => value >= preferredWidth) ?? image.widths[image.widths.length - 1];
    return {
        src: url(width), srcSet: image.widths.map(value => `${url(value)} ${value}w`).join(', '),
        sizes, width: image.width, height: image.height,
    };
}
