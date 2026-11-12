import { readFile, writeFile } from 'node:fs/promises';
import { getLegacyProductRedirects } from './legacy-product-redirects';

const configPath = new URL('../vercel.json', import.meta.url);
const config = JSON.parse(await readFile(configPath, 'utf8'));
const otherRedirects = config.redirects.filter((item: { source: string }) => !/^\/(urun|blog)\//.test(item.source));
const legacyRedirects = getLegacyProductRedirects();
config.redirects = [...otherRedirects, ...legacyRedirects];
// Vercel reads this committed configuration before the build starts.
// With cleanUrls enabled, .html requests are normalized before these rules.
await writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`);
console.log(`Updated ${legacyRedirects.length} legacy product redirects; ${otherRedirects.length} existing redirects retained.`);
