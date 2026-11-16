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
            TR: 'Açık ve cam kapaklı sütlük dolaplarını müşteri erişimi, kapı açıklığı, ürün yerleşimi ve işletmenizin kullanım koşulları üzerinden karşılaştırın.',
            EN: 'Compare open and glass-door dairy cabinets by customer access, door clearance, product arrangement and the conditions in your store.',
        },
        introduction: {
            TR: 'Açık ve cam kapaklı sütlük arasında seçim yaparken ürünlerin görünürlüğünü, müşterinin dolaba erişimini ve işletmedeki yerleşimi birlikte değerlendirin. Bir modelin fotoğrafını beğenmek başlangıç olabilir; uygunluğu belirleyen, o dolabın sizin ürün ve çalışma düzeninizle eşleşmesidir.',
            EN: 'When choosing between an open and a glass-door dairy cabinet, consider visibility, customer access and store layout together. A product photo can help you shortlist a model, but suitability depends on how the cabinet fits your products and working arrangements.',
        },
        topic: { TR: 'Sütlük seçimi', EN: 'Dairy cabinet selection' },
        image: '/images/products/dikeyTipSogutuculuReyonlar/camKapakliSutlukDolabi/camKapakliSutlukDolabi10.webp',
        imageAlt: { TR: 'Pars Soğutma cam kapaklı sütlük dolabı', EN: 'Pars Cooling glass-door dairy cabinet' },
        relatedCategoryIds: ['sutluk', 'reyon', 'sogutma'],
        publishedOn: '2026-11-16',
        updatedOn: '2026-11-16',
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
];

export function getBlogArticlePath(article: BlogArticleSummary): string {
    return '/blog/' + article.slug;
}

export function findBlogArticle(pathname: string): BlogArticleSummary | undefined {
    const normalized = pathname.replace(/\/+$/, '');
    return blogArticles.find(article => getBlogArticlePath(article) === normalized);
}

export function formatBlogDate(value: string, language: CatalogLanguage): string {
    return new Intl.DateTimeFormat(language === 'TR' ? 'tr-TR' : 'en-GB', {
        day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
    }).format(new Date(value + 'T12:00:00Z'));
}
