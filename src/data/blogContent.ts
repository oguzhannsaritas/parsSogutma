import type { CatalogLanguage } from './catalog';
import { catalogueGuideContent } from './catalogueGuideContent';

export type BlogSection = {
    heading: string;
    paragraphs: string[];
    items?: string[];
    table?: { headers: string[]; rows: string[][] };
    links?: Array<{ label: string; to: string }>;
};
export type BlogArticleContent = {
    sections: BlogSection[];
    questions: Array<{ question: string; answer: string }>;
};

export const blogContent: Record<string, Record<CatalogLanguage, BlogArticleContent>> = {
    ...catalogueGuideContent,
    'ozel-olcu-sogutma-dolabi-teklif-rehberi': {
        TR: {
            sections: [
                {
                    heading: 'Önce ürünleri ve servis şeklini tarif edin',
                    paragraphs: [
                        'Süt ürünlerinin müşterinin kendisi tarafından alınacağı bir market reyonuyla personelin servis yaptığı bir kasap tezgâhı aynı kullanım düzenine sahip değildir. İlk mesajınızda işletme türünü, sergilenecek ürünleri ve müşteriye nasıl servis verileceğini açıklayın.',
                        'Ambalajlı ürün, tepsi, tava veya kap kullanılacaksa bunların ölçülerini ve yaklaşık teşhir miktarını da ekleyin. Böylece dolabın dış ölçüsüyle birlikte kullanılabilir sergileme alanı da değerlendirilebilir.',
                    ],
                },
                {
                    heading: 'Alan ölçülerini açıkça gösterin',
                    paragraphs: [
                        'Dolabın yerleşeceği alanın uzunluğunu, derinliğini ve varsa yükseklik sınırını paylaşın. Bütün değerlerde aynı birimi kullanın; örneğin santimetre ya da milimetre olduğunu her ölçünün yanında belirtin. Bir duvarın toplam uzunluğuyla dolaba ayırdığınız alanın uzunluğunu birbirinden ayırın.',
                        'Basit bir krokiye kapıları, kolonları, mevcut tezgâhları ve geçişleri işaretlemek, yalnızca bir sayı göndermekten daha açıklayıcıdır. Fotoğraftaki perspektif ölçünün yerini tutmaz; fotoğrafı yazılı ölçülerle birlikte iletin.',
                    ],
                    items: [
                        'Dolaba ayrılan net uzunluk, derinlik ve varsa yükseklik sınırı.',
                        'Kapıların açıldığı yön ve müşteri ile personelin geçiş alanları.',
                        'Bitişikte bulunan tezgâh, duvar, kolon ve diğer ekipmanlar.',
                        'Önden ve yandan çekilmiş alan fotoğrafları ile basit bir kroki.',
                    ],
                },
                {
                    heading: 'Görünüşle birlikte çalışma düzenini paylaşın',
                    paragraphs: [
                        'Beğendiğiniz modelin bağlantısını ya da ürün adını gönderin. Cam biçimi, kapak sistemi, raf veya tepsi düzeni ve dış görünüş için beklentilerinizi ayrı ayrı belirtin. Bir örnek fotoğraf, hangi özelliklerin sizin için önemli olduğunu açıklayan kısa notlarla daha yararlı olur.',
                        'Motor yerleşimi veya soğutma sistemi hakkında belirli bir talebiniz varsa bunu da yazın. Hangi seçeneğin uygun olduğu, seçilen model ve proje koşulları üzerinden değerlendirilmelidir. Katalogda görülen bir özelliğin bütün özel üretimlerde aynı olacağını varsaymayın.',
                    ],
                },
                {
                    heading: 'Teklifleri aynı kapsamla karşılaştırın',
                    paragraphs: [
                        'İki fiyatın karşılaştırılabilmesi için ürün ölçülerinin ve kapsamın aynı olması gerekir. Cam, kapak, raf, malzeme ve soğutma düzeni değiştiğinde teklif edilen ürün de değişebilir. Bir teklifin daha düşük olması, diğer teklifle aynı ürünü içerdiğini göstermez.',
                        'Nakliye, araçtan indirme, montaj, elektrik bağlantısı, teslim süresi ve satış sonrası koşulların hangilerinin teklife dâhil olduğunu yazılı olarak netleştirin. Bunları önceden sormak, sipariş kapsamının anlaşılmasını kolaylaştırır; bu rehber belirli bir hizmetin her siparişte dâhil olduğunu ifade etmez.',
                    ],
                    table: {
                        headers: ['Karşılaştırılacak bilgi', 'Teklifte arayacağınız açıklama'],
                        rows: [
                            ['Ölçü ve model', 'Aynı dış ölçüler, cam biçimi ve kapak düzeni'],
                            ['Teşhir alanı', 'Raf, tepsi veya tava yerleşimi'],
                            ['Teknik kapsam', 'Seçilen modele ait soğutma ve motor bilgileri'],
                            ['Görünüş', 'Renk, kaplama ve malzeme tercihleri'],
                            ['Teslimat ve uygulama', 'Dâhil olan işlemler ve ayrıca değerlendirilen işler'],
                        ],
                    },
                },
                {
                    heading: 'Teklif talebiniz için kısa bir bilgi listesi',
                    paragraphs: [
                        'Pars Soğutma’ya ileteceğiniz talebi aşağıdaki sırayla hazırlayabilirsiniz. Emin olmadığınız bir özelliği tahmin ederek yazmak yerine henüz karar vermediğinizi belirtin. Ölçü veya yerleşim sonradan değişirse üretim öncesinde teklif kapsamının da yeniden değerlendirilmesini isteyin.',
                    ],
                    items: [
                        'İşletmem ve sergileyeceğim ürünler: …',
                        'Dolaba ayırdığım alan ve ölçü birimi: …',
                        'Beğendiğim ürün veya model bağlantısı: …',
                        'Raf, kap, cam ve görünüş tercihlerim: …',
                        'Uygulama adresi ve hedeflediğim tarih: …',
                        'Alan fotoğrafları ve krokim: …',
                    ],
                },
            ],
            questions: [
                { question: 'Yalnızca dolabın uzunluğunu göndermek yeterli mi?', answer: 'İlk görüşmeyi başlatır; ancak sağlıklı bir değerlendirme için derinlik, varsa yükseklik sınırı, sergilenecek ürünler ve yerleşim bilgileri de gerekir.' },
                { question: 'Pars Soğutma özel ölçü üretim yapıyor mu?', answer: 'Evet. Müşterinin ilettiği ölçüler ve ihtiyaçlar üzerinden özel üretim talebi değerlendirilir; fiyat, belirlenen kapsam doğrultusunda hazırlanır.' },
                { question: 'Fotoğraf ölçü yerine geçer mi?', answer: 'Hayır. Fotoğraf alanı anlatmaya yardımcı olur. Gerçek ölçüleri, kullanılan birimi ve mümkünse bir krokiyi ayrıca paylaşın.' },
            ],
        },
        EN: {
            sections: [
                {
                    heading: 'Describe the products and service arrangement',
                    paragraphs: [
                        'A self-service dairy aisle and a staffed butcher counter have different workflows. Start with your business type, the products you intend to display and the way customers will be served.',
                        'If you use packaged products, trays or containers, include their dimensions and the intended display quantity. This allows the usable display area to be considered alongside the external cabinet dimensions.',
                    ],
                },
                {
                    heading: 'Make the available dimensions clear',
                    paragraphs: [
                        'Provide the length, depth and any height restriction of the space allocated to the cabinet. State the unit beside each measurement and distinguish the total wall length from the space reserved for the equipment.',
                        'A simple sketch showing doors, columns, existing counters and passageways gives context that a single number cannot provide. Photos help explain the space but do not replace measurements.',
                    ],
                    items: ['Available length, depth and height restrictions, with units.', 'Door opening directions and customer and staff passageways.', 'Nearby walls, columns, counters and equipment.', 'Photos from different angles and a simple measured sketch.'],
                },
                {
                    heading: 'Explain appearance and working preferences',
                    paragraphs: [
                        'Share the name or link of a model you like. Describe your glass, door, shelf, tray and finish preferences separately. Add notes to reference photos explaining which details matter to you.',
                        'Mention any specific preference for refrigeration or motor placement. Suitability depends on the selected model and project conditions; a catalogue feature should not be assumed to apply to every custom order.',
                    ],
                },
                {
                    heading: 'Compare quotes with the same scope',
                    paragraphs: [
                        'For prices to be comparable, cabinet dimensions and specifications need to match. Changes to glass, doors, shelves, materials or refrigeration arrangements can change the product being quoted.',
                        'Clarify delivery, unloading, installation, electrical connection, timing and after-sales terms in writing. Confirm which tasks are included in each quote rather than assuming a standard scope for every order.',
                    ],
                    table: {
                        headers: ['Information', 'What to compare'],
                        rows: [['Dimensions and model', 'External size, glass design and doors'], ['Display layout', 'Shelves, trays and container arrangement'], ['Technical scope', 'Model-specific refrigeration and motor information'], ['Appearance', 'Colour, finish and material preferences'], ['Delivery and site work', 'Included tasks and separately assessed work']],
                    },
                },
                {
                    heading: 'Prepare your quote request',
                    paragraphs: ['Use the following checklist when contacting Pars Cooling. Identify undecided features instead of guessing them. If dimensions or layout change, ask for the scope to be reviewed before production.'],
                    items: ['Business type and products to display.', 'Available dimensions and measurement units.', 'Preferred model name or link.', 'Shelf, container, glass and finish preferences.', 'Project address and requested timing.', 'Photos and a measured sketch.'],
                },
            ],
            questions: [
                { question: 'Is cabinet length enough to request a quote?', answer: 'It starts the conversation, but depth, height restrictions, products and layout are also needed to assess the request.' },
                { question: 'Does Pars Cooling manufacture to custom dimensions?', answer: 'Yes. Requests are assessed using customer-provided dimensions and requirements, and a price is prepared for the agreed scope.' },
                { question: 'Can a photo replace measurements?', answer: 'No. Photos help explain the site. Provide actual dimensions, units and, where possible, a measured sketch.' },
            ],
        },
    },
    'acik-sutluk-cam-kapakli-sutluk-secimi': {
        TR: {
            sections: [
                {
                    heading: 'Müşteri erişimi ve ürün alma alışkanlığı',
                    paragraphs: [
                        'Açık sütlük, müşterinin ürüne kapak açmadan ulaşabileceği bir teşhir düzeni sunar. Cam kapaklı bir modelde ise ürün alınırken kapının kullanılması gerekir. Seçimi, ürünlerin ne sıklıkta alındığı ve reyonun önündeki hareketle birlikte değerlendirin.',
                        'Ürünlerin ambalaj ölçüleri, raf derinliği ve raflar arasındaki açıklık da önemlidir. Fotoğrafta geniş görünen bir rafın, sizin ambalajlarınız ve planladığınız dizilim için yeterli olup olmadığını ölçüler üzerinden kontrol edin.',
                    ],
                },
                {
                    heading: 'Kapak tipi ve geçiş alanı',
                    paragraphs: [
                        'Cam kapaklı modelleri değerlendirirken kapının çarpma mı yoksa sürgü mü olduğunu kontrol edin. Kapının açılacağı alanı, müşterilerin geçişini ve yakındaki ekipmanları aynı kroki üzerinde gösterin. Kapak seçeneğinin ilgili model için mevcut olduğunu teyit edin.',
                        'Dolabın dış derinliğiyle koridorda kalan net geçişi ayrı ayrı ele alın. Personelin ürün yerleştireceği zamanlarda nasıl çalışacağını da düşünün. Dolabın alana sığması, günlük kullanımda erişimin rahat olacağını tek başına göstermez.',
                    ],
                },
                {
                    heading: 'Açık ve cam kapaklı sütlük dolabı karşılaştırması',
                    paragraphs: ['Aşağıdaki tablo, model seçimi sırasında sorulacak soruları düzenler. Çalışma sıcaklığı, tüketim ve diğer teknik değerler için seçilen ürünün doğrulanmış verilerini kullanın.'],
                    table: {
                        headers: ['Konu', 'Açık sütlük', 'Cam kapaklı sütlük'],
                        rows: [
                            ['Ürüne erişim', 'Kapak kullanmadan erişim', 'Kapı sistemi üzerinden erişim'],
                            ['Yerleşim', 'Reyon önü ve ürün yükleme alanı', 'Reyon önü, kapı tipi ve açılma alanı'],
                            ['Ürün dizilimi', 'Ambalaj, raf ve hava kanalları', 'Ambalaj, raf, hava kanalları ve kapı kapanması'],
                            ['Teknik karşılaştırma', 'İlgili modelin verileri', 'İlgili modelin verileri ve karşılaştırma koşulları'],
                        ],
                    },
                    links: [
                        { label: 'Açık sütlük dolabı', to: '/products/39' },
                        { label: 'Cam kapaklı sütlük dolabı', to: '/products/38' },
                        { label: 'Yarım boy sütlük dolabı', to: '/products/37' },
                    ],
                },
                {
                    heading: 'İstanbul’dan iki sütlük reyonu örneği',
                    paragraphs: [
                        'Kaya Çiftliği’nin Kağıthane mağazasında açık sütlük reyonu duvar boyunca uzanıyor. Paketli ürünler üst raflarda, peynir çeşitleri ise alt teşhir alanında yer alıyor. Bu fotoğraflarda ürün gruplarının aynı reyonda nasıl ayrıldığını görebilirsiniz.',
                        'Yağız Çiftliğim’in Beylikdüzü mağazasında cam kapaklı sütlükler, peynir ve zeytin teşhir alanlarıyla aynı satış alanını paylaşıyor. Üstten çekilen fotoğrafta karşılıklı reyonların arasında kalan müşteri geçişini inceleyebilirsiniz.',
                    ],
                    links: [
                        { label: 'Kaya Çiftliği açık sütlük uygulaması', to: '/referans/kaya-ciftligi' },
                        { label: 'Yağız Çiftliğim şarküteri ve sütlük uygulaması', to: '/referans/yagiz-ciftligim' },
                    ],
                },
                {
                    heading: 'Çalışma koşullarını modele göre kontrol edin',
                    paragraphs: [
                        'Sergilenecek ürünlerin saklama gereksinimleriyle dolabın çalışma aralığını karşılaştırın. Farklı modellerin aynı sıcaklık aralığında çalıştığını varsaymayın. Dolabın yerleşeceği ortamı, yakınındaki ısı kaynaklarını ve hava hareketini teklif talebinde belirtin.',
                        'Enerji tüketimi için yalnızca açık veya kapaklı olmasına bakarak kesin bir tasarruf oranı söylemek doğru olmaz. Aynı koşullarda ölçülmüş teknik veriler ve gerçek kullanım düzeni üzerinden karşılaştırma isteyin.',
                    ],
                },
                {
                    heading: 'Sütlük dolabı ölçüleri ve fiyat teklifi',
                    paragraphs: [
                        'Sütlük dolabı ölçülerini çıkarırken dolaba ayırdığınız uzunluğu, derinliği ve varsa yükseklik sınırını yazın. Koridorda kalmasını istediğiniz net geçişi de ayrıca ölçün. Bu ölçüler, seçtiğiniz modelin mağazada nasıl kullanılacağını değerlendirmeye yardımcı olur.',
                        'Sütlük dolabı fiyatı ölçü, kapak tipi, raf düzeni ve projede istenen seçeneklere göre değişebilir. Özel ölçü sütlük dolabı için alan ölçülerinizi ve tercih ettiğiniz modeli paylaşın. Pars Soğutma, üretim talebini bu bilgiler üzerinden değerlendirip teklif hazırlar.',
                    ],
                    items: ['Ambalaj türleri, ölçüleri ve teşhir miktarı.', 'Kullanılabilir uzunluk, derinlik ve yükseklik.', 'Müşteri geçişi ile ürün yükleme alanı.', 'Açık, çarpma kapaklı veya sürgü kapaklı model tercihi.', 'Alan fotoğrafları, mevcut ekipmanlar ve uygulama adresi.'],
                    links: [{ label: 'Özel ölçü soğutma dolabı teklif rehberi', to: '/blog/ozel-olcu-sogutma-dolabi-teklif-rehberi' }],
                },
            ],
            questions: [
                { question: 'Her market için aynı sütlük tipi uygun mu?', answer: 'Hayır. Ürün çeşitleri, teşhir miktarı, müşteri erişimi, yerleşim ve modelin teknik özellikleri birlikte değerlendirilmelidir.' },
                { question: 'Cam kapaklı sütlük için kapı açılma payı gerekir mi?', answer: 'Kapı tipine göre değerlendirilir. Çarpma ve sürgü kapakların kullanım alanları farklıdır; seçilen modelin çizim ve ölçülerini kontrol edin.' },
                { question: 'Aynı boydaki iki sütlük aynı kapasitede mi?', answer: 'Dış uzunluğun aynı olması yeterli değildir. Raf derinliği, kat sayısı, kullanılabilir iç alan ve ambalaj dizilimi de karşılaştırılmalıdır.' },
                { question: 'Sütlük dolabı imalatı için hangi bilgileri göndermeliyim?', answer: 'Alan ölçülerini birimleriyle, koridor boşluğunu, teşhir edeceğiniz ürünleri ve beğendiğiniz modelin bağlantısını paylaşın. Kapak ve raf tercihinizi de yazın.' },
            ],
        },
        EN: {
            sections: [
                { heading: 'Customer access and shopping habits', paragraphs: ['An open dairy cabinet allows access without opening a door. A glass-door cabinet requires customers to use the door system. Consider how often products are taken and the movement in front of the aisle.', 'Check package dimensions, shelf depth and shelf spacing. A shelf that looks large in a photo may not match your planned package arrangement.'] },
                { heading: 'Door design and passage space', paragraphs: ['Check whether the selected glass-door model uses hinged or sliding doors. Mark door movement, customer passageways and neighbouring equipment on the same sketch. Confirm that the requested door option is available for that model.', 'Distinguish external cabinet depth from the clear passage left in the store. Include the way staff will restock the shelves. Fitting into the available space does not by itself establish convenient daily access.'] },
                {
                    heading: 'Compare the practical differences',
                    paragraphs: ['Use this checklist to organise your comparison. Refer to the selected model’s verified specifications for operating temperatures, consumption and technical values.'],
                    table: {
                        headers: ['Topic', 'Open cabinet', 'Glass-door cabinet'],
                        rows: [['Product access', 'Access without a door', 'Access through the door system'], ['Layout', 'Front passage and restocking space', 'Front passage, door design and clearance'], ['Product arrangement', 'Packages, shelves and air passages', 'Packages, shelves, air passages and door closure'], ['Technical comparison', 'The selected model’s data', 'Model data under comparable conditions']],
                    },
                    links: [
                        { label: 'Open dairy cabinet', to: '/products/39' },
                        { label: 'Glass-door dairy cabinet', to: '/products/38' },
                        { label: 'Low-height dairy cabinet', to: '/products/37' },
                    ],
                },
                {
                    heading: 'Two dairy display projects in Istanbul',
                    paragraphs: [
                        'At the Kaya Çiftliği store in Kağıthane, an open dairy display runs along the wall. The photos show packaged products on the upper shelves and cheese varieties in the lower display area.',
                        'At Yağız Çiftliğim in Beylikdüzü, glass-door dairy cabinets share the sales area with cheese and olive displays. An overhead photo shows the customer aisle between the facing displays.',
                    ],
                    links: [
                        { label: 'Kaya Çiftliği open dairy display', to: '/referans/kaya-ciftligi' },
                        { label: 'Yağız Çiftliğim deli and dairy displays', to: '/referans/yagiz-ciftligim' },
                    ],
                },
                { heading: 'Check the actual operating conditions', paragraphs: ['Compare product storage requirements with the model’s operating range. Do not assume every model has the same temperature range. Explain the surrounding environment, nearby heat sources and air movement when requesting a quote.', 'A fixed energy-saving percentage cannot be established from the presence of doors alone. Request comparable measured data and assess it against your working arrangements.'] },
                {
                    heading: 'Dairy cabinet measurements and quotes',
                    paragraphs: [
                        'Measure the length and depth available for the cabinet, note any height restriction and record the clear aisle you want to leave in front. These dimensions help assess how the cabinet will work in your store.',
                        'Dairy cabinet prices can vary with dimensions, door type, shelving and project options. For a custom cabinet, share your measurements and preferred model. Pars Cooling uses these details to assess the manufacturing request and prepare a quote.',
                    ],
                    items: ['Package types, dimensions and intended display quantity.', 'Available length, depth and height.', 'Customer access and restocking space.', 'Open, hinged-door or sliding-door preference.', 'Site photos, nearby equipment and project address.'],
                    links: [{ label: 'How to request a quote for a custom refrigeration cabinet', to: '/blog/ozel-olcu-sogutma-dolabi-teklif-rehberi' }],
                },
            ],
            questions: [
                { question: 'Does the same dairy cabinet suit every store?', answer: 'No. Products, display quantity, access, layout and model-specific technical data need to be considered together.' },
                { question: 'Do glass-door cabinets require door clearance?', answer: 'This depends on the door design. Review the selected model’s drawings and dimensions for hinged or sliding doors.' },
                { question: 'Do two cabinets of the same length have the same capacity?', answer: 'Not necessarily. Compare shelf depth, number of levels, usable internal space and package arrangement.' },
                { question: 'What details do I send for a custom dairy cabinet?', answer: 'Send your dimensions and units, clear aisle space, the products to be displayed and a link to your preferred model. Include door and shelf preferences.' },
            ],
        },
    },
    'pasta-teshir-dolabi-secim-rehberi': {
        TR: {
            sections: [
                {
                    heading: 'Sergilenecek ürünleri gruplandırın',
                    paragraphs: [
                        'Vitrinde yer alacak ürünleri bir liste hâline getirin. Bütün pastane ürünlerinin aynı muhafaza koşullarında tutulacağını varsaymayın. Ürünlerin ihtiyaçlarını seçilen dolabın teknik özellikleriyle karşılaştırın; çikolata veya kuru ürün için uygunluğu ayrıca sorun.',
                        'Soğutmalı bir teşhir dolabı, kuru ürün tezgâhı ve sıcak servis tezgâhı farklı amaçlara hizmet eder. Görünüşleri birbirine yakın olsa bile kullanım amacını ürün sayfası ve teklif kapsamı üzerinden doğrulayın.',
                    ],
                },
                {
                    heading: 'Yatay ve dikey modelleri servis düzeniyle karşılaştırın',
                    paragraphs: [
                        'Yatay, dikey veya cephe tipi bir dolap seçerken müşterinin vitrini nereden göreceğini ve personelin ürünü hangi yönden alacağını düşünün. Dolabın önündeki müşteri alanı kadar arkasındaki çalışma alanını da planlayın.',
                        'Görseldeki raf sayısı tek başına yeterli bir ölçüt değildir. Rafların kullanılabilir derinliğini, açıklığını ve yerleştireceğiniz tepsilerle uyumunu kontrol edin. Tepsi çıkarırken gereken hareket alanını ve kapıların açılmasını da hesaba katın.',
                    ],
                },
                {
                    heading: 'Tepsi ölçülerinden başlayın',
                    paragraphs: [
                        'Günlük sergileme miktarını tepsi veya ürün adediyle tarif edin. Tepsinin en ve boy ölçülerini, yüksek ürünler için gerekli açıklığı ve bir rafta kaç tepsi hedeflediğinizi paylaşın. Bu bilgiler, dış uzunluktan daha somut bir teşhir ihtiyacı tanımlar.',
                        'Vitrini tamamen doldurmayı tek hedef olarak görmeyin. Ürün yerleşiminin hava geçişleriyle uyumlu olması ve servis sırasında ürünlere ulaşılabilmesi gerekir. İlgili modelin yükleme ve kullanım talimatlarını esas alın.',
                    ],
                    items: ['Tepsi ve tabak ölçüleri.', 'Sergilenecek ürünlerin yaklaşık yüksekliği.', 'Aynı anda vitrinde bulunacak çeşit ve miktar.', 'Ürün yükleme, çıkarma ve temizlik için erişim.'],
                },
                {
                    heading: 'Mekânın ölçüsü ve görünüş tercihleri',
                    paragraphs: [
                        'Dolaba ayırdığınız uzunluğu, derinliği ve varsa yükseklik sınırını paylaşın. Yanındaki kasa, kahve ekipmanı veya servis tezgâhını da krokide gösterin. Üretim veya montaj aşamasına geçmeden önce bitişik yüzeylerle ilişkinin netleşmesini isteyin.',
                        'Cam biçimi, dış renk ve kaplama gibi tercihler için örnek görseller kullanabilirsiniz. Hangi detayın sizin için önemli olduğunu yazın. Dekoratif tercihlerle ürünün muhafaza ve servis ihtiyacını aynı teklif içinde değerlendirin.',
                    ],
                },
                {
                    heading: 'Ürün sayfasını bir kontrol listesiyle inceleyin',
                    paragraphs: [
                        'Beğendiğiniz modelin fotoğraflarını teknik çizimleri ve mevcut özellikleriyle birlikte inceleyin. Çalışma sıcaklığı, raf düzeni ve soğutma yapısını model bazında kontrol edin. Belirsiz bir bilgiyi tahmin etmek yerine teklif sırasında açıklığa kavuşturun.',
                        'Pars Soğutma’ya talep iletirken model bağlantısını, ürün listenizi, tepsi ölçülerinizi ve alan fotoğraflarını birlikte gönderebilirsiniz. Özel ölçü talebiniz varsa bunu ilk mesajda belirtin; fiyat, değerlendirilen ihtiyaç ve kapsam üzerinden hazırlanır.',
                    ],
                },
            ],
            questions: [
                { question: 'Pasta ve çikolata için aynı dolabı kullanabilir miyim?', answer: 'Bunu yalnızca dolabın görünüşüne bakarak belirlemeyin. Ürünlerin muhafaza ihtiyaçları ve seçilen modelin çalışma özellikleri birlikte doğrulanmalıdır.' },
                { question: 'Dolabın boyu teşhir kapasitesini tek başına gösterir mi?', answer: 'Hayır. Rafların kullanılabilir alanı, açıklıkları, tepsi ölçüleri ve ürün dizilimi de kapasiteyi etkiler.' },
                { question: 'Teklif için hangi fotoğraflar faydalı olur?', answer: 'Dolabın yerleşeceği alanı, bitişik ekipmanları ve servis tarafını gösteren fotoğraflar faydalıdır. Fotoğraflarla birlikte yazılı ölçüleri de paylaşın.' },
            ],
        },
        EN: {
            sections: [
                { heading: 'Group the products you intend to display', paragraphs: ['List the products that will go into the cabinet. Do not assume all bakery products require the same storage conditions. Compare their requirements with the selected model and confirm suitability for chocolate or dry products separately.', 'Refrigerated displays, dry counters and heated service counters have different purposes even when their appearance is similar. Verify the intended use in the model information and quote.'] },
                { heading: 'Compare horizontal and vertical displays with the service layout', paragraphs: ['For horizontal, vertical or front-facing displays, consider customer viewing angles and the direction from which staff will serve products. Plan both the customer space and the working area behind the counter.', 'Shelf count alone is not enough. Check usable depth, shelf clearance and tray compatibility, including the space needed to remove trays and open doors.'] },
                { heading: 'Start with tray dimensions', paragraphs: ['Describe the planned display quantity in trays or individual products. Share tray length and width, clearance for taller products and the number of trays you intend to use per shelf.', 'Product placement must remain compatible with air passages and staff access. Follow the selected model’s loading and operating instructions.'], items: ['Tray and plate dimensions.', 'Approximate product height.', 'Variety and quantity displayed at one time.', 'Access for loading, serving and cleaning.'] },
                { heading: 'Explain space and finish preferences', paragraphs: ['Share the available length, depth and any height restriction. Mark cash registers, coffee equipment and adjacent service counters on a sketch. Clarify how the cabinet will meet neighbouring surfaces before production or installation.', 'Use reference images for glass design, colour and finish preferences, with notes identifying the details that matter. Assess appearance alongside product storage and service needs.'] },
                { heading: 'Review the selected product before requesting a quote', paragraphs: ['Compare photos with drawings and available specifications. Check the operating temperature, shelves and refrigeration arrangement for the actual model. Ask about unclear information rather than guessing it.', 'Send Pars Cooling the model link, product list, tray dimensions and site photos together. Mention custom dimension requirements at the start so the request and price can be assessed for the intended scope.'] },
            ],
            questions: [
                { question: 'Can one cabinet be used for cakes and chocolate?', answer: 'Appearance is not enough to establish suitability. Verify the product requirements against the selected cabinet’s operating specifications.' },
                { question: 'Does cabinet length establish display capacity?', answer: 'No. Usable shelf area, clearance, tray dimensions and product arrangement also matter.' },
                { question: 'Which photos help with a quote request?', answer: 'Photos showing the allocated space, adjacent equipment and service side are useful. Include written measurements as well.' },
            ],
        },
    },
    'kasap-teshir-dolabi-yerlesim-model-secimi': {
        TR: {
            sections: [
                {
                    heading: 'Teşhir ihtiyacını ve servis akışını tanımlayın',
                    paragraphs: [
                        'Dolapta sergilenecek ürünleri ve servis sırasında kullanılacak kap ya da tavaları listeleyin. Hangi ürünün nerede bulunacağını, personelin nereden çalışacağını ve müşterinin reyonu hangi açıdan göreceğini düşünün.',
                        'Teşhir miktarı ile arka depolama ihtiyacını ayrı değerlendirin. Reyonda sunulacak ürün miktarı, işletmenin toplam stok miktarıyla aynı olmak zorunda değildir. Soğuk oda veya başka bir depolama alanı varsa ürünlerin reyonla ilişkisini yerleşim planında gösterin.',
                    ],
                },
                {
                    heading: 'Dik, düz ve bombe camı kullanım üzerinden inceleyin',
                    paragraphs: [
                        'Cam biçimi ürünün görünüşünü ve reyonun dükkân içindeki çizgisini etkiler. Seçim yaparken fotoğrafın yanında ilgili modelin kesitini, dış derinliğini ve servis tarafını da inceleyin. Kullanılan model adları tek başına bütün teknik farkları açıklamaz.',
                        'Benzer isimli iki dolabın aynı model olduğunu varsaymayın. Ürün kodunu veya bağlantısını not edin; cam, gövde ve soğutma düzenine ilişkin farkları ilgili ürünün mevcut bilgileriyle karşılaştırın.',
                    ],
                },
                {
                    heading: 'Dolaba ayrılan alanla çalışma alanını ayırın',
                    paragraphs: [
                        'Toplam duvar uzunluğunu değil, dolaba ayrılan net alanı ölçün. Kapılar, kolonlar, kasa, tartı ve bitişik tezgâhları krokiye ekleyin. Personelin hareketi ve malzeme aktarımı için kalacak alanı ayrıca gösterin.',
                        'Dolabın tek parça veya farklı bölümlerle nasıl yerleşeceği, ilgili model ve projeye göre değerlendirilmelidir. Köşe ya da birleşim ihtiyacınız varsa bunu erken paylaşın. Bir fotoğraftan bütün ölçüleri çıkarmaya çalışmak yerine yazılı ölçü ve kroki kullanın.',
                    ],
                    items: ['Dolaba ayrılan uzunluk ve derinlik.', 'Müşteri tarafı ile personel tarafının konumu.', 'Kapılar, kolonlar ve sabit ekipmanlar.', 'Kap, tava ve çalışma yüzeyi ihtiyaçları.', 'Ürünlerin depodan reyona taşınacağı güzergâh.'],
                },
                {
                    heading: 'Soğutma özelliklerini seçilen modelde doğrulayın',
                    paragraphs: [
                        'Çalışma sıcaklığı, soğutma yapısı ve motor yerleşimi için modelin teknik bilgilerini kontrol edin. Bütün kasap dolaplarına tek bir teknik değer uygulamayın. Sergilenecek ürünlerin muhafaza gereksinimleriyle dolabın uygunluğu birlikte değerlendirilmelidir.',
                        'Yerleşim sırasında hava giriş ve çıkışlarıyla bakım erişimini kapatmayacak bir düzen planlayın. Gerekli mesafeler ve bağlantı koşulları için seçilen modelin talimatlarını esas alın. Alan fotoğrafları, yakın ekipmanlar ve mevcut altyapı değerlendirmeye yardımcı olur.',
                    ],
                },
                {
                    heading: 'Teklif talebini model bağlantısıyla tamamlayın',
                    paragraphs: [
                        'Beğendiğiniz dolabın bağlantısını, ölçülerinizi, ürün listenizi ve görsel tercihlerinizi birlikte gönderin. Böylece yalnızca “kasap dolabı fiyatı” sorusundan daha açık bir talep oluşur.',
                        'Teklifte ürün kapsamını, malzeme ve görünüş tercihlerini ve uygulama işlerini ayrı ayrı kontrol edin. Teslim süresi, nakliye, kurulum ve satış sonrası koşulların hangi kapsamda olduğunu yazılı olarak netleştirin. Özel ölçü üretimde fiyat, paylaştığınız ihtiyaçlar üzerinden hazırlanır.',
                    ],
                },
            ],
            questions: [
                { question: 'Aynı isimli kasap dolapları aynı ürün mü?', answer: 'Her zaman değil. Ürün kodunu ve bağlantısını esas alın; cam, gövde ve teknik özelliklerdeki farkları model bazında karşılaştırın.' },
                { question: 'Cam biçimi seçmek tek başına yeterli mi?', answer: 'Hayır. Ölçü, ürün sunumu, personel erişimi, yerleşim ve teknik uygunluk da değerlendirilmelidir.' },
                { question: 'Özel ölçü için hangi bilgileri göndermeliyim?', answer: 'Net alan ölçülerini ve birimlerini, ürün listesini, tercih ettiğiniz model bağlantısını, krokiyi ve alan fotoğraflarını paylaşın.' },
            ],
        },
        EN: {
            sections: [
                { heading: 'Define display needs and the service workflow', paragraphs: ['List the products and the containers or trays you intend to use. Consider their positions, staff access and customer viewing angles.', 'Assess display quantity separately from back-of-house stock. If you use a cold room or another storage area, show how products will move between storage and the counter.'] },
                { heading: 'Review glass designs in practical terms', paragraphs: ['Glass design changes presentation and the line of the counter in the shop. Review the actual model’s section drawing, external depth and service side as well as its photos. A model name does not establish all technical differences.', 'Do not assume two similarly named cabinets are identical. Record the product code or link and compare the available information about glass, cabinet construction and refrigeration.'] },
                { heading: 'Separate cabinet space from working space', paragraphs: ['Measure the clear space allocated to the cabinet rather than just the total wall length. Add doors, columns, cash registers, scales and adjacent counters to the sketch. Show the remaining staff working space separately.', 'Section arrangements and corner requirements depend on the actual model and project. Share these needs early. Use written dimensions and a sketch instead of estimating every measurement from a photo.'], items: ['Available cabinet length and depth.', 'Customer and staff sides.', 'Doors, columns and fixed equipment.', 'Tray, container and work-surface requirements.', 'The route from storage to the display counter.'] },
                { heading: 'Verify model-specific refrigeration details', paragraphs: ['Check operating temperature, refrigeration arrangement and motor placement for the actual model. Do not apply one technical value to every butcher cabinet. Product requirements and cabinet suitability must be assessed together.', 'Plan a layout that preserves air passages and maintenance access. Use the selected model’s instructions for clearances and connection requirements. Photos and existing infrastructure details help explain the site.'] },
                { heading: 'Complete your quote request with a model link', paragraphs: ['Send the model link, measurements, product list and finish preferences together. This defines the request more clearly than a general question about butcher cabinet prices.', 'Review equipment specifications, materials, appearance and site work separately in the quote. Clarify timing, delivery, installation and after-sales terms in writing. Custom manufacturing prices are prepared for the requirements provided.'] },
            ],
            questions: [
                { question: 'Are similarly named butcher cabinets the same product?', answer: 'Not always. Use product codes and links and compare glass, construction and technical details for each model.' },
                { question: 'Is choosing a glass design enough?', answer: 'No. Dimensions, presentation, staff access, layout and technical suitability also need to be assessed.' },
                { question: 'What should I send for a custom dimension request?', answer: 'Share clear measurements with units, the product list, a preferred model link, a sketch and site photos.' },
            ],
        },
    },
    'soguk-oda-pvc-serit-perde-secimi': {
        TR: {
            sections: [
                {
                    heading: 'PVC şerit perde ile motorlu hava perdesi arasındaki fark',
                    paragraphs: [
                        'Soğuk oda perdesi, kapı açıklığına asılan ve geçiş sırasında ayrılan esnek PVC şeritlerden oluşur. Şeritler, geçiş bittikten sonra açıklığı yeniden örter. Soğuk hava deposu kapısıyla birlikte kullanılan bu ekipman, kapı açıkken iki alan arasındaki hava geçişini sınırlamaya yardımcı olur.',
                        'Motorlu hava perdesi hava akımı üreten bir cihazdır. Katalogda “PVC şerit hava perdesi” olarak gördüğünüz ürün ise fiziksel şeritler kullanır. Endüstriyel soğutma ekipmanları için teklif isterken hangisini aradığınızı belirterek başlayın.',
                    ],
                    links: [
                        { label: 'PVC şerit hava perdesi', to: '/products/99' },
                        { label: 'Soğuk hava deposu PVC perde sistemleri', to: '/products/103' },
                    ],
                },
                {
                    heading: 'Soğuk oda perdesi ölçüsü nasıl alınır?',
                    paragraphs: [
                        'Kapı açıkken kullanılabilen net açıklığın enini ve yüksekliğini ölçün. Kasanın dış ölçüsünü de alıyorsanız iki ölçüyü ayrı yazın ve birimini belirtin. Perdenin bağlanabileceği üst yüzeyi ve ray, tutamak veya kapı kanadının hareket ettiği alanı fotoğrafta işaretleyin.',
                        'Palet, el arabası veya kasa geçiyorsa kullanılan ekipmanın yükle birlikte ölçüsünü ve geçiş yönünü de gönderin. Net açıklık, hazırlanacak şerit boyu ya da montaj profili boyuyla aynı olmak zorunda değildir. Bunlar seçilen sistem ve bağlantı yeri belirlendiğinde netleşir.',
                    ],
                    items: [
                        'Kapının net geçiş eni ve yüksekliği.',
                        'Kapı tipi, açılma yönü ve bağlantı yüzeyinin fotoğrafı.',
                        'Geçiş yapan personel veya ekipman ve günlük kullanım sıklığı.',
                        'Soğuk odanın kullanım amacı, çalışma koşulları ve varsa mevcut perde.',
                    ],
                },
                {
                    heading: 'PVC şerit perdeyi geçiş biçimine göre karşılaştırın',
                    paragraphs: [
                        'Aynı ölçüde iki kapı farklı işlerde kullanılabilir. Yaya geçişi olan küçük bir soğuk odada personelin yük taşırken şeritlerden nasıl geçeceğini düşünün. Palet girişinde ise yükün yüksekliği, hareket alanı ve geçişin tekrarlanma sıklığı daha belirleyici olabilir.',
                    ],
                    table: {
                        headers: ['Kapı kullanımı', 'Teklif için paylaşın'],
                        rows: [
                            ['Personel geçişi', 'Kapının boş ölçüsü, geçiş sıklığı ve taşınan kasa boyutu.'],
                            ['El arabası veya palet', 'Yükle birlikte en yüksek ve en geniş ölçü ile yaklaşma yönü.'],
                            ['Mevcut PVC perde değişimi', 'Profil ve askı fotoğrafı, değişecek şeritlerin ölçüsü ve adedi.'],
                        ],
                    },
                },
                {
                    heading: 'Soğuk hava deposu kapısı ve montaj yeri',
                    paragraphs: [
                        'Mevcut bir soğuk hava deposuna PVC şerit perde eklerken kapının nasıl açıldığını ve profilin nereye bağlanabileceğini birlikte kontrol edin. Sürgülü kapıda kanadın hareket ettiği duvar alanını, menteşeli kapıda ise kanadın açıldığı alanı gösterin. Her iki durumda da kapı kapanırken perdenin bağlantı noktasının engel oluşturmaması gerekir.',
                        'Sadece birkaç şeridi değiştirecekseniz eldeki profilin yeni şeritlerle uyumunu doğrulatın. Komple değişim teklifinde şeritler, askı profili ve varsa yapılacak montaj işinin ayrı belirtilmesini isteyin.',
                    ],
                },
                {
                    heading: 'Soğuk oda PVC şerit perde fiyatını neler etkiler?',
                    paragraphs: [
                        'Soğuk oda perdesi fiyatı net açıklığa, seçilen şerit düzenine, bağlantı profiline ve talebin kapsamına göre değişebilir. Şerit değişimi ile açıklığa uygun yeni bir sistem, farklı parçalar içerebilir.',
                        'Özel ölçü PVC şerit perde teklifi için kapı ölçülerinizi, montaj yerinin fotoğrafını ve kullanım biçimini Pars Soğutma’ya iletin. Mevcut sistemde hangi parçaları kullanmayı düşündüğünüzü de yazın. Teklifi, seçilen şerit ve profil kapsamı üzerinden karşılaştırabilirsiniz.',
                    ],
                },
            ],
            questions: [
                { question: 'Soğuk hava deposu PVC perdesi kapının yerine geçer mi?', answer: 'PVC şerit perde kapı açıkken geçişi kolaylaştıran bir tamamlayıcıdır. Soğuk hava deposunun kapısı ve soğutma sistemi ayrı ekipmanlardır.' },
                { question: 'Özel ölçü soğuk oda perdesi için hangi ölçüler gerekir?', answer: 'Net açıklığın eni ve yüksekliği, profilin bağlanacağı yer ve gerekiyorsa yükle birlikte geçiş ölçüsü gerekir. Fotoğrafta kapının açılma yönünü de gösterin.' },
                { question: 'PVC hava perdesi fiyatı için fotoğraf yeterli mi?', answer: 'Fotoğraf bağlantı yerini anlatır. Net ölçüleri, kullanım biçimini ve sadece şerit mi yoksa profil de mi istediğinizi ekleyin.' },
            ],
        },
        EN: {
            sections: [
                {
                    heading: 'PVC strip curtains and powered air curtains',
                    paragraphs: [
                        'A cold-room strip curtain consists of flexible PVC strips hung across a doorway. The strips part as people or loads pass through and then cover the opening again. Used with the cold-room door, the curtain helps limit air exchange while the door is open.',
                        'A powered air curtain uses fans to produce an airflow. A PVC strip curtain provides a physical barrier instead. Specify which type you need when requesting a quote for commercial refrigeration equipment.',
                    ],
                    links: [
                        { label: 'PVC strip curtain', to: '/products/99' },
                        { label: 'Cold storage PVC curtain systems', to: '/products/103' },
                    ],
                },
                {
                    heading: 'How to measure a cold-room doorway for a curtain',
                    paragraphs: [
                        'Measure the clear width and height with the door open. If you also measure the outside of the frame, label the two sets of measurements separately and include the units. Mark the proposed fixing surface and the movement of the track, handle or door leaf in a photo.',
                        'For pallet or trolley traffic, include the size of a loaded unit and the direction of travel. The clear opening alone does not establish the final strip length or rail size. These depend on the system and mounting position.',
                    ],
                    items: ['Clear opening width and height.', 'Door type, opening direction and a photo of the fixing location.', 'Traffic type and frequency.', 'Room use, operating conditions and any existing curtain.'],
                },
                {
                    heading: 'Match the PVC strip curtain to the traffic',
                    paragraphs: ['Two doorways of the same size can serve different purposes. Consider staff carrying boxes in a small cold room. At a pallet entrance, check loaded height, manoeuvring space and frequency of use.'],
                    table: {
                        headers: ['Doorway use', 'Information to include in the quote request'],
                        rows: [
                            ['Staff entrance', 'Clear dimensions, frequency of use and box sizes.'],
                            ['Trolley or pallet traffic', 'Maximum loaded width and height and direction of approach.'],
                            ['Existing curtain replacement', 'Photos of the rail and hangers, plus strip dimensions and quantities.'],
                        ],
                    },
                },
                {
                    heading: 'Check the cold-room door and mounting position',
                    paragraphs: [
                        'For an existing cold room, check how the door opens and where the curtain can mount. Show the wall space needed by a sliding door or the swing area of a hinged door. The mounting hardware should clear the door as it closes.',
                        'If you only need replacement strips, confirm compatibility with the existing rail. For a complete replacement, ask the quotation to list strips, the hanging rail and any installation work separately.',
                    ],
                },
                {
                    heading: 'Cold-room PVC strip curtain pricing and quotes',
                    paragraphs: [
                        'A quote can depend on opening dimensions, strip arrangement, mounting hardware and the work requested. A simple strip replacement can have a different scope from a complete new curtain.',
                        'For a custom quote, send Pars Cooling the doorway measurements, a photo of the mounting position and a description of the traffic. Mention any parts you hope to reuse so that the proposed scope is clear.',
                    ],
                },
            ],
            questions: [
                { question: 'Can a PVC strip curtain replace a cold-room door?', answer: 'It is an accessory for use while the cold-room door is open. The door and refrigeration system remain separate parts of the cold room.' },
                { question: 'What measurements do I need for a custom cold-room curtain?', answer: 'Include the clear width and height, the fixing location and, if relevant, the dimensions of loaded equipment. Show the door opening direction in a photo or sketch.' },
                { question: 'Is a photo enough to price a PVC strip curtain?', answer: 'A photo shows the mounting area. Add dimensions, traffic details and whether you need strips, a rail or both.' },
            ],
        },
    },
    'et-aski-dolabi-dry-aged-dolabi-farki': {
        TR: {
            sections: [
                {
                    heading: 'Et askı dolabı ne için kullanılır?',
                    paragraphs: [
                        'Et askı dolabı, kasap ve restoranlarda etin askıda sunulacağı bir teşhir düzeni sağlar. Kuzu et askı dolabı seçerken asılacak parçaların boyunu, askılar arasındaki kullanılabilir alanı ve personelin yükleme yönünü düşünün. Vitrinin dış yüksekliği, içeride askının altında kalan net yüksekliği tek başına göstermez.',
                        'Sergilemek istediğiniz et parçalarını ve aynı anda vitrinde bulunmasını istediğiniz adedi tarif edin. Ürünü asmak için gereken alanla dolabı temizlemek için gereken erişimi de aynı yerleşim üzerinde değerlendirin.',
                    ],
                    links: [
                        { label: 'Et askı dolabı', to: '/products/40' },
                        { label: 'Kuzu et askı dolabı', to: '/products/34' },
                    ],
                },
                {
                    heading: 'Dry aged dolabı ve kuru et dinlendirme',
                    paragraphs: [
                        'Dry aged dolabı, etin kontrollü ortamda kuru dinlendirilmesi için değerlendirilir. Bu seçimde sıcaklık, nem ve hava dolaşımıyla ilgili özellikleri model bazında inceleyin. Bir et teşhir dolabında askı veya dijital ekran bulunması, o dolabın kuru dinlendirmeye uygunluğunu göstermez.',
                        'Hazır dinlendirilmiş eti mağazada sergilemekle dinlendirme sürecini işletmenizde yürütmek farklı ihtiyaçlardır. Teklif alırken hangisini planladığınızı açıkça belirtin. Dinlendirme istiyorsanız modelin bu kullanım için tasarlandığını ve sağladığı kontrolleri teknik doküman üzerinden doğrulayın.',
                    ],
                    links: [
                        { label: 'Dry aged dolabı modellerinden birini inceleyin', to: '/products/41' },
                        { label: 'Diğer dry aged dolabı modeli', to: '/products/43' },
                    ],
                },
                {
                    heading: 'Et askı dolabı ve dry aged dolabı karşılaştırması',
                    paragraphs: ['Karşılaştırmaya dolabın işletmenizde yapacağı işle başlayın. Aşağıdaki sorular, görünüşü benzer iki modelden hangi bilgileri isteyeceğinizi gösterir.'],
                    table: {
                        headers: ['Karar noktası', 'Et askı dolabı', 'Dry aged dolabı'],
                        rows: [
                            ['Öncelikli kullanım', 'Eti askıda teşhir etmek.', 'Kontrollü kuru et dinlendirme.'],
                            ['Yerleşim', 'Askı yüksekliği, parça boyu ve yükleme yönü.', 'Seçilen modelin askı veya raf düzeni ve erişim alanı.'],
                            ['Teklifte kontrol', 'Uygun çalışma koşulları ve doğrulanmış askı kapasitesi.', 'Dinlendirme işlevi ve modelin sağladığı kontrol özellikleri.'],
                        ],
                    },
                },
                {
                    heading: 'Et askı dolabı ölçüleri nasıl hazırlanır?',
                    paragraphs: [
                        'Dolaba ayırdığınız net en, derinlik ve yükseklik sınırını yazın. Müşteri tarafıyla ürün yükleme tarafını krokide ayırın. Mevcut kasap teşhir tezgâhını, kapıları ve geçişi işaretleyin. Teslimatta kullanılacak kapı veya koridorun ölçülerini de gerekiyorsa ekleyin.',
                        'Üretim talebi için asılacak ürünün yaklaşık boyu ve ağırlığı önemlidir. Modelin kullanılabilir askı yüksekliğini ve askı yükünü teklif aşamasında doğrulatın. Yan yana asılacak parçaların adedini bildirerek ihtiyaç duyduğunuz iç yerleşimi daha net tarif edebilirsiniz.',
                    ],
                    items: ['Dolap için ayrılan net alan ve ölçü birimi.', 'Asılacak parçaların yaklaşık boyu, ağırlığı ve adedi.', 'Kapının açılacağı yön ve personel erişimi.', 'Teşhir veya kuru et dinlendirme ihtiyacı ve tercih edilen model.'],
                },
                {
                    heading: 'Özel ölçü et askı dolabı imalatı ve fiyat teklifi',
                    paragraphs: [
                        'Et askı dolabı fiyatı ölçü, askı düzeni, cam veya kapı seçimi ve modelin soğutma özelliklerine göre değişebilir. Dry aged dolabı fiyatı araştırırken dinlendirme için hangi kontrollerin ve donanımın teklife dahil olduğunu da kontrol edin.',
                        'Özel ölçü et askı dolabı için ölçülerinizi, sergileyeceğiniz ürünleri ve model bağlantısını Pars Soğutma’ya gönderin. Üretim talebini ilettiğiniz ölçü ve kullanım bilgileriyle değerlendirip buna göre teklif hazırlıyoruz.',
                    ],
                    links: [
                        { label: 'Özel ölçü dolap teklif rehberi', to: '/blog/ozel-olcu-sogutma-dolabi-teklif-rehberi' },
                        { label: 'Kasap teşhir dolabı model ve yerleşim rehberi', to: '/blog/kasap-teshir-dolabi-yerlesim-model-secimi' },
                    ],
                },
            ],
            questions: [
                { question: 'Et askı dolabında dry aged yapılabilir mi?', answer: 'Seçilen dolabın kuru dinlendirme amacıyla tasarlanmış ve gereken çalışma kontrollerine sahip olması gerekir. Modelin kullanım amacını ve teknik özelliklerini yazılı olarak doğrulayın.' },
                { question: 'Kuzu et askı dolabına kaç parça sığar?', answer: 'Adet, parçaların ölçülerine ve doğrulanmış askı yüküne bağlıdır. Ölçüleri ve istediğiniz adedi paylaşarak uygun askı yerleşimini değerlendirebilirsiniz.' },
                { question: 'Et askı dolabı fiyat teklifi için alan ölçüsü yeterli mi?', answer: 'Alan ölçüsüne ek olarak asılacak etlerin boyunu ve adedini, kapı açılımını, kullanım amacını ve beğendiğiniz modeli paylaşın.' },
            ],
        },
        EN: {
            sections: [
                {
                    heading: 'What is a meat hanging cabinet used for?',
                    paragraphs: [
                        'A meat hanging cabinet provides hanging display space for butcher shops and restaurants. For a lamb hanging cabinet, check cut length, usable space between hooks and the direction from which staff load it. The external cabinet height alone does not tell you how much clearance remains below the rail.',
                        'Describe the cuts and how many you plan to display at once. Include the space staff will need to load products and clean the cabinet in the same layout.',
                    ],
                    links: [
                        { label: 'Meat hanging cabinet', to: '/products/40' },
                        { label: 'Lamb hanging cabinet', to: '/products/34' },
                    ],
                },
                {
                    heading: 'Dry-aging cabinets and controlled aging',
                    paragraphs: [
                        'A dry-aging cabinet is intended for aging meat in controlled conditions. Review the specific model’s temperature, humidity and airflow features. A display cabinet can have a hanging rail or a digital display without being designed for dry aging.',
                        'Displaying meat that has already been aged is a different task from aging it on site. Specify the intended use in your enquiry. For on-site aging, check what the model is designed to do and which controls it provides.',
                    ],
                    links: [
                        { label: 'View a dry-aging cabinet model', to: '/products/41' },
                        { label: 'See another dry-aging cabinet model', to: '/products/43' },
                    ],
                },
                {
                    heading: 'Compare meat hanging and dry-aging cabinets',
                    paragraphs: ['Start with what you need the cabinet to do. Use these points to compare models that may look similar in photos.'],
                    table: {
                        headers: ['Decision point', 'Meat hanging cabinet', 'Dry-aging cabinet'],
                        rows: [
                            ['Primary use', 'Displaying meat on hooks or rails.', 'Controlled dry aging.'],
                            ['Layout', 'Hanging clearance, cut length and loading access.', 'Model-specific rail or shelf layout and access.'],
                            ['Check in the quote', 'Operating conditions and verified hanging load.', 'Aging function and which controls the model provides.'],
                        ],
                    },
                },
                {
                    heading: 'How to prepare measurements for a hanging cabinet',
                    paragraphs: [
                        'Measure the available width and depth and note any height restriction. Mark the customer side and the loading side on your sketch, along with existing counters, doors and walkways. Include delivery access dimensions where relevant.',
                        'Share the approximate size and weight of the cuts you plan to hang. Confirm usable hanging clearance and load capacity on the model’s quotation. The number of cuts you want to hang side by side helps define the internal layout.',
                    ],
                    items: ['Available cabinet space and units.', 'Approximate cut size, weight and quantity.', 'Door travel and staff access.', 'Intended display or aging use and preferred model.'],
                },
                {
                    heading: 'Custom meat hanging cabinet manufacturing and quotes',
                    paragraphs: [
                        'The price can vary with dimensions, hanging arrangement, glass or door options and refrigeration features. When comparing dry-aging quotations, check which aging controls and equipment are included.',
                        'For a custom meat hanging cabinet, send Pars Cooling your dimensions, the products you will display and a model link. We use the dimensions and intended use to assess the manufacturing request and prepare a quote.',
                    ],
                    links: [
                        { label: 'Custom refrigeration cabinet quotation guide', to: '/blog/ozel-olcu-sogutma-dolabi-teklif-rehberi' },
                        { label: 'Butcher display cabinet selection and layout', to: '/blog/kasap-teshir-dolabi-yerlesim-model-secimi' },
                    ],
                },
            ],
            questions: [
                { question: 'Can a meat hanging cabinet be used for dry aging?', answer: 'The selected cabinet needs to be designed for dry aging and provide the required controls. Confirm its intended use and specifications in writing.' },
                { question: 'How many cuts fit in a lamb hanging cabinet?', answer: 'The number depends on cut dimensions and the verified hanging load. Share your measurements and quantity so that a suitable layout can be assessed.' },
                { question: 'Is cabinet space enough to request a quote?', answer: 'Include approximate cut dimensions and quantities, door clearance, intended use and a preferred model as well as your site measurements.' },
            ],
        },
    },
};
