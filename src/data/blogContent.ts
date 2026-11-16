import type { CatalogLanguage } from './catalog';

export type BlogSection = {
    heading: string;
    paragraphs: string[];
    items?: string[];
    table?: { headers: string[]; rows: string[][] };
};
export type BlogArticleContent = {
    sections: BlogSection[];
    questions: Array<{ question: string; answer: string }>;
};

export const blogContent: Record<string, Record<CatalogLanguage, BlogArticleContent>> = {
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
                    heading: 'İki yaklaşımı hangi başlıklarda karşılaştırmalı?',
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
                },
                {
                    heading: 'Çalışma koşullarını modele göre kontrol edin',
                    paragraphs: [
                        'Sergilenecek ürünlerin saklama gereksinimleriyle dolabın çalışma aralığını karşılaştırın. Farklı modellerin aynı sıcaklık aralığında çalıştığını varsaymayın. Dolabın yerleşeceği ortamı, yakınındaki ısı kaynaklarını ve hava hareketini teklif talebinde belirtin.',
                        'Enerji tüketimi için yalnızca açık veya kapaklı olmasına bakarak kesin bir tasarruf oranı söylemek doğru olmaz. Aynı koşullarda ölçülmüş teknik veriler ve gerçek kullanım düzeni üzerinden karşılaştırma isteyin.',
                    ],
                },
                {
                    heading: 'Teklif öncesinde hazırlayacağınız bilgiler',
                    paragraphs: ['Sütlük modellerini karşılaştırırken tek bir dış ölçüye odaklanmayın. Aşağıdaki bilgiler, hangi düzenin işletmenize uyacağını değerlendirmeyi kolaylaştırır.'],
                    items: ['Ambalaj türleri, ölçüleri ve teşhir miktarı.', 'Kullanılabilir uzunluk, derinlik ve yükseklik.', 'Müşteri geçişi ile ürün yükleme alanı.', 'Açık, çarpma kapaklı veya sürgü kapaklı model tercihi.', 'Alan fotoğrafları, mevcut ekipmanlar ve uygulama adresi.'],
                },
            ],
            questions: [
                { question: 'Her market için aynı sütlük tipi uygun mu?', answer: 'Hayır. Ürün çeşitleri, teşhir miktarı, müşteri erişimi, yerleşim ve modelin teknik özellikleri birlikte değerlendirilmelidir.' },
                { question: 'Cam kapaklı sütlük için kapı açılma payı gerekir mi?', answer: 'Kapı tipine göre değerlendirilir. Çarpma ve sürgü kapakların kullanım alanları farklıdır; seçilen modelin çizim ve ölçülerini kontrol edin.' },
                { question: 'Aynı boydaki iki sütlük aynı kapasitede mi?', answer: 'Dış uzunluğun aynı olması yeterli değildir. Raf derinliği, kat sayısı, kullanılabilir iç alan ve ambalaj dizilimi de karşılaştırılmalıdır.' },
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
                },
                { heading: 'Check the actual operating conditions', paragraphs: ['Compare product storage requirements with the model’s operating range. Do not assume every model has the same temperature range. Explain the surrounding environment, nearby heat sources and air movement when requesting a quote.', 'A fixed energy-saving percentage cannot be established from the presence of doors alone. Request comparable measured data and assess it against your working arrangements.'] },
                { heading: 'Prepare the information for a quote', paragraphs: ['Compare the complete display arrangement, not just external length.'], items: ['Package types, dimensions and intended display quantity.', 'Available length, depth and height.', 'Customer access and restocking space.', 'Open, hinged-door or sliding-door preference.', 'Site photos, nearby equipment and project address.'] },
            ],
            questions: [
                { question: 'Does the same dairy cabinet suit every store?', answer: 'No. Products, display quantity, access, layout and model-specific technical data need to be considered together.' },
                { question: 'Do glass-door cabinets require door clearance?', answer: 'This depends on the door design. Review the selected model’s drawings and dimensions for hinged or sliding doors.' },
                { question: 'Do two cabinets of the same length have the same capacity?', answer: 'Not necessarily. Compare shelf depth, number of levels, usable internal space and package arrangement.' },
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
};
