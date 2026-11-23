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
    {
        slug: 'meze-dolabi-secim-rehberi',
        title: { TR: 'Meze dolabı nasıl seçilir? Kebap ve meze teşhir rehberi', EN: 'How to choose a kebab or mezze display cabinet' },
        description: {
            TR: 'Yatay ve dikey meze dolabı modellerini servis düzeni, kap ölçüleri ve teşhir alanına göre karşılaştırın. Özel ölçü meze dolabı teklifi için hazırlanın.',
            EN: 'Compare counter-height and upright mezze display cabinets by service workflow, dish sizes and display space. Prepare a custom quote request.',
        },
        introduction: {
            TR: 'Meze dolabı seçimine menünüzde aynı anda sergileyeceğiniz çeşitleri ve kap ölçülerini belirleyerek başlayın. Yatay kebap ve meze teşhir dolabı bir servis hattına yerleşir. Dikey meze dolabı ürünleri farklı yüksekliklerde gösterir. Endüstriyel soğutma sistemleri arasından işletmenize uygun modeli seçmek için personelin her kaba nereden ulaşacağını da planlayın.',
            EN: 'Start with the dishes you want to display at the same time and the dimensions of their containers. A counter-height kebab or mezze cabinet can sit in a service line. An upright mezze display uses shelves at different heights. When choosing commercial refrigeration equipment, plan how your staff will reach each dish.',
        },
        topic: { TR: 'Kebap ve meze teşhir', EN: 'Kebab and mezze displays' },
        image: '/images/products/servisReyonlari/kebapMezeDolabi/kabapMezeDolabix.webp',
        imageAlt: { TR: 'Pars Soğutma kebap ve meze teşhir dolabı', EN: 'Pars Cooling kebab and mezze display cabinet' },
        relatedCategoryIds: ['meze'],
        publishedOn: '2026-11-18',
        updatedOn: '2026-11-18',
    },
    {
        slug: 'balik-teshir-dolabi-secim-rehberi',
        title: { TR: 'Balık teşhir dolabı ve balık mostrası nasıl seçilir?', EN: 'How to choose a fish display cabinet or counter' },
        description: {
            TR: 'Cam siperlikli ve kapaklı balık mostra dolaplarını teşhir alanı, servis erişimi ve temizlik düzeniyle karşılaştırın. Balık dolabı teklifine hazırlanırken ölçüleri belirleyin.',
            EN: 'Compare glass-guard and lidded fish display counters by display area, service access and cleaning. Prepare measurements for a fish cabinet quote.',
        },
        introduction: {
            TR: 'Balık teşhir dolabı seçerken ürünlerin kapladığı taban alanını ve personelin tezgâha nereden ulaşacağını belirleyin. Cam siperlikli, kapaklı ve diğer soğutmalı balık dolabı modelleri farklı servis düzenlerine uyabilir. Endüstriyel soğutma sistemleri ve ilgili dolap modelleri değerlendirilirken modelin çalışma koşullarını, temizliğini ve su tahliyesi varsa bağlantı yerini birlikte kontrol edin.',
            EN: 'For a fish display cabinet, start with the usable display area and the side staff will serve from. Glass-guard, lidded and other refrigerated fish counters suit different layouts. When reviewing commercial refrigeration systems and display models, check operating conditions, cleaning access and any applicable drain connection.',
        },
        topic: { TR: 'Balık teşhir', EN: 'Fish displays' },
        image: '/images/products/servisReyonlari/balikMostraDolabi/balikMostraDolabix2.webp',
        imageAlt: { TR: 'Pars Soğutma cam siperlikli balık mostra dolabı', EN: 'Pars Cooling fish display counter with a glass guard' },
        relatedCategoryIds: ['balik'],
        publishedOn: '2026-11-18',
        updatedOn: '2026-11-18',
    },
    {
        slug: 'sarkuteri-reyon-dolabi-secim-rehberi',
        title: { TR: 'Şarküteri reyon dolabı nasıl seçilir?', EN: 'How to choose a refrigerated deli display counter' },
        description: {
            TR: 'Şarküteri reyon dolabı, peynir vitrini ve soğutmalı servis tezgâhı için ürün dizilimini, personel erişimini ve reyon ölçülerini planlayın.',
            EN: 'Plan product layout, staff access and dimensions for a refrigerated deli counter, cheese display or service cabinet.',
        },
        introduction: {
            TR: 'Şarküteri reyon dolabı seçerken önce müşterinin ürünü kendisinin mi alacağını, yoksa personelin tartıp paketleyerek mi servis edeceğini belirleyin. Peynir, zeytin ve paketli ürünlerin ayrı sunum alanları olabilir. Endüstriyel soğutma sistemleri ve reyon modellerini değerlendirirken kasa, terazi ve hazırlık alanını dolapla aynı krokide gösterin.',
            EN: 'Start by deciding whether customers will collect products themselves or staff will weigh and package them at the counter. Cheese, olives and packaged products can have different display needs. When assessing commercial refrigeration and deli counters, put the register, scales and prep space on the same sketch.',
        },
        topic: { TR: 'Reyon ve şarküteri', EN: 'Deli counter planning' },
        image: '/images/products/servisReyonlari/fullMoonDikCamliReyonDolabi/fullMoonDikCamliReyonDolabix.webp',
        imageAlt: { TR: 'Pars Soğutma dik camlı soğutmalı reyon dolabı', EN: 'Pars Cooling refrigerated counter with upright glass' },
        relatedCategoryIds: ['reyon'],
        publishedOn: '2026-11-18',
        updatedOn: '2026-11-18',
    },
    {
        slug: 'soguk-oda-fiyati-nasil-hesaplanir',
        title: { TR: 'Soğuk oda fiyatı nasıl hesaplanır? Soğuk hava deposu maliyeti', EN: 'How is the cost of a cold storage room calculated?' },
        description: {
            TR: 'Soğuk hava deposu fiyatını etkileyen iç ölçüleri, paneli, kapıyı, soğutma grubunu ve montaj kapsamını inceleyin. Projeniz için teklif bilgilerini hazırlayın.',
            EN: 'See how internal dimensions, panels, doors, refrigeration and installation affect a cold-room quote. Prepare the inputs for your project.',
        },
        introduction: {
            TR: 'Soğuk oda fiyatı hazırlanırken alanın iç ölçüleri, depolanacak ürün, kapı geçişi ve hedef çalışma koşulları birlikte değerlendirilir. Soğuk hava deposu maliyetinde panel, kapı ve endüstriyel soğutma sistemleri ayrı kalemler olabilir. Aynı büyüklükte iki oda için farklı teklifler geliyorsa, önce hangi ekipman ve işlerin dahil olduğuna bakın.',
            EN: 'Cold-room pricing takes into account internal dimensions, stored products, doorway use and operating requirements. Panels, doors and industrial refrigeration systems can be separate line items. When comparing quotes for rooms of the same size, start with what equipment and work are included.',
        },
        topic: { TR: 'Soğuk hava deposu', EN: 'Cold storage planning' },
        image: '/images/products/sogukHavaDepolari/sogukHavaDeposu/sogukHavaDeposux.webp',
        imageAlt: { TR: 'Pars Soğutma panel ve kapılı soğuk hava deposu', EN: 'Pars Cooling cold room with insulated panels and a door' },
        relatedCategoryIds: ['soguk-oda'],
        publishedOn: '2026-11-18',
        updatedOn: '2026-11-18',
    },
    {
        slug: 'paslanmaz-calisma-tezgahi-secim-rehberi',
        title: { TR: 'Paslanmaz çalışma tezgâhı nasıl seçilir?', EN: 'How to choose a stainless steel worktable for a commercial kitchen' },
        description: {
            TR: 'Ara raflı, dolaplı ve evyeli paslanmaz mutfak tezgâhlarını ölçü, hazırlık ve yıkama akışıyla karşılaştırın. Özel ölçü teklifine hazırlanın.',
            EN: 'Compare shelved, enclosed and sink-equipped stainless steel worktables by dimensions and kitchen workflow. Prepare a custom quote request.',
        },
        introduction: {
            TR: 'Paslanmaz çalışma tezgâhı seçerken en sık yapılacak işi belirleyin. Hazırlık için kesintisiz bir üst yüzey, yıkama için evyeli tezgâh, alt bölümde ekipman saklamak için raflı veya dolaplı tezgâh değerlendirilebilir. Endüstriyel mutfakta tezgâhı, soğutma sistemleri ve personelin kullandığı geçiş alanıyla birlikte planlayın.',
            EN: 'Choose a stainless steel worktable around the task you do most. Prep may need a clear work surface. Washing calls for a sink, and equipment storage may call for shelving or a cabinet below. In a commercial kitchen, plan the worktable alongside refrigeration equipment and staff routes.',
        },
        topic: { TR: 'Endüstriyel mutfak', EN: 'Commercial kitchen planning' },
        image: '/images/products/endustriyelMutfakEkipmanlari/paslanmazCalismaTezgahi/paslanmazCalismaTezgahi1.webp',
        imageAlt: { TR: 'Pars Soğutma paslanmaz çalışma tezgâhı', EN: 'Pars Cooling stainless steel worktable' },
        relatedCategoryIds: ['mutfak'],
        publishedOn: '2026-11-18',
        updatedOn: '2026-11-18',
    },
    {
        slug: 'soguk-oda-sogutma-grubu-secim-rehberi',
        title: { TR: 'Soğuk oda soğutma grubu nasıl seçilir?', EN: 'How to choose a refrigeration unit for a cold room' },
        description: {
            TR: 'Monoblok, split ve merkezi soğutma sistemlerini kullanım, yerleşim ve kapasite bilgileriyle karşılaştırın. Soğuk oda soğutma grubu teklifi için hazırlanın.',
            EN: 'Compare monoblock, split and central refrigeration systems by use, installation layout and capacity requirements. Prepare a cold-room refrigeration quote.',
        },
        introduction: {
            TR: 'Soğuk oda soğutma grubu, oda hacmiyle birlikte depolanan ürüne, kapı kullanımına, yalıtıma ve cihazın yerleşimine göre seçilir. Monoblok, split ve merkezi soğutma sistemleri farklı proje düzenlerine uyar. Endüstriyel soğutma teklifi isterken odanın ölçüsünün yanında nasıl kullanılacağını da paylaşın.',
            EN: 'Choose a cold-room refrigeration unit using room volume, stored products, doorway use, insulation and equipment location. Monoblock, split and central refrigeration systems suit different project layouts. Include both dimensions and operating details when requesting an industrial refrigeration quote.',
        },
        topic: { TR: 'Soğutma grupları ve sistemleri', EN: 'Refrigeration units and systems' },
        image: '/images/products/sogutmaSistemleri/splitSogutmaGrubu/splitSogutmaGrubu2.webp',
        imageAlt: { TR: 'Pars Soğutma split soğutma grubu', EN: 'Pars Cooling split refrigeration unit' },
        relatedCategoryIds: ['sogutma'],
        publishedOn: '2026-11-18',
        updatedOn: '2026-11-18',
    },
    {
        slug: 'pasta-dolabi-cikolata-dolabi-farki',
        title: {
            TR: 'Pasta Dolabı ile Çikolata Dolabı Arasındaki Farklar',
            EN: 'What Is the Difference Between a Pastry and a Chocolate Display Cabinet?',
        },
        description: {
            TR: 'Pasta ve çikolata dolaplarını raf düzeni, sıcaklık ve nem açısından karşılaştırın. Ürünlerin hangi koşullarda aynı vitrinde sergilenebileceğini öğrenin.',
            EN: 'Compare pastry and chocolate display cabinets by shelf layout, temperature and humidity. Find out when cakes and chocolates can share a display.',
        },
        introduction: {
            TR: 'Kremalı pastaları ve kutulu çikolataları aynı cam vitrinde sergilemek istiyorsanız önce her ürünün muhafaza koşullarını karşılaştırın. Pasta dolabında pastanın yüksekliği ve servis için ayrılan çalışma alanı önemlidir. Çikolata dolabında tepsi ve kutu düzeninin yanında sıcaklığın istikrarı ve nem de seçimi etkiler.',
            EN: 'If you want to display cream cakes and boxed chocolates in one glass showcase, first compare the storage requirements of each product. Cake height and serving space matter when choosing a pastry cabinet. For a chocolate display, consider temperature stability and humidity alongside tray and box layout.',
        },
        topic: { TR: 'Pastane rehberi', EN: 'Bakery guide' },
        image: '/images/blog/pasta-cikolata-dolabi.webp',
        imageAlt: {
            TR: 'Kahverengi oluklu alt paneli ve cam rafları görünen yatay pasta ve çikolata dolabı',
            EN: 'Horizontal pastry and chocolate display cabinet with a ribbed brown base and glass shelves',
        },
        relatedCategoryIds: ['pasta'],
        publishedOn: '2026-11-20',
        updatedOn: '2026-11-20',
    },
    {
        slug: 'kasap-dolabi-olculeri-et-teshir',
        title: {
            TR: 'Kasap dolabı ölçüleri ve et teşhir alanı',
            EN: 'Butcher cabinet dimensions and meat display space',
        },
        description: {
            TR: 'Kasap dolabı ölçülerini tava dizilimi, net teşhir alanı ve servis geçişiyle planlayın. Özel ölçü et teşhir dolabı teklifi için gerekenleri öğrenin.',
            EN: 'Plan butcher cabinet dimensions around tray layout, usable display space and staff access. Prepare the measurements for a custom quote.',
        },
        introduction: {
            TR: 'Kasap dolabı ölçülerini belirlemek için dükkânda dolaba ayrılan yere, vitrindeki kullanılabilir tava alanına ve tezgâhın arkasındaki servis boşluğuna ayrı ayrı bakın. Bu rehber, üç ölçüyü tek krokide birleştirerek et teşhir dolabı teklifine nasıl hazırlanacağınızı gösterir.',
            EN: 'To size a butcher cabinet, check the space set aside for it, the usable area for display trays and the working space behind the counter. This guide shows how to put all three on one sketch for a meat display cabinet quote.',
        },
        topic: { TR: 'Et teşhir planı', EN: 'Meat display planning' },
        image: '/images/blog/kasap-teshir-dolabi.webp',
        imageAlt: {
            TR: 'Siyah gövdeli kasap teşhir dolabının cam ön cephesi ve paslanmaz teşhir zemini',
            EN: 'Glass front and stainless steel display surface of a black butcher cabinet',
        },
        relatedCategoryIds: ['kasap'],
        publishedOn: '2026-11-20',
        updatedOn: '2026-11-20',
    },
    {
        slug: 'sutluk-dolabi-olculeri-raf-duzeni',
        title: {
            TR: 'Sütlük dolabı ölçüleri ve market raf düzeni',
            EN: 'Dairy cabinet dimensions and grocery shelf layout',
        },
        description: {
            TR: 'Sütlük dolabı ölçülerini ve market raf düzenini ambalajlara, raf derinliğine ve koridor boşluğuna göre planlayın. Örnek raf hesabını inceleyin.',
            EN: 'Plan dairy cabinet dimensions and grocery shelving around product packaging, usable shelf depth and aisle space. See a sample shelf calculation.',
        },
        introduction: {
            TR: 'Marketinizde sütlük dolabı için kaç raf gerektiğini öğrenmenin en pratik yolu, satacağınız ambalajları ölçüp her rafta kaç adet görünmesini istediğinizi belirlemektir. Raf planını koridor ve kapak ölçüleriyle birlikte hazırladığınızda, market dolabı modellerini aynı ürün dizilimi üzerinden karşılaştırabilirsiniz.',
            EN: 'To work out how many shelves your dairy cabinet needs, measure the packages you will sell and decide how many units should face customers on each shelf. Pair that plan with aisle and door measurements to compare grocery display cabinets using the same product layout.',
        },
        topic: { TR: 'Market raf planı', EN: 'Grocery shelf planning' },
        image: '/images/blog/cam-kapakli-sutluk-dolabi.webp',
        imageAlt: {
            TR: 'Kırmızı gövdeli sütlük dolabının dört cam kapağı ve kırmızı kenarlı rafları',
            EN: 'Red dairy display cabinet with four glass doors and red-edged shelves',
        },
        relatedCategoryIds: ['sutluk'],
        publishedOn: '2026-11-20',
        updatedOn: '2026-11-20',
    },
    {
        slug: 'kebap-teshir-dolabi-meze-vitrini-yerlesimi',
        title: {
            TR: 'Kebap teşhir dolabı ve meze vitrini nereye yerleştirilmeli?',
            EN: 'Where should kebab and mezze display cabinets go?',
        },
        description: {
            TR: 'Ocakbaşında kebap teşhir dolabı ve meze vitrini için yer seçerken şiş boyunu, tepsi derinliğini ve çiğ et ile hazır mezenin servis yollarını planlayın.',
            EN: 'Plan kebab and mezze display placement around skewer length, tray depth and separate routes for raw skewers and ready-to-serve dishes.',
        },
        introduction: {
            TR: 'Müşteri bir porsiyon Adana kebap ile iki meze istediğinde tezgâhta iki iş başlar. Usta şişi ocağa götürürken garson haydariyi ve acılı ezmeyi porsiyonlar. Kebap teşhir dolabı ve meze vitrini için yer seçerken bu iki siparişin vitrinden ocağa veya servis tabağına nasıl ulaştığını izleyin.',
            EN: 'An order for Adana kebab and two mezze dishes sets two people to work. The cook takes the skewer to the grill while a server portions the haydari and spicy ezme. To place the two displays, follow each item from the counter to the grill or the serving plate.',
        },
        topic: { TR: 'Ocakbaşı yerleşimi', EN: 'Grill restaurant layout' },
        image: '/images/blog/kebap-meze-dolabi.webp',
        imageAlt: {
            TR: 'Taş desenli alt paneli ve üç cam rafı görünen kebap ve meze dolabı',
            EN: 'Kebab and mezze display cabinet with a stone-effect base panel and three glass shelves',
        },
        relatedCategoryIds: ['meze'],
        publishedOn: '2026-11-20',
        updatedOn: '2026-11-20',
    },
    {
        slug: 'duz-camli-bombe-camli-reyon-dolabi-farklari',
        title: {
            TR: 'Düz camlı reyon dolabı mı, bombe camlı reyon dolabı mı?',
            EN: 'Flat-glass or curved-glass deli display cabinet?',
        },
        description: {
            TR: 'Düz, dik ve bombe camlı reyon dolabı modellerini müşteri görüşü, koridor genişliği ve cam açılımı açısından karşılaştırıp mağazanız için uygun vitrini seçin.',
            EN: 'Compare flat, upright and curved glass on deli display cabinets by viewing angle, aisle clearance and access when the glass opens.',
        },
        introduction: {
            TR: 'Müşteri şarküteri vitrininin yanından yaklaşırken ürünü yandan görür. Sipariş verirken öne geçer ve arka sıradaki peynirin etiketini okumak ister. Düz camlı ve bombe camlı reyon dolabı arasında karar verirken bu iki noktadan aynı ürüne bakın. Servis tarafında da personelin o tepsiye nasıl ulaşacağını deneyin.',
            EN: 'Shoppers first see products from the side as they approach a deli counter. Then they stand in front and try to read the label on the cheese at the back. To compare flat and curved glass, look at the same product from both positions and try how staff will reach that tray.',
        },
        topic: { TR: 'Reyon camı seçimi', EN: 'Display glass selection' },
        image: '/images/blog/reyon-dolabi.webp',
        imageAlt: {
            TR: 'Dik camlı, koyu gövdeli uzun reyon dolabının paslanmaz teşhir alanı',
            EN: 'Stainless steel display area of a long dark counter with upright front glass',
        },
        relatedCategoryIds: ['reyon'],
        publishedOn: '2026-11-20',
        updatedOn: '2026-11-20',
    },
    {
        slug: 'balik-teshir-dolabi-mostra-buzlu-sergileme',
        title: {
            TR: 'Balık teşhir dolabı ve balık mostrasında buzlu sergileme',
            EN: 'How to display fish on ice in a fish display counter',
        },
        description: {
            TR: 'Balık teşhir dolabı ve balık mostrasında buz yatağını hazırlamayı, eriyen suyu tahliye etmeyi ve satış sonunda tezgâhı temizlemeyi öğrenin.',
            EN: 'Prepare an ice bed for a fish display counter, check meltwater drainage and plan restocking and cleaning throughout the day.',
        },
        introduction: {
            TR: 'Sabah buza yatırdığınız levrekler öğlene doğru tezgâhın bir köşesinde su içinde kalıyorsa önce eriyen buzun nereye aktığına bakın. Balık teşhir dolabı veya balık mostrası seçerken buz yatağını, tahliyeyi ve personelin tezgâha nereden ulaşacağını birlikte planlayın.',
            EN: 'If the sea bass you laid on ice in the morning ends up sitting in a puddle by lunchtime, start by checking where the meltwater goes. When choosing a fish display counter, plan the ice bed, drainage and staff access together.',
        },
        topic: { TR: 'Buzlu balık teşhiri', EN: 'Fish display on ice' },
        image: '/images/blog/cam-siperlikli-balik-mostra-dolabi.webp',
        imageAlt: {
            TR: 'Cam siperliği, paslanmaz sergileme tepsisi ve tepsi altındaki hortumu görünen balık mostrası',
            EN: 'Fish display counter with a curved glass guard, stainless steel tray and hose below it',
        },
        relatedCategoryIds: ['balik'],
        publishedOn: '2026-11-23',
        updatedOn: '2026-11-23',
    },
    {
        slug: 'soguk-hava-deposu-kurulumu-ekipmanlari',
        title: {
            TR: 'Soğuk hava deposu kurulumu için hangi ekipmanlar gerekir?',
            EN: 'What equipment do you need to install a cold room?',
        },
        description: {
            TR: 'Soğuk hava deposu kurulumu için panel, kapı ve soğutma grubunu ürün yüküne göre seçin. Ölçüleri ve günlük giriş miktarını bir market örneğiyle planlayın.',
            EN: 'Plan cold-room panels, doors and refrigeration around product load. Use a grocery example to record dimensions and daily deliveries.',
        },
        introduction: {
            TR: 'Bir marketin sabah teslimatında kasaların kapıdan geçmesi, raflara yerleşmesi ve soğuk kalması gerekir. Soğuk hava deposu kurulumu için panel, zemin, kapı, soğutma grubu ve sıcaklık takibini bu teslimat üzerinden planlayın. En yoğun günde kaç kasa geliyor ve ürünler depoya hangi sıcaklıkta giriyor?',
            EN: 'During a grocery store’s morning delivery, crates have to fit through the door, reach the shelves and stay cold. Plan the cold room’s panels, floor, door, refrigeration and temperature monitoring around that delivery. How many crates arrive on the busiest day and what temperature are they when they enter?',
        },
        topic: { TR: 'Soğuk oda kurulumu', EN: 'Cold-room installation' },
        image: '/images/blog/soguk-hava-deposu.webp',
        imageAlt: {
            TR: 'Kapısı yarı açık beyaz panelli soğuk hava deposu ve raflarındaki paketli ürünler',
            EN: 'White-panel cold room with the door partly open and packaged products visible on the shelves',
        },
        relatedCategoryIds: ['soguk-oda'],
        publishedOn: '2026-11-23',
        updatedOn: '2026-11-23',
    },
];

