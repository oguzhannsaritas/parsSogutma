import type { CategoryId, CatalogLanguage } from './catalog';
import type { ProductSummary, TranslatedString } from './products/types';

type ModelGroupDefinition = { id: string; name: TranslatedString; productIds: number[] };

// These groups describe the existing catalogue names and uses. They do not
// assign unconfirmed temperatures, motors or other model specifications.
export const catalogModelGroups: Record<CategoryId, ModelGroupDefinition[]> = {
    pasta: [
        { id: 'pasta-ekler-cikolata', name: { TR: 'Pasta, ekler ve çikolata vitrinleri', EN: 'Pastry, eclair and chocolate displays' }, productIds: [14, 15, 35, 54, 55, 56, 110, 57, 64, 67, 68, 69] },
        { id: 'pastane-kuru-teshir', name: { TR: 'Pastane, baklava ve kuru teşhir', EN: 'Bakery, baklava and dry displays' }, productIds: [58, 60, 63, 65, 66] },
        { id: 'isitmali-tezgahlar', name: { TR: 'Isıtmalı börek ve poğaça tezgâhları', EN: 'Heated börek and pastry counters' }, productIds: [59, 61] },
        { id: 'kumpir-waffle', name: { TR: 'Kumpir ve waffle ekipmanları', EN: 'Baked potato and waffle equipment' }, productIds: [62] },
    ],
    sutluk: [
        { id: 'sutluk-raflar', name: { TR: 'Sütlük ve raflı reyonlar', EN: 'Dairy cabinets and shelving displays' }, productIds: [36, 37, 38, 39, 44, 52, 88] },
        { id: 'sise-icecek', name: { TR: 'Şişe ve içecek soğutucuları', EN: 'Bottle and beverage coolers' }, productIds: [45, 46, 47, 48] },
        { id: 'market-sarkuteri', name: { TR: 'Market, şarküteri ve promosyon reyonları', EN: 'Market, deli and promotional displays' }, productIds: [49, 50, 51, 53] },
        { id: 'zeytin-manav', name: { TR: 'Zeytin ve manav teşhirleri', EN: 'Olive and produce displays' }, productIds: [89, 90, 91] },
    ],
    kasap: [
        { id: 'et-reyonlari', name: { TR: 'Kasap ve et teşhir reyonları', EN: 'Butcher and meat display counters' }, productIds: [2, 3, 5, 8, 10, 23] },
        { id: 'et-aski', name: { TR: 'Et askı dolapları', EN: 'Hanging meat cabinets' }, productIds: [34, 40] },
        { id: 'dry-aged', name: { TR: 'Dry aged dolapları', EN: 'Dry aged cabinets' }, productIds: [41, 43] },
    ],
    meze: [
        { id: 'kebap-meze-reyonlari', name: { TR: 'Kebap ve meze reyonları', EN: 'Kebab and mezze display counters' }, productIds: [4, 25, 26] },
        { id: 'dikey-meze', name: { TR: 'Dikey meze dolapları', EN: 'Vertical mezze cabinets' }, productIds: [12] },
    ],
    balik: [
        { id: 'balik-mostra', name: { TR: 'Balık mostra dolapları', EN: 'Fish mostra cabinets' }, productIds: [7, 11] },
        { id: 'balik-teshir', name: { TR: 'Balık teşhir dolapları', EN: 'Fish display cabinets' }, productIds: [9, 24] },
    ],
    reyon: [
        { id: 'dik-camli-reyonlar', name: { TR: 'Dik camlı reyonlar', EN: 'Upright glass display counters' }, productIds: [6, 17, 29] },
        { id: 'duz-bombe-yarim-cam', name: { TR: 'Düz, bombe ve yarım camlı reyonlar', EN: 'Flat, curved and half-glass counters' }, productIds: [16, 18, 19, 30, 31, 32] },
        { id: 'servis-teshir-reyonlari', name: { TR: 'Servis ve teşhir reyonları', EN: 'Service and display counters' }, productIds: [1, 13, 21, 22] },
        { id: 'kuru-statik-uflemeli', name: { TR: 'Kuru, statik ve üflemeli reyonlar', EN: 'Dry-cooled, static and ventilated counters' }, productIds: [20, 28, 33] },
        { id: 'promosyon-dolaplari', name: { TR: 'Promosyon dolapları', EN: 'Promotional display cabinets' }, productIds: [27] },
    ],
    'soguk-oda': [
        { id: 'soguk-hava-depolari', name: { TR: 'Soğuk hava depoları', EN: 'Cold rooms' }, productIds: [97, 98] },
        { id: 'panel-aksesuar', name: { TR: 'Soğuk oda panelleri ve aksesuarları', EN: 'Cold room panels and accessories' }, productIds: [102, 104] },
        { id: 'soguk-oda-kapilari', name: { TR: 'Soğuk oda kapıları', EN: 'Cold room doors' }, productIds: [105, 106] },
        { id: 'pvc-perdeler', name: { TR: 'PVC perde sistemleri', EN: 'PVC curtain systems' }, productIds: [99, 100, 101, 103] },
    ],
    mutfak: [
        { id: 'davlumbazlar', name: { TR: 'Paslanmaz davlumbazlar', EN: 'Stainless steel extraction hoods' }, productIds: [70, 71, 72, 73] },
        { id: 'mutfak-buzdolaplari', name: { TR: 'Endüstriyel buzdolapları ve tezgâh altı dolaplar', EN: 'Commercial refrigerators and undercounter cabinets' }, productIds: [74, 75, 76, 77, 78, 79] },
        { id: 'calisma-evye', name: { TR: 'Çalışma ve evyeli tezgâhlar', EN: 'Worktables and sink units' }, productIds: [80, 81, 82, 86, 87, 107, 108] },
        { id: 'raf-istif', name: { TR: 'Raf ve istif sistemleri', EN: 'Shelving and storage racks' }, productIds: [83, 84, 85] },
    ],
    sogutma: [
        { id: 'monoblok-split', name: { TR: 'Monoblok ve split soğutma', EN: 'Monoblock and split refrigeration' }, productIds: [93, 94] },
        { id: 'merkezi-sistemler', name: { TR: 'Merkezi soğutma sistemleri', EN: 'Central refrigeration systems' }, productIds: [95] },
        { id: 'endustriyel-bireysel', name: { TR: 'Endüstriyel ve bireysel soğutma', EN: 'Industrial and individual refrigeration' }, productIds: [92, 96] },
    ],
};

