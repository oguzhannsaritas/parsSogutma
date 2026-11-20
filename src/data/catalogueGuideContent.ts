import type { BlogArticleContent } from './blogContent';
import type { CatalogLanguage } from './catalog';

const uprightGlassButcherImage = '/images/products/servisReyonlari/kasapDolabiDikCamli/kasapDolabiDikCamlix.webp';
const curvedGlassButcherImage = '/images/products/servisReyonlari/KasapReyonDolabiBombeCamli/kasapReyonDolabiBombeCamlix.webp';
const openDairyImage = '/images/products/dikeyTipSogutuculuReyonlar/sutlukDolabi/sutlukDolabi8.webp';
const halfHeightDairyImage = '/images/products/dikeyTipSogutuculuReyonlar/yarimBoySutlukDolabi/yarimBoySutlukDolabi5.webp';
const kebabDisplayImage = '/images/products/servisReyonlari/kebapTeshirDolabi/kebapTeshirDolabix.webp';
const mezzeDisplayImage = '/images/products/servisReyonlari/kebapMezeDolabi/kabapMezeDolabix1.webp';
const cateringHygieneGuide = 'https://www.tarimorman.gov.tr/GKGM/Belgeler/Tuketici_Bilgi_Kosesi/Temp/iyi_hijyen_uygulama_rehberi/TopluTuketim_Yerleri_Hijyen_Uygulama_Kilavuzu.pdf';
const newMoonImage = '/images/products/servisReyonlari/newMoonDüzCamliReyondolabi/newMoonDuzCamliReyondolabi.webp';
const moonImage = '/images/products/servisReyonlari/KasapReyonDolabiBombeCamli/moonBombeCamliReyonDolabix.webp';

