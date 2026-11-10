import type { CatalogLanguage, CategoryId } from './catalog';

export type ReferenceCopy = {
    description: string;
    subject: string;
    paragraphs: string[];
};

// Editorial descriptions use the existing project locations and visible installation
// photos. Category links describe the application, not an unverified installed model.
export const referenceContent: Record<string, {
    categoryIds: CategoryId[];
    copy: Record<CatalogLanguage, ReferenceCopy>;
}> = {
    kayaCiftligi: {
        categoryIds: ['sutluk'],
        copy: {
            TR: {
                description: 'Kaya Çiftliği İstanbul Kağıthane mağazasında süt ürünleri ve peynirlerin sergilendiği açık sütlük reyonunu ve Pars Soğutma uygulama fotoğraflarını inceleyin.',
                subject: 'Sütlük ve market reyonu',
                paragraphs: [
                    'Kaya Çiftliği’nin İstanbul Kağıthane mağazasında süt ürünleri ve peynirler, mağaza duvarı boyunca uzanan çok katlı açık sütlük reyonunda sergileniyor. Paketli ürünler üst raflarda, farklı peynir çeşitleri ise alt teşhir alanında yer alıyor.',
                    'Ahşap görünümlü üst bölüm, koyu renkli alt gövde ve raf önlerindeki etiket alanları mağazanın reyon düzenini tamamlıyor. Galeride dolapların ürünlerle birlikte kullanımını ve satış alanındaki yerleşimini farklı açılardan inceleyebilirsiniz.',
                ],
            },
            EN: {
                description: 'Explore the open dairy display at Kaya Çiftliği in Kağıthane, Istanbul, with Pars Cooling installation photos showing cheese and packaged dairy products.',
                subject: 'Dairy and supermarket display',
                paragraphs: [
                    'At Kaya Çiftliği in Kağıthane, Istanbul, a multi-level open dairy display runs along the shop wall. Packaged dairy products occupy the upper shelves, while a range of cheeses is presented in the lower display area.',
                    'A wood-effect upper surround, dark lower cabinet and shelf-edge labels form part of the shop layout. The gallery shows the stocked cabinets and their position within the sales area from different angles.',
                ],
            },
        },
    },
    tatlibak: {
        categoryIds: ['pasta'],
        copy: {
            TR: {
                description: 'Tatlıbak İstanbul Sultanbeyli şubesindeki baklava ve tatlı teşhir reyonunu, camlı vitrin düzenini ve Pars Soğutma uygulama görsellerini inceleyin.',
                subject: 'Baklava ve tatlı teşhir reyonu',
                paragraphs: [
                    'Tatlıbak’ın İstanbul Sultanbeyli şubesinde baklava ve şerbetli tatlılar, camlı teşhir reyonunda tepsiler halinde sunuluyor. Tezgâhın iç aydınlatması ve farklı seviyelerdeki sergileme alanları fotoğraflarda görülebiliyor.',
                    'Ahşap görünümlü ön kaplama, açık renkli tezgâh yüzeyi ve kırmızı Tatlıbak tabelası aynı satış alanında bir araya geliyor. Galeri, tatlı vitrininin hem ürün yerleşimini hem de mağaza dekorasyonu içindeki görünümünü gösteriyor.',
                ],
            },
            EN: {
                description: 'View the baklava and dessert display at Tatlıbak in Sultanbeyli, Istanbul, including its glass-fronted counter and Pars Cooling installation photos.',
                subject: 'Baklava and dessert display',
                paragraphs: [
                    'At the Tatlıbak branch in Sultanbeyli, Istanbul, baklava and syrup desserts are presented in trays inside a glass-fronted counter. The photos show the illuminated interior and the different display levels.',
                    'Wood-effect front panels, a light counter surface and the red Tatlıbak sign appear together in the sales area. The gallery documents the arrangement of desserts and the counter within the shop interior.',
                ],
            },
        },
    },
    byKasap: {
        categoryIds: ['kasap'],
        copy: {
            TR: {
                description: 'BY Kasap İstanbul Ümraniye projesindeki dik camlı kasap reyonunu, koyu renkli tezgâh yerleşimini ve Pars Soğutma uygulama fotoğrafları ile videosunu inceleyin.',
                subject: 'Dik camlı kasap reyonu',
                paragraphs: [
                    'BY Kasap’ın İstanbul Ümraniye uygulamasında dik camlı teşhir reyonu, koyu renkli ön gövdesiyle satış alanının önünde yer alıyor. Cam bölmeler boyunca uzanan teşhir yüzeyi ve iç aydınlatma, galerideki kurulum görüntülerinde görülebiliyor.',
                    'Siyah duvar kaplamaları ve ahşap görünümlü dikey detaylar tezgâhın çevresini oluşturuyor. Fotoğraf ve video kayıtları üzerinden reyonun mağaza içindeki yerleşimini ve camlı bölümün görünümünü birlikte inceleyebilirsiniz.',
                ],
            },
            EN: {
                description: 'Explore the upright-glass butcher counter at BY Kasap in Ümraniye, Istanbul, through Pars Cooling installation photographs and video.',
                subject: 'Upright-glass butcher counter',
                paragraphs: [
                    'The BY Kasap installation in Ümraniye, Istanbul, features an upright-glass display counter with a dark front panel at the front of the sales area. Installation images show its display surface, glass sections and interior lighting.',
                    'Black wall finishes and vertical wood-effect details surround the counter. The photographs and video provide views of the counter layout and glass display within the shop.',
                ],
            },
        },
    },
    kaleRestoran: {
        categoryIds: ['meze'],
        copy: {
            TR: {
                description: 'Kale Restoran İstanbul Maltepe uygulamasındaki çok raflı meze dolabını ve restoran içindeki teşhir düzenini Pars Soğutma proje fotoğraflarıyla inceleyin.',
                subject: 'Restoran için meze teşhir dolabı',
                paragraphs: [
                    'Kale Restoran’ın İstanbul Maltepe uygulamasında meze dolabı, mutfak açıklığının önünde restoranın servis alanına bakıyor. Tepsilerdeki mezeler cam ön yüzün arkasında birden fazla rafta sergileniyor.',
                    'Galerideki kullanım fotoğrafları raf yerleşimini, iç aydınlatmayı ve dolabın yemek salonuyla ilişkisini gösteriyor. Siyah alt gövde ile metal çerçeveler, çevredeki koyu renkli duvar düzenine eşlik ediyor.',
                ],
            },
            EN: {
                description: 'See the multi-shelf meze display cabinet at Kale Restoran in Maltepe, Istanbul, with Pars Cooling project photos showing its restaurant setting.',
                subject: 'Restaurant meze display cabinet',
                paragraphs: [
                    'At Kale Restoran in Maltepe, Istanbul, a meze display cabinet sits in front of the kitchen opening and faces the restaurant service area. Trays of meze are presented across several shelves behind the glass front.',
                    'The gallery shows the stocked shelves, interior lighting and the cabinet beside the dining area. Its black lower cabinet and metal frames sit alongside the surrounding dark wall finishes.',
                ],
            },
        },
    },
    yildirimEt: {
        categoryIds: ['kasap'],
        copy: {
            TR: {
                description: 'Yıldırım Et Bursa İznik projesindeki bombe camlı kasap teşhir reyonunu, ahşap detaylı ön kaplamayı ve Pars Soğutma kurulum fotoğraflarını inceleyin.',
                subject: 'Bombe camlı kasap teşhir reyonu',
                paragraphs: [
                    'Bursa İznik’teki Yıldırım Et uygulamasında bombe camlı kasap reyonu, mağazanın ön satış hattı boyunca yer alıyor. Kurulum fotoğraflarında geniş teşhir yüzeyi, yan yana cam bölümler ve tezgâhın iç düzeni görülüyor.',
                    'Ön gövdede koyu renkli yüzeyler ile yatay ahşap detaylar bir arada kullanılıyor. Galeri, ürünler yerleştirilmeden önce reyonun mağaza alanına nasıl oturduğunu ve çevredeki duvar kaplamalarıyla görünümünü belgeliyor.',
                ],
            },
            EN: {
                description: 'View the curved-glass butcher display at Yıldırım Et in İznik, Bursa, including its wood-detailed front and Pars Cooling installation photographs.',
                subject: 'Curved-glass butcher display',
                paragraphs: [
                    'The Yıldırım Et installation in İznik, Bursa, features a curved-glass butcher counter along the front sales area. Installation photos show the display surface, adjoining glass sections and the interior before stocking.',
                    'Dark front panels are combined with horizontal wood details. The gallery documents the counter within the shop and its appearance alongside the surrounding wall finishes.',
                ],
            },
        },
    },
    yagizCiftligi: {
        categoryIds: ['reyon', 'sutluk'],
        copy: {
            TR: {
                description: 'Yağız Çiftliğim İstanbul Beylikdüzü mağazasındaki şarküteri, peynir ve sütlük yerleşimini Pars Soğutma referans fotoğraflarıyla inceleyin.',
                subject: 'Market ve şarküteri reyonları',
                paragraphs: [
                    'Yağız Çiftliğim’in İstanbul Beylikdüzü mağazasında zeytin sunum tezgâhı, peynir teşhir alanı ve cam kapaklı sütlükler aynı satış alanında yer alıyor. Üstten çekilmiş galeri fotoğrafı, karşılıklı reyonları ve ortadaki müşteri geçişini birlikte gösteriyor.',
                    'Ahşap görünümlü yüzeyler ve koyu renkli çerçeveler mağazanın farklı bölümlerinde devam ediyor. Yakın plan görüntülerde zeytin kaplarını, süt ürünlerinin raf düzenini ve şarküteri tezgâhının kullanımını inceleyebilirsiniz.',
                ],
            },
            EN: {
                description: 'Explore the deli, cheese and dairy displays at Yağız Çiftliğim in Beylikdüzü, Istanbul, through Pars Cooling reference project photographs.',
                subject: 'Supermarket and deli displays',
                paragraphs: [
                    'At Yağız Çiftliğim in Beylikdüzü, Istanbul, an olive counter, cheese display and glass-door dairy cabinets share the sales area. An overhead gallery view shows the opposing displays and the customer aisle between them.',
                    'Wood-effect surfaces and dark frames continue across the different shop areas. Close-up photos show the olive containers, dairy shelf arrangement and deli counter in use.',
                ],
            },
        },
    },
    tatOglu: {
        categoryIds: ['pasta'],
        copy: {
            TR: {
                description: 'Tat Oğlu Fırın Pastanesi Kocaeli Gebze projesindeki camlı pastane tezgâhını, vitrin yerleşimini ve Pars Soğutma uygulama fotoğraflarını inceleyin.',
                subject: 'Fırın ve pastane teşhir tezgâhı',
                paragraphs: [
                    'Tat Oğlu Fırın Pastanesi’nin Kocaeli Gebze uygulamasında uzun camlı teşhir tezgâhı, mağazanın satış alanında yer alıyor. Fotoğraflarda tezgâhın koyu renkli üst yüzeyi, açık tonlu dikey ön panelleri ve cam sınırları görülüyor.',
                    'Tezgâhın yan bölümünde raflı bir vitrin bulunuyor. Galeri, ana tezgâh ile bu vitrinin birlikte yerleşimini ve mağazanın pencere cephesiyle ilişkisini farklı açılardan gösteriyor.',
                ],
            },
            EN: {
                description: 'See the glass-fronted bakery counter at Tat Oğlu Fırın Pastanesi in Gebze, Kocaeli, with Pars Cooling photos of the counter and display layout.',
                subject: 'Bakery and pastry display counter',
                paragraphs: [
                    'The Tat Oğlu Fırın Pastanesi installation in Gebze, Kocaeli, includes a long glass-fronted counter within the shop sales area. The photos show its dark counter surface, light vertical front panels and glass boundaries.',
                    'A shelved display cabinet stands beside the main counter. The gallery shows how the two displays are arranged together and positioned in relation to the shop windows.',
                ],
            },
        },
    },
    tireBolu: {
        categoryIds: ['pasta'],
        copy: {
            TR: {
                description: 'Tirebolu Unlu Mamüller İstanbul Ümraniye projesindeki köşe dönüşlü fırın ve pastane teşhir tezgâhlarını Pars Soğutma uygulama görselleriyle inceleyin.',
                subject: 'Köşe dönüşlü unlu mamul teşhir alanı',
                paragraphs: [
                    'Tirebolu Unlu Mamüller’in İstanbul Ümraniye uygulamasında camlı teşhir tezgâhları köşe dönüşüyle birbirine bağlanıyor. Ön yüzdeki ahşap görünümlü paneller ve üst çizgideki aydınlatma satış hattı boyunca devam ediyor.',
                    'Galeride hem boş teşhir yüzeyleri hem de unlu mamullerin yerleştirildiği bölümler bulunuyor. Fotoğraflar, köşe birleşimini, camların eğimini ve farklı teşhir ünitelerinin aynı mağaza içindeki yerleşimini gösteriyor.',
                ],
            },
            EN: {
                description: 'Explore the corner bakery display counters at Tirebolu Unlu Mamüller in Ümraniye, Istanbul, with Pars Cooling installation photographs.',
                subject: 'Corner bakery display area',
                paragraphs: [
                    'At Tirebolu Unlu Mamüller in Ümraniye, Istanbul, glass-fronted counters meet at a corner. Wood-effect front panels and lighting along the upper edge continue across the sales counter.',
                    'The gallery includes empty display surfaces and sections stocked with baked goods. The photos show the corner junction, angled glazing and the arrangement of the different displays within the shop.',
                ],
            },
        },
    },
    nuvo: {
        categoryIds: ['kasap'],
        copy: {
            TR: {
                description: 'Talha Et Gıda İstanbul Kartal mağazasındaki et ve şarküteri teşhir reyonunu, dik camlı tezgâh düzenini ve Pars Soğutma referans fotoğraflarını inceleyin.',
                subject: 'Et ve şarküteri teşhir reyonu',
                paragraphs: [
                    'Talha Et Gıda’nın İstanbul Kartal mağazasında et ve şarküteri ürünleri, uzun dik camlı reyon boyunca sergileniyor. Fotoğraflarda taze etlerin, sucukların ve paketli ürünlerin ayrı bölümlerde yer aldığı görülebiliyor.',
                    'Koyu renkli ön gövde ve cam çerçeveler, ahşap detaylı duvar kaplamalarıyla aynı satış alanında bulunuyor. Galeri, dolabın ürünlerle birlikte kullanımını ve mağazanın ön satış hattındaki yerleşimini gösteriyor.',
                ],
            },
            EN: {
                description: 'View the meat and deli display at Talha Et Gıda in Kartal, Istanbul, with Pars Cooling reference photos of its upright-glass sales counter.',
                subject: 'Meat and deli display counter',
                paragraphs: [
                    'At Talha Et Gıda in Kartal, Istanbul, meat and deli products are presented along a long upright-glass counter. The photographs show fresh meat, sausages and packaged products arranged in separate sections.',
                    'The dark counter front and glass frames sit alongside wood-detailed wall finishes. The gallery shows the cabinet stocked with products and positioned along the shop sales area.',
                ],
            },
        },
    },
    'İstanbul-Kartal': {
        categoryIds: ['pasta'],
        copy: {
            TR: {
                description: 'Nuvo Pastane İstanbul Kartal projesindeki dikey vitrin ve camlı pastane tezgâhlarının yerleşimini Pars Soğutma referans fotoğraflarıyla inceleyin.',
                subject: 'Dikey vitrin ve pastane tezgâhları',
                paragraphs: [
                    'Nuvo Pastane’nin İstanbul Kartal uygulamasında dikey camlı vitrin ile yatay pastane tezgâhları birlikte yer alıyor. Ortadaki kavisli ön gövde ve yan vitrinlerdeki cam raflar, farklı sunum alanları oluşturuyor.',
                    'Ahşap görünümlü kaplama ve siyah çerçeveler tüm teşhir hattında devam ediyor. Galeride raflara yerleştirilmiş pastane ürünlerini, tezgâhların birleşimini ve servis alanına göre konumlarını inceleyebilirsiniz.',
                ],
            },
            EN: {
                description: 'Explore the upright showcase and pastry counters at Nuvo Pastane in Kartal, Istanbul, through Pars Cooling reference project photographs.',
                subject: 'Upright showcase and pastry counters',
                paragraphs: [
                    'The Nuvo Pastane installation in Kartal, Istanbul, combines an upright glass showcase with horizontal pastry counters. The curved central front and glass shelves in the side displays form different presentation areas.',
                    'Wood-effect cladding and black frames continue across the display line. The gallery shows bakery products on the shelves, the counter junctions and their position beside the service area.',
                ],
            },
        },
    },
    doganKasap: {
        categoryIds: ['kasap'],
        copy: {
            TR: {
                description: 'Doğan Kasap İstanbul Kadıköy mağazasındaki et teşhir dolabını, camlı kasap reyonunun kullanımını ve Pars Soğutma referans fotoğraflarını inceleyin.',
                subject: 'Kasap için et teşhir dolabı',
                paragraphs: [
                    'Doğan Kasap’ın İstanbul Kadıköy uygulamasında et ürünleri, dik camlı teşhir dolabında tepsiler halinde sergileniyor. Kırmızı et, kıyma ve hazırlanmış ürünlerin yerleşimi kullanım fotoğraflarında görülebiliyor.',
                    'Reyonun koyu renkli alt gövdesi ve cam ön yüzü mağazanın satış hattı boyunca uzanıyor. Galeri, hem ürünlerin teşhir alanındaki düzenini hem de dolabın arkasındaki servis ve hazırlık alanını gösteriyor.',
                ],
            },
            EN: {
                description: 'See the meat display cabinet at Doğan Kasap in Kadıköy, Istanbul, with Pars Cooling reference photographs of its glass-fronted butcher counter in use.',
                subject: 'Butcher meat display cabinet',
                paragraphs: [
                    'At Doğan Kasap in Kadıköy, Istanbul, meat products are presented in trays inside an upright-glass display cabinet. The photos show the arrangement of red meat, minced meat and prepared products.',
                    'The dark lower cabinet and glass front run along the shop sales area. The gallery documents the stocked display and the service and preparation area behind the counter.',
                ],
            },
        },
    },
};
