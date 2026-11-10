import type { TranslatedString } from './products/types';
import type { ProductContentMap, ProductEditorialContent } from './productContentTypes';
import type { CategoryId } from './catalog';
import { pastryProductContent } from './productContent/pasta';
import { butcherProductContent } from './productContent/kasap';
import { mezeProductContent } from './productContent/meze';
import { dairyProductContent } from './productContent/sutluk';
import { fishProductContent } from './productContent/balik';
import { counterProductContent } from './productContent/reyon';
import { coldRoomProductContent } from './productContent/sogukOda';
import { kitchenProductContent } from './productContent/mutfak';
import { refrigerationProductContent } from './productContent/sogutma';

export const productContent: ProductContentMap = {
    ...pastryProductContent,
    ...butcherProductContent,
    ...mezeProductContent,
    ...dairyProductContent,
    ...fishProductContent,
    ...counterProductContent,
    ...coldRoomProductContent,
    ...kitchenProductContent,
    ...refrigerationProductContent,
};

export const productContentGroups: Record<CategoryId, ProductContentMap> = {
    pasta: pastryProductContent, kasap: butcherProductContent,
    meze: mezeProductContent, sutluk: dairyProductContent, balik: fishProductContent,
    reyon: counterProductContent, 'soguk-oda': coldRoomProductContent,
    mutfak: kitchenProductContent, sogutma: refrigerationProductContent,
};

export function getProductContent(id: number, language: keyof TranslatedString): ProductEditorialContent | undefined {
    return productContent[id]?.[language];
}
