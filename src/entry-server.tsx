import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App';
import { products } from './data/products';
import { getProductContent } from './data/productContent';
import { findProductByIdentifier } from './seo/config';
import type { ProductPageData } from './lib/productData';
import { getPageName, pageLoaders } from './lib/pageModules';

export async function renderPage(route: string): Promise<{ markup: string; productId?: number; initialProduct?: ProductPageData }> {
    const match = route.match(/^\/(?:products|urun|blog)\/([^/?]+)$/);
    const product = match ? findProductByIdentifier(products, decodeURIComponent(match[1])) : undefined;
    const initialProduct: ProductPageData | undefined = product ? {
        version: 1, product,
        content: { TR: getProductContent(product.id, 'TR')!, EN: getProductContent(product.id, 'EN')! },
    } : undefined;
    const name = getPageName(route);
    const module = await pageLoaders[name]();
    const markup = renderToString(
        <StrictMode><StaticRouter location={route}><AppContent initialProduct={initialProduct} initialPage={{ name, component: module.default }} /></StaticRouter></StrictMode>,
    );
    if (markup.includes('<!--$!-->') || markup.includes('<!--$?-->')) throw new Error(`Unfinished initial content: ${route}`);
    return { markup, productId: product?.id, initialProduct };
}