const articlesPerPage = 6;
const articlesByDate = [...blogArticles].sort((a, b) => b.publishedOn.localeCompare(a.publishedOn));

export const blogIndexPaths = Array.from(
    { length: Math.max(1, Math.ceil(articlesByDate.length / articlesPerPage)) },
    (_, index) => index === 0 ? '/blog' : '/blog/sayfa/' + (index + 1),
);

export function getBlogIndexPage(pathname: string): number | undefined {
    const index = blogIndexPaths.indexOf(pathname.replace(/\/+$/, ''));
    return index >= 0 ? index + 1 : undefined;
}

export function getBlogIndexArticles(page: number): BlogArticleSummary[] {
    return articlesByDate.slice((page - 1) * articlesPerPage, page * articlesPerPage);
}

export function getBlogArticlePath(article: BlogArticleSummary): string {
    return '/blog/' + article.slug;
}

export function findBlogArticle(pathname: string): BlogArticleSummary | undefined {
    const normalized = pathname.replace(/\/+$/, '');
    return blogArticles.find(article => getBlogArticlePath(article) === normalized);
}

export function getCategoryBlogArticles(categoryId: CategoryId): BlogArticleSummary[] {
    const selectionGuides: Partial<Record<CategoryId, string[]>> = {
        pasta: ['pasta-teshir-dolabi-secim-rehberi', 'pasta-dolabi-cikolata-dolabi-farki'],
        kasap: ['kasap-teshir-dolabi-yerlesim-model-secimi', 'kasap-dolabi-olculeri-et-teshir', 'et-aski-dolabi-dry-aged-dolabi-farki'],
        sutluk: ['acik-sutluk-cam-kapakli-sutluk-secimi', 'sutluk-dolabi-olculeri-raf-duzeni'],
        meze: ['meze-dolabi-secim-rehberi', 'kebap-teshir-dolabi-meze-vitrini-yerlesimi'],
        balik: ['balik-teshir-dolabi-secim-rehberi', 'balik-teshir-dolabi-mostra-buzlu-sergileme'],
        reyon: ['sarkuteri-reyon-dolabi-secim-rehberi', 'duz-camli-bombe-camli-reyon-dolabi-farklari'],
        'soguk-oda': ['soguk-hava-deposu-kurulumu-ekipmanlari', 'soguk-oda-fiyati-nasil-hesaplanir', 'soguk-oda-pvc-serit-perde-secimi'],
        mutfak: ['paslanmaz-calisma-tezgahi-secim-rehberi'],
        sogutma: ['soguk-oda-sogutma-grubu-secim-rehberi'],
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