export type CatalogModelGroup<T extends ProductSummary = ProductSummary> = { id: string; name: TranslatedString; products: T[] };

export function getCategoryModelGroups<T extends ProductSummary>(categoryId: CategoryId, models: T[]): CatalogModelGroup<T>[] {
    const definitions = catalogModelGroups[categoryId];
    if (!definitions) return [];
    const assigned = new Set<number>();
    const groups: CatalogModelGroup<T>[] = [];
    for (const definition of definitions) {
        const members = models.filter(model => definition.productIds.includes(model.id) && !assigned.has(model.id));
        if (!members.length) continue;
        members.forEach(model => assigned.add(model.id));
        groups.push({ id: definition.id, name: definition.name, products: members });
    }
    // A future catalogue addition must remain visible until it is classified.
    const remaining = models.filter(model => !assigned.has(model.id));
    if (remaining.length) groups.push({ id: 'diger-modeller', name: { TR: 'Diğer modeller', EN: 'Other models' }, products: remaining });
    return groups;
}

export function getCategoryDisplayProducts<T extends ProductSummary>(categoryId: CategoryId, models: T[]): T[] {
    const groups = getCategoryModelGroups(categoryId, models);
    return groups.length ? groups.flatMap(group => group.products) : models;
}

export const categoryModelGroupLabel: Record<CatalogLanguage, string> = { TR: 'Kullanım grubuna göre modeller', EN: 'Models by application' };
