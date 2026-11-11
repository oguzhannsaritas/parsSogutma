import { lazy, type ComponentType } from 'react';

export const pageLoaders = {
    Home: () => import('../pages/Home'),
    Products: () => import('../pages/Products'),
    ProductDetail: () => import('../pages/ProductDetail'),
    ProductCategory: () => import('../pages/ProductCategory'),
    References: () => import('../pages/References'),
    ReferenceDetail: () => import('../pages/ReferenceDetail'),
    Contact: () => import('../pages/Contact'),
    About: () => import('../pages/About'),
    PhotoGallery: () => import('../pages/PhotoGallery'),
    NotFound: () => import('../pages/NotFound'),
    ECatalog: () => import('../pages/ECatalog'),
};
export type PageName = keyof typeof pageLoaders;
export type InitialRoutePage = { name: PageName; component: ComponentType };
export const lazyPages: Record<PageName, ComponentType> = {
    Home: lazy(pageLoaders.Home),
    Products: lazy(pageLoaders.Products),
    ProductDetail: lazy(pageLoaders.ProductDetail),
    ProductCategory: lazy(pageLoaders.ProductCategory),
    References: lazy(pageLoaders.References),
    ReferenceDetail: lazy(pageLoaders.ReferenceDetail),
    Contact: lazy(pageLoaders.Contact),
    About: lazy(pageLoaders.About),
    PhotoGallery: lazy(pageLoaders.PhotoGallery),
    NotFound: lazy(pageLoaders.NotFound),
    ECatalog: lazy(pageLoaders.ECatalog),
};

export function getPageName(pathname: string): PageName {
    const routes: Record<string, PageName> = { '/': 'Home', '/products': 'Products', '/references': 'References', '/contact': 'Contact', '/about': 'About', '/gallery': 'PhotoGallery', '/e-catalog': 'ECatalog' };
    if (routes[pathname]) return routes[pathname];
    if (/^\/(products|urun|blog)\/[^/]+$/.test(pathname)) return 'ProductDetail';
    if (/^\/urunler\/[^/]+$/.test(pathname)) return 'ProductCategory';
    if (/^\/(references|referans)\/[^/]+$/.test(pathname)) return 'ReferenceDetail';
    return 'NotFound';
}
