import type { CategoryId, CatalogLanguage } from './catalog';

type BlogCopy = Record<CatalogLanguage, string>;

export type BlogArticleSummary = {
    slug: string;
    title: BlogCopy;
    description: BlogCopy;
    introduction: BlogCopy;
    topic: BlogCopy;
    image: string;
    imageAlt: BlogCopy;
    relatedCategoryIds: CategoryId[];
    publishedOn: string;
    updatedOn: string;
};

// Keep article bodies in their own page chunk so the existing catalogue stays light.
export const blogArticles: BlogArticleSummary[] = [
    {
        slug: 'ozel-olcu-sogutma-dolabi-teklif-rehberi',
        title: {
            TR: 'Özel ölçü soğutma dolabı için teklif nasıl alınır?',
            EN: 'How to request a quote for a custom refrigeration cabinet',
        },
        description: {
            TR: 'Özel ölçü soğutma dolabı teklifi için alan ölçülerini, ürün grubunu, servis düzenini ve yerleşim bilgilerini nasıl hazırlayacağınızı öğrenin.',
            EN: 'Prepare the dimensions, product details, service arrangement and layout information needed for a custom refrigeration cabinet quote.',
        },
        introduction: {
            TR: 'Pars Soğutma’da özel üretim talebi, müşterinin paylaştığı ölçüler ve ihtiyaçlar üzerinden değerlendirilir; fiyat buna göre hazırlanır. Teklifin karşılaştırılabilir olması için yalnızca dolabın boyunu değil, hangi ürünleri nasıl sergileyeceğinizi ve kullanılacak alanı da tarif etmeniz gerekir.',
            EN: 'Pars Cooling evaluates custom manufacturing requests using the dimensions and requirements provided by the customer, then prepares a price accordingly. A useful quote needs more than cabinet length: explain what you will display, how you will serve it and where the cabinet will be placed.',
        },
        topic: { TR: 'Özel üretim', EN: 'Custom manufacturing' },
        image: '/images/home/sogutmareyon.webp',
        imageAlt: { TR: 'Pars Soğutma soğutmalı reyon uygulaması', EN: 'Pars Cooling refrigerated display installation' },
        relatedCategoryIds: ['pasta', 'kasap', 'meze', 'sutluk', 'balik', 'reyon', 'soguk-oda', 'mutfak', 'sogutma'],
        publishedOn: '2026-11-16',
        updatedOn: '2026-11-16',
    },
    {
        slug: 'acik-sutluk-cam-kapakli-sutluk-secimi',
        title: {
            TR: 'Açık sütlük mü, cam kapaklı sütlük mü?',
            EN: 'Open dairy cabinet or glass-door dairy cabinet?',
        },
        description: {
            TR: 'Açık ve cam kapaklı sütlük dolaplarını raf düzeni, kapı tipi, koridor ölçüsü ve fiyatı etkileyen seçenekler üzerinden karşılaştırın.',
            EN: 'Compare open and glass-door dairy cabinets by shelf layout, door type, aisle clearance and the options that affect the quote.',
        },
        introduction: {
            TR: 'Marketiniz için sütlük dolabı seçerken önce müşterinin ürünü nasıl alacağını ve personelin rafları nasıl dolduracağını belirleyin. Açık sütlük doğrudan erişim sağlar. Cam kapaklı sütlükte ise kapak tipi ve koridorda kalan net alan seçimi etkiler. İki model de ticari soğutma dolabı olarak değerlendirilir. Uygun olanı bulmak için raf ölçülerini, ürünlerinizi ve mağaza yerleşimini birlikte karşılaştırın.',
            EN: 'Start by deciding how shoppers will reach the products and how staff will restock the shelves. An open dairy cabinet offers direct access. With a glass-door cabinet, door type and usable aisle space matter as well. For either commercial refrigeration cabinet, compare shelf dimensions, the products you plan to display and your store layout.',
        },
        topic: { TR: 'Sütlük seçimi', EN: 'Dairy cabinet selection' },
        image: '/images/products/dikeyTipSogutuculuReyonlar/camKapakliSutlukDolabi/camKapakliSutlukDolabi10.webp',
        imageAlt: { TR: 'Pars Soğutma cam kapaklı sütlük dolabı', EN: 'Pars Cooling glass-door dairy cabinet' },
        relatedCategoryIds: ['sutluk', 'reyon', 'sogutma'],
        publishedOn: '2026-11-16',
        updatedOn: '2026-11-18',
    },
    {
        slug: 'pasta-teshir-dolabi-secim-rehberi',
        title: {
            TR: 'Pasta teşhir dolabı seçerken nelere dikkat edilmeli?',
            EN: 'What to consider when choosing a pastry display cabinet',
        },
        description: {
            TR: 'Pasta teşhir dolabı seçiminde ürün türünü, yatay ve dikey modelleri, tepsi düzenini ve servis alanını birlikte değerlendirin.',
            EN: 'Consider product type, horizontal and vertical display models, tray arrangement and service access when choosing a pastry cabinet.',
        },
        introduction: {
            TR: 'Pasta dolabı seçiminin başlangıcı, vitrinde hangi ürünlerin bulunacağını belirlemektir. Yaş pasta, ekler, çikolata ve kuru ürünler için aynı teşhir yaklaşımını kullanmak uygun olmayabilir. Ardından sergilemek istediğiniz miktarı, tepsi düzenini ve personelin ürüne erişimini değerlendirin.',
            EN: 'Start by identifying the products you will display. Cakes, eclairs, chocolate and dry products may need different display arrangements. Then consider the quantity on display, tray layout and the way staff will reach and serve each item.',
        },
        topic: { TR: 'Pastane rehberi', EN: 'Bakery guide' },
        image: '/images/products/unluMamuller/pastaTeshirDolabi/pastaTeshirDolabi.webp',
        imageAlt: { TR: 'Pars Soğutma pasta teşhir dolabı', EN: 'Pars Cooling pastry display cabinet' },
        relatedCategoryIds: ['pasta', 'meze', 'mutfak'],
        publishedOn: '2026-11-16',
        updatedOn: '2026-11-16',
    },
    {
        slug: 'kasap-teshir-dolabi-yerlesim-model-secimi',
        title: {
            TR: 'Kasap teşhir dolabında yerleşim ve model seçimi',
            EN: 'Layout and model selection for a butcher display cabinet',
        },
        description: {
            TR: 'Kasap teşhir dolabı seçerken cam tipini, ürün sunumunu, personel erişimini ve dükkân yerleşimini hangi bilgilerle karşılaştırmalısınız?',
            EN: 'Compare glass design, product presentation, staff access and shop layout when planning a butcher display cabinet.',
        },
        introduction: {
            TR: 'Kasap teşhir dolabı, müşteri tarafındaki ürün sunumuyla personel tarafındaki servis alanını bir araya getirir. Seçim yaparken cam biçiminin yanında tezgâhın yerleşimini, çalışma alanını ve sergilenecek ürünleri de düşünün. Aynı uzunluktaki iki modelin dükkândaki kullanımı farklı olabilir.',
            EN: 'A butcher display cabinet brings together product presentation for customers and a working area for staff. Compare the counter layout, work space and products as well as the glass design. Two cabinets of the same length can work differently in the same shop.',
        },
        topic: { TR: 'Kasap rehberi', EN: 'Butcher shop guide' },
        image: '/images/products/servisReyonlari/KasapReyonDolabiBombeCamli/kasapReyonDolabiBombeCamlix.webp',
        imageAlt: { TR: 'Pars Soğutma bombe camlı kasap reyon dolabı', EN: 'Pars Cooling curved-glass butcher display cabinet' },
        relatedCategoryIds: ['kasap', 'reyon', 'soguk-oda'],
        publishedOn: '2026-11-16',
        updatedOn: '2026-11-16',
    },
    {
        slug: 'soguk-oda-pvc-serit-perde-secimi',
        title: {
            TR: 'Soğuk oda PVC şerit perdesi nasıl seçilir?',
            EN: 'How to choose a PVC strip curtain for a cold room',
        },
        description: {
            TR: 'Soğuk oda perdesi seçerken net kapı ölçüsünü, geçiş biçimini ve montaj yerini kontrol edin. PVC şerit perde fiyatını etkileyen seçenekleri öğrenin.',
            EN: 'Check doorway dimensions, traffic and mounting space when choosing a cold-room PVC strip curtain. See what goes into a quote.',
        },
        introduction: {
            TR: 'Soğuk oda PVC şerit perdesi seçerken kapının net en ve yüksekliğini, geçişi kimin kullanacağını ve perdenin bağlanacağı yüzeyi belirleyin. Personelin yürüyerek kullandığı bir kapıyla palet taşınan bir kapı için farklı ihtiyaçlar olabilir. Bu rehber, soğuk hava deposu perdesi için hangi ölçüleri hazırlayacağınızı ve teklifte hangi parçaları kontrol edeceğinizi gösterir.',
            EN: 'To choose a PVC strip curtain for a cold room, start with the clear doorway width and height, how the opening is used and where the curtain will mount. A staff doorway and an opening used for pallets can have different requirements. This guide covers the measurements to take and the items to check in your quote.',
        },
        topic: { TR: 'Soğuk oda ekipmanları', EN: 'Cold-room equipment' },
        image: '/images/products/sogukHavaDepolari/pvcSeritHavaPerdesi/pvcSeritHavaPerdesix.webp',
        imageAlt: { TR: 'Pars Soğutma soğuk hava deposu PVC şerit perdesi', EN: 'Pars Cooling PVC strip curtain for a cold storage room' },
        relatedCategoryIds: ['soguk-oda'],
        publishedOn: '2026-11-18',
        updatedOn: '2026-11-18',
    },
    {
        slug: 'et-aski-dolabi-dry-aged-dolabi-farki',
        title: {
            TR: 'Et askı dolabı ile dry aged dolabı arasındaki fark nedir?',
            EN: 'What is the difference between a meat hanging cabinet and a dry-aging cabinet?',
        },
        description: {
            TR: 'Et askı dolabı ve dry aged dolabını kullanım amacı, askı düzeni ve çalışma özellikleriyle karşılaştırın. Özel ölçü teklifi için gereken bilgileri hazırlayın.',
            EN: 'Compare meat hanging and dry-aging cabinets by intended use, hanging layout and operating features. Prepare the details for a custom quote.',
        },
        introduction: {
            TR: 'Et askı dolabı, eti askıda sergilemek için değerlendirilir. Dry aged dolabı ise kuru et dinlendirme süreci için tasarlanır. İki endüstriyel soğutma dolabında da cam ve askı bulunabilir. Seçimi, işletmenizin teşhir ihtiyacına ve modelin doğrulanmış çalışma özelliklerine göre yapın.',
            EN: 'A meat hanging cabinet is used to display meat on hooks or rails. A dry-aging cabinet is designed for controlled dry aging. Both types of commercial refrigeration cabinet can have glass doors and hanging rails. Base your choice on the job you need it to do and the specifications of the exact model.',
        },
        topic: { TR: 'Et teşhir ve dinlendirme', EN: 'Meat display and aging' },
        image: '/images/products/dikeyTipSogutuculuReyonlar/kuzuEtAskiDolabi/kuzuEtAskiDolabix.webp',
        imageAlt: { TR: 'Pars Soğutma camlı kuzu et askı dolabı', EN: 'Pars Cooling glass-fronted lamb hanging cabinet' },
        relatedCategoryIds: ['kasap'],
        publishedOn: '2026-11-18',
        updatedOn: '2026-11-18',
    },
];

