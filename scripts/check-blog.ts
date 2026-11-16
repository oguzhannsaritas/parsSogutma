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

// The user specifically requested that the blog have no entry from the main site.
let checked = 0;
for (const url of urls) {
    const route = new URL(url).pathname;
    if (route === '/blog' || route.startsWith('/blog/')) continue;
    const doc = new JSDOM(await readPage(route)).window.document;
    for (const anchor of doc.querySelectorAll<HTMLAnchorElement>('a[href]')) {
        const target = new URL(anchor.getAttribute('href')!, SITE_URL);
        if (target.origin !== SITE_URL) continue;
        assert(target.pathname !== '/blog' && !target.pathname.startsWith('/blog/'), 'Unrequested blog entry on ' + route);
    }
    checked++;
}
for (const redirect of vercel.redirects.filter(item => item.source.startsWith('/blog/'))) {
    assert.equal(getPageName(redirect.source), 'ProductDetail', 'Existing product alias changed: ' + redirect.source);
}
console.log('Blog checks passed: ' + blogPaths.length + ' complete indexable pages; no blog entry on ' + checked + ' existing pages; legacy product addresses preserved.');