export const catalogueGuideContent: Record<string, Record<CatalogLanguage, BlogArticleContent>> = {
    'kebap-teshir-dolabi-meze-vitrini-yerlesimi': {
        TR: {
            sections: [
                {
                    heading: 'Şiş ve meze için iki servis noktası belirleyin',
                    paragraphs: [
                        'Krokide ocağı, mutfak girişini ve tabakların konacağı yeri işaretleyin. Kebap teşhir dolabının servis açıklığını ustanın tepsiyi alacağı tarafa çevirin. Meze teşhir dolabını müşterinin çeşitleri görebileceği, garsonun da hemen yanında tabak koyabileceği bir yerde değerlendirin.',
                        'Kebap ve meze dolabı seçerken boş bir tepsi ve servis tabağıyla iki işi aynı anda deneyin. İki çalışan aynı noktada bekliyorsa vitrinlerin erişim yönünü veya tabak koyma yerini yeniden planlayın.',
                    ],
                    figures: [
                        { image: kebabDisplayImage, alt: 'Kırmızı alt panelli kebap teşhir dolabının kavisli ön camı ve iç rafı', caption: 'Kebap Teşhir Dolabı', to: '/products/26' },
                        { image: mezzeDisplayImage, alt: 'Meze teşhir dolabının aydınlatılmış cam rafları ve paslanmaz teşhir tabanı', caption: 'Meze Teşhir Dolabı', to: '/products/25' },
                    ],
                },
                {
                    heading: 'Kebap dolabı ölçülerini en uzun şişten alın',
                    paragraphs: [
                        'En uzun şişi sapıyla birlikte ölçün. Şişleri tepsiye serviste durdukları yönde dizin. Sap tepsinin dışına taşıyorsa toplam ölçüye ekleyin. Ardından boş tepsiyi iki elle kavrayıp servis açıklığından çıkarırken gereken boşluğu kontrol edin.',
                        'Pars Kebap Teşhir Dolabı için katalogda 1250 ve 1875 mm gibi modül uzunlukları bulunur. Kullandığınız tepsiyi değerlendirmek için teknik çizimde kullanılabilir iç derinliği ve servis açıklığını ayrıca isteyin. Soğutmalı kebap dolabı ocağa yakın olacaksa konumu, ısı etkisini ve havalandırmayı yerleşim kesinleşmeden üreticiyle görüşün.',
                    ],
                },
                {
                    heading: 'Meze vitrininde arka sıradaki kaba ulaşmayı deneyin',
                    paragraphs: [
                        'Müşterinin durduğu yerden arka sıradaki mezenin adının okunup okunmadığına bakın. Garsonun öndeki kapları taşımadan o mezeyi servis edebilmesi için sık sipariş edilen çeşitleri erişimi kolay bölüme alın.',
                        'Örneğin altı çeşit sunuyorsanız bir çalışan boşalan haydari kabını değiştirirken diğeri acılı ezmeyi tabağa alsın. Aynı rafa uzanıyorlarsa sık yenilenen kabı mutfak girişine yakın uca taşımayı deneyin. Dikey meze dolabında üst raftan dolu kabı çıkarırken alttaki servis alanının nasıl kullanıldığını da kontrol edin.',
                    ],
                    links: [
                        { label: 'Dikey Meze Dolabı', to: '/products/12' },
                        { label: 'Yatay ve dikey meze dolabı seçim rehberi', to: '/blog/meze-dolabi-secim-rehberi' },
                    ],
                },
                {
                    heading: 'Çiğ şiş ve servise hazır meze için alanları ayırın',
                    paragraphs: [
                        'Çiğ şişlerin teşhir ve hazırlık alanını servise hazır mezelerden ayrı planlayın. Çiğ et için ayrı maşa, tepsi ve çalışma yüzeyi kullanın. Çiğ tepsinin taşınacağı yolu krokiye çizip hazır mezenin porsiyonlandığı alanın dışında tutun. Bu ayrım çapraz bulaşma riskini azaltmaya yardımcı olur.',
                    ],
                    links: [{ label: 'Tarım ve Orman Bakanlığı’nın toplu tüketim yerleri için hijyen kılavuzu', to: cateringHygieneGuide }],
                },
                {
                    heading: 'Teklif için ölçüleri ve servis krokisini paylaşın',
                    paragraphs: [
                        'Pars Soğutma’ya dolaplara ayırdığınız net uzunluk ve derinliği, en uzun şişin ölçüsünü ve aynı anda sergileyeceğiniz meze kaplarının sayısını gönderin. Ocağın, temiz tabakların ve mutfak girişinin yerini de gösterin. Ustanın ve garsonun çalıştığı noktalar görüldüğünde uygun model ve yerleşim birlikte değerlendirilebilir.',
                    ],
                },
            ],
            questions: [
                { question: 'Kebap dolabının tepsime uyduğunu nasıl anlarım?', answer: 'En uzun şişi sapıyla birlikte tepsiye yerleştirip tepsinin kapladığı toplam alanı ölçün. Bu ölçüyü dolabın net iç derinliğiyle karşılaştırın ve tepsinin servis açıklığından rahatça çıkmasını kontrol edin.' },
                { question: 'Meze vitrininin yanında nereye boş alan bırakmalıyım?', answer: 'Garsonun tabak koyacağı ve dolu kabı kaldıracağı yeri işaretleyin. Kap değişimiyle meze servisinin aynı anda yapılabildiğini deneyin.' },
                { question: 'Soğutmalı kebap dolabını ocağın yanına koyabilir miyim?', answer: 'Planlanan konumu seçilen modelin kurulum talimatlarıyla birlikte değerlendirin. Ocağın ısı etkisini, havalandırmayı ve servis geçişini üreticiye gösterin.' },
            ],
        },
        EN: {
            sections: [
                {
                    heading: 'Set up separate service points for skewers and mezze',
                    paragraphs: [
                        'On the sketch, mark the grill, kitchen entrance and space for plates. Orient the kebab display’s service opening so the cook can reach the tray. Place the mezze display where customers can see the dishes and the server has room to set down a plate.',
                        'Try both jobs at once with an empty tray and a serving plate. If two people have to wait for the same spot, reconsider how they reach the displays or where they put the plates.',
                    ],
                    figures: [
                        { image: kebabDisplayImage, alt: 'Kebab display cabinet with curved front glass, an internal shelf and a red base', caption: 'Kebab Display Cabinet', to: '/products/26' },
                        { image: mezzeDisplayImage, alt: 'Illuminated glass shelves and stainless display base of a mezze cabinet', caption: 'Mezze Display Cabinet', to: '/products/25' },
                    ],
                },
                {
                    heading: 'Size the kebab display using your longest skewer',
                    paragraphs: [
                        'Measure your longest skewer with its handle. Lay the skewers in the tray as you would during service and include any handles that extend beyond its edge. Then use an empty tray to check how much room you need to grip it with both hands and remove it through the service opening.',
                        'The Pars Kebab Display Cabinet lists module lengths including 1,250 and 1,875 mm. Ask for the usable internal depth and the service opening dimensions to check the tray. If the cabinet will sit near the grill, discuss heat, ventilation and positioning with the manufacturer before finalising the layout.',
                    ],
                },
                {
                    heading: 'Try reaching the back row in the mezze display',
                    paragraphs: [
                        'From where the customer stands, check whether the label on the back row is legible. Give popular dishes an accessible spot so the server can reach them without moving other containers.',
                        'If you serve six dishes, try having one person replace an empty haydari container while the other portions the spicy ezme. If they both reach for the same shelf, try moving the container you replenish most often closer to the kitchen entrance. For an upright mezze cabinet, see whether you can serve from below while removing a full dish from the upper shelf.',
                    ],
                    links: [
                        { label: 'Upright Mezze Cabinet', to: '/products/12' },
                        { label: 'Choosing a counter-height or upright mezze cabinet', to: '/blog/meze-dolabi-secim-rehberi' },
                    ],
                },
                {
                    heading: 'Separate raw skewers from ready-to-serve mezze',
                    paragraphs: [
                        'Plan separate display and work areas for raw skewers and ready-to-serve mezze. Use separate tongs, trays and work surfaces for raw meat. On the sketch, keep the raw tray’s route clear of the area where mezze is portioned. This separation helps reduce the risk of cross-contamination.',
                    ],
                    links: [{ label: 'Turkish Ministry of Agriculture and Forestry hygiene guide for catering businesses', to: cateringHygieneGuide }],
                },
                {
                    heading: 'Send dimensions and a service sketch for a quote',
                    paragraphs: [
                        'Send Pars Cooling the available length and depth for the cabinets, the length of the longest skewer and the number of mezze dishes you plan to display at once. Mark the grill, clean plates and kitchen entrance. Knowing where the cook and server work helps us assess which model fits the layout.',
                    ],
                },
            ],
            questions: [
                { question: 'How can I tell whether my tray will fit?', answer: 'Lay the longest skewer in the tray and measure the complete footprint, including the handle. Compare it with the usable cabinet depth and check that you can remove the tray through the service opening.' },
                { question: 'Where should I leave room around the mezze display?', answer: 'Mark where the server will set down plates and lift out full dishes. Try replenishing a dish and serving a customer at the same time.' },
                { question: 'Can I place the kebab display next to the grill?', answer: 'Check the planned position against the selected model’s installation instructions. Show the manufacturer the grill, ventilation and working space.' },
            ],
        },
    },
    'duz-camli-bombe-camli-reyon-dolabi-farklari': {
        TR: {
            sections: [
                {
                    heading: 'Dik, düz ve bombe cam arasındaki fark',
                    paragraphs: [
                        'Dik camlı reyon dolabı ifadesi camın duruşunu anlatır. Düz ve bombe cam ifadeleri ise yüzeyin biçimini tarif eder. Düz bir cam dik de eğimli de durabilir. Bir reyon dolabı için önden çekilmiş fotoğrafın yanında yan profili veya ölçülü kesiti inceleyin.',
                    ],
                    figures: [
                        { image: newMoonImage, alt: 'NEW MOON reyon dolabının eğimli düz ön camı ve yan profili', caption: 'NEW MOON Düz Camlı Reyon Dolabı', to: '/products/18' },
                        { image: moonImage, alt: 'MOON reyon dolabının kavisli ön camı ve köşe dönüşü', caption: 'MOON Bombe Camlı Reyon Dolabı', to: '/products/16' },
                    ],
                    table: {
                        headers: ['Pars modeli', 'Ön camın profili', 'Mağazada kontrol edin'],
                        rows: [
                            ['FULL MOON', 'Dik ön cam', 'Camın üst kenarı veya raf hizası arka sırayı görmeyi zorlaştırıyor mu?'],
                            ['NEW MOON', 'Eğimli düz ön cam', 'Ürünün etiketi karşıdan ve mağazaya giriş yönünden okunabiliyor mu?'],
                            ['MOON', 'Kavisli ön cam', 'Cam ve gövdenin en öndeki noktasıyla karşı raf arasında ne kadar alan kalıyor?'],
                        ],
                    },
                    links: [{ label: 'FULL MOON Dik Camlı Reyon Dolabı', to: '/products/17' }],
                },
                {
                    heading: 'Aynı etiketi iki müşteri açısından okuyun',
                    paragraphs: [
                        'Mevcut reyonu değiştiriyorsanız müşterinin en sık sorduğu ürünü seçin. Örneğin tulum peynirinin adı önden okunuyor ama sıranın başından görünmüyorsa etiketi tepsinin girişe bakan kenarında deneyin. Camda bir spotun yansıması etiketi örtüyorsa aydınlatmanın yönünü de kontrol edin.',
                        'Yeni bir mağazada soğutmalı teşhir dolabının yan çizimindeki en dış noktayı zeminde bantla işaretleyin. Bir kişi reyon önünde dururken diğeri sepetle arkasından geçsin. İki modeli karşılaştırırken karşı rafı ve müşterinin duracağı noktayı aynı tutun.',
                    ],
                },
                {
                    heading: 'Cam açılırken tepsi ve temizlik erişimini kontrol edin',
                    paragraphs: [
                        'Personel servisli bir soğutmalı reyonda en arkadaki tepsiyi iki elle çıkarmayı deneyin. Camın içini temizlerken hangi yönden erişileceğini üreticiye sorun. Ön cam açılıyorsa hareketini çizime ekleyin. Üst raf, aydınlatma veya öndeki stand bu hareket alanına giriyorsa yerlerini montajdan önce değerlendirin.',
                    ],
                    links: [{ label: 'Şarküteri reyon dolabı seçim rehberi', to: '/blog/sarkuteri-reyon-dolabi-secim-rehberi' }],
                },
                {
                    heading: 'İki reyon dolabı fiyat teklifini aynı ölçülerle karşılaştırın',
                    paragraphs: [
                        'Tekliflerde aynı modül uzunluğunu, net teşhir derinliğini ve istediğiniz cam açılımını karşılaştırın. Sergilenecek ürüne uygun çalışma koşullarıyla soğutma donanımını da yazılı olarak isteyin. Montaj kapsamını ve bitişik tezgâhlarla birleşimi ayrıca kontrol edin.',
                        'Pars Soğutma’ya model adını ve ürün bağlantısını, reyon için ayırdığınız alanın ölçülerini ve müşterinin hangi yönden yaklaşacağını gösteren bir fotoğraf gönderin. Bu bilgiler, doğru cam profili ve servis düzeninin seçilmesini kolaylaştırır.',
                    ],
                },
            ],
            questions: [
                { question: 'Dik cam ile düz cam aynı şeyi mi anlatır?', answer: 'Dik cam, panelin yönünü belirtir. Düz cam, panelin yüzey biçimini belirtir. Örneğin NEW MOON modelinde düz panel eğimli durur.' },
                { question: 'Bombe cam bir vitrinin kapasitesini nasıl etkiler?', answer: 'Modelin kesitinde kullanılabilir derinliği, raf yüksekliğini ve ön camla dolu tepsi arasında kalan boşluğu karşılaştırın. Kapasite hesabında sergileyeceğiniz kapların ölçülerini kullanın.' },
                { question: 'Dar bir koridorda hangi ölçüyü karşılaştırmalıyım?', answer: 'Dolabın camı veya gövdesi dahil en öne çıkan noktayla karşı raf arasındaki net alanı ölçün. Ardından müşteri reyonun önünde durduğunda sepetle geçişi deneyin.' },
            ],
        },
        EN: {
            sections: [
                {
                    heading: 'How upright, flat and curved glass differ',
                    paragraphs: [
                        'Upright glass describes how the panel is positioned. Flat and curved describe the shape of its surface. Flat glass can sit upright or at an angle. Look at a side photo or a dimensioned section when you compare cabinets.',
                    ],
                    figures: [
                        { image: newMoonImage, alt: 'Angled flat front glass and side profile of a NEW MOON display cabinet', caption: 'NEW MOON Flat-Glass Display Cabinet', to: '/products/18' },
                        { image: moonImage, alt: 'MOON display cabinet with curved front glass and a corner section', caption: 'MOON Curved-Glass Display Cabinet', to: '/products/16' },
                    ],
                    table: {
                        headers: ['Pars model', 'Front glass profile', 'What to check in the shop'],
                        rows: [
                            ['FULL MOON', 'Upright front glass', 'Does the top edge or a shelf obscure the back row?'],
                            ['NEW MOON', 'Angled flat glass', 'Can shoppers read the label from the front and when approaching from the entrance?'],
                            ['MOON', 'Curved front glass', 'How much room is left between the furthest point of the cabinet and the shelving opposite?'],
                        ],
                    },
                    links: [{ label: 'FULL MOON Upright-Glass Display Cabinet', to: '/products/17' }],
                },
                {
                    heading: 'Read the same label from two positions',
                    paragraphs: [
                        'If you are replacing a counter, pick a product customers often ask about. If the label on a cheese at the back can be read from the front but not from the head of the queue, try it on the edge of the tray facing the approaching shopper. If glare hides the label, check where the spotlights point.',
                        'For a new shop, mark the outermost point of the display cabinet on the floor using its section drawing. Have someone stand at the display while another person passes with a basket. Keep the opposite shelf and the shopper’s position the same when comparing two models.',
                    ],
                },
                {
                    heading: 'Check tray and cleaning access with the glass open',
                    paragraphs: [
                        'For a staffed refrigerated counter, try removing the tray furthest away with both hands. Ask which side provides access to clean the inside of the glass. If the front glass opens, mark its movement on the sketch. Check for shelving, lights or a display stand in that space before installation.',
                    ],
                    links: [{ label: 'Guide to choosing a refrigerated deli display counter', to: '/blog/sarkuteri-reyon-dolabi-secim-rehberi' }],
                },
                {
                    heading: 'Compare two display cabinet quotes on the same measurements',
                    paragraphs: [
                        'Compare the same module length, usable display depth and preferred glass opening. Ask for written details of the refrigeration equipment and the operating conditions for the products you will display. Check the installation scope and any joins to adjacent counters.',
                        'Send Pars Cooling the model name and link, the measurements of the display area and a photo from the direction customers will approach. This helps us assess the glass profile and service layout for your shop.',
                    ],
                },
            ],
            questions: [
                { question: 'Do upright and flat glass mean the same thing?', answer: 'Upright refers to the panel’s position. Flat refers to its surface shape. For example, the flat front glass on the NEW MOON sits at an angle.' },
                { question: 'How does curved glass affect capacity?', answer: 'Use the section drawing to compare usable depth, shelf height and clearance between a full tray and the glass. Estimate capacity with the dimensions of the trays you plan to use.' },
                { question: 'What should I measure in a narrow aisle?', answer: 'Measure the clear space between the outermost point of the cabinet and the shelving opposite. Then try passing with a basket while someone stands in front of the counter.' },
            ],
        },
    },
    'kasap-dolabi-olculeri-et-teshir': {
        TR: {
            sections: [
                {
                    heading: 'Kasap dolabı için hangi ölçüler alınır?',
                    paragraphs: [
                        'Dolaba ayırdığınız hattın net uzunluğunu, derinliğini ve yükseklik sınırını ölçün. Kolon, duvar çıkıntısı, tartı ve yan tezgâhın yerini krokide işaretleyin. Köşe dönüşü varsa iki kolu ayrı ölçün. Bitişik tezgâhla aynı seviyede bir çalışma yüzeyi istiyorsanız mevcut tezgâhın yüksekliğini de yazın.',
                        'Pars Kasap Teşhir Dolabı için katalogda 1875, 2500 ve 3125 mm gibi modül uzunlukları bulunur. Seçtiğiniz modülün yan paneller ve varsa köşe ya da birleşim parçalarıyla birlikte toplam dış ölçüsünü üretim çiziminde doğrulayın.',
                    ],
                    table: {
                        headers: ['Ölçülecek alan', 'Krokiye yazılacak bilgi'],
                        rows: [
                            ['Dolabın oturacağı yer', 'Net uzunluk, derinlik, yükseklik sınırı ve köşe dönüşü'],
                            ['Et teşhir alanı', 'Kullanılabilir tava eni ve derinliği, tava yüksekliği ve servis açıklığı'],
                            ['Müşteri ve servis tarafı', 'Önde ve arkada kalan boşluk, ekipman ve açılan kapakların yeri'],
                        ],
                    },
                    links: [{ label: 'Kasap Teşhir Dolabı modül seçenekleri', to: '/products/3' }],
                },
                {
                    heading: 'Tava diziliminden net et teşhir alanını hesaplayın',
                    paragraphs: [
                        'Aynı anda vitrinde bulunacak ürünleri tava adediyle yazın. Her tavanın dış enini, derinliğini ve yüksekliğini ölçün. Vitrindeki teşhir yüzeyinin kullanılabilir ölçülerini ve hava kanallarına ayrılan alanı model çiziminden isteyin.',
                        'Örneğin 32, 32 ve 26 cm eninde üç tava yan yana dizildiğinde 90 cm yer kaplar. Tava aralıkları ve varsa bölücüler için gereken payı ayrıca ekleyin. En derin tavanın ön cama ve servis açıklığına göre nasıl yerleştiğini çizimde kontrol edin.',
                        'Dik camlı ve bombe camlı bir kasap reyon dolabında camla tava arasındaki boşluğu aynı yükseklikte karşılaştırın. Yüksek bir tava veya ürün kullanıyorsanız bu noktadaki açıklığı da ölçün.',
                    ],
                    figures: [
                        { image: uprightGlassButcherImage, alt: 'Dik camlı kasap dolabının paslanmaz teşhir tabanı ve düz ön yüzü', caption: 'Dik Camlı Kasap Dolabı', to: '/products/5' },
                        { image: curvedGlassButcherImage, alt: 'Bombe camlı kasap reyon dolabının kavisli ön camı ve iç rafları', caption: 'Bombe Camlı Kasap Reyon Dolabı', to: '/products/10' },
                    ],
                    links: [
                        { label: 'Düz camlı kasap reyon dolabı', to: '/products/8' },
                        { label: 'Kasap vitrini için cam ve model seçimi', to: '/blog/kasap-teshir-dolabi-yerlesim-model-secimi' },
                    ],
                },
                {
                    heading: 'Servis tarafını en büyük tavayla kontrol edin',
                    paragraphs: [
                        'Tezgâhın arkasındaki geçişi, dolabın servis kenarı ile karşısındaki en yakın engel arasında ölçün. Personelin en büyük tavayı tamamen çıkarıp tartı veya hazırlık tezgâhına götüreceği yolu krokiye çizin.',
                        'Açılır cam ya da servis kapağı varsa açık konumdaki hareketini de gösterin. Siparişten önce seçilen modelde camın açılmasını, tavanın çıkarılmasını ve temizlik için yüzeylere erişimi üreticiyle birlikte kontrol edin.',
                    ],
                },
                {
                    heading: 'Özel ölçü kasap dolabı teklifi için hazırlık',
                    paragraphs: [
                        'Krokiyi, tava listesini ve model bağlantısını birlikte paylaşın. Kasap dolabı fiyatını değerlendirirken toplam dış ölçü, cam açılımı, soğutma grubu, nakliye ve kurulumun kapsamını yazılı olarak kontrol edin. Teslimat güzergâhındaki dar kapı ve dönüşlerin ölçülerini de ekleyin.',
                    ],
                    links: [{ label: 'Özel ölçü soğutma dolabı için teklif rehberi', to: '/blog/ozel-olcu-sogutma-dolabi-teklif-rehberi' }],
                },
            ],
            questions: [
                { question: 'Bir kasap dolabına kaç tava sığar?', answer: 'Her tavanın dış ölçüsünü ve aralarındaki payı kullanılabilir yüzey üzerinde hesaplayın. Tavanın servis açıklığından çıkabildiğini de kontrol edin.' },
                { question: 'Modül uzunluğu dolabın toplam dış boyunu verir mi?', answer: 'Yerleşim için seçilen modülün, yan panellerin ve varsa birleşim parçalarının dahil olduğu toplam dış ölçüyü çizimden doğrulayın.' },
                { question: 'Köşe kasap vitrini için hangi ölçüleri paylaşmalıyım?', answer: 'Köşenin iki kolunda ayrılan net uzunluğu, her kolun derinliğini ve dönüş açısını işaretleyin. Sabit ekipmanları ve servis yönünü gösteren bir kroki ekleyin.' },
            ],
        },
        EN: {
            sections: [
                {
                    heading: 'What do you need to measure for a butcher cabinet?',
                    paragraphs: [
                        'Measure the clear length, depth and height available. Mark columns, wall projections, scales and adjacent worktops on the sketch. For a corner counter, measure both runs separately. If you want the work surfaces to align, record the height of the existing counter.',
                        'The Pars butcher display cabinet lists module lengths including 1,875, 2,500 and 3,125 mm. Confirm the overall dimensions in the production drawing, including side panels and any corner or joining pieces.',
                    ],
                    table: {
                        headers: ['Area', 'What to mark on the sketch'],
                        rows: [
                            ['Cabinet space', 'Clear length, depth, height limit and any corner'],
                            ['Meat display area', 'Usable tray width and depth, tray height and service opening'],
                            ['Customer and service sides', 'Clear space at the front and back, equipment and cabinet openings'],
                        ],
                    },
                    links: [{ label: 'Butcher display cabinet module options', to: '/products/3' }],
                },
                {
                    heading: 'Calculate usable display space from your tray layout',
                    paragraphs: [
                        'List the products you want to display together and the number of trays you need for each. Measure each tray’s outside width, depth and height. Ask for a drawing showing the usable display area and any space reserved for air passages.',
                        'For example, trays that are 32, 32 and 26 cm wide take up 90 cm side by side. Add any gaps and dividers separately. Check how the deepest tray fits between the front glass and the service opening.',
                        'When comparing upright and curved glass, check the space between the glass and trays at the same height. If a tray or product stands higher, check the clearance at that height as well.',
                    ],
                    figures: [
                        { image: uprightGlassButcherImage, alt: 'Stainless display base and flat front of an upright-glass butcher cabinet', caption: 'Upright-Glass Butcher Cabinet', to: '/products/5' },
                        { image: curvedGlassButcherImage, alt: 'Curved front glass and shelves of a butcher display cabinet', caption: 'Curved-Glass Butcher Display Cabinet', to: '/products/10' },
                    ],
                    links: [
                        { label: 'Flat-glass butcher display cabinet', to: '/products/8' },
                        { label: 'Choosing glass and cabinet models for a butcher shop', to: '/blog/kasap-teshir-dolabi-yerlesim-model-secimi' },
                    ],
                },
                {
                    heading: 'Check service access with your largest tray',
                    paragraphs: [
                        'Measure the passage behind the counter from its service edge to the closest obstruction opposite. Draw the path staff will take when they remove the largest tray and carry it to the scales or prep counter.',
                        'If the cabinet has an opening glass front or service door, mark how far it moves. Before ordering, check with the manufacturer that the glass can open, the tray can be removed and the surfaces are accessible for cleaning.',
                    ],
                },
                {
                    heading: 'Prepare a quote request for a custom butcher cabinet',
                    paragraphs: [
                        'Send the sketch, tray list and model link together. Check that the quote specifies the overall dimensions, glass opening, refrigeration unit, delivery and installation scope. Include the dimensions of tight doors and turns along the delivery route.',
                    ],
                    links: [{ label: 'How to request a quote for a custom refrigeration cabinet', to: '/blog/ozel-olcu-sogutma-dolabi-teklif-rehberi' }],
                },
            ],
            questions: [
                { question: 'How many trays fit in a butcher cabinet?', answer: 'Allow for each tray’s outer dimensions and any gaps in the usable display area. Check that the tray can also pass through the service opening.' },
                { question: 'Does module length give me the overall length?', answer: 'Use the drawing to confirm the overall length with side panels and any joining pieces included.' },
                { question: 'What should I measure for a corner butcher counter?', answer: 'Mark the clear length and depth of both runs and the angle of the corner. Add a sketch showing fixed equipment and the side staff will serve from.' },
            ],
        },
    },
    'sutluk-dolabi-olculeri-raf-duzeni': {
        TR: {
            sections: [
                {
                    heading: 'Raf planına ambalaj ölçülerinden başlayın',
                    paragraphs: [
                        'Süt, yoğurt, peynir ve içecekleri ayrı gruplarda listeleyin. Ambalajların en geniş yerini, derinliğini ve kapak dahil yüksekliğini ölçün. Her çeşitten müşterinin ön sırada kaç adet göreceğini ve arkasında kaç sıra bulunacağını yazın.',
                        'Örneğin bir yoğurt kabı en geniş yerinde 11 cm ise ön sıradaki altı kap 66 cm yer kaplar. Bölücü ve ürünleri rahat kavramak için gereken boşluğu ayrıca hesaba katın. Arka sıraya ürün eklerken rafın kullanılabilir derinliğini ve dolabın yükleme sınırlarını kontrol edin.',
                    ],
                    table: {
                        headers: ['Ürün grubu', 'Rafta neyi kontrol etmeli?'],
                        rows: [
                            ['Yoğurt kapları', 'Kapak çapı, yan yana kap sayısı ve kavrama boşluğu'],
                            ['Süt kutuları ve şişeler', 'Kapak dahil yükseklik ve dik tutarak çıkarma payı'],
                            ['Peynir paketleri', 'Paket derinliği, etiketin yönü ve arka sıraya erişim'],
                        ],
                    },
                },
                {
                    heading: 'Sütlük dolabı ölçüleri ile net raf alanını karşılaştırın',
                    paragraphs: [
                        'Ürün sayfasındaki dış uzunlukla birlikte rafın net enini, kullanılabilir derinliğini ve üst rafın altına kadar olan açıklığı isteyin. Fiyatlık ve raf kenarı varsa en yüksek şişeyi çıkarırken bu parçaların erişime etkisini kontrol edin. Raf yüksekliği ayarlanabiliyorsa seçilen dizilimde her rafın taşıma sınırını da sorun.',
                        'Pars Cam Kapaklı Sütlük Dolabı için katalogda 937, 1250, 1875, 2500, 2812, 3125 ve 3750 mm modül uzunlukları yer alır. Mağaza planında yan paneller dahil dış boyu, kapak hareketini ve raf iç ölçülerini ayrı gösterin.',
                    ],
                    figures: [
                        { image: openDairyImage, alt: 'Açık sütlük dolabında mavi fiyatlık kenarları ve boş teşhir rafları', caption: 'Açık Sütlük Dolabı', to: '/products/39' },
                        { image: halfHeightDairyImage, alt: 'Yarım boy sütlük dolabında öne eğimli alt raf ve üst raf açıklıkları', caption: 'Yarım Boy Sütlük Dolabı', to: '/products/37' },
                    ],
                    links: [{ label: 'Cam Kapaklı Sütlük Dolabı modül seçenekleri', to: '/products/38' }],
                },
                {
                    heading: 'Kapak hareketini ve raf doldurmayı koridorda deneyin',
                    paragraphs: [
                        'Koridorun en dar yerini dolabın ön kenarıyla karşısındaki raf veya ekipman arasında ölçün. Çarpma kapakta kapının açık konumunu krokide gösterin. Sürgülü camda bir kanat yana kaydığında erişilebilen kısmı ölçün ve en geniş ambalajın açıklıktan rahat geçmesini kontrol edin.',
                        'Personel ürün kasasından raf doldururken alışveriş sepetlerinin nereden geçeceğini planlayın. Kaya Çiftliği’nin Kağıthane mağazasında paketli ürünler üst raflarda, peynir çeşitleri alt teşhir alanında yer alıyor. Uygulama fotoğraflarında rafların ürün gruplarına nasıl ayrıldığını inceleyebilirsiniz.',
                    ],
                    links: [
                        { label: 'Kaya Çiftliği açık sütlük uygulaması', to: '/referans/kaya-ciftligi' },
                        { label: 'Açık ve cam kapaklı sütlük dolabı karşılaştırması', to: '/blog/acik-sutluk-cam-kapakli-sutluk-secimi' },
                    ],
                },
                {
                    heading: 'Sütlük ve market dolabı teklifi için raf planını paylaşın',
                    paragraphs: [
                        'Alan ölçülerini, koridor krokisini ve her rafta göstermek istediğiniz ürün listesini paylaşın. Özel ölçü sütlük dolabı fiyatını karşılaştırırken raf sayısını, kapak tipini, soğutma grubunu ve kurulum kapsamını aynı teklif üzerinde kontrol edin.',
                    ],
                    links: [{ label: 'Market Dolabı modelini inceleyin', to: '/products/49' }],
                },
            ],
            questions: [
                { question: 'Bir sütlük dolabında kaç raf gerekir?', answer: 'Her ambalajın yüksekliğini, önde kaç adet sergileneceğini ve arkaya kaç sıra konacağını belirleyin. Ardından raf planını seçilen modelin kullanılabilir ölçüleri ve yükleme sınırlarıyla karşılaştırın.' },
                { question: 'İçecek şişeleri için raf yüksekliği nasıl ölçülür?', answer: 'En yüksek şişeyi kapağıyla birlikte ölçün. Şişeyi dik tutarak alabileceğiniz açıklığı ve varsa rafın ön kenarını hesaba katın.' },
                { question: 'Sürgülü sütlük kapağı için hangi açıklığı ölçmeliyim?', answer: 'Kanat tamamen yana kaydığında raflara erişebildiğiniz net eni ölçün. Ürün doldururken kullandığınız en geniş ambalajı ve eliniz için gereken boşluğu karşılaştırın.' },
            ],
        },
        EN: {
            sections: [
                {
                    heading: 'Start the shelf plan with package measurements',
                    paragraphs: [
                        'List milk, yogurt, cheese and drinks separately. Measure each package at its widest point and record its depth and height, including the lid or cap. Decide how many units of each product will face the customer and how many rows will sit behind them.',
                        'For example, six yogurt tubs that are 11 cm at their widest point take up 66 cm across the front. Allow extra space for dividers and for picking up a tub. For the back rows, check usable shelf depth and the cabinet’s loading limits.',
                    ],
                    table: {
                        headers: ['Product group', 'What to check on the shelf'],
                        rows: [
                            ['Yogurt tubs', 'Lid diameter, tubs side by side and space to grip them'],
                            ['Milk cartons and bottles', 'Height including the cap and room to lift them out upright'],
                            ['Cheese packs', 'Package depth, label orientation and access to the back row'],
                        ],
                    },
                },
                {
                    heading: 'Compare cabinet dimensions with usable shelf space',
                    paragraphs: [
                        'Alongside the overall cabinet length, ask for clear shelf width, usable depth and clearance to the underside of the shelf above. If there is a price strip or lip, check how it affects removal of the tallest bottle. If shelf height is adjustable, ask for each shelf’s load limit in your planned arrangement.',
                        'The Pars glass-door dairy cabinet lists module lengths of 937, 1,250, 1,875, 2,500, 2,812, 3,125 and 3,750 mm. On the store plan, show the overall length with side panels, door movement and internal shelf dimensions separately.',
                    ],
                    figures: [
                        { image: openDairyImage, alt: 'Open dairy cabinet with blue shelf rails and empty display shelves', caption: 'Open Dairy Cabinet', to: '/products/39' },
                        { image: halfHeightDairyImage, alt: 'Low-height dairy cabinet with a sloping lower shelf and upper shelf openings', caption: 'Low-Height Dairy Cabinet', to: '/products/37' },
                    ],
                    links: [{ label: 'Glass-Door Dairy Cabinet module options', to: '/products/38' }],
                },
                {
                    heading: 'Try the doors and restocking layout in the aisle',
                    paragraphs: [
                        'Measure the narrowest point between the cabinet front and the shelf or equipment opposite. Mark where a hinged door sits when open. For sliding glass, measure the opening when one panel is moved aside and check that the widest package passes through easily.',
                        'Plan how shoppers with baskets can pass while staff restock from crates. In Kaya Çiftliği’s Kağıthane store, packaged products are on the upper shelves and cheeses are in the lower display area. The project photos show how the display is split by product group.',
                    ],
                    links: [
                        { label: 'Kaya Çiftliği open dairy display project', to: '/referans/kaya-ciftligi' },
                        { label: 'Compare open and glass-door dairy cabinets', to: '/blog/acik-sutluk-cam-kapakli-sutluk-secimi' },
                    ],
                },
                {
                    heading: 'Share the shelf plan when requesting a quote',
                    paragraphs: [
                        'Send the available dimensions, aisle sketch and list of products you want on each shelf. When comparing custom dairy cabinet quotes, check the shelf count, door type, refrigeration unit and installation scope together.',
                    ],
                    links: [{ label: 'Explore the Market Cabinet model', to: '/products/49' }],
                },
            ],
            questions: [
                { question: 'How many shelves do I need in a dairy cabinet?', answer: 'Record the height of each package and the planned front and back rows. Compare the layout with the cabinet’s usable dimensions and loading limits.' },
                { question: 'How do I measure shelf height for bottles?', answer: 'Measure the tallest bottle with its cap. Allow enough clearance to lift it out upright, taking any shelf lip into account.' },
                { question: 'What opening should I measure for a sliding dairy cabinet door?', answer: 'Slide the door fully to one side and measure the clear width available to reach the shelves. Allow for the widest package and enough space to hold it.' },
            ],
        },
    },
    'meze-dolabi-secim-rehberi': {
        TR: {
            sections: [
                {
                    heading: 'Yatay ve dikey meze dolabı arasındaki fark',
                    paragraphs: [
                        'Yatay meze dolabı, kapların servis hattı boyunca sıralandığı bir yerleşim için değerlendirilir. Dikey meze dolabında ise raflar farklı seviyelerdedir. Dikey modelin üst rafını müşteri görebilmeli ve personel dolu kabı rahatça çıkarabilmelidir.',
                        'Kebap teşhir dolabı ve soğutmalı meze vitrini arasında seçim yaparken vitrinde hangi ürünlerin bulunacağını ayrı ayrı yazın. Müşteriye gösterilecek bölümle hazırlık bölümünü ayırarak ilgili modelin kullanım amacını doğrulayın.',
                    ],
                    table: {
                        headers: ['Model', 'Yerleşimde kontrol edin'],
                        rows: [
                            ['Yatay meze dolabı', 'Tezgâh uzunluğu, yan yana kap sayısı ve personelin erişim yönü.'],
                            ['Dikey meze dolabı', 'Raf açıklığı, raf başına kap sayısı ve dolu kapların çıkarılması.'],
                            ['Kebap ve meze teşhir dolabı', 'Ürün grupları, kap dizilimi ve servis hattında ayrılan bölümler.'],
                        ],
                    },
                    links: [
                        { label: 'Kebap ve meze dolabı', to: '/products/4' },
                        { label: 'Dikey meze dolabı', to: '/products/12' },
                        { label: 'Kebap teşhir dolabı', to: '/products/26' },
                        { label: 'Meze teşhir dolabı', to: '/products/25' },
                    ],
                },
                {
                    heading: 'Meze dolabı ölçüleri için kap düzenini çizin',
                    paragraphs: [
                        'Her kabın enini, boyunu ve kapağıyla birlikte yüksekliğini ölçün. Aynı anda kaç çeşit göstermek istediğinizi yazın. Kapları kroki üzerinde raflara yerleştirin ve dolu kabı çıkarmak için gerekecek boşluğu hesaba katın.',
                        'Meze dolabı için ayrılan dış ölçüyle rafın kullanılabilir ölçüsünü ayrı isteyin. Personelin vitrinin arkasında çalışacağı alanı ve komşu tezgâhı da plana ekleyin. Böylece dolap yerleştikten sonra ürün doldurma ve servis için ne kadar alan kalacağını görebilirsiniz.',
                    ],
                },
                {
                    heading: 'Restoran meze vitrini için servis akışı',
                    paragraphs: [
                        'Soğutma sistemleri ve vitrin modelleri karşılaştırılırken meze kaplarının hangi yönden doldurulacağını ve personelin servis tabaklarını nereye koyacağını tarif edin. Endüstriyel soğutma ekipmanının çalışma koşullarını seçilen model üzerinden teyit edin.',
                        'Kale Restoran’ın Maltepe uygulamasında çok raflı meze teşhir dolabı mutfak açıklığının önünde duruyor. Müşteri cephesi servis alanına bakıyor. Fotoğraflarda tepsi yerleşimini ve vitrinin restoran içindeki konumunu birlikte inceleyebilirsiniz.',
                    ],
                    links: [
                        { label: 'Kebap teşhir dolabı ve meze vitrini yerleşimi', to: '/blog/kebap-teshir-dolabi-meze-vitrini-yerlesimi' },
                        { label: 'Kale Restoran meze vitrini uygulaması', to: '/referans/kale-restoran' },
                    ],
                },
                {
                    heading: 'Meze dolabı fiyatları ve özel ölçü imalatı',
                    paragraphs: [
                        'Meze dolabı fiyatı, vitrinin ölçüsü, cam biçimi, raf düzeni ve seçilen soğutma seçeneklerine göre değişebilir. İki teklifi incelerken aynı kap kapasitesini ve aynı servis yönünü karşılaştırın. Varsa nakliye ve montajı ayrı kalem olarak sorun.',
                        'Özel ölçü meze dolabı için Pars Soğutma’ya alan ölçülerini, menüdeki ürün gruplarını ve kapların yerleşim krokisini gönderin. Beğendiğiniz kebap meze dolabı modelini de ekleyin. İmalat talebi ve fiyat teklifi bu kapsam üzerinden hazırlanır.',
                    ],
                    links: [{ label: 'Özel ölçü dolap için teklif rehberi', to: '/blog/ozel-olcu-sogutma-dolabi-teklif-rehberi' }],
                },
            ],
            questions: [
                { question: 'Meze dolabı ölçüsü için kap sayısı yeterli mi?', answer: 'Kap adedine ek olarak her kabın ölçüsünü ve yükleme yönünü gönderin. Raf yüksekliği ve kapların çıkarılacağı boşluk da yerleşimi etkiler.' },
                { question: 'Yatay veya dikey meze dolabı hangisi daha uygun?', answer: 'Garson ve mutfak personelinin erişim yönüne, ayırabildiğiniz alana ve kap yerleşimine göre karşılaştırın. Rafları dolu kaplarla düşünerek seçim yapın.' },
                { question: 'Kebap meze dolabı fiyatı için hangi bilgiler gerekir?', answer: 'Net alan ölçüsü, model tercihi, teşhir edilecek ürünler ve kap dizilimini gönderin. Hazırlık ve servis için farklı bölümler istiyorsanız bunu yazın.' },
            ],
        },
        EN: {
            sections: [
                {
                    heading: 'Counter-height and upright mezze display cabinets',
                    paragraphs: ['A counter-height mezze cabinet places dishes along a service line. An upright display arranges them across shelves at different heights. Check that customers can see the dishes and staff can remove full containers.', 'When comparing kebab and mezze displays, list the products the cabinet will hold and confirm the model is designed for that use.'],
                    table: {
                        headers: ['Cabinet layout', 'Check before choosing'],
                        rows: [['Counter-height', 'Counter length, container count across the display and staff access.'], ['Upright', 'Shelf clearance, containers per shelf and space to remove them.'], ['Kebab and mezze display', 'Product groups, container layout and any separate service sections.']],
                    },
                    links: [{ label: 'Kebab and mezze cabinet', to: '/products/4' }, { label: 'Upright mezze display', to: '/products/12' }, { label: 'Kebab display cabinet', to: '/products/26' }, { label: 'Mezze display cabinet', to: '/products/25' }],
                },
                {
                    heading: 'Measure the dishes before choosing cabinet dimensions',
                    paragraphs: ['Measure dish length, width and height, including lids. Sketch the number of containers you want on each shelf and allow space to remove a full dish.', 'Record both external cabinet space and required usable shelf space. Mark neighbouring counters and the space staff need behind the display so that restocking and serving remain practical.'],
                },
                {
                    heading: 'Review a restaurant display in use',
                    paragraphs: ['Check where dishes will enter the cabinet and where staff will set serving plates. Confirm the commercial refrigeration requirements for the chosen model and intended products.', 'At Kale Restoran in Maltepe, the multi-shelf mezze display sits in front of the kitchen opening and faces the service area. The photos show the tray layout and how the cabinet fits inside the restaurant.'],
                    links: [
                        { label: 'Planning where to place kebab and mezze displays', to: '/blog/kebap-teshir-dolabi-meze-vitrini-yerlesimi' },
                        { label: 'Kale Restoran display project', to: '/referans/kale-restoran' },
                    ],
                },
                {
                    heading: 'Pricing and custom dimensions',
                    paragraphs: ['Dimensions, glass design, shelving and refrigeration options can affect the quote. Compare the same container capacity and service arrangement, and ask which delivery or installation work is included.', 'Send Pars Cooling your dimensions, menu, dish layout and preferred model. We assess the manufacturing request and prepare a quote for the agreed scope.'],
                    links: [{ label: 'Custom cabinet quotation guide', to: '/blog/ozel-olcu-sogutma-dolabi-teklif-rehberi' }],
                },
            ],
            questions: [
                { question: 'Is the number of mezze dishes enough to size the cabinet?', answer: 'Send dish dimensions and loading direction as well. Shelf clearance and space to lift out the containers influence the layout.' },
                { question: 'When should I choose an upright display?', answer: 'Compare the available area, dish layout and staff access. Check whether the planned top and lower shelves can be loaded and served comfortably.' },
                { question: 'What should I send for a kebab and mezze cabinet quote?', answer: 'Include the available dimensions, preferred model, products and dish layout. Identify any separate preparation and service sections.' },
            ],
        },
    },
    'balik-teshir-dolabi-secim-rehberi': {
        TR: {
            sections: [
                {
                    heading: 'Cam siperlikli ve kapaklı balık mostra dolabı',
                    paragraphs: [
                        'Balık mostrasında önce müşterinin vitrini hangi açıdan göreceğini ve personelin hangi taraftan servis vereceğini belirleyin. Cam siperlikli balık mostra dolabı, siperliğin arkasında yatay teşhir sunan bir seçenektir. Kapaklı modelde kapak açılırken kullanılacak boşluğu da ölçün.',
                        'Balık teşhir dolabı adları tek başına çalışma koşullarını göstermez. Katalogdaki modelin tezgâh biçimini, soğutma özelliklerini ve temizlik erişimini ürün sayfasından kontrol edin.',
                    ],
                    table: {
                        headers: ['Seçenek', 'Bakılacak ayrıntı'],
                        rows: [
                            ['Cam siperlikli balık mostrası', 'Teşhir derinliği, müşteri görüşü ve personelin servis tarafı.'],
                            ['Kapaklı balık mostra dolabı', 'Kapak açılımı, açıkken kalan çalışma alanı ve yükleme erişimi.'],
                            ['Soğutmalı balık dolabı', 'Seçilen modelin çalışma koşulları, kullanılabilir yüzeyi ve bağlantı gereksinimleri.'],
                        ],
                    },
                    links: [{ label: 'Cam siperlikli balık mostrası', to: '/products/7' }, { label: 'Kapaklı balık mostra dolabı', to: '/products/11' }, { label: 'Soğutmalı balık dolabı', to: '/products/9' }, { label: 'Balık teşhir dolabı', to: '/products/24' }],
                },
                {
                    heading: 'Balık teşhir dolabı ölçülerini çıkarın',
                    paragraphs: [
                        'Dış uzunluğun yanında ürünlerin fiilen dizileceği taban alanını ölçün. Kullanacağınız tepsi veya kap varsa sayısını ve boyutlarını yazın. Balıkçınızda veya restoranınızda dolaptan tezgâha ürün alınacak yönü krokide işaretleyin.',
                        'Personelin en arkadaki ürüne ulaşmasını ve dolu tepsiyi çıkarırken kullanacağı alanı değerlendirin. Kapaklı balık vitrini için kapağın önündeki veya üstündeki engelleri gösterin.',
                    ],
                },
                {
                    heading: 'Soğutma, temizlik ve bağlantı yerini birlikte değerlendirin',
                    paragraphs: [
                        'Endüstriyel soğutma ekipmanı seçerken sergilenecek ürünü ve çalışma ortamını açıklayın. Balık teşhirinde buz kullanılacaksa buzun nasıl yerleştirileceğini ve erime suyunun nasıl tahliye edileceğini model üzerinden konuşun. Su gideri gereken bir uygulamada gider konumunu proje fotoğrafında işaretleyin.',
                        'Soğutma sistemleri için verilen model bilgilerini incelerken temizlik yapılacak yüzeylere nasıl ulaşılacağını da sorun. Tepsi veya diğer parçaların çıkarılması, tezgâhın günlük kullanımıyla birlikte değerlendirilmelidir.',
                    ],
                },
                {
                    heading: 'Balık teşhir dolabı fiyatları ve özel ölçü teklif',
                    paragraphs: [
                        'Balık teşhir dolabı fiyatını etkileyebilecek kalemler arasında net teşhir alanı, cam veya kapak düzeni ve seçilen soğutma seçenekleri vardır. Özel ölçü balık mostra dolabı için ölçülerinizi, hangi ürünleri sergileyeceğinizi ve tercih ettiğiniz modeli Pars Soğutma’ya gönderin.',
                        'Teklifi değerlendirirken tezgâh, soğutma donanımı ve varsa bağlantı veya montaj işlerinin kapsamını ayrı ayrı okuyun. Böylece aynı ölçüde görünen iki balık dolabının fiyat farkını daha iyi anlayabilirsiniz.',
                    ],
                },
            ],
            questions: [
                { question: 'Balık mostra dolabı nedir?', answer: 'Balık ve deniz ürünlerinin müşteriye sunulduğu teşhir tezgâhıdır. Cam siperlikli ve kapaklı seçeneklerde görünürlük, servis erişimi ve kapak boşluğu farklı şekilde değerlendirilir.' },
                { question: 'Her balık teşhir dolabında gider var mı?', answer: 'Gider ve bağlantı ayrıntıları modele göre değişir. Buz ve temizlik düzeninizi söyleyip seçtiğiniz dolap için teyit isteyin.' },
                { question: 'Özel ölçü balık dolabı teklifi için neleri göndermeliyim?', answer: 'Dış ölçüler, kullanılabilir teşhir alanı, tepsi boyutları, servis yönü ve mevcut tesisatı gösteren fotoğraflar teklif kapsamını belirlemeye yardımcı olur.' },
            ],
        },
        EN: {
            sections: [
                {
                    heading: 'Fish counters with a glass guard or lid',
                    paragraphs: ['Start with the customer viewing angle and which side staff will serve from. A glass guard can sit in front of a horizontal display area. A lidded model also needs space for its lid to open.', 'Check the exact counter model for its use, refrigeration specifications and cleaning access.'],
                    table: {
                        headers: ['Option', 'Check in the layout'],
                        rows: [['Fish counter with a glass guard', 'Usable depth, customer visibility and service side.'], ['Lidded fish display', 'Lid movement, open clearance and loading access.'], ['Refrigerated fish cabinet', 'Operating conditions, usable display area and connection requirements.']],
                    },
                    links: [{ label: 'Fish display with a glass guard', to: '/products/7' }, { label: 'Lidded fish display counter', to: '/products/11' }, { label: 'Refrigerated fish cabinet', to: '/products/9' }, { label: 'Fish display cabinet', to: '/products/24' }],
                },
                {
                    heading: 'Measure the usable display area',
                    paragraphs: ['Measure the surface the fish will occupy as well as the external dimensions. List tray sizes and quantities and mark where staff will move products from the display to the service counter.', 'Check that staff can reach the far side of the display and remove loaded trays. For a lidded counter, mark any obstacles around the lid.'],
                },
                {
                    heading: 'Refrigeration, cleaning and connection points',
                    paragraphs: ['Describe the products and working conditions when choosing industrial refrigeration equipment. If ice is part of your display, discuss the planned setup and how meltwater will be handled for the specific model.', 'If a drain is required, show where it can connect. Ask how staff will access surfaces and removable parts for routine cleaning.'],
                },
                {
                    heading: 'Fish display pricing and custom dimensions',
                    paragraphs: ['Usable display dimensions, glass or lid design and refrigeration options can affect pricing. Send Pars Cooling the space, products and model reference for a custom fish display quote.', 'Check which equipment, connections and installation work each quotation includes so you can compare the same scope.'],
                },
            ],
            questions: [
                { question: 'What is a fish display counter?', answer: 'It is a counter used to present fish and seafood. Review customer visibility, staff access and any lid clearance for the exact model.' },
                { question: 'Does every fish display have a drain?', answer: 'Drain provisions vary by model. Describe your display and cleaning routine and verify the selected cabinet before ordering.' },
                { question: 'What do I need to request a custom fish counter quote?', answer: 'Provide dimensions, usable display area, tray sizes, service direction and photos of any available connection points.' },
            ],
        },
    },
    'sarkuteri-reyon-dolabi-secim-rehberi': {
        TR: {
            sections: [
                {
                    heading: 'Şarküteri reyonu nasıl çalışacak?',
                    paragraphs: [
                        'Müşterinin ürünü kendisi aldığı bir market reyonuyla, personelin peynir kesip tarttığı bir soğutmalı servis tezgâhı farklı yerleşimler ister. Hangi ürünlerin paketli, hangilerinin servisle verileceğini belirleyin.',
                        'Peynir teşhir dolabının yanında tartım ve paketleme yapılacaksa terazinin ve çalışma yüzeyinin yerini ayırın. Zeytin kapları da aynı satış alanındaysa, kapların değiştirileceği yönü ve personelin geçişini çizimde gösterin.',
                    ],
                },
                {
                    heading: 'Soğutmalı reyon dolabı modellerini karşılaştırın',
                    paragraphs: [
                        'Dik, düz veya bombe camı müşterinin görüşü ve personelin tezgâha erişimi üzerinden karşılaştırın. Statik ve üflemeli soğutma sistemleri için ise ürün grubunuzu söyleyip seçilen modelin çalışma özelliklerini doğrulatın.',
                    ],
                    table: {
                        headers: ['Kullanım', 'Yerleşimde kontrol edin'],
                        rows: [
                            ['Personel servisli peynir reyonu', 'Kesim, tartım, paketleme ve ürün yükleme alanı.'],
                            ['Paketli şarküteri ürünleri', 'Müşterinin erişimi, ürünlerin boyutu ve yenileme yönü.'],
                            ['Farklı ürünleri bir araya getiren reyon', 'Her bölümün ölçüsü, ürün yerleşimi ve ilgili soğutma donanımı.'],
                        ],
                    },
                    links: [
                        { label: 'Şarküteri dolabı', to: '/products/50' },
                        { label: 'Dik camlı reyon dolabı', to: '/products/17' },
                        { label: 'Statik soğutmalı reyon dolabı', to: '/products/28' },
                        { label: 'Üflemeli reyon dolabı', to: '/products/33' },
                        { label: 'Düz, dik ve bombe camlı reyon dolabı karşılaştırması', to: '/blog/duz-camli-bombe-camli-reyon-dolabi-farklari' },
                    ],
                },
                {
                    heading: 'Market şarküteri reyonu ölçüleri ve bir uygulama örneği',
                    paragraphs: [
                        'Ayırdığınız dış uzunluk ve derinlikle ürünlerin kullanılabilir teşhir alanını ayrı değerlendirin. Dolaplar karşılıklı yerleşecekse her iki reyon çizgisini ve ortada kalacak net geçişi ölçün. Personel tarafındaki çalışma boşluğunu da ekleyin.',
                        'Beylikdüzü Yağız Çiftliğim uygulamasında peynir ve zeytin bölümleri ile cam kapaklı sütlükler aynı satış alanında yer alıyor. Üstten çekilen fotoğrafta karşılıklı reyonları ve müşteri geçişini görebilirsiniz.',
                    ],
                    links: [{ label: 'Yağız Çiftliğim şarküteri reyonu uygulaması', to: '/referans/yagiz-ciftligim' }],
                },
                {
                    heading: 'Reyon dolabı fiyatı ve özel ölçü imalatı',
                    paragraphs: [
                        'Soğutmalı reyon dolabı fiyatı hazırlanırken ölçü, cam tipi, servis düzeni ve endüstriyel soğutma donanımı teklife etki edebilir. Yan yana çalışacak reyonları tek çizimde gösterin. Teklifte her bölümün ve varsa bağlantı işlerinin kapsamını okuyun.',
                        'Özel üretim şarküteri dolabı için Pars Soğutma’ya ölçüleri, sergilenecek ürün gruplarını ve tercih ettiğiniz modeli iletin. Aynı hattaki soğutma sistemleri ve tezgâhların yerini de paylaşırsanız imalat talebi daha net değerlendirilir.',
                    ],
                    links: [{ label: 'Özel ölçü reyon dolabı teklif rehberi', to: '/blog/ozel-olcu-sogutma-dolabi-teklif-rehberi' }],
                },
            ],
            questions: [
                { question: 'Şarküteri reyon dolabı ile sütlük aynı kullanım için mi seçilir?', answer: 'Her modelin kullanım amacı farklı olabilir. Personelin servis verdiği bir reyonda çalışma alanını, müşterinin ürünü aldığı sütlükte raf erişimi ve koridoru önceliklendirin.' },
                { question: 'Soğutmalı reyon dolabının dış ölçüsü teşhir kapasitesini gösterir mi?', answer: 'Teşhir kapasitesi için net iç alanı, bölüm ölçülerini ve kullanılacak kapları da karşılaştırın.' },
                { question: 'Şarküteri dolabı imalatı için hangi ölçüleri paylaşmalıyım?', answer: 'Net reyon uzunluğunu ve derinliğini, ön ve arka geçişleri, mevcut ekipmanı ve ürün kaplarının boyutunu krokide gösterin.' },
            ],
        },
        EN: {
            sections: [
                {
                    heading: 'Define how the deli counter will work',
                    paragraphs: ['A customer-access display and a staff-served cheese counter need different layouts. List which products are packaged and which will be weighed or served by staff.', 'If weighing and packaging happen alongside the cheese display, mark the scales and work surface. Include how staff will restock olive containers and move between stations.'],
                },
                {
                    heading: 'Compare refrigerated display layouts',
                    paragraphs: ['Compare glass profiles using customer visibility and staff access. Confirm whether static or ventilated refrigeration suits the model and products you plan to display.'],
                    table: {
                        headers: ['Use', 'Layout to check'],
                        rows: [['Staff-served cheese', 'Cutting, weighing, packaging and loading area.'], ['Packaged deli products', 'Customer access, package size and restocking.'], ['Multiple display zones', 'Section dimensions, product arrangement and refrigeration scope.']],
                    },
                    links: [
                        { label: 'Deli display cabinet', to: '/products/50' },
                        { label: 'Upright-glass display counter', to: '/products/17' },
                        { label: 'Static refrigerated counter', to: '/products/28' },
                        { label: 'Ventilated refrigerated counter', to: '/products/33' },
                        { label: 'Compare flat, upright and curved display glass', to: '/blog/duz-camli-bombe-camli-reyon-dolabi-farklari' },
                    ],
                },
                {
                    heading: 'Deli counter measurements and a store example',
                    paragraphs: ['Measure external cabinet space and usable display area separately. For facing units, sketch both lines and record the clear aisle left between them. Include working space on the staff side.', 'At Yağız Çiftliğim in Beylikdüzü, the cheese and olive areas share a sales floor with glass-door dairy cabinets. The overhead photo shows the display lines and customer passage.'],
                    links: [{ label: 'Yağız Çiftliğim deli display project', to: '/referans/yagiz-ciftligim' }],
                },
                {
                    heading: 'Deli counter pricing and custom production',
                    paragraphs: ['Dimensions, glass design, service layout and industrial refrigeration equipment can change the quotation. Show adjacent counters on one sketch and check whether connections or other site work are included.', 'Send Pars Cooling your dimensions, products and preferred model. Include nearby refrigeration systems and worktops so the request can be assessed in context.'],
                    links: [{ label: 'Custom refrigeration cabinet quotation guide', to: '/blog/ozel-olcu-sogutma-dolabi-teklif-rehberi' }],
                },
            ],
            questions: [
                { question: 'Do deli counters and dairy cabinets serve the same purpose?', answer: 'Check the intended use of the selected model. Plan staff workspace for a serviced counter and shelf access and clear aisles for a customer-access cabinet.' },
                { question: 'Does the overall length tell me display capacity?', answer: 'Check usable internal dimensions, section widths and the size of the containers you plan to use.' },
                { question: 'What should I measure for a custom deli counter?', answer: 'Record counter length and depth, front and rear access, nearby equipment and the dimensions of product containers.' },
            ],
        },
    },
    'soguk-oda-fiyati-nasil-hesaplanir': {
        TR: {
            sections: [
                {
                    heading: 'Soğuk oda ölçüleri ve kullanım bilgileri',
                    paragraphs: [
                        'Soğuk hava deposu için iç uzunluk, genişlik ve yüksekliği ayrı yazın. Örneğin 3 m × 2 m × 2,5 m iç ölçülü bir oda 15 m³ hacme sahiptir. Bu örnek hacmi gösterir. Teklif için ayrıca depolanacak ürünleri, günlük giriş miktarını ve odanın hangi amaçla kullanılacağını belirtin.',
                        'Ürünün odaya hangi koşullarda gireceğini, kapının ne sıklıkta açılacağını ve girişte el arabası veya palet kullanılıp kullanılmayacağını paylaşın. Aynı hacimdeki odaların kullanım şartları ve gerekli soğutma grubu farklı olabilir.',
                    ],
                    links: [{ label: 'Soğuk hava deposu', to: '/products/97' }, { label: 'Donmuş muhafaza için soğuk hava deposu', to: '/products/98' }],
                },
                {
                    heading: 'Soğuk hava deposu maliyet kalemleri',
                    paragraphs: ['Yalıtım, kapı ve endüstriyel soğutma bileşenlerinin teklif üzerinde ayrı belirtilmesini isteyin. Bu bilgiler, iki soğuk oda fiyatını aynı kapsam üzerinden değerlendirmeye yardımcı olur.'],
                    table: {
                        headers: ['Maliyet kalemi', 'Teklifte kontrol edin'],
                        rows: [
                            ['Soğuk oda panelleri ve zemin', 'Panel ve yalıtım kapsamı, tavan ve zemin işleri.'],
                            ['Soğuk oda kapısı', 'Net geçiş ölçüsü, menteşeli veya sürgülü model ve ray veya kasa.'],
                            ['Soğutma sistemleri', 'Soğutma grubu, iç donanım, kontrol ve sahadaki bağlantı kapsamı.'],
                            ['Proje ve uygulama', 'Nakliye, montaj, devreye alma ve varsa ek işler.'],
                        ],
                    },
                    links: [{ label: 'Soğuk oda panelleri', to: '/products/102' }, { label: 'Menteşeli soğuk oda kapısı', to: '/products/105' }, { label: 'Sürgülü soğuk oda kapısı', to: '/products/106' }],
                },
                {
                    heading: 'Metrekare başına soğuk oda fiyatı neyi gösterir?',
                    paragraphs: [
                        'Metrekare bilgisi projenin büyüklüğünü tarif etmeye yardımcı olur. Bunun zemin alanı mı, panel alanı mı olduğunu teklif üzerinde sorun. Oda yüksekliği, kapılar, yalıtım veya soğutma sistemi değiştiğinde metrekare başına verilen iki rakam farklı işleri kapsayabilir.',
                        'Benzer alan ölçüsüne sahip iki tekliften birinde yalnızca panel ve kapı, diğerinde soğutma grubu ve montaj da yer alabilir. Karşılaştırmaya oda iç ölçüsü, hedef çalışma koşulu ve dahil olan kalemlerden başlayın.',
                    ],
                    links: [{ label: 'Soğuk oda soğutma grubu seçim rehberi', to: '/blog/soguk-oda-sogutma-grubu-secim-rehberi' }],
                },
                {
                    heading: 'Özel ölçü soğuk oda teklifi nasıl hazırlanır?',
                    paragraphs: [
                        'Pars Soğutma’ya net iç ölçüleri, yerleşim krokisini, ürün türünü, kullanım düzenini ve proje yerini iletin. Kapının açıldığı alanı ve cihaz için ayırdığınız yeri işaretleyin. Mevcut depoyu yeniliyorsanız kullanılmaya devam edecek parçaları belirtin.',
                        'Soğuk hava deposu fiyat teklifi bu bilgilerle değerlendirilir. PVC perde gibi bir ekipman düşünüyorsanız bunu da ayrı yazın. Fiyatı karşılaştırırken özel ölçü üretim, soğutma sistemleri ve montaj kapsamını yazılı olarak kontrol edin.',
                    ],
                    links: [{ label: 'Soğuk oda PVC şerit perde seçim rehberi', to: '/blog/soguk-oda-pvc-serit-perde-secimi' }],
                },
            ],
            questions: [
                { question: 'Soğuk oda fiyatı sadece oda hacmiyle hesaplanır mı?', answer: 'Fiyat için iç ölçülere ek olarak depolanan ürün, kapı trafiği, yalıtım ve seçilen soğutma donanımı gerekir.' },
                { question: 'Soğuk hava deposu maliyetine montaj dahil mi?', answer: 'Montaj kapsamı teklife göre değişir. Nakliye, montaj, bağlantı ve devreye alma adımlarının hangilerinin fiyata dahil olduğunu yazılı isteyin.' },
                { question: 'Mevcut soğuk oda için sadece panel veya kapı teklifi alabilir miyim?', answer: 'İhtiyacınız olan parçayı, ölçülerini ve mevcut durumu gösteren fotoğrafları gönderin. Uyum ve tedarik kapsamı proje bilgileriyle değerlendirilir.' },
            ],
        },
        EN: {
            sections: [
                {
                    heading: 'Cold-room dimensions and usage',
                    paragraphs: ['Record internal length, width and height. For example, a room measuring 3 m × 2 m × 2.5 m internally has a volume of 15 m³. Add the stored products, daily incoming quantities and intended use to help define the project.', 'Describe the condition of incoming products, how often the door opens and whether staff use trolleys or pallets. Rooms of the same size may have different refrigeration requirements.'],
                    links: [{ label: 'Cold storage room', to: '/products/97' }, { label: 'Cold storage room for frozen products', to: '/products/98' }],
                },
                {
                    heading: 'Cold storage room cost items',
                    paragraphs: ['Ask for insulation, doors and industrial refrigeration to be listed separately so that comparable quotes can be reviewed on the same basis.'],
                    table: {
                        headers: ['Cost item', 'Check in the quote'],
                        rows: [['Panels and floor', 'Insulation, panels, ceiling and floor work.'], ['Cold-room door', 'Clear opening, hinged or sliding design, frame or track.'], ['Refrigeration system', 'Equipment, controls and site connections.'], ['Site work', 'Delivery, installation, commissioning and any additional work.']],
                    },
                    links: [{ label: 'Cold-room panels', to: '/products/102' }, { label: 'Hinged cold-room door', to: '/products/105' }, { label: 'Sliding cold-room door', to: '/products/106' }],
                },
                {
                    heading: 'What do cold-room prices per square metre cover?',
                    paragraphs: ['Ask whether the area refers to the floor or the panels. Changes in height, doors, insulation or refrigeration can alter what a price per square metre covers.', 'One quote may cover panels and a door, while another includes refrigeration equipment and installation. Compare internal dimensions, operating requirements and line items first.'],
                    links: [{ label: 'Cold-room refrigeration selection guide', to: '/blog/soguk-oda-sogutma-grubu-secim-rehberi' }],
                },
                {
                    heading: 'Requesting a custom cold-room quote',
                    paragraphs: ['Send Pars Cooling your internal dimensions, sketch, products, working pattern and site location. Mark the doorway and equipment space, and identify any existing components you intend to reuse.', 'List accessories such as a PVC strip curtain separately. When comparing prices, check the confirmed scope of custom fabrication, refrigeration and installation.'],
                    links: [{ label: 'Cold-room PVC strip curtain guide', to: '/blog/soguk-oda-pvc-serit-perde-secimi' }],
                },
            ],
            questions: [
                { question: 'Can cold-room price be calculated from volume alone?', answer: 'Product, doorway traffic, insulation and refrigeration requirements also affect the quote.' },
                { question: 'Does a cold storage room quote include installation?', answer: 'Check the quote for delivery, installation, connections and commissioning. The scope can vary by project.' },
                { question: 'Can I ask for panels or a door for an existing cold room?', answer: 'Send the part you need, relevant dimensions and photos. Compatibility and supply can then be assessed.' },
            ],
        },
    },
    'paslanmaz-calisma-tezgahi-secim-rehberi': {
        TR: {
            sections: [
                {
                    heading: 'Ara raflı, dolaplı ve evyeli tezgâh arasındaki fark',
                    paragraphs: ['Paslanmaz çalışma tezgâhının üstünde yapılacak işi belirledikten sonra alt bölümü planlayın. Ara raf araçlara açık erişim sağlar. Dolaplı paslanmaz tezgâh, malzemelerin kapak arkasında saklanacağı bir düzen sunar. Evyeli tezgâh için su ve gider bağlantılarının konumu önemlidir.'],
                    table: {
                        headers: ['Tezgâh seçeneği', 'Planı belirleyen ihtiyaç'],
                        rows: [
                            ['Ara raflı paslanmaz çalışma tezgâhı', 'Hazırlık yüzeyi ve kullanım sırasında kolay ulaşılacak ekipman.'],
                            ['Dolaplı çalışma tezgâhı', 'Kapalı saklama ve kapak açıldığında kalan erişim.'],
                            ['Evyeli paslanmaz tezgâh', 'Yıkama alanı, evye konumu ve yanındaki boş çalışma yüzeyi.'],
                        ],
                    },
                    links: [{ label: 'Ara raflı çalışma tezgâhı', to: '/products/80' }, { label: 'Dolaplı paslanmaz çalışma tezgâhı', to: '/products/108' }, { label: 'Evyeli dolaplı paslanmaz tezgâh', to: '/products/86' }, { label: 'Paslanmaz çalışma tezgâhı', to: '/products/87' }],
                },
                {
                    heading: 'Paslanmaz mutfak tezgâhı ölçüleri nasıl belirlenir?',
                    paragraphs: [
                        'Duvar boyunca ayrılan uzunluğu, tezgâh derinliğini ve komşu ekipmanın üst yüzey yüksekliğini ölçün. Kolon derinliği, priz veya boru konumu ve kapı açılımını krokide gösterin. Hazırlık kabı, tartı veya kesim tahtası kullanılacaksa ölçülerini de ekleyin.',
                        'Tezgâhın altına araç veya kap yerleştirecekseniz bu malzemeleri sığdıracak raf açıklığını belirtin. Evyeli model için su ve giderin yerini işaretleyin. Personelin uzun bir tepsiyi tezgâha getireceği güzergâhı da kontrol edin.',
                    ],
                },
                {
                    heading: 'Hazırlık hattını endüstriyel soğutma ekipmanıyla planlayın',
                    paragraphs: [
                        'Endüstriyel mutfak tezgâhının yakınında tezgâh altı buzdolabı veya dikey paslanmaz dolap bulunacaksa kapakların aynı koridora nasıl açıldığını kontrol edin. Soğutma ve hazırlık ekipmanları birlikte kullanılacağından, ürünün dolaptan çalışma yüzeyine taşınacağı yolu krokiye ekleyin.',
                        'Soğutma sistemleri ve tezgâh farklı ekipmanlardır. Ortak yerleşimde buzdolabının havalandırma ve servis boşluğunu seçilen modelin bilgilerine göre doğrulayın. Tezgâhın yan yüzeyi veya rafları bu alanı kapatmamalı.',
                    ],
                    links: [{ label: 'Tezgâh altı buzdolabı', to: '/products/79' }, { label: 'Dikey paslanmaz buzdolabı', to: '/products/77' }],
                },
                {
                    heading: 'Paslanmaz çalışma tezgâhı fiyatı ve özel ölçü teklifi',
                    paragraphs: [
                        'Paslanmaz çalışma tezgâhı fiyatı ölçü, üst yüzey, raf veya dolap düzeni ve evye gibi donanımlara göre değişebilir. Özel ölçü paslanmaz tezgâh için Pars Soğutma’ya net ölçüyü, planlanan işi ve kullanılacak araçları gösteren krokiyi iletin.',
                        'Teklifi karşılaştırırken paslanmaz malzeme özellikleri, istenen kapak ve raflar, evye ve saha bağlantılarından hangilerinin dahil olduğunu yazılı olarak kontrol edin.',
                    ],
                },
            ],
            questions: [
                { question: 'Paslanmaz tezgâh ölçüsü için sadece uzunluk yeterli mi?', answer: 'Derinlik, üst yüzey yüksekliği, bağlantı yerleri ve komşu ekipmanlarla aradaki geçiş de değerlendirilir.' },
                { question: 'Dolaplı mı, ara raflı paslanmaz tezgâh mı seçmeliyim?', answer: 'Saklanacak araçlara erişim şeklinizi düşünün. Açık raf ve kapaklı dolabı malzeme boyutları ve geçiş alanına göre karşılaştırın.' },
                { question: 'Evyeli paslanmaz tezgâh için hangi bilgileri iletmeliyim?', answer: 'Tezgâh ölçülerini, evyenin konumunu, tesisat bağlantı yerlerini ve yıkama yanında gereken çalışma yüzeyini belirtin.' },
            ],
        },
        EN: {
            sections: [
                {
                    heading: 'Shelved, enclosed and sink-equipped worktables',
                    paragraphs: ['Start with the work surface, then decide what should go beneath it. Open shelves provide direct access, an enclosed cabinet stores equipment behind doors, and a sink-equipped table needs provision for water and drainage.'],
                    table: {
                        headers: ['Worktable option', 'Plan for'],
                        rows: [['Worktable with a mid-shelf', 'Prep space and equipment you need to reach quickly.'], ['Enclosed stainless steel worktable', 'Covered storage and space to open doors.'], ['Stainless steel sink table', 'Washing, sink location and free worktop space beside it.']],
                    },
                    links: [{ label: 'Worktable with a mid-shelf', to: '/products/80' }, { label: 'Enclosed stainless steel worktable', to: '/products/108' }, { label: 'Stainless steel sink table with cabinet', to: '/products/86' }, { label: 'Stainless steel worktable', to: '/products/87' }],
                },
                {
                    heading: 'Measuring for a stainless steel worktable',
                    paragraphs: ['Measure the available length and depth and the height of adjoining worktops. Mark columns, pipes, outlets and door swings. Include the size of work tools such as trays, scales or chopping boards.', 'For storage below the worktop, measure the items and needed shelf clearance. Mark water and waste connections if you need a sink. Check whether staff can carry full trays to the table.'],
                },
                {
                    heading: 'Plan the prep line around refrigeration equipment',
                    paragraphs: ['Check whether nearby undercounter or upright refrigerators open into the same aisle as the worktable. Show how staff will transfer products from refrigeration to the prep surface.', 'Confirm ventilation and service clearance for the exact refrigerator model. The table should fit without obstructing the available space for access or airflow.'],
                    links: [{ label: 'Undercounter refrigerator', to: '/products/79' }, { label: 'Upright stainless steel refrigerator', to: '/products/77' }],
                },
                {
                    heading: 'Worktable pricing and custom dimensions',
                    paragraphs: ['Dimensions, worktop design, storage and a sink can affect pricing. Send Pars Cooling your measurements, tasks and a sketch that shows tools and equipment.', 'Compare quotes by material specification, included shelves and doors, sink and any site connections.'],
                },
            ],
            questions: [
                { question: 'Is length enough to size a stainless steel worktable?', answer: 'Check depth, height, connection points and access alongside other equipment.' },
                { question: 'Should I choose open shelving or a cabinet underneath?', answer: 'Compare how staff will reach items, their size and the space needed for doors.' },
                { question: 'What details are needed for a sink worktable?', answer: 'Include dimensions, sink location, connection points and worktop space required next to the sink.' },
            ],
        },
    },
    'soguk-oda-sogutma-grubu-secim-rehberi': {
        TR: {
            sections: [
                {
                    heading: 'Monoblok, split ve merkezi soğutma sistemleri arasındaki fark',
                    paragraphs: [
                        'Monoblok soğutma sistemi, kompakt bir ünitenin oda duvarı veya tavanı için değerlendirildiği bir seçenektir. Split soğutma grubunda ise oda içindeki ve dışındaki bileşenlerin konumları ayrı planlanır. Merkezi soğutma sistemleri, birden fazla soğutma noktasının birlikte ele alındığı projelerde değerlendirilebilir.',
                        'Oda içine veya dışına hangi ünitenin konulacağı, cihazın büyüklüğü ve montaj payları model çiziminde netleşir. Bağlantı ve servis yerlerini teklif öncesi aynı planda gösterin.',
                    ],
                    table: {
                        headers: ['Soğutma grubu', 'Projede kontrol edin'],
                        rows: [
                            ['Monoblok soğutma grubu', 'Cihaz açıklığı, duvar veya tavan yerleşimi ve bakım erişimi.'],
                            ['Split soğutma grubu', 'İç ve dış ekipman konumu, hat güzergâhı ve kot farkı.'],
                            ['Merkezi soğutma sistemi', 'Bağlanacak odalar veya reyonlar, farklı kullanım koşulları ve kontrol düzeni.'],
                        ],
                    },
                    links: [{ label: 'Monoblok soğutma sistemleri', to: '/products/93' }, { label: 'Split soğutma grubu', to: '/products/94' }, { label: 'Merkezi soğutma sistemleri', to: '/products/95' }, { label: 'Bireysel soğutma grupları', to: '/products/96' }],
                },
                {
                    heading: 'Soğuk oda soğutma grubu kapasitesi için hangi bilgiler gerekir?',
                    paragraphs: [
                        'İç uzunluk, genişlik ve yükseklikle başlayın. Odaya girecek ürün türünü, günlük miktarı ve ürünün giriş koşullarını belirtin. Hedef çalışma koşulu, yalıtım ve kapı kullanımının da soğutma ihtiyacını etkileyebileceğini hesaba katın.',
                        'Aynı büyüklükte iki odadan biri gün boyu sık açılıyor, diğeri daha seyrek kullanılıyorsa ayrı ayrı değerlendirilir. Uygun kapasitenin, oda ve ürün bilgileri üzerinden teknik olarak belirlenmesini isteyin.',
                    ],
                    items: ['Odanın net iç ölçüleri ve mevcut panel bilgisi.', 'Depolanacak ürünler, günlük giriş miktarı ve hedef kullanım.', 'Kapı açıklığı, açılma sıklığı ve çalışma ortamı.', 'Cihazın düşünüldüğü yer ve mevcut tesisatı gösteren kroki.'],
                },
                {
                    heading: 'Endüstriyel soğutma ekipmanının yerini planlayın',
                    paragraphs: [
                        'Soğuk odayı çizdikten sonra servis erişimini ve ünitenin bulunduğu alanın çevre koşullarını işaretleyin. Split soğutma grubu için iki ekipman yeri arasındaki olası güzergâhı gösterin. Monoblok için montaj açıklığı ve çevresindeki boşluk model çizimiyle doğrulanır.',
                        'Birden fazla soğutma noktası varsa her biri için ürün, oda veya reyon ölçüsü ve kullanım düzeni bilgilerini ayrı yazın. Böylece merkezi sistem ile bireysel grupların kapsadığı işler aynı liste üzerinden konuşulabilir.',
                    ],
                },
                {
                    heading: 'Soğutma grubu fiyatı ve proje teklifi',
                    paragraphs: [
                        'Soğuk oda soğutma grubu fiyatını karşılaştırırken cihaz, kontrol donanımı, varsa bağlantı işleri ve devreye alma kapsamını ayrı okuyun. Tekliflerde kullanılan çalışma koşulları da aynı olmalı. Sadece cihaz adını ve fiyatını karşılaştırmak, proje kapsamını görmeyi zorlaştırır.',
                        'Projeye özel endüstriyel soğutma sistemleri için Pars Soğutma’ya oda ölçülerini, depolanacak ürünleri, çalışma koşullarını ve cihaz yerleşimini iletin. Teklif, paylaştığınız ihtiyaçlara göre değerlendirilir.',
                    ],
                    links: [{ label: 'Soğuk hava deposu maliyeti ve teklif rehberi', to: '/blog/soguk-oda-fiyati-nasil-hesaplanir' }],
                },
            ],
            questions: [
                { question: 'Monoblok ile split soğutma grubu arasındaki temel fark nedir?', answer: 'Monoblok kompakt bir yerleşim seçeneğidir. Split grupta oda içi ve dışı ekipman yerleri ile aradaki bağlantı güzergâhı ayrı değerlendirilir.' },
                { question: 'Soğutma grubu oda metrekaresine göre seçilir mi?', answer: 'Oda hacmine ek olarak ürün, yalıtım, kapı açılma düzeni, çevre ve hedef çalışma koşulları gerekir.' },
                { question: 'Merkezi soğutma teklifi için her odanın bilgisi gerekli mi?', answer: 'Oda veya reyonların ölçülerini, ürünlerini ve kullanımlarını ayrı ayrı belirtin. Böylece her noktanın şartları projede değerlendirilebilir.' },
            ],
        },
        EN: {
            sections: [
                {
                    heading: 'Monoblock, split and central refrigeration systems',
                    paragraphs: ['A monoblock unit offers a compact option at a cold-room wall or ceiling. Split refrigeration uses separately placed equipment inside and outside the room. Central refrigeration can be considered where several refrigeration loads are planned together.', 'Confirm equipment positions and clearances against the model drawing. Show connections and service access on the project sketch.'],
                    table: {
                        headers: ['System', 'Check in the project'],
                        rows: [['Monoblock unit', 'Opening, wall or ceiling position and service access.'], ['Split refrigeration unit', 'Indoor and external equipment locations, route between them and elevation difference.'], ['Central refrigeration', 'Connected rooms or cabinets, operating conditions and controls.']],
                    },
                    links: [{ label: 'Monoblock refrigeration systems', to: '/products/93' }, { label: 'Split refrigeration unit', to: '/products/94' }, { label: 'Central refrigeration systems', to: '/products/95' }, { label: 'Individual refrigeration units', to: '/products/96' }],
                },
                {
                    heading: 'Information needed for refrigeration capacity selection',
                    paragraphs: ['Provide internal dimensions, products, incoming quantities and the condition of products entering the room. Include target conditions, insulation and doorway use.', 'Rooms of the same size may need separate assessments if their door traffic differs. Have the capacity assessed from the project details.'],
                    items: ['Internal room dimensions and panel information.', 'Stored products, daily incoming quantities and intended use.', 'Door opening, frequency and working environment.', 'Equipment position and a site sketch.'],
                },
                {
                    heading: 'Plan equipment location and service access',
                    paragraphs: ['Mark service clearance and ambient conditions around the unit. For a split unit, show a proposed route between the equipment positions. Check monoblock clearances against the selected unit’s drawing.', 'For multiple refrigeration loads, list product, room or cabinet dimensions and usage for each one. Compare which parts of the project a central or individual system would cover.'],
                },
                {
                    heading: 'Refrigeration unit pricing and quotes',
                    paragraphs: ['Compare equipment, controls, connections and commissioning as separate items. Ask whether the quotes use the same operating assumptions.', 'Send Pars Cooling your dimensions, products, operating requirements and equipment layout for a project quotation.'],
                    links: [{ label: 'Cold storage room cost and quotation guide', to: '/blog/soguk-oda-fiyati-nasil-hesaplanir' }],
                },
            ],
            questions: [
                { question: 'What is the main difference between monoblock and split refrigeration?', answer: 'Monoblock offers a compact equipment layout. Split systems require separate equipment locations and a route between them.' },
                { question: 'Can I choose a refrigeration unit from floor area?', answer: 'The assessment also needs internal volume, product, insulation, door traffic, surroundings and target operating conditions.' },
                { question: 'Do I need dimensions for each room in a central system?', answer: 'List dimensions, products and intended use for each room or display so each load can be considered.' },
            ],
        },
    },
};
