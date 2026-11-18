import type { CategoryId } from './catalog';
import type { TranslatedString } from './products/types';

type ChoiceCopy = [label: string, description: string];

type ModelChoice = {
    href: string;
    copy: { TR: ChoiceCopy; EN: ChoiceCopy };
    compareModelIds?: number[];
};

function choice(href: string, TR: ChoiceCopy, EN: ChoiceCopy, compareModelIds?: number[]): ModelChoice {
    return { href, copy: { TR, EN }, compareModelIds };
}

export const catalogModelSelections: Record<CategoryId, { question: TranslatedString; choices: ModelChoice[] }> = {
    reyon: {
        question: { TR: 'Ürünleri nasıl sunuyorsunuz?', EN: 'How do you display and serve your products?' },
        choices: [
            choice('#camli-servis-reyonlari',
                ['Tezgâhtan servis yapıyorum', 'Peynir ve zeytin gibi ürünler için dik ve düz camlı iki servis reyonunu karşılaştırın.'],
                ['I serve from behind a counter', 'Compare upright and flat glass counters for staff-served products such as cheese and olives.'], [17, 18]),
            choice('/urunler/sutluk-market-dolaplari#modeller-sutluk-raflar',
                ['Müşteri ürünü raftan kendi alıyor', 'Açık, cam kapaklı ve yarım boy raflı market reyonlarını inceleyin.'],
                ['Customers pick products from shelves', 'See open, glass-door and low-height shelving displays.']),
            choice('#modeller-promosyon-dolaplari',
                ['Kampanya alanı kuruyorum', 'Mağaza içindeki teşhir noktası için promosyon dolabına bakın.'],
                ['I am setting up a promotional display', 'See the promotional cabinet for a dedicated display area in your shop.']),
        ],
    },
    sutluk: {
        question: { TR: 'Ürünlere nasıl erişilmesini istiyorsunuz?', EN: 'How should customers access the products?' },
        choices: [
            choice('#model-39',
                ['Açık raf istiyorum', 'Müşterinin ürünü doğrudan raftan alabileceği açık sütlüğü inceleyin.'],
                ['I want open shelves', 'See the open dairy cabinet for direct customer access.']),
            choice('#model-38',
                ['Cam kapak istiyorum', 'Kapak açılımını ve koridorda ayırabileceğiniz boşluğu karşılaştırın.'],
                ['I want glass doors', 'Compare the door opening with the clearance available in your aisle.']),
            choice('#model-37',
                ['Alçak bir reyon istiyorum', 'Mağaza içi görüşü ve raf erişimini yarım boy sütlükle değerlendirin.'],
                ['I want a low display', 'Consider sightlines and shelf access with the low-height dairy cabinet.']),
            choice('#modeller-sise-icecek',
                ['Şişe ve içecek sergiliyorum', 'Şişe ve kutuların raflara nasıl yerleşeceğini soğutucu modellerinde inceleyin.'],
                ['I display bottles and drinks', 'Compare beverage coolers based on how your bottles and cans will fit on the shelves.']),
        ],
    },
    kasap: {
        question: { TR: 'Eti nasıl sergileyecek veya dinlendireceksiniz?', EN: 'How will you display or age the meat?' },
        choices: [
            choice('#modeller-et-reyonlari',
                ['Tezgâhtan satış yapıyorum', 'Dik, düz ve bombe camlı kasap reyonlarını görüş açısı ve servis alanına göre karşılaştırın.'],
                ['I sell from a service counter', 'Compare upright, flat and curved glass counters for visibility and staff access.']),
            choice('#modeller-et-aski',
                ['Eti askıda sergiliyorum', 'Askı alanını ve kapı açılımını sergileyeceğiniz parçaların boyuna göre değerlendirin.'],
                ['I display meat on hooks', 'Check hanging space and door clearance against the size of the cuts you display.']),
            choice('#modeller-dry-aged',
                ['Et dinlendirmek istiyorum', 'Dikey ve duvar tipi dry aged modellerini kullanımınıza göre inceleyin.'],
                ['I want to dry-age meat', 'Compare upright and wall-style dry-age cabinets for your layout.']),
        ],
    },
    pasta: {
        question: { TR: 'Ağırlıklı olarak ne sergileyeceksiniz?', EN: 'What will you mainly display?' },
        choices: [
            choice('#modeller-pasta-ekler-cikolata',
                ['Pasta ve ekler', 'Tepsiyle sunum için yatay, katlı raf düzeni için dikey vitrinleri inceleyin.'],
                ['Cakes and eclairs', 'Compare horizontal displays for trays and vertical cabinets for multi-tier shelving.']),
            choice('#model-64',
                ['Çikolata', 'Çikolata dolabının raf düzenini kutu ve ambalaj ölçülerinize göre değerlendirin.'],
                ['Chocolate', 'Check the chocolate cabinet’s shelf arrangement against the sizes of your boxes and packaging.']),
            choice('#modeller-pastane-kuru-teshir',
                ['Baklava ve kuru ürünler', 'Baklava tepsileri, kuru pasta veya kuruyemiş için ilgili tezgâhları inceleyin.'],
                ['Baklava and dry goods', 'See counters for baklava trays, dry pastries or nuts.']),
            choice('#modeller-isitmali-tezgahlar',
                ['Sıcak börek veya poğaça', 'Tezgâhtan sıcak sunum için ısıtmalı modelleri karşılaştırın.'],
                ['Hot börek or pastries', 'Compare heated counters for serving hot pastries.']),
        ],
    },
    meze: {
        question: { TR: 'Tezgâhtan mı servis edeceksiniz, dikey vitrinde mi sergileyeceksiniz?', EN: 'Will you serve from a counter or use an upright display?' },
        choices: [
            choice('#modeller-kebap-meze-reyonlari',
                ['Tezgâhtan servis yapıyorum', 'Yatay reyonları servis tarafına, kullanacağınız kaplara ve çeşit sayısına göre karşılaştırın.'],
                ['I serve from a counter', 'Compare horizontal counters by serving side, container dimensions and the number of dishes.']),
            choice('#modeller-dikey-meze',
                ['Çok raflı vitrin istiyorum', 'Dikey meze dolabında raf aralığını ve kapların çıkarılacağı servis alanını değerlendirin.'],
                ['I want a multi-shelf display', 'Check shelf spacing and the space staff need to remove containers from the upright mezze cabinet.']),
        ],
    },
    balik: {
        question: { TR: 'Balıkları nasıl sergileyecek ve servis edeceksiniz?', EN: 'How will you display and serve the fish?' },
        choices: [
            choice('#model-7',
                ['Açık, cam siperlikli mostra', 'Teşhir yüzeyini ve personelin ürün sıralarına erişimini değerlendirin.'],
                ['Open display with a glass guard', 'Check the display surface and how far staff need to reach across the rows.']),
            choice('#model-11',
                ['Kapaklı mostra', 'Kapağın açılması ve günlük temizlik için tezgâh çevresindeki boşluğu kontrol edin.'],
                ['Lidded display', 'Check clearance around the counter for opening the lid and daily cleaning.']),
            choice('#modeller-balik-teshir',
                ['Balık teşhir dolabı', 'Ürünleri nasıl yerleştireceğinize ve hangi taraftan servis edeceğinize göre modelleri karşılaştırın.'],
                ['Fish display cabinet', 'Compare cabinets by product layout and which side staff serve from.']),
        ],
    },
    'soguk-oda': {
        question: { TR: 'Komple bir oda mı kuruyorsunuz, mevcut odaya ekipman mı arıyorsunuz?', EN: 'Do you need a complete cold room or equipment for an existing room?' },
        choices: [
            choice('#teklif',
                ['Komple soğuk oda kuruyorum', 'Proje teklifi için depolanacak ürünü, iç ölçüleri ve hedef sıcaklığı hazırlayın.'],
                ['I need a complete cold room', 'Gather the product type, internal dimensions and target temperature for your quote.']),
            choice('#modeller-soguk-oda-kapilari',
                ['Kapı arıyorum', 'Menteşeli ve sürgülü kapıları net geçiş ölçüsü ile açılma alanına göre inceleyin.'],
                ['I need a door', 'Compare hinged and sliding doors by clear opening and available clearance.']),
            choice('#modeller-panel-aksesuar',
                ['Panel veya aksesuar arıyorum', 'İç ölçüler ve çalışma koşulları üzerinden panel ve aksesuarları değerlendirin.'],
                ['I need panels or accessories', 'Review panels and accessories using the room’s internal dimensions and operating conditions.']),
            choice('#modeller-pvc-perdeler',
                ['PVC perde arıyorum', 'Kapı açıklığına ve geçiş sıklığına göre şerit perde seçeneklerini inceleyin.'],
                ['I need a PVC curtain', 'Compare strip curtains by the doorway dimensions and how often people or equipment pass through.']),
        ],
    },
    mutfak: {
        question: { TR: 'Ekipman mutfakta hangi iş için kullanılacak?', EN: 'What is the equipment for in your kitchen?' },
        choices: [
            choice('#modeller-calisma-evye',
                ['Hazırlık yapacağım', 'Çalışma tezgâhlarını hazırlık yüzeyi, alt raf ve dolap ihtiyacına göre inceleyin.'],
                ['Food preparation', 'Compare worktables by work surface, lower shelf and cupboard requirements.']),
            choice('#evyeli-tezgahlar',
                ['Yıkama alanı kuracağım', 'Tek evyeli ve altı dolaplı evyeli tezgâhları karşılaştırın.'],
                ['Washing area', 'Compare a single-sink worktable and a sink unit with an undercounter cupboard.'], [82, 86]),
            choice('#modeller-mutfak-buzdolaplari',
                ['Soğuk saklama yapacağım', 'Dikey buzdolaplarını ve tezgâh altı dolapları çalışma alanına göre inceleyin.'],
                ['Refrigerated storage', 'Compare upright refrigerators and undercounter cabinets for the space available.']),
            choice('#modeller-raf-istif',
                ['Raf ve istif alanı kuracağım', 'Kapların yerleşimine ve geçiş boşluğuna göre raf sistemlerini değerlendirin.'],
                ['Shelving and storage', 'Compare racks by container layout and the aisle clearance you need.']),
            choice('#modeller-davlumbazlar',
                ['Havalandırma planlıyorum', 'Pişirme hattının yerine göre duvar ve orta tip davlumbazlara bakın.'],
                ['Kitchen ventilation', 'See wall-mounted and island hoods for the position of your cooking line.']),
        ],
    },
    sogutma: {
        question: { TR: 'Bir soğuk oda mı, birden fazla reyon mu soğutulacak?', EN: 'Are you cooling a cold room or several display cabinets?' },
        choices: [
            choice('#modeller-monoblok-split',
                ['Soğuk oda için sistem arıyorum', 'Monoblok ve split sistemleri montaj yeri ve servis erişimine göre karşılaştırın.'],
                ['I need a system for a cold room', 'Compare monoblock and split units by installation position and service access.']),
            choice('#modeller-merkezi-sistemler',
                ['Birden fazla reyonu soğutacağım', 'Merkezi sistem seçeneğini soğutma noktaları ve cihaz yerleşimi üzerinden değerlendirin.'],
                ['I need to cool several cabinets', 'Consider central refrigeration based on the cooling points and where equipment can be installed.']),
            choice('#teklif',
                ['Projem için uygun grubu belirlemek istiyorum', 'Teklif için alanı, hedef çalışma koşullarını ve cihazın yerini paylaşın.'],
                ['I need help choosing a system for my project', 'Share your dimensions, operating requirements and planned equipment location for a quote.']),
        ],
    },
};
