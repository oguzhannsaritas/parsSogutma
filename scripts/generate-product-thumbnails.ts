import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { getProductThumbnailUrl } from '../src/lib/productImages';

const publicDir = path.join(process.cwd(), 'public');
const sourceDir = path.join(publicDir, 'images/products');

async function collectImages(directory: string): Promise<string[]> {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = await Promise.all(entries.map(async (entry) => {
        const filename = path.join(directory, entry.name);
        if (entry.isDirectory()) return collectImages(filename);
        return entry.isFile() && entry.name.endsWith('.webp') ? [filename] : [];
    }));
    return files.flat();
}

const sources = await collectImages(sourceDir);
let nextIndex = 0;
let generated = 0;
let sourceBytes = 0;
let thumbnailBytes = 0;

// Bound concurrent encodes on development machines and Vercel build workers.
async function worker() {
    while (nextIndex < sources.length) {
        const source = sources[nextIndex++];
        const sourceUrl = `/${path.relative(publicDir, source).split(path.sep).join('/')}`;
        const destination = path.join(publicDir, getProductThumbnailUrl(sourceUrl));
        const sourceInfo = await stat(source);
        let thumbnailInfo = await stat(destination).catch((error: NodeJS.ErrnoException) => {
            if (error.code !== 'ENOENT') throw error;
            return undefined;
        });

        if (!thumbnailInfo || thumbnailInfo.mtimeMs < sourceInfo.mtimeMs) {
            await mkdir(path.dirname(destination), { recursive: true });
            await sharp(source)
                .rotate()
                .resize({ width: 320, height: 320, fit: 'inside', withoutEnlargement: true })
                .webp({ quality: 82 })
                .toFile(destination);
            thumbnailInfo = await stat(destination);
            generated++;
        }

        sourceBytes += sourceInfo.size;
        thumbnailBytes += thumbnailInfo.size;
    }
}

await Promise.all(Array.from({ length: Math.min(4, sources.length) }, () => worker()));
const savings = sourceBytes ? (100 * (1 - thumbnailBytes / sourceBytes)).toFixed(1) : '0';
console.log(`Product thumbnails: ${sources.length} ready, ${generated} generated; ${savings}% smaller than original gallery files.`);
