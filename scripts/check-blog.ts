import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { blogArticles, getBlogArticlePath } from '../src/data/blog';
import { blogContent } from '../src/data/blogContent';
import { getPageName } from '../src/lib/pageModules';
import { SITE_URL } from '../src/seo/config';
import vercel from '../vercel.json';

const readPage = (route: string) => readFile('dist/' + (route === '/' ? 'index' : route.slice(1)) + '.html', 'utf8');
const sitemapIndex = await readFile('dist/sitemap.xml', 'utf8');
const sitemapNames = [...sitemapIndex.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
const urls: string[] = [];
for (const name of sitemapNames) {
    const xml = await readFile('dist' + name, 'utf8');
    urls.push(...[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]));
}

const blogPaths = ['/blog', ...blogArticles.map(getBlogArticlePath)];
for (const route of blogPaths) {
    assert(urls.includes(SITE_URL + route), 'Blog page missing from sitemap: ' + route);
    assert(!vercel.redirects.some(redirect => redirect.source === route), 'Blog article collides with an existing redirect: ' + route);
    const doc = new JSDOM(await readPage(route)).window.document;
    assert.equal(doc.querySelector('link[rel="canonical"]')?.getAttribute('href'), SITE_URL + route);
    assert.match(doc.querySelector('meta[name="robots"]')?.getAttribute('content') ?? '', /^index, follow/);
    assert.equal(doc.querySelectorAll('main h1').length, 1);
    assert(doc.querySelector('main img[fetchpriority="high"]'), 'Blog image unavailable on the first render: ' + route);
    const data = [...doc.querySelectorAll('script[type="application/ld+json"]')].map(script => JSON.parse(script.textContent!));
    if (route === '/blog') {
        assert.equal(getPageName(route), 'Blog');
        const collection = data.find(item => item['@type'] === 'CollectionPage');
        assert.equal(collection.mainEntity.itemListElement.length, blogArticles.length);
        for (const article of blogArticles) assert(doc.querySelector('main a[href="' + getBlogArticlePath(article) + '"]'));
    } else {
        const article = blogArticles.find(item => getBlogArticlePath(item) === route)!;
        assert.equal(getPageName(route), 'BlogArticle', 'New article was treated as an old product address');
        assert.equal(doc.querySelector('main h1')?.textContent, article.title.TR);
        const body = doc.querySelector('[data-blog-article="' + article.slug + '"]')!;
        const posting = data.find(item => item['@type'] === 'BlogPosting');
        assert.equal(posting.headline, article.title.TR);
        assert.equal(posting.mainEntityOfPage['@id'], SITE_URL + route);
        assert.equal(posting.datePublished, article.publishedOn);
        for (const section of blogContent[article.slug].TR.sections) {
            for (const paragraph of section.paragraphs) assert(body.textContent?.includes(paragraph), 'Incomplete article HTML: ' + route);
        }
        for (const anchor of body.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]')) {
            assert(doc.getElementById(anchor.getAttribute('href')!.slice(1)), 'Broken contents link: ' + route);
        }
    }
}

// Keep the top navigation unchanged while making the blog accessible in the
// footer and linking each guide from relevant, already indexed content.
let checked = 0;
let guidePages = 0;
const incomingGuides = new Set<string>();
for (const url of urls) {
    const route = new URL(url).pathname;
    const dom = new JSDOM(await readPage(route));
    const doc = dom.window.document;
    assert.equal(doc.querySelectorAll('footer a[href="/blog"]').length, 1, 'Footer blog link is missing or duplicated on ' + route);
    for (const anchor of doc.querySelectorAll<HTMLAnchorElement>('header a[href]')) {
        const href = anchor.getAttribute('href')!;
        const target = new URL(href, url);
        const linkIsBlog = target.pathname === '/blog' || target.pathname.startsWith('/blog/');
        const currentPageLink = target.pathname === route;
        assert.notEqual(anchor.textContent?.trim(), 'Blog', 'Blog was added to the top menu on ' + route);
        assert(!linkIsBlog || currentPageLink, 'Blog was added to the top menu on ' + route);
    }
    if (route !== '/blog' && !route.startsWith('/blog/')) {
        const guides = doc.querySelector('[data-related-blog-guides]');
        if (guides) {
            const categoryId = guides.getAttribute('data-related-blog-guides');
            for (const anchor of guides.querySelectorAll<HTMLAnchorElement>('a[href]')) {
                const target = new URL(anchor.getAttribute('href')!, SITE_URL);
                const article = blogArticles.find(item => getBlogArticlePath(item) === target.pathname);
                assert(article, 'Related guide does not exist on ' + route);
                assert(article.relatedCategoryIds.some(id => id === categoryId), 'Guide is unrelated to the product group on ' + route);
                assert(urls.includes(target.href), 'Related guide is not indexable: ' + target.href);
                incomingGuides.add(target.pathname);
            }
            guidePages++;
        }
    }
    dom.window.close();
    checked++;
}
assert.deepEqual([...incomingGuides].sort(), blogArticles.map(getBlogArticlePath).sort(), 'Every published guide needs a relevant incoming link');
for (const redirect of vercel.redirects.filter(item => item.source.startsWith('/blog/'))) {
    assert.equal(getPageName(redirect.source), 'ProductDetail', 'Existing product alias changed: ' + redirect.source);
}
console.log('Blog checks passed: ' + blogPaths.length + ' complete indexable pages; footer entry on ' + checked + ' pages, relevant guide links on ' + guidePages + ' pages; top menu and legacy product addresses preserved.');
