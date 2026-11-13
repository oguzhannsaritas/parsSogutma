import type { CategoryId, CatalogLanguage } from './catalog';
import type { ProductSummary, TranslatedString } from './products/types';

type ModelGroupDefinition = { id: string; name: TranslatedString; productIds: number[] };

// These groups describe the existing catalogue names and uses. They do not
// assign unconfirmed temperatures, motors or other model specifications.
export const catalogModelGroups: Partial<Record<CategoryId, ModelGroupDefinition[]>> = {
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
