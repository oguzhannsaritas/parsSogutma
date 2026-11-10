import { slugify } from '../lib/slugify';
import { referenceContent, type ReferenceCopy } from './referenceContent';
import type { CatalogLanguage, CategoryId } from './catalog';

export interface ReferenceProject {
    id: string;
    title: string;
    location: string;
    coverImage: string;
    images: string[];
    categoryIds: CategoryId[];
    copy: Record<CatalogLanguage, ReferenceCopy>;
}

export const projects: ReferenceProject[] = [
    {
        ...referenceContent["kayaCiftligi"],
        id: 'kayaCiftligi', title: 'KAYA ÇİFTLİĞİ', location: 'İSTANBUL / KAĞITHANE',
        coverImage: '/images/refences/kayaCiftligi/kayaCiftligi4.webp',
        images: ['/images/refences/kayaCiftligi/kayaCiftligi1.webp', '/images/refences/kayaCiftligi/kayaCiftligi2.webp', '/images/refences/kayaCiftligi/kayaCiftligi3.webp', '/images/refences/kayaCiftligi/kayaCiftligi4.webp', '/images/refences/kayaCiftligi/kayaCiftligi5-guncel.webp', '/images/refences/kayaCiftligi/kayaCiftligi6.webp', '/images/refences/kayaCiftligi/kayaCiftligi7.webp'],
    },
    {
        ...referenceContent["tatlibak"],
        id: 'tatlibak', title: 'TATLIBAK', location: 'İSTANBUL / SULTANBEYLİ',
        coverImage: '/images/refences/tatlibak/tatlibak4.webp',
        images: ['/images/refences/tatlibak/tatlibak5.webp', '/images/refences/tatlibak/tatlibak4.webp', '/images/refences/tatlibak/tatlibak2.webp', '/images/refences/tatlibak/tatlibak1.webp', '/images/refences/tatlibak/tatlibak3.webp'],
    },
    {
        ...referenceContent["byKasap"],
        id: 'byKasap', title: 'BY KASAP', location: 'İSTANBUL / ÜMRANİYE',
        coverImage: '/images/refences/byKasap/byKasap1.webp',
        images: ['/images/refences/byKasap/byKasap1.webp', '/images/refences/byKasap/byKasap2.webp', '/images/refences/byKasap/byKasap12.mp4'],
    },
    {
        ...referenceContent["kaleRestoran"],
        id: 'kaleRestoran', title: 'KALE RESTORAN', location: 'İSTANBUL / MALTEPE',
        coverImage: '/images/refences/kaleRestoran/kaleRestoran5.webp',
        images: ['/images/refences/kaleRestoran/kaleRestoran.webp', '/images/refences/kaleRestoran/kaleRestora2.webp', '/images/refences/kaleRestoran/kaleRestoran3.webp', '/images/refences/kaleRestoran/kaleRestoran4.webp', '/images/refences/kaleRestoran/kaleRestoran5.webp', '/images/refences/kaleRestoran/kaleRestoran6.webp'],
    },
    {
        ...referenceContent["yildirimEt"],
        id: 'yildirimEt', title: 'YILDIRIM ET', location: 'BURSA / İZNİK',
        coverImage: '/images/refences/yildirimEt/bursa4.webp',
        images: ['/images/refences/yildirimEt/bursa1.webp', '/images/refences/yildirimEt/bursa2.webp', '/images/refences/yildirimEt/bursa3.webp', '/images/refences/yildirimEt/bursa4.webp', '/images/refences/yildirimEt/bursa5.webp', '/images/refences/yildirimEt/bursa6.webp'],
    },
    {
        ...referenceContent["yagizCiftligi"],
        id: 'yagizCiftligi', title: 'YAĞIZ ÇİFTLİĞİM', location: 'İSTANBUL / BEYLİKDÜZÜ',
        coverImage: '/images/refences/yagizCiftligi/yagizCiftligi1.webp',
        images: ['/images/refences/yagizCiftligi/yagizCiftligi1.webp', '/images/refences/yagizCiftligi/yagizCiftligi2.webp', '/images/refences/yagizCiftligi/yagizCiftligi3.webp', '/images/refences/yagizCiftligi/yagizCiftligi4.webp', '/images/refences/yagizCiftligi/yagizCiftligi5.webp', '/images/refences/yagizCiftligi/yagizCiftligi6.webp', '/images/refences/yagizCiftligi/yagizCiftligi7.webp', '/images/refences/yagizCiftligi/yagizCiftligi8.webp', '/images/refences/yagizCiftligi/yagizCiftligi9.webp', '/images/refences/yagizCiftligi/yagizCiftligi.webp'],
    },
    {
        ...referenceContent["tatOglu"],
        id: 'tatOglu', title: 'TAT OĞLU FIRIN PASTANESİ', location: 'KOCAELİ / GEBZE',
        coverImage: '/images/refences/tatOglu/tatOglu.webp',
        images: ['/images/refences/tatOglu/tatOglu.webp', '/images/refences/tatOglu/tatOglu2.webp', '/images/refences/tatOglu/tatOglu3.webp', '/images/refences/tatOglu/tatOglu4.webp', '/images/refences/tatOglu/tatOglu5.webp', '/images/refences/tatOglu/tatOglu6.webp'],
    },
    {
        ...referenceContent["tireBolu"],
        id: 'tireBolu', title: 'TİREBOLU UNLU MAMÜLLER', location: 'İSTANBUL / ÜMRANİYE',
        coverImage: '/images/refences/tireBolu/tirebolu.webp',
        images: ['/images/refences/tireBolu/tirebolu.webp', '/images/refences/tireBolu/tirebolu1.webp', '/images/refences/tireBolu/tirebolu2.webp', '/images/refences/tireBolu/tirebolu3.webp', '/images/refences/tireBolu/tirebolu4.webp', '/images/refences/tireBolu/tirebolu5.webp', '/images/refences/tireBolu/tirebolu6.webp', '/images/refences/tireBolu/tirebolu7.webp', '/images/refences/tireBolu/tirebolu8.webp'],
    },
    {
        ...referenceContent["nuvo"],
        id: 'nuvo', title: 'TALHA ET GIDA', location: 'İSTANBUL / KARTAL',
        coverImage: '/images/refences/talhaEt/talhaEt.webp',
        images: ['/images/refences/talhaEt/talhaEt.webp', '/images/refences/talhaEt/talhaEt1.webp'],
    },
    {
        ...referenceContent["İstanbul-Kartal"],
        id: 'İstanbul-Kartal', title: 'NUVO PASTANE', location: 'İSTANBUL / KARTAL',
        coverImage: '/images/refences/nuvo/nuvo.webp',
        images: ['/images/refences/nuvo/nuvo.webp', '/images/refences/nuvo/nuvo1.webp', '/images/refences/nuvo/nuvo2.webp', '/images/refences/nuvo/nuvo3.webp', '/images/refences/nuvo/nuvo4.webp'],
    },
    {
        ...referenceContent["doganKasap"],
        id: 'doganKasap', title: 'DOĞAN KASAP', location: 'İSTANBUL / KADIKÖY',
        coverImage: '/images/refences/doganKasap/doganKasap.webp',
        images: ['/images/refences/doganKasap/doganKasap.webp', '/images/refences/doganKasap/doganKasap1.webp'],
    },
];

export function getReferencePath(project: ReferenceProject): string {
    return `/referans/${slugify(project.title)}`;
}

export function findReference(identifier?: string): ReferenceProject | undefined {
    if (!identifier) return undefined;
    const decoded = decodeURIComponent(identifier);
    return projects.find((project) => project.id === decoded || slugify(project.title) === decoded);
}
