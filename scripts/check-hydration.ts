import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';

// A DOM correctness test, not a browser performance measurement. No remote
// resources or tracking scripts are executed in this environment.
const route = process.argv[2] ?? '/products/14';
const pathname = new URL(route, 'https://parsogutma.com').pathname;
const html = await readFile(`dist/${pathname === '/' ? 'index' : pathname.slice(1)}.html`, 'utf8');
const dom = new JSDOM(html, { url: `https://parsogutma.com${route}`, pretendToBeVisual: true });
const win = dom.window as Window & typeof globalThis;
// jsdom does not initialize the media muted property from its HTML attribute.
// Match the browser's parser state without executing any remote scripts/media.
win.document.querySelectorAll<HTMLMediaElement>('video[muted], audio[muted]').forEach(media => { media.muted = true; });
let verticalPosition = 350;
Object.defineProperty(win, 'scrollY', { get: () => verticalPosition });
Object.defineProperty(win, 'pageYOffset', { get: () => verticalPosition });
win.scrollTo = ((first: number | ScrollToOptions, top?: number) => {
    const next = typeof first === 'object' ? first.top : top;
    if (typeof next === 'number') verticalPosition = next;
}) as Window['scrollTo'];
win.matchMedia = query => ({ matches: query.includes('max-width') && process.env.TEST_MOBILE === '1', media: query, onchange: null, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent() { return true; } }) as MediaQueryList;
win.HTMLElement.prototype.scrollTo = () => {};
win.HTMLMediaElement.prototype.play = () => Promise.resolve();
win.HTMLMediaElement.prototype.pause = () => {};
win.HTMLMediaElement.prototype.load = () => {};
class Observer { observe() {} unobserve() {} disconnect() {} }
Object.defineProperty(win, 'IntersectionObserver', { value: Observer });
Object.defineProperty(win, 'ResizeObserver', { value: Observer });
for (const [key, value] of Object.entries({ window: win, document: win.document, navigator: win.navigator,
    HTMLElement: win.HTMLElement, Element: win.Element, SVGElement: win.SVGElement, Node: win.Node, Audio: win.Audio, Image: win.Image,
    IntersectionObserver: Observer, ResizeObserver: Observer, getComputedStyle: win.getComputedStyle.bind(win),
    requestAnimationFrame: win.requestAnimationFrame.bind(win), cancelAnimationFrame: win.cancelAnimationFrame.bind(win),
    IS_REACT_ACT_ENVIRONMENT: true,
})) Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });

if (process.env.TEST_DARK === '1') {
    win.localStorage.setItem('theme', 'dark');
    win.document.documentElement.classList.add('dark');
}
let modelRequests = 0;
globalThis.fetch = async input => {
    modelRequests++;
    const file = String(input);
    assert.match(file, /^\/product-data\/v1\/\d+\.json$/, `Unexpected test network request: ${file}`);
    return new Response(await readFile(`dist${file}`, 'utf8'), { status: 200 });
};
const { createElement, StrictMode, act } = await import('react');
const { hydrateRoot } = await import('react-dom/client');
const { default: App } = await import('../src/App');
const { getPageName, pageLoaders } = await import('../src/lib/pageModules');
const pageName = getPageName(pathname);
const pageModule = await pageLoaders[pageName]();
const { seedProductPageData } = await import('../src/lib/productData');
const container = win.document.getElementById('root')!;
const firstHeading = container.querySelector('h1');
const initialProduct = container.dataset.productId ? seedProductPageData(JSON.parse(win.document.getElementById('pars-page-data')!.textContent!), Number(container.dataset.productId)) : undefined;
const errors: unknown[] = [];
const originalError = console.error;
console.error = (...args) => { errors.push(args); };
let root: ReturnType<typeof hydrateRoot> | undefined;
async function settle() {
    for (let attempt = 0; attempt < 100; attempt++) {
        await act(async () => { await new Promise(resolve => setTimeout(resolve, 20)); });
        if (container.querySelector('[aria-label="Chat on WhatsApp"]')) return;
    }
    throw new Error(`Hydration did not complete: ${route}`);
}
try {
    await act(async () => {
        root = hydrateRoot(container, createElement(StrictMode, null, createElement(App, { initialProduct, initialPage: { name: pageName, component: pageModule.default } })), {
            onRecoverableError: error => { errors.push(error); },
        });
    });
    await settle();
    assert.equal(errors.length, 0, `Hydration warnings on ${route}: ${errors.map(String).join('\n')}`);
    assert.strictEqual(container.querySelector('h1'), firstHeading, 'The visible page was discarded and rebuilt during hydration');
    assert.equal(verticalPosition, 350, 'Hydration moved a visitor who had already started reading the static page');
    if (process.env.TEST_DARK === '1') {
        assert(win.document.documentElement.classList.contains('dark'), 'Stored theme was lost');
        assert.equal(win.localStorage.getItem('theme'), 'dark', 'Hydration overwrote the stored theme');
    }
    if (pathname === '/products/14') {
        assert.equal(modelRequests, 0, 'Initial product hydration fetched its own model again');
        assert(container.querySelector('[data-product-buyer-guide="14"]'));
        const language = container.querySelector<HTMLButtonElement>('button[aria-label="Toggle language"]')!;
        await act(async () => { language.click(); });
        assert.equal(container.querySelector('h1')?.textContent, 'Horizontal Eclair Pastry Cabinet');
        assert(container.querySelector('[data-product-introduction="14"]')?.textContent?.includes('side by side'));
        await act(async () => { container.querySelector<HTMLButtonElement>('button[aria-label="Sonraki ürün"]')!.click(); });
        for (let attempt = 0; attempt < 100 && !container.querySelector('[data-product-buyer-guide="15"]'); attempt++) {
            await act(async () => { await new Promise(resolve => setTimeout(resolve, 20)); });
        }
        assert.equal(win.location.pathname, '/products/15');
        assert.equal(container.querySelector('h1')?.textContent, 'VENUS - Pastry Showcase Cabinet');
        assert(!container.querySelector('[data-product-buyer-guide="14"]'), 'Previous model content survived navigation');
    }
    if (pathname === '/products' && route.includes('search=pasta')) {
        assert(container.querySelector('main a[href="/products/14"]'), 'Search query was not applied after hydration');
        assert(!container.querySelector('main a[href="/products/1"]'), 'Unfiltered cards remained after search');
    }
    assert.equal(errors.length, 0, `Interaction errors on ${route}: ${errors.map(String).join('\n')}`);
    console.log(`Hydration passed: ${route}, initial DOM retained, theme/query/model interactions preserved.`);
} finally {
    if (root) await act(async () => { root!.unmount(); });
    console.error = originalError;
    dom.window.close();
}