export function getBlogArticlePath(article: BlogArticleSummary): string {
    return '/blog/' + article.slug;
}

export function findBlogArticle(pathname: string): BlogArticleSummary | undefined {
    const normalized = pathname.replace(/\/+$/, '');
    return blogArticles.find(article => getBlogArticlePath(article) === normalized);
}

export function getCategoryBlogArticles(categoryId: CategoryId): BlogArticleSummary[] {
    const selectionGuides: Partial<Record<CategoryId, string[]>> = {
        pasta: ['pasta-teshir-dolabi-secim-rehberi'],
        kasap: ['kasap-teshir-dolabi-yerlesim-model-secimi', 'et-aski-dolabi-dry-aged-dolabi-farki'],
        sutluk: ['acik-sutluk-cam-kapakli-sutluk-secimi'],
        'soguk-oda': ['soguk-oda-pvc-serit-perde-secimi'],
    };
    const slugs = [...(selectionGuides[categoryId] ?? [])];
    if (categoryId !== 'soguk-oda' && categoryId !== 'sogutma') {
        slugs.push('ozel-olcu-sogutma-dolabi-teklif-rehberi');
    }
    return slugs.flatMap(slug => blogArticles.filter(article => article.slug === slug));
}

export function formatBlogDate(value: string, language: CatalogLanguage): string {
    return new Intl.DateTimeFormat(language === 'TR' ? 'tr-TR' : 'en-GB', {
        day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
    }).format(new Date(value + 'T12:00:00Z'));
}
