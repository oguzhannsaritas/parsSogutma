import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const path='dist/eCatalogParsSogutma.pdf';
const original=await readFile(path);
const hash=data=>createHash('sha256').update(data).digest('hex');
const expected='b91ed047c6a4e32f0f44e20f4efe54d4fecf604d2be6cac0ce3c559468db4e50';
if(hash(original)!==expected){
 if(hash(original)!=='aed7593a4a378df5ed3e701f7d0310fb4e034c8b59084a5b6d1fc6a52424fa37')throw new Error('Catalog source changed; regenerate the reviewed PDF revision.');
 const revision=Buffer.from((await readFile(new URL('./catalog-address-revision.base64',import.meta.url),'utf8')).trim(),'base64');
 const updated=Buffer.concat([original,revision]);
 if(hash(updated)!==expected)throw new Error('Catalog revision integrity check failed.');
 await writeFile(path,updated);
}
console.log('Reviewed catalog address revision applied.');
