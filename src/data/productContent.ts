import type { TranslatedString } from './products/types';

export type ProductEditorialContent = {
    description: string;
    introduction: string;
    selection: string[];
    questions: { question: string; answer: string }[];
};

// Editorial copy is based on catalogue names, existing photographs and listed
// version options. It is not a source of engineering specifications. Keep model
// identities and numerical claims out of this copy until production confirms them.
export const productContent: Partial<Record<number, Record<keyof TranslatedString, ProductEditorialContent>>> = {
    14: {
        TR: {
            description: 'Yatay ekler pasta dolabı: porsiyon tatlıları tepsi düzeninde sergileyin. Camlı sunumu ve servis yerleşimini inceleyerek pastaneniz için teklif alın.',
            introduction: 'Yatay Ekler Pasta Dolabı, ekler ve porsiyon tatlıları geniş bir tezgâh boyunca yan yana sunmak isteyen pastane ve kafeler için bir teşhir seçeneğidir. Alçak camlı yapısı, ürünlerin üstten görülmesine olanak verir. Yerleşimi planlarken tatlı tepsilerinin dizilimini, müşterinin seçim yaptığı yönü ve personelin servis alanını birlikte değerlendirin.',
            selection: [
                'Kullandığınız ekler tepsilerinin en ve boy ölçülerini, aynı anda sunacağınız çeşit sayısıyla birlikte paylaşın.',
                'Tezgâh uzunluğunu belirlerken kasa geçişi ile personelin servis için kullanacağı arka alanı ölçün.',
                'Sunulacak tatlılara göre soğutmalı veya soğutmasız versiyonu ve gerekli çalışma koşullarını teklif kapsamında netleştirin.',
            ],
            questions: [
                { question: 'Ekler için yatay teşhir düzeni nasıl planlanır?', answer: 'Çeşitleri tepsiler üzerinde yan yana sıralayarak başlayın. Tepsi ölçüleri, porsiyon sayısı ve servis yönü birlikte değerlendirildiğinde gerekli sergileme alanı daha doğru belirlenir.' },
                { question: 'Bu model yalnızca ekler sunumu için mi değerlendirilir?', answer: 'Diğer porsiyon tatlılar için de yerleşim değerlendirilebilir. Kullanılacak tabak veya tepsinin ölçüsü ile her ürünün saklama koşulları ayrıca kontrol edilmelidir.' },
            ],
        },
        EN: {
            description: 'Horizontal eclair display cabinet for a tray-based dessert presentation. Explore the glass display and service layout and request a bakery quote.',
            introduction: 'The Horizontal Eclair Pastry Cabinet is a display option for bakeries and cafes presenting eclairs and individual desserts side by side. Its low glass enclosure lets customers view the products from above. Plan the tray arrangement together with the customer viewing direction and the space staff need to serve.',
            selection: [
                'Share your eclair tray dimensions and the number of varieties you want to display together.',
                'Measure the rear service area and checkout passage when choosing the counter length.',
                'Confirm the refrigerated or non-refrigerated version and its operating requirements for the desserts on your menu.',
            ],
            questions: [
                { question: 'How should an eclair display be arranged?', answer: 'Start by arranging varieties side by side on your trays. Tray dimensions, portion count and service direction together determine the display area needed.' },
                { question: 'Can this layout be considered for other individual desserts?', answer: 'Other individual desserts can be assessed too. Check their plate or tray dimensions and individual storage requirements before choosing a configuration.' },
            ],
        },
    },
    15: {
        TR: {
            description: 'VENUS pasta teşhir dolabı: camlı, raflı vitrin ve dekoratif ön yüz. Pasta sunumunu, servis erişimini ve işletmenizdeki yerleşimi değerlendirin.',
            introduction: 'VENUS-Pasta Teşhir Dolabı, camlı sergileme alanını dekoratif bir ön yüzle birleştiren pastane vitrini seçeneğidir. Görseldeki düz hatlı ve raflı sunum, ürünleri müşteri cephesinden karşılaştırmaya uygundur. Pasta yüksekliği, tabak ölçüsü ve servis erişimi, vitrinin işletmenizdeki yerini belirlerken birlikte ele alınmalıdır.',
            selection: [
                'Bütün pasta, dilim pasta ve diğer tatlıların tabak ölçüleri ile yüksekliklerini listeleyin.',
                'Cam ve raf düzenini, müşterinin vitrine baktığı mesafe ve personelin ürüne erişimi açısından değerlendirin.',
                'Dekoratif ön yüz için beğendiğiniz galeri görselini teklif talebine ekleyin; malzeme ve uygulama kapsamını görüşün.',
            ],
            questions: [
                { question: 'VENUS modelinde raf yerleşimi nasıl seçilir?', answer: 'En yüksek ürününüzü ve tabak ölçülerinizi başlangıç alın. Rafların arasındaki kullanılabilir alan ve servis erişimi, seçilecek düzen için teklif aşamasında kontrol edilir.' },
                { question: 'Galerideki dekor teklifin standart kapsamı mı?', answer: 'Görseller farklı uygulamaları içerebilir. İstediğiniz ön yüzü fotoğrafla belirtin; dekor malzemesi ve teklif kapsamı seçilen uygulama için netleştirilir.' },
            ],
        },
        EN: {
            description: 'VENUS pastry display cabinet with a glass showcase and decorative front. Review cake presentation, service access and the layout for your business.',
            introduction: 'The VENUS Pastry Showcase combines a glass display area with a decorative front. The straight lines and shelf arrangement shown in the photograph provide a customer-facing view of the selection. Consider cake height, plate dimensions and staff access together when planning its position in your bakery.',
            selection: [
                'List the plate dimensions and heights of whole cakes, cake slices and other desserts.',
                'Assess the glass and shelf arrangement from both the customer viewing position and the staff service side.',
                'Attach your preferred gallery photograph to discuss the front finish and its quotation scope.',
            ],
            questions: [
                { question: 'How do I choose the shelf arrangement for VENUS?', answer: 'Start with your tallest product and its plate dimensions. Usable shelf clearance and serving access are checked for the chosen arrangement during quotation.' },
                { question: 'Is every finish in the gallery included as standard?', answer: 'Gallery images may show different installations. Identify the front finish you want with a photograph so its material and quotation scope can be confirmed.' },
            ],
        },
    },
    35: {
        TR: {
            description: 'Dikey pasta dolabı: yuvarlak camlı, çok raflı vitrin görünümü. Pasta ölçülerine ve mağaza yerleşimine göre teşhir seçeneğini değerlendirin.',
            introduction: 'Dikey Pasta Dolabı, görseldeki yuvarlak camlı gövdesi ve üst üste raflarıyla pasta sunumunu düşey bir düzende toplar. Kafe veya pastane içinde vitrinin çevresinden görülebildiği bir yerleşim düşünülebilir. Seçim yaparken yalnızca dolabın dış ölçüsünü değil, sunulacak pastaların çapını, yüksekliğini ve servis erişimini de değerlendirin.',
            selection: [
                'En büyük pasta tabağının çapını ve pasta yüksekliğini ölçerek kullanılabilir raf alanını görüşün.',
                'Vitrinin çevresindeki müşteri dolaşımını ve servis tarafındaki açılma alanını planlayın.',
                'Yuvarlak gövdeye ait dış ölçüleri ve raf düzenini seçilen modelin çizimi üzerinden doğrulatın.',
            ],
            questions: [
                { question: 'Dikey pasta vitrini için hangi ölçüler gereklidir?', answer: 'Yerleşim alanının eni, derinliği ve yüksekliğine ek olarak en büyük pasta tabağınızın çapını paylaşın. Bunlar raf kullanımını ve geçiş alanını değerlendirmeye yardımcı olur.' },
                { question: 'Yuvarlak vitrinin rafları döner mi?', answer: 'Yuvarlak gövde biçimi tek başına döner raf özelliği anlamına gelmez. Böyle bir ihtiyacınız varsa teklif talebinde belirtin ve seçilen modelin donanımını teyit edin.' },
            ],
        },
        EN: {
            description: 'Vertical pastry cabinet with a rounded glass showcase and stacked shelves. Assess cake dimensions, viewing angles and the layout for your shop.',
            introduction: 'The Vertical Pastry Cabinet uses the rounded glass body and stacked shelves shown in the photograph to organise cakes vertically. A position visible from several sides can be considered in a cafe or bakery. Assess cake diameter, cake height and serving access alongside the cabinet footprint.',
            selection: [
                'Measure your largest cake plate and cake height to discuss the usable shelf area.',
                'Plan customer circulation around the cabinet and opening clearance on the service side.',
                'Confirm the rounded body dimensions and shelf arrangement against the selected model drawing.',
            ],
            questions: [
                { question: 'Which measurements are needed for a vertical cake display?', answer: 'Share the available width, depth and height, along with your largest cake plate diameter. These help assess shelf use and circulation space.' },
                { question: 'Does the rounded display have rotating shelves?', answer: 'A rounded body does not by itself indicate rotating shelves. Mention that requirement when requesting a quote and confirm the equipment on the selected model.' },
            ],
        },
    },
    54: {
        TR: {
            description: 'Pasta ve çikolata dolabı: raflı cam vitrinle ürün çeşitlerini sergileyin. Sunum düzenini ve farklı ürünlerin çalışma koşullarını birlikte planlayın.',
            introduction: 'Pasta - Çikolata Dolabı, raflı cam vitriniyle pasta ve çikolata çeşitlerinin sunumunu planlamak için değerlendirilebilir. Görseldeki geniş cephe, farklı ürün gruplarını ayrı raflarda düzenleme fikri verir. Aynı vitrinde yer alacak ürünlerin saklama koşulları ise ürün reçetelerine göre karşılaştırılmalı ve seçilecek donanımla eşleştirilmelidir.',
            selection: [
                'Pasta, çikolata ve kutulu ürünlerin hangilerinin birlikte sergileneceğini belirleyin.',
                'Tabak, tepsi ve ambalaj ölçülerini raf yerleşimi için paylaşın.',
                'Çikolata için sıcaklık veya nem kontrolü ihtiyacı varsa bunu ayrıca belirtin; modelin kontrol donanımını teyit edin.',
            ],
            questions: [
                { question: 'Pasta ve çikolata aynı vitrinde sergilenebilir mi?', answer: 'Birlikte sunum, ürünlerin gerektirdiği saklama koşullarının uyumuna bağlıdır. Ürün listenizi ve üretici koşullarını paylaşarak seçilen vitrinin bu kullanıma uygunluğunu değerlendirin.' },
                { question: 'Ürün adında çikolata geçmesi nem kontrolü olduğu anlamına gelir mi?', answer: 'Hayır. Nem kontrolü ve çalışma aralığı ayrı teknik özelliklerdir. Bu özellikler gerekiyorsa seçilen konfigürasyonun teklifinde açıkça yer almalıdır.' },
            ],
        },
        EN: {
            description: 'Pastry and chocolate cabinet with a glass shelf display. Plan product arrangement and discuss the operating requirements of your dessert selection.',
            introduction: 'The Pastry and Chocolate Cabinet provides a glass shelf display to consider for cakes and chocolates. Its wide front suggests an arrangement with different selections on separate shelves. Products sharing a showcase must have compatible storage requirements, which should be checked against the chosen equipment.',
            selection: [
                'Identify which cakes, chocolates and boxed products you intend to display together.',
                'Share plate, tray and packaging dimensions when discussing shelf layout.',
                'Specify any chocolate temperature or humidity control requirement and confirm the model equipment.',
            ],
            questions: [
                { question: 'Can cakes and chocolates share the same showcase?', answer: 'That depends on whether their storage requirements are compatible. Share the product list and producer requirements to assess the selected configuration for this use.' },
                { question: 'Does the chocolate label imply humidity control?', answer: 'No. Humidity control and the operating range are separate specifications. If required, they should be stated explicitly in the quotation for the chosen configuration.' },
            ],
        },
    },
    55: {
        TR: {
            description: 'Ekler pasta dolabı: alçak camlı tezgâhta porsiyon tatlı sunumu. Tepsi yerleşimini, servis alanını ve dekor seçeneklerini inceleyin.',
            introduction: 'Ekler Pasta Dolabı, ekler ve küçük porsiyon tatlıları alçak camlı bir tezgâhta sunmak isteyen işletmeler için bir seçenektir. Görselde farklı tatlıların yan yana sergilendiği bir düzen yer alır. Tepsilerin değişimi ve personelin ürüne erişimi, müşteri cephesindeki görünüm kadar yerleşim kararını etkiler.',
            selection: [
                'Ekler, tart ve diğer porsiyon tatlıların servis kaplarını örnek ölçüleriyle birlikte listeleyin.',
                'Tepsi değişimi için servis tarafındaki çalışma alanını ve dolaba yaklaşma yönünü değerlendirin.',
                'Ön yüz kaplamasını mevcut kasa ve diğer pastane tezgâhlarıyla birlikte ele alın.',
            ],
            questions: [
                { question: 'Ekler tepsilerinin tamamı vitrine sığar mı?', answer: 'Tepsi sayısı, tepsilerin dış ölçülerine ve seçilen ünitenin kullanılabilir iç alanına bağlıdır. Teklifte tepsi ölçülerini paylaşarak bir yerleşim planı isteyin.' },
                { question: 'Fotoğraftaki ön yüz başka tezgâhlarla eşleştirilebilir mi?', answer: 'Birlikte kullanılacak tezgâhların fotoğraflarını ve beğendiğiniz kaplama örneğini paylaşın. Malzeme, renk ve birleşim ayrıntıları proje için değerlendirilir.' },
            ],
        },
        EN: {
            description: 'Eclair pastry cabinet for individual desserts in a low glass counter. Explore tray arrangement, staff access and front finish choices.',
            introduction: 'The Eclair Pastry Cabinet is an option for presenting eclairs and small desserts in a low glass counter. The photograph shows different desserts arranged side by side. Tray replacement and staff access matter as much as the customer-facing presentation when planning its location.',
            selection: [
                'List the serving containers for eclairs, tarts and other desserts with sample dimensions.',
                'Assess working clearance and the approach direction on the service side for tray changes.',
                'Consider the front finish together with your checkout and other bakery counters.',
            ],
            questions: [
                { question: 'Will all of my eclair trays fit?', answer: 'Tray count depends on outside tray dimensions and the usable internal area of the chosen unit. Share those dimensions and request a tray layout with your quotation.' },
                { question: 'Can the photographed front be coordinated with other counters?', answer: 'Share photographs of the adjacent counters and your preferred finish sample. Materials, colours and junction details can then be assessed for the project.' },
            ],
        },
    },
    56: {
        TR: {
            description: 'Pasta dolabı: yatay camlı sunumla tatlı çeşitlerinizi yan yana düzenleyin. Pasta tabakları, servis akışı ve vitrin yerleşimi için bilgi alın.',
            introduction: 'Pasta Dolabı, bütün pasta, dilim pasta ve porsiyon tatlıları yatay bir camlı tezgâhta sunmak için değerlendirilebilir. Menüdeki ürün dağılımı, her çeşit için ayrılacak teşhir alanını belirlemeye yardımcı olur. Pastane veya kafe yerleşiminde müşterinin seçim yaptığı cephe ile personelin tabak ve tepsi değişimi yaptığı alanı birlikte planlayın.',
            selection: [
                'Menünüzdeki bütün pasta ve porsiyon tatlıların yaklaşık teşhir dağılımını belirleyin.',
                'Beğendiğiniz galeri görselini seçip tezgâhın yerleşeceği alanın en ve derinliğini paylaşın.',
                'Soğutma versiyonu, kullanılabilir iç alan ve servis erişimini seçilen uygulamanın teklifinde karşılaştırın.',
            ],
            questions: [
                { question: 'Bir pasta dolabı seçmeye nereden başlamalıyım?', answer: 'Ürün listenizi, en büyük pasta tabağınızı ve tezgâh için ayırdığınız alanı belirleyin. Bu bilgiler, teşhir düzeninin ve gerekli versiyonun değerlendirilmesini sağlar.' },
                { question: 'Benzer fotoğraflı iki pasta dolabı teknik olarak farklı mıdır?', answer: 'Fotoğraf veya sayfa adı tek başına teknik farkı göstermez. Karşılaştırdığınız sayfaları paylaşarak model kodunu, ölçüleri ve donanımı teklif üzerinde karşılaştırın.' },
            ],
        },
        EN: {
            description: 'Pastry cabinet with a horizontal glass presentation. Plan whole cakes, slices and individual desserts around your serving flow and counter space.',
            introduction: 'The Pastry Cabinet can be considered for presenting whole cakes, slices and individual desserts along a horizontal glass counter. The balance of products on your menu helps determine the area needed for each variety. Plan the customer viewing side together with the space staff need for changing plates and trays.',
            selection: [
                'Estimate the display balance between whole cakes and individual desserts on your menu.',
                'Choose a gallery image and share the available counter width and depth.',
                'Compare the refrigeration version, usable internal area and serving access in the quotation for that application.',
            ],
            questions: [
                { question: 'Where should I start when choosing a pastry cabinet?', answer: 'Prepare your product list, largest cake plate dimensions and available counter space. These help assess the display arrangement and the required version.' },
                { question: 'Do similar photographs indicate different technical models?', answer: 'A photograph or page name alone does not establish a technical difference. Share the pages you are comparing and check model codes, dimensions and equipment on the quotation.' },
            ],
        },
    },
    110: {
        TR: {
            description: 'Yatay pasta dolabı: alçak vitrinle tezgâh boyunca tatlı sunumu. Galeri uygulamalarını ve işletmenize uygun yerleşim ayrıntılarını değerlendirin.',
            introduction: 'Yatay Pasta Dolabı, alçak camlı vitrinde tatlıları tezgâh boyunca sergilemek isteyen işletmeler için değerlendirilebilir. Dekoratif gövde ve yatay sunum, müşteri girişinden kasaya uzanan satış alanıyla birlikte ele alınabilir. Beğendiğiniz uygulamayı seçerken pasta tabaklarının kapladığı alanı ve vitrinin çevresindeki müşteri dolaşımını da plana ekleyin.',
            selection: [
                'Tezgâhın müşteri girişinden, oturma alanından ve kasadan nasıl görüleceğini planlayın.',
                'Pasta tabakları ve tatlı tepsilerinin yerleşimi için gerekli iç alanı görüşün.',
                'Seçtiğiniz fotoğrafı referans gösterip gövde ölçüsünü, kaplama kapsamını ve soğutma düzenini teklif üzerinde netleştirin.',
            ],
            questions: [
                { question: 'Yatay vitrinin yerini seçerken nelere bakmalıyım?', answer: 'Müşterinin ürüne bakacağı yönü, personelin servis yolunu ve kasa sırasını birlikte düşünün. Tezgâh çevresindeki geçiş alanını yerleşim çizimine ekleyin.' },
                { question: 'Dekor seçimini yerleşimle birlikte nasıl değerlendirebilirim?', answer: 'Beğendiğiniz galeri fotoğrafını, mevcut mobilyanın görsellerini ve alan ölçülerini birlikte paylaşın. Ön yüz, yan kapak ve diğer tezgâhlarla birleşim ayrıntıları teklif kapsamında görüşülür.' },
            ],
        },
        EN: {
            description: 'Horizontal pastry cabinet with a low glass showcase. Explore gallery applications and discuss dessert presentation within your cafe or bakery layout.',
            introduction: 'The Horizontal Pastry Cabinet can be considered for presenting desserts along a low glass counter. Its decorative body and horizontal presentation can be assessed as part of the sales area from entrance to checkout. Include the footprint of cake plates and customer circulation around the showcase when choosing an application.',
            selection: [
                'Plan how the counter will be seen from the entrance, seating area and checkout.',
                'Discuss the internal area needed for your cake plates and dessert trays.',
                'Reference your selected photograph when confirming body dimensions, finishes and refrigeration arrangements in the quote.',
            ],
            questions: [
                { question: 'What matters when positioning a horizontal showcase?', answer: 'Consider customer viewing direction, staff serving routes and the checkout queue together. Include surrounding passage space in the layout drawing.' },
                { question: 'How can I assess the finish alongside the shop layout?', answer: 'Share a preferred gallery photograph, images of existing furniture and the available dimensions. Front finishes, side panels and junctions with other counters can be discussed within the quotation scope.' },
            ],
        },
    },
    57: {
        TR: {
            description: 'Yatay tip pasta dolabı: alçak camlı teşhir ve koyu gövde görünümü. Tatlı tepsilerini, servis yönünü ve pastane yerleşimini birlikte planlayın.',
            introduction: 'Yatay Tip Pasta Dolabı, görseldeki koyu gövdesi ve alçak camlı üst bölümüyle yatay bir tatlı sunumu oluşturur. Müşterinin ürünleri üstten görebildiği bu düzende tepsi dizilimi öne çıkar. Yerleşim çalışmasında ön yüz görünümüyle birlikte personelin dolaba yaklaşacağı yönü ve ürün yenileme alanını belirleyin.',
            selection: [
                'Tatlı tepsilerinin uzun kenarını hangi yönde kullanacağınızı yerleşim planında belirtin.',
                'Koyu gövde görünümünü mevcut tezgâh ve aydınlatma düzeninizle birlikte değerlendirin.',
                'Ürün yenileme ve temizlik için gereken erişim alanını seçilen çizim üzerinden kontrol edin.',
            ],
            questions: [
                { question: 'Alçak camlı vitrinde ürün yerleşimi neden önemlidir?', answer: 'Ürünler ağırlıklı olarak üstten görülür. Tabak yükseklikleri ve tepsi sıralaması, arkada kalan tatlıların görünürlüğü düşünülerek düzenlenmelidir.' },
                { question: 'Tezgâhın servis tarafını nasıl belirlemeliyim?', answer: 'Personelin çalışma yönünü ve ürün yenileme yolunu planınıza işaretleyin. Cam erişimi ve servis düzeni seçilecek uygulamanın çizimiyle birlikte değerlendirilir.' },
            ],
        },
        EN: {
            description: 'Horizontal type pastry cabinet with a low glass display and dark body. Plan dessert trays, serving direction and the layout of your bakery.',
            introduction: 'The Horizontal Type Pastry Cabinet presents a horizontal dessert layout with the dark body and low glass enclosure shown in the photograph. Tray arrangement is central to this view from above. Plan the front appearance together with the direction staff will approach and the space needed to replenish products.',
            selection: [
                'Indicate the intended orientation of the long side of your dessert trays on the layout.',
                'Assess the dark body appearance alongside your existing counters and lighting.',
                'Check replenishment and cleaning access against the selected drawing.',
            ],
            questions: [
                { question: 'Why does product arrangement matter in a low glass display?', answer: 'Products are mainly viewed from above. Plan plate heights and tray positions so the desserts at the back remain visible.' },
                { question: 'How should I choose the service side?', answer: 'Mark staff working direction and replenishment routes on your plan. Glass access and service arrangements are assessed with the drawing of the selected application.' },
            ],
        },
    },
    58: {
        TR: {
            description: 'Pastane tezgâhı: raflı teşhir, kasa ve köşe yerleşimini birlikte planlayın. Ürün akışınıza uygun nötr veya ısıtmalı seçenekleri değerlendirin.',
            introduction: 'Pastane Tezgahı, ürün teşhirini ve satış akışını aynı yerleşim içinde planlamak için bir başlangıç noktasıdır. Galeri kapağında köşe dönüşlü, farklı vitrin yüksekliklerini birleştiren bir uygulama görülür. İşletmenizdeki kasa konumu, ürün dağılımı ve personel çalışma alanı, kullanılacak tezgâh düzenini belirler.',
            selection: [
                'Düz hat veya köşe dönüşü ihtiyacını, duvar ve kapı ölçüleriyle birlikte belirtin.',
                'Nötr ve ısıtmalı sunulacak ürünleri ayırarak her bölümün kullanımını tarif edin.',
                'Kasa, paketleme ve personel geçişi için ayrılacak alanları plan üzerinde gösterin.',
            ],
            questions: [
                { question: 'Tek bir tezgâhta farklı teşhir bölümleri planlanabilir mi?', answer: 'Farklı ürünler için bölümlendirilmiş bir yerleşim değerlendirilebilir. Her bölümün kullanım amacı, ölçüsü ve nötr veya ısıtmalı ihtiyacı teklif kapsamına ayrı yazılmalıdır.' },
                { question: 'Köşe yerleşimi için hangi bilgileri göndermeliyim?', answer: 'İki duvarın ölçüsünü, köşe yönünü, kapı konumlarını ve kasa için ayırdığınız alanı gönderin. Mevcut mekân fotoğrafları da birleşimlerin değerlendirilmesine yardımcı olur.' },
            ],
        },
        EN: {
            description: 'Bakery counter for planning shelf displays, checkout and corner layouts. Discuss neutral or heated sections around your product and service flow.',
            introduction: 'The Bakery Counter is a starting point for planning product display and sales flow together. The gallery cover shows a corner installation combining different showcase heights. Checkout position, the product selection and staff working space determine the counter arrangement needed for your premises.',
            selection: [
                'Specify a straight or corner layout along with wall and doorway measurements.',
                'Separate products needing neutral presentation from those intended for a heated section.',
                'Mark checkout, packing and staff passage areas on the plan.',
            ],
            questions: [
                { question: 'Can different display sections be planned in one counter layout?', answer: 'A divided layout can be assessed for different products. Each section should have its purpose, dimensions and neutral or heated requirement listed separately in the quotation.' },
                { question: 'What information is needed for a corner installation?', answer: 'Send both wall measurements, the corner direction, door positions and checkout space. Photographs of the premises also help assess the junctions.' },
            ],
        },
    },
    59: {
        TR: {
            description: 'Isıtmalı börek tezgâhı: tepsi ve raf düzenini servis akışına göre seçin. Isıtmalı bölümlerin kapsamı ve yerleşim için teklif alın.',
            introduction: 'Isıtmalı Börek Tezgahı, börek çeşitlerini tepsi ve raf düzeninde sunmak isteyen fırın, pastane ve börekçiler için değerlendirilir. Görselde taban teşhirine ek olarak üst raflarda sunum yer alır. Hangi bölümlerin ısıtılacağı, tepsi erişimi ve porsiyon servis alanı seçilecek uygulamanın kapsamında birlikte ele alınmalıdır.',
            selection: [
                'Börek tepsilerinin dış ölçülerini ve bir arada sunulacak çeşitleri paylaşın.',
                'Taban ile raflarda ısıtma gereksinimini ayrı ayrı belirtip kontrol düzenini görüşün.',
                'Kesim, paketleme ve servis işlemleri için tezgâh çevresinde çalışma alanı bırakın.',
            ],
            questions: [
                { question: 'Börek tezgâhının her rafı ısıtmalı mı?', answer: 'Rafların ve tabanın ısıtma kapsamı seçilen versiyona bağlıdır. Hangi bölümlerin ısıtmalı olmasını istediğinizi belirtin ve teklif üzerinde teyit edin.' },
                { question: 'Isıtmalı tezgâhın çalışma sıcaklığı nasıl belirlenir?', answer: 'Ürün türünü ve servis yöntemini paylaşın. Seçilen ısıtmalı versiyonun çalışma sıcaklığı ve kontrol aralığı teklif aşamasında netleştirilir.' },
            ],
        },
        EN: {
            description: 'Heated borek counter for tray and shelf presentation. Plan serving access and confirm which display sections are heated in your quotation.',
            introduction: 'The Heated Borek Counter can be considered by bakeries and borek shops arranging savoury pastries on trays and shelves. The photograph shows upper shelf presentation above the base display. Heated sections, tray access and portion-serving space should be assessed together for the selected application.',
            selection: [
                'Share outside tray dimensions and the borek varieties you intend to display together.',
                'Specify heating needs for the base and shelves separately and discuss the control arrangement.',
                'Allow working space around the counter for cutting, packing and serving.',
            ],
            questions: [
                { question: 'Is every shelf on the borek counter heated?', answer: 'Shelf and base heating depend on the selected version. Specify the sections you need heated and confirm them in the quotation.' },
                { question: 'How is the operating temperature chosen?', answer: 'Share the product type and serving method. The operating temperature and control range of the chosen heated version are confirmed during quotation.' },
            ],
        },
    },
    60: {
        TR: {
            description: 'Fırın dolabı: unlu mamuller için camlı satış ve teşhir tezgâhı. Köşe yerleşimi, tepsi düzeni ve nötr veya ısıtmalı seçenekler için bilgi alın.',
            introduction: 'Fırın Dolabı, unlu mamullerin satış alanında sergilenmesi için değerlendirilen camlı bir teşhir tezgâhıdır. Galeri kapağında köşe dönüşlü bir sunum düzeni bulunur. Fırından çıkan ürünlerin satışa taşındığı yol, tepsi yerleşimi ve personel erişimi birlikte planlanarak işletmenin günlük servis düzenine uygun bir kurgu hazırlanabilir.',
            selection: [
                'Üretimden satış alanına gelen tepsilerin ölçüsünü ve tezgâha giriş yönünü belirtin.',
                'Köşe dönüşü, kasa ve paketleme noktalarını mekân planında işaretleyin.',
                'Teşhir edilecek ürünlere göre nötr veya ısıtmalı bölüm ihtiyacını ayrı değerlendirin.',
            ],
            questions: [
                { question: 'Fırın dolabı bir pişirme fırını mı?', answer: 'Bu sayfadaki ürün, unlu mamullerin satış ve teşhir alanında kullanılan tezgâhtır. Pişirme ekipmanı ihtiyacınızı teklif talebinde ayrıca belirtmelisiniz.' },
                { question: 'Üretim tepsilerimle aynı ölçüde bir teşhir düzeni kurulabilir mi?', answer: 'Tepsilerin dış ölçülerini ve servis yöntemini paylaşarak kullanılabilir teşhir alanını değerlendirin. Yerleşim ve uyumluluk seçilen uygulamanın çizimi üzerinden netleştirilir.' },
            ],
        },
        EN: {
            description: 'Bakery display counter for presenting baked goods in the sales area. Discuss corner layouts, tray arrangement and neutral or heated sections.',
            introduction: 'This bakery display cabinet is a glass counter for presenting baked goods in the sales area. The gallery cover shows a corner arrangement. Plan the route from production to sales together with tray placement and staff access to create a layout suited to daily serving routines.',
            selection: [
                'Specify production tray dimensions and the direction from which trays reach the counter.',
                'Mark the corner turn, checkout and packing points on the premises plan.',
                'Assess neutral or heated section requirements for the products to be displayed.',
            ],
            questions: [
                { question: 'Is this cabinet a baking oven?', answer: 'The product on this page is a sales and display counter for baked goods. Specify any baking equipment requirement separately when requesting a quotation.' },
                { question: 'Can the display use my production trays?', answer: 'Share outside tray dimensions and the serving method to assess the usable display area. Compatibility and arrangement are confirmed against the chosen application drawing.' },
            ],
        },
    },
    61: {
        TR: {
            description: 'Isıtmalı poğaça tezgâhı: poğaça ve açma sunumu için raflı vitrin. Ürün yenileme, paketleme alanı ve ısıtmalı bölüm kapsamını planlayın.',
            introduction: 'Isıtmalı Poğaça Tezgahı, poğaça ve açma gibi unlu mamullerin satış sırasında sergilenmesi için değerlendirilebilir. Görselde uzun bir tezgâh boyunca raflı ve taban seviyesinde sunum alanları bulunur. Sabah servisinde ürün yenileme, müşterinin seçim yapması ve paketleme işlemleri için ayrılacak alanlar yerleşimi şekillendirir.',
            selection: [
                'Poğaça ve açma çeşitlerini, kullanılacak servis tepsileriyle birlikte listeleyin.',
                'Yoğun saatlerde tepsi yenileme ve paketleme için personelin kullanacağı yolu planlayın.',
                'Isıtılması gereken raf ve taban bölümlerini ayrı belirtin; kontrol aralığını seçilen versiyon için görüşün.',
            ],
            questions: [
                { question: 'Poğaça tezgâhında raf ve taban aynı şekilde mi ısıtılır?', answer: 'Isıtma kapsamı ve kontrol düzeni seçilen uygulamaya bağlıdır. Raf ve taban için ihtiyacınızı ayrı yazdırarak teklifin donanım kapsamını kontrol edin.' },
                { question: 'Yoğun sabah servisi için yerleşim nasıl hazırlanır?', answer: 'Ürün yenileme, müşteriye servis ve paketleme noktalarını aynı planda gösterin. Tepsi erişiminin kasa sırasıyla çakışmaması için çalışma alanını birlikte değerlendirin.' },
            ],
        },
        EN: {
            description: 'Heated pogaca counter with shelf presentation for savoury baked goods. Plan replenishment, packing space and the scope of heated sections.',
            introduction: 'The Heated Pogaca Counter can be considered for presenting pogaca and similar savoury baked goods during sales. The photograph shows shelf and base-level presentation along a long counter. Morning replenishment, customer selection and packing space all shape the layout.',
            selection: [
                'List pogaca and other baked goods together with the serving trays you use.',
                'Plan staff routes for tray replenishment and packing during busy periods.',
                'Specify which shelves and base sections need heating and discuss the chosen version control range.',
            ],
            questions: [
                { question: 'Are the shelves and base heated in the same way?', answer: 'The heating scope and control arrangement depend on the selected application. List your shelf and base requirements separately and check the equipment included in the quote.' },
                { question: 'How should I plan for a busy morning service?', answer: 'Show replenishment, serving and packing points on one plan. Assess working clearance so tray access does not conflict with the checkout queue.' },
            ],
        },
    },
    62: {
        TR: {
            description: 'Kumpir waffle dolabı: malzemeleri küvet düzeninde sunmak için camlı tezgâh. Küvet ölçülerini, hazırlık akışını ve kullanım koşullarını değerlendirin.',
            introduction: 'Kumpir Waffle Dolabı, farklı malzemelerin küvetler içinde sıralandığı bir hazırlık ve sunum düzeni için değerlendirilebilir. Görselde camlı malzeme bölümüyle yan yana bir ekipman yerleşimi bulunur. Kumpir veya waffle menünüzdeki malzemeleri ve hazırlık sırasını belirlemek, küvet dağılımını ve personelin erişim yönünü planlamayı kolaylaştırır.',
            selection: [
                'Malzeme listesini hazırlayarak kullanılacak gastronom küvetlerin ölçü, derinlik ve sayısını belirtin.',
                'Hazırlık, malzeme ekleme ve servis adımlarını tezgâh planında sıralayın.',
                'Malzemelerin çalışma koşullarını ve görseldeki ek ekipmanların teklif kapsamına dahil olup olmadığını ayrı teyit edin.',
            ],
            questions: [
                { question: 'Küvet sayısı nasıl seçilir?', answer: 'Aynı anda kullanılacak malzeme çeşitlerini ve her malzeme için gereken küvet boyutunu listeleyin. Küvet yerleşimi, seçilen tezgâhın kullanılabilir alanına göre değerlendirilir.' },
                { question: 'Fotoğraftaki tüm ekipmanlar dolaba dahil mi?', answer: 'Fotoğraf birden fazla ekipmanın birlikte kullanıldığı bir düzen gösterebilir. Dolap, pişirme ekipmanı ve diğer parçaların kapsamını teklif üzerinde ayrı kontrol edin.' },
            ],
        },
        EN: {
            description: 'Kumpir and waffle cabinet for ingredient pans behind glass. Discuss pan dimensions, preparation flow and operating requirements for your menu.',
            introduction: 'The Kumpir and Waffle Cabinet can be assessed for preparing and presenting ingredients arranged in pans. The photograph shows a glass ingredient section alongside other equipment. Listing ingredients and preparation steps helps plan pan positions and the direction from which staff need access.',
            selection: [
                'Prepare an ingredient list with the sizes, depths and number of gastronorm pans required.',
                'Map preparation, topping and serving steps onto the counter plan.',
                'Confirm ingredient operating requirements and whether adjacent equipment in the photograph is included in the quotation.',
            ],
            questions: [
                { question: 'How do I choose the number of ingredient pans?', answer: 'List the ingredients needed at the same time and the pan size for each. The arrangement is assessed against the usable area of the selected counter.' },
                { question: 'Is all equipment in the photograph included?', answer: 'A photograph may show several pieces of equipment used together. Check the cabinet, cooking equipment and other items separately in the quotation scope.' },
            ],
        },
    },
    63: {
        TR: {
            description: 'Kuruyemiş dolabı: çeşitleri bölümlere ayıran camlı satış tezgâhı. Nötr veya ısıtmalı sunumu ve tartım-paketleme yerleşimini değerlendirin.',
            introduction: 'Kuruyemiş Dolabı, farklı kuruyemiş çeşitlerini camlı bir satış tezgâhında bölümlere ayırarak sunmak için değerlendirilebilir. Galeri görselinde köşe boyunca devam eden bir teşhir yerleşimi bulunur. Çeşit sayısı, tartım noktası ve paketleme alanı birlikte planlanarak günlük satış akışına uygun bir düzen oluşturulur.',
            selection: [
                'Açık ve paketli satılacak ürünleri ayırıp aynı anda sunulacak çeşit sayısını belirleyin.',
                'Ürün alma, tartım ve paketleme adımları için personelin kullanacağı alanları işaretleyin.',
                'Nötr veya ısıtmalı sunum tercihini ürün grubuna göre görüşün; ısıtılacak bölümleri ayrıca belirtin.',
            ],
            questions: [
                { question: 'Her kuruyemiş bölümü ısıtmalı olmak zorunda mı?', answer: 'Nötr ve ısıtmalı sunum ihtiyaçları ürün grubuna göre ayrı değerlendirilebilir. Her bölümün kullanımını belirleyip teklifin ısıtma kapsamını buna göre netleştirin.' },
                { question: 'Tartı ve paketleme yeri tezgâh planını etkiler mi?', answer: 'Evet. Ürünün alındığı bölümden tartıya ve paketlemeye uzanan çalışma yolu yerleşimi etkiler. Bu noktaları mekân ölçüleriyle birlikte paylaşın.' },
            ],
        },
        EN: {
            description: 'Nuts display cabinet for an organised glass sales counter. Discuss neutral or heated presentation and the position of weighing and packing areas.',
            introduction: 'The Nuts Cabinet can be considered for separating different nut varieties within a glass sales counter. The gallery image shows a display continuing around a corner. Plan the variety count, weighing point and packing area together to support the daily sales routine.',
            selection: [
                'Separate loose and packaged products and identify how many varieties will be displayed together.',
                'Mark staff areas for taking products, weighing and packing.',
                'Discuss neutral or heated presentation by product group and specify the sections needing heat.',
            ],
            questions: [
                { question: 'Does every nuts display section need heating?', answer: 'Neutral and heated presentation can be assessed separately for each product group. Define the use of each section and confirm the heating scope in the quotation.' },
                { question: 'Do scales and packing areas affect the counter plan?', answer: 'Yes. The working route from the product section to weighing and packing affects the layout. Share these positions along with the premises measurements.' },
            ],
        },
    },
    64: {
        TR: {
            description: 'Çikolata dolabı: raflı cam vitrinde çikolata ve kutulu ürün sunumu. Ambalaj ölçülerini ve ürüne uygun teknik donanımı değerlendirin.',
            introduction: 'Çikolata Dolabı, çikolata çeşitlerini ve kutulu ürünleri raflı bir cam vitrinde sunmak isteyen işletmeler için bir seçenektir. Görselde geniş ön cepheli ve çok raflı bir düzen yer alır. Raf planını ambalaj ölçüleriyle hazırlarken, çikolatanın üreticisi tarafından belirtilen saklama koşullarını da seçilecek teknik donanımla birlikte değerlendirin.',
            selection: [
                'Açık çikolata, tepsili ürün ve hediye kutularının hangi bölümlerde sunulacağını belirleyin.',
                'Kutu yüksekliği ve tepsi derinliğini raf alanı ve personel erişimiyle birlikte kontrol edin.',
                'Gerekiyorsa sıcaklık ve nem kontrolü talebini açıkça yazın; ilgili donanımın teklif kapsamını teyit edin.',
            ],
            questions: [
                { question: 'Çikolata için hangi çalışma koşulları gereklidir?', answer: 'Koşullar çikolatanın içeriğine ve üretici önerilerine göre belirlenir. Tek bir genel derece yerine ürününüzün saklama gereksinimini paylaşarak uygun konfigürasyonu görüşün.' },
                { question: 'Kutulu çikolata ile açık çikolata aynı raf planını kullanır mı?', answer: 'Ambalaj boyutları ve sunum biçimi farklı alan gerektirebilir. Kutu ve tepsi ölçülerini birlikte paylaşarak raf aralıklarını ve erişimi değerlendirin.' },
            ],
        },
        EN: {
            description: 'Chocolate cabinet for shelf presentation of chocolates and gift boxes. Assess packaging dimensions and equipment suited to your products.',
            introduction: 'The Chocolate Cabinet is an option for presenting chocolates and boxed products in a glass shelf showcase. The photograph shows a wide front and several display levels. Plan shelf use around packaging dimensions while checking the chocolate producer requirements against the technical equipment selected.',
            selection: [
                'Identify where loose chocolates, trays and gift boxes will be presented.',
                'Check box height and tray depth alongside shelf space and staff access.',
                'Specify any required temperature and humidity controls and confirm the included equipment in the quote.',
            ],
            questions: [
                { question: 'Which operating conditions are needed for chocolate?', answer: 'Requirements depend on the chocolate ingredients and producer guidance. Share the storage requirements of your products to discuss an appropriate configuration rather than assuming one general temperature.' },
                { question: 'Do gift boxes and loose chocolates need the same shelf layout?', answer: 'Different packaging and presentation methods may need different space. Share both box and tray measurements to assess shelf clearance and access.' },
            ],
        },
    },
    65: {
        TR: {
            description: 'Baklava tezgâhı: tepsili tatlıları raf ve taban düzeninde sergileyin. Servis erişimi, paketleme alanı ve nötr veya ısıtmalı versiyon için bilgi alın.',
            introduction: 'Baklava Tezgahı, tepsili tatlı çeşitlerini taban ve üst raf düzeninde müşteriye sunmak için değerlendirilebilir. Görselde farklı çeşitlerin uzun bir satış hattı boyunca sıralandığı bir uygulama bulunur. Tepsinin çıkarılması, porsiyon kesimi ve paketleme işlemleri, camlı sunumla birlikte düşünülmesi gereken çalışma adımlarıdır.',
            selection: [
                'Kullandığınız baklava tepsilerinin dış ölçülerini ve sunulacak çeşit sayısını paylaşın.',
                'Tepsi değişimi, porsiyon kesimi ve kutulama için gerekli çalışma alanını belirtin.',
                'Nötr veya ısıtmalı versiyonu, ürünlerinizin servis biçimine göre ayrı değerlendirip teklif kapsamına yazdırın.',
            ],
            questions: [
                { question: 'Baklava tepsileri için raf yerleşimi nasıl belirlenir?', answer: 'Tepsilerin dış ölçüleri ve servis sırasında çıkarılma yönü birlikte değerlendirilir. Çeşit sayınızı paylaşarak taban ve üst raflar için bir yerleşim isteyin.' },
                { question: 'Baklava tezgâhı mutlaka ısıtmalı mı olmalı?', answer: 'Isıtma ihtiyacı sunulan ürüne ve işletmenin servis yöntemine göre değerlendirilir. Nötr veya ısıtmalı tercih ile ısıtılacak bölümler seçilen teklif için netleştirilmelidir.' },
            ],
        },
        EN: {
            description: 'Baklava counter for tray presentation on base and upper shelves. Plan serving access, packing space and a neutral or heated configuration.',
            introduction: 'The Baklava Counter can be considered for presenting trays of sweets on base and upper shelf levels. The photograph shows varieties arranged along a long sales counter. Tray removal, portion cutting and packing are working steps to plan alongside the glass presentation.',
            selection: [
                'Share outside baklava tray dimensions and the number of varieties to be presented.',
                'Specify working space for changing trays, cutting portions and packing boxes.',
                'Assess a neutral or heated version for your serving method and include the selected scope in the quote.',
            ],
            questions: [
                { question: 'How is the shelf layout chosen for baklava trays?', answer: 'Outside tray dimensions and the direction of removal during service are assessed together. Share the variety count and request a layout for the base and upper shelves.' },
                { question: 'Does a baklava counter always need heating?', answer: 'Heating needs depend on the product and serving method. Confirm the neutral or heated choice and the sections to be heated for the selected quotation.' },
            ],
        },
    },
    66: {
        TR: {
            description: 'Kuru pasta dolabı: kurabiye ve kuru pasta çeşitleri için raflı teşhir. Tepsi düzenini, paketli sunumu ve satış tezgâhı yerleşimini planlayın.',
            introduction: 'Kuru Pasta Dolabı, kurabiye ve kuru pasta çeşitlerini raflar ve tepsiler üzerinde gruplandırarak sunmak için değerlendirilebilir. Galeri kapağında farklı yükseklikte teşhir bölümleri bulunan bir satış tezgâhı görülür. Açık ürün ile paketli ürün dağılımını belirlemek, raf kullanımını ve servis alanını planlamaya yardımcı olur.',
            selection: [
                'Tatlı ve tuzlu çeşitleri, kullanılacak tepsi ve ambalaj ölçüleriyle birlikte listeleyin.',
                'Açık ürün alma ile kutulama alanlarını personelin servis yönüne göre yerleştirin.',
                'Nötr veya ısıtmalı ihtiyacınızı ürün gruplarına göre belirtin; her bölümün kapsamını ayrı görüşün.',
            ],
            questions: [
                { question: 'Paketli ve açık kuru pasta birlikte sergilenebilir mi?', answer: 'Birlikte bir sunum planı hazırlanabilir. Paket yüksekliği, tepsi derinliği ve personelin açık ürüne erişimi için ayrı alan gereksinimlerini paylaşın.' },
                { question: 'Kuru pasta vitrininin raflarını nasıl planlamalıyım?', answer: 'Sunacağınız çeşitleri tepsi ve ambalaj ölçüleriyle listeleyin. Raf aralıklarını en yüksek ürün ve servis sırasında gereken erişim alanına göre değerlendirin.' },
            ],
        },
        EN: {
            description: 'Dry pastry cabinet for cookies and biscuit selections on trays and shelves. Plan packaged products, serving access and the sales counter layout.',
            introduction: 'The Dry Pastry Cabinet can be considered for grouping cookies and dry pastries on trays and shelves. The gallery cover shows display sections at different heights within a sales counter. Decide the balance of loose and packaged products to plan shelf use and serving space.',
            selection: [
                'List sweet and savoury varieties with the tray and packaging dimensions used.',
                'Position loose-product serving and boxing areas around the staff service direction.',
                'Specify neutral or heated needs by product group and discuss the scope of each section.',
            ],
            questions: [
                { question: 'Can packaged and loose dry pastries be displayed together?', answer: 'A combined presentation can be planned. Share the separate space requirements for package height, tray depth and staff access to loose products.' },
                { question: 'How should I plan shelves for dry pastries?', answer: 'List your varieties with tray and packaging dimensions. Assess shelf clearance against the tallest item and the space needed for serving access.' },
            ],
        },
    },
    67: {
        TR: {
            description: 'Cephe pasta teşhir dolabı: dikey camlı vitrinle raflı ürün sunumu. Cephe görünürlüğünü, pasta ölçülerini ve servis erişimini değerlendirin.',
            introduction: 'Cephe Pasta Teşhir Dolabı, müşteri cephesinden görülen dikey ve çok raflı bir vitrin düzeni için değerlendirilebilir. Galeri kapağında camlı yüksek gövdeler yan yana gösterilir. Mağaza içinden veya cepheden bakış açısı, sergilenecek pasta ölçüleri ve personelin servis yapacağı yön birlikte planlanmalıdır.',
            selection: [
                'Vitrinin mağaza içinden ve cepheden görüleceği yönleri yerleşim krokisinde işaretleyin.',
                'Pasta tabaklarının çapını ve yüksekliğini, raf ihtiyacınızla birlikte paylaşın.',
                'Sunulacak ürünleri belirtip seçilen versiyonun çalışma koşullarını ve servis erişimini teyit edin.',
            ],
            questions: [
                { question: 'Cephe vitrini yerleşiminde hangi alanlar ölçülmeli?', answer: 'Yerleşim eni, derinliği ve yüksekliğiyle birlikte servis tarafındaki açılma alanını ölçün. Çevredeki kapılar ve müşteri geçişleri de plana dahil edilmelidir.' },
                { question: 'Dikey camlı görünüm belirli bir soğutma sistemi anlamına gelir mi?', answer: 'Gövde biçimi çalışma koşullarını tek başına belirlemez. Sergilenecek ürünleri paylaşarak seçilen versiyonun donanım ve çalışma koşullarını teklif üzerinde kontrol edin.' },
            ],
        },
        EN: {
            description: 'Front pastry showcase with a tall glass shelf display. Assess customer-facing visibility, cake dimensions and access for serving staff.',
            introduction: 'The Front Pastry Showcase can be considered for a tall, multi-level display facing customers. The gallery cover shows tall glass bodies side by side. Plan viewing angles from the shop and its frontage together with cake dimensions and the staff service direction.',
            selection: [
                'Mark viewing directions from inside the shop and its frontage on your layout sketch.',
                'Share cake plate diameters, cake heights and the number of display levels required.',
                'Specify the products to confirm operating requirements and serving access for the selected version.',
            ],
            questions: [
                { question: 'Which areas should be measured for a front showcase?', answer: 'Measure installation width, depth and height, plus opening clearance on the service side. Include nearby doors and customer passages on the plan.' },
                { question: 'Does a tall glass body imply a particular cooling system?', answer: 'Body shape alone does not establish operating requirements. Share the products to be displayed and check the selected version equipment and operating conditions in the quotation.' },
            ],
        },
    },
    68: {
        TR: {
            description: 'Yatay pasta teşhir dolabı: tezgâh boyunca camlı tatlı sunumu. Tepsi dizilimini, dekor tercihini ve proje yerleşimini karşılaştırarak teklif alın.',
            introduction: 'Yatay Pasta Teşhir Dolabı, pasta ve porsiyon tatlıları tezgâh boyunca yan yana gösteren bir vitrin düzeni sunar. Alçak camlı sunumda ürünlerin tepsi üzerindeki sırası ve farklı tabak yükseklikleri görünürlüğü etkiler. Dekoratif ön yüzü, servis erişimini ve kullanılacak tatlı tepsilerini aynı yerleşim çalışmasında değerlendirin.',
            selection: [
                'Teşhir edilecek tatlıları tabak ve tepsi ölçüleriyle birlikte tezgâh uzunluğu boyunca planlayın.',
                'Mevcut mobilyayla eşleştirilecek ön yüz ve yan kapak görünümünü fotoğrafla tarif edin.',
                'Benzer yatay modelleri karşılaştırırken ölçü, servis erişimi ve donanımı aynı teklif kapsamı üzerinden kontrol edin.',
            ],
            questions: [
                { question: 'Tepsilerin yerleşimini nasıl karşılaştırabilirim?', answer: 'Kullandığınız tepsilerin ölçülerini ve çeşit sayısını paylaşarak seçilen vitrinin iç yerleşimini isteyin. Sadece toplam tezgâh uzunluğu yerine kullanılabilir teşhir alanını ve servis erişimini karşılaştırın.' },
                { question: 'Yatay teşhir için fiyatı hangi bilgilerle isteyebilirim?', answer: 'Alan ölçüsünü, beğendiğiniz fotoğrafı, tatlı tepsilerini ve gerekli çalışma koşullarını paylaşın. Dekor ve donanım kapsamı aynı talepte belirtildiğinde teklif daha açık hazırlanır.' },
            ],
        },
        EN: {
            description: 'Horizontal pastry showcase for side-by-side dessert presentation. Compare tray layout, front finish and project requirements before requesting a quote.',
            introduction: 'The Horizontal Pastry Showcase presents cakes and individual desserts side by side along a counter. In a low glass display, tray positions and different plate heights affect visibility. Assess the decorative front, serving access and dessert trays as part of the same layout study.',
            selection: [
                'Plan dessert plates and trays along the intended counter length.',
                'Use a photograph to describe the front and side finish you want to coordinate with existing furniture.',
                'Compare dimensions, service access and equipment on the same quotation scope when assessing similar horizontal models.',
            ],
            questions: [
                { question: 'How can I compare tray arrangements?', answer: 'Share your tray dimensions and variety count to request an internal layout for the selected showcase. Compare usable display area and serving access alongside total counter length.' },
                { question: 'What should I send to request a horizontal showcase price?', answer: 'Share available dimensions, the preferred photograph, dessert tray sizes and operating requirements. Include the finish and equipment scope in the same request for a clearer quotation.' },
            ],
        },
    },
    69: {
        TR: {
            description: 'Pasta teşhir dolabı: cam raflı vitrinle bütün pasta ve porsiyon sunumu. Raf açıklığını, tepsi ölçülerini ve personel erişimini birlikte değerlendirin.',
            introduction: 'Pasta Teşhir Dolabı, bütün pasta ve porsiyon tatlıları camlı ve raflı bir vitrinde gruplandırmak isteyen pastane ve kafeler için değerlendirilir. Görselde düz bir ön cephe ve yatay raf düzeni bulunur. Ürün yüksekliği ile servis tabağının kapladığı alanı birlikte ele almak, rafların günlük kullanımını planlamayı kolaylaştırır.',
            selection: [
                'En yüksek pastayı, en geniş servis tabağını ve sunulacak ürün çeşitlerini belirleyin.',
                'Raf açıklığı ile personelin tabak çıkarma hareketi için gereken alanı birlikte değerlendirin.',
                'Cam erişimi, aydınlatma tercihi ve soğutma versiyonunu seçilen uygulamanın donanım listesinde kontrol edin.',
            ],
            questions: [
                { question: 'Bütün pasta ve dilim pasta için aynı raf düzeni uygun mu?', answer: 'Ürün yükseklikleri ve servis kapları farklı olabileceğinden raf planı bu ölçülere göre hazırlanmalıdır. Örnek pasta ve tabak ölçülerini birlikte paylaşın.' },
                { question: 'Vitrin temizliği için hangi erişim bilgilerini sormalıyım?', answer: 'Camın ve servis açıklığının seçilen modelde nasıl açıldığını, raflara erişimi ve gerekli çevre boşluğunu sorun. Temizlik erişimi yerleşim çizimiyle birlikte değerlendirilmelidir.' },
            ],
        },
        EN: {
            description: 'Pastry showcase with glass shelf presentation for whole cakes and individual desserts. Assess shelf clearance, plate dimensions and staff access.',
            introduction: 'The Pastry Showcase can be considered by bakeries and cafes grouping whole cakes and individual desserts in a glass shelf display. The photograph shows a straight front and horizontal shelf arrangement. Assess product height together with the footprint of serving plates to plan everyday shelf use.',
            selection: [
                'Identify the tallest cake, widest serving plate and range of products to be displayed.',
                'Assess shelf clearance together with the space staff need to remove a plate.',
                'Check glass access, lighting preference and refrigeration version in the selected application equipment list.',
            ],
            questions: [
                { question: 'Can whole cakes and cake slices use the same shelf arrangement?', answer: 'Different product heights and serving containers need to be considered in the shelf plan. Share sample cake and plate measurements together.' },
                { question: 'Which cleaning access details should I ask about?', answer: 'Ask how the glass and service opening operate, how shelves are accessed and how much surrounding clearance is required. Assess cleaning access with the installation drawing.' },
            ],
        },
    },
};

export function getProductContent(id: number, language: keyof TranslatedString): ProductEditorialContent | undefined {
    return productContent[id]?.[language];
}
