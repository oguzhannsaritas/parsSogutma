import type { ProductSummary, TranslatedString } from './products/types';

export type CatalogLanguage = keyof TranslatedString;
export type CategoryId = 'pasta' | 'kasap' | 'meze' | 'sutluk' | 'balik' | 'reyon' | 'mutfak' | 'sogutma' | 'soguk-oda';

export type CategoryCopy = {
    name: string;
    description: string;
    intro: string;
    sections: Array<{
        heading: string;
        body: string;
        productId?: number;
        productLinkText?: string;
    }>;
    criteria: string[];
    questions: Array<{ question: string; answer: string }>;
    quote: { title: string; body: string };
    productUse: string;
};

export type ProductCategory = {
    id: CategoryId;
    slug: string;
    featuredProductId: number;
    related: CategoryId[];
    copy: Record<CatalogLanguage, CategoryCopy>;
};

export const productCategories: ProductCategory[] = [
    {
        id: 'pasta', slug: 'pasta-cikolata-dolaplari', featuredProductId: 69, related: ['meze', 'sutluk', 'mutfak'],
        copy: {
            TR: {
                name: 'Pasta ve Çikolata Dolapları',
                description: 'Pastane ve kafeler için pasta, çikolata ve ekler teşhir dolapları. Yatay, dikey ve cephe modellerini, ölçüleri ve pastane tezgâhlarını karşılaştırın.',
                intro: 'Pasta teşhir dolabı seçerken önce sergileyeceğiniz ürünü belirleyin. Yaş pasta ve ekler için soğutmalı vitrinleri, kuru pasta için kuru teşhir modellerini inceleyin. Çikolata dolabını çikolatanın muhafaza koşullarına göre seçin. Pastane ve kafenizdeki servis düzenine uygun yatay, dikey ve cephe tipi modelleri karşılaştırabilirsiniz.',
                sections: [
                    {
                        heading: 'Yatay ekler vitrini ve tezgâhtan servis',
                        body: 'Ekler ve porsiyon tatlıları yatay vitrinde tepsilerle yan yana sunabilirsiniz. Tepsileri çıkaracağınız taraftaki servis boşluğunu ve müşterinin ürünleri göreceği açıyı kontrol edin. Katalogdaki baklava, kuruyemiş ve ısıtmalı servis tezgâhlarını da sunacağınız ürünlere göre değerlendirin.',
                        productId: 14,
                    },
                    {
                        heading: 'Dikey pasta dolabında raf düzeni',
                        body: 'Dikey pasta dolabı, pastaları farklı raf seviyelerinde sergilemek için bir seçenektir. Raf derinliğini pasta tabanının çapıyla, raf aralığını en yüksek pastayla karşılaştırın. Dolabın yerleşiminde cam kapının açılımını ve personelin pastayı çıkaracağı alanı da ölçün.',
                        productId: 35,
                    },
                ],
                criteria: ['Sergilenecek ürün türünü ve günlük teşhir miktarını belirleyin.', 'Yerleşim ölçüsünü, raf ihtiyacını ve servis yönünü birlikte planlayın.', 'Çalışma sıcaklığı ile motor ve aksesuar seçeneklerini seçilen model üzerinden teyit edin.'],
                questions: [
                    { question: 'Pasta ve çikolata için aynı dolap seçilebilir mi?', answer: 'Seçim, ürünün muhafaza gereksinimine ve dolabın teknik özelliklerine bağlıdır. Pasta–çikolata modellerini inceleyin; sergileyeceğiniz ürünleri belirterek uygun çalışma koşulları için bilgi alın.' },
                    { question: 'Pasta dolabı için nasıl teklif alabilirim?', answer: 'Beğendiğiniz modeli, kullanılabilir alan ölçülerini ve sergileyeceğiniz ürünleri paylaşın. Raf, cam ve soğutma seçenekleriyle birlikte projenize uygun teklif hazırlanabilir.' },
                ],
                quote: {
                    title: 'Pasta teşhir dolabı ölçüleri ve fiyat teklifi',
                    body: 'Vitrin için ayrılan alanın genişliğini, derinliğini ve yüksekliğini ölçün. Pasta çapı ve yüksekliği ya da ekler tepsilerinin ölçüsüyle birlikte servis yönünü paylaşın. Raf sayısı, cam tipi ve soğutma düzeni teklifi etkiler. Özel ölçüde imalat için mevcut tezgâhların yerini gösteren bir kroki de gönderin.',
                },
                productUse: 'Pastane ve kafe vitrini planlarken ürün türü, raf ihtiyacı ve servis erişimi birlikte değerlendirilmelidir.',
            },
            EN: {
                name: 'Pastry and Chocolate Display Cabinets',
                description: 'Compare horizontal, vertical and facade pastry displays, chocolate and eclair cabinets, technical dimensions and bakery counters from Pars Cooling.',
                intro: 'Start by deciding what you want to put in your pastry display cabinet. Compare refrigerated models for fresh cakes and eclairs and ambient displays for dry pastries. Choose a chocolate cabinet based on the products’ storage requirements. Explore horizontal, vertical and facade models for your bakery or cafe layout.',
                sections: [
                    {
                        heading: 'Horizontal eclair displays for counter service',
                        body: 'A horizontal display can hold trays of eclairs and individual desserts side by side. Check clearance on the side staff use to remove trays and consider what customers can see from the front. Compare baklava displays, nut counters and heated cabinets for the products you serve.',
                        productId: 14,
                    },
                    {
                        heading: 'Shelf layout in a vertical cake cabinet',
                        body: 'A vertical cabinet can display cakes across several shelves. Compare shelf depth with the diameter of the cake base and shelf spacing with the tallest cake. Allow space for the door to open and for staff to lift cakes out.',
                        productId: 35,
                    },
                ],
                criteria: ['Identify the product type and the quantity you intend to display.', 'Plan the available space, shelves and service access together.', 'Confirm temperatures, refrigeration arrangements and accessories for the selected model.'],
                questions: [
                    { question: 'Can one cabinet display both pastry and chocolate?', answer: 'This depends on the products and the technical specification of the cabinet. Review the pastry–chocolate models and tell us what you plan to display so that the operating requirements can be discussed.' },
                    { question: 'How do I request a pastry cabinet quote?', answer: 'Share the model, available dimensions and products to be displayed. The quote can then reflect the shelves, glass and refrigeration options required for your project.' },
                ],
                quote: {
                    title: 'Pastry display cabinet dimensions and quotes',
                    body: 'Measure the available width, depth and height. Share the diameter and height of your cakes or the dimensions of your eclair trays, along with which side staff will serve from. Shelf count, glass type and refrigeration arrangement affect the quote. Include a sketch showing existing counters for a made-to-measure cabinet.',
                },
                productUse: 'When planning a bakery or cafe display, consider the product type, shelf requirements and service access together.',
            },
        },
    },
    {
        id: 'kasap', slug: 'kasap-dolaplari', featuredProductId: 10, related: ['reyon', 'meze', 'soguk-oda'],
        copy: {
            TR: {
                name: 'Kasap ve Et Teşhir Dolapları',
                description: 'Kasap reyonu, et teşhir, et askı ve dry aged dolaplarını inceleyin. Dik, düz ve bombe camlı modelleri teknik özellikleriyle karşılaştırın.',
                intro: 'Kasap dolabı seçimini etin nasıl sergileneceğine göre yapın. Personelin tezgâhtan servis yaptığı işletmeler için dik, düz ve bombe camlı kasap reyonları bulunur. Parça eti askıda sunmak için et askı dolabını, yaşlandırma uygulamaları için dry aged dolabını inceleyin.',
                sections: [
                    {
                        heading: 'Tezgâhtan servis için kasap reyon dolabı',
                        body: 'Dik, düz ve bombe camı karşılaştırırken müşterinin tepsileri göreceği açıya ve personelin servis erişimine bakın. Örneğin bombe camlı reyonda, kavisli camın önündeki geçiş alanını ve tepsilerin raflardan çıkarılması için gereken boşluğu modelin çizimiyle birlikte değerlendirin.',
                        productId: 10,
                    },
                    {
                        heading: 'Askıda et teşhiri ve dry aged dolabı seçimi',
                        body: 'Et askı dolabı için parçaların boyunu ve genişliğini belirleyip askı aralığını, kullanılabilir iç yüksekliği ve kapının açılacağı boşluğu kontrol edin. Dry aged dolabı seçerken, yaşlandırma amacı ve çalışma koşullarını seçtiğiniz modelin teknik bilgileri üzerinden değerlendirin.',
                        productId: 40,
                    },
                ],
                criteria: ['Tezgâh teşhiri, askıda sunum veya dry aged kullanımını belirleyin.', 'Reyon uzunluğunu ve personel servis alanını ölçün.', 'Modelin çalışma koşullarını ve soğutma grubu seçeneklerini karşılaştırın.'],
                questions: [
                    { question: 'Dik, düz ve bombe camlı reyon arasında nasıl seçim yapılır?', answer: 'Cam biçimi; görüş açısı, servis erişimi ve mağaza yerleşimiyle birlikte değerlendirilir. Seçenekleri model fotoğrafları ve teknik çizimler üzerinden karşılaştırabilirsiniz.' },
                    { question: 'Et askı dolabı ile dry aged dolabı aynı amaçla mı kullanılır?', answer: 'Kullanım amaçları ve ihtiyaç duyulan çalışma koşulları farklı olabilir. Sergileyeceğiniz ürünü ve uygulamanızı belirterek modelin uygunluğunu teknik özellikleriyle birlikte teyit edin.' },
                ],
                quote: {
                    title: 'Kasap dolabı ölçüleri ve fiyat teklifi',
                    body: 'Dolap için ayrılan alanın genişliğini, derinliğini ve yüksekliğini, müşteri geçişini ve arka servis boşluğunu paylaşın. Reyon için tepsi ölçülerini, askılı teşhir için et parçalarının boyunu ve genişliğini belirtin. Modül ölçüsü, cam tipi, askı donanımı ve soğutma grubu teklif kapsamını etkiler.',
                },
                productUse: 'Kasap yerleşiminde ürünün sunum biçimi, çalışma koşulları ve personelin servis alanı birlikte planlanmalıdır.',
            },
            EN: {
                name: 'Butcher and Meat Display Cabinets',
                description: 'Explore butcher counters, meat displays, hanging meat and dry aged cabinets. Compare upright, flat and curved glass models and technical specifications.',
                intro: 'Choose a butcher cabinet based on how you want to present and serve meat. Compare upright, flat and curved glass counters for staff service. Explore hanging meat cabinets for cuts displayed on hooks and dedicated dry ageing cabinets.',
                sections: [
                    {
                        heading: 'Butcher counters for staff service',
                        body: 'When comparing upright, flat and curved glass, check how well customers can see the trays and how staff reach them. For a curved glass counter, use the model drawing to assess the customer aisle and the space staff need to remove trays from the shelves.',
                        productId: 10,
                    },
                    {
                        heading: 'Hanging meat displays and dry ageing cabinets',
                        body: 'Measure the length and width of the cuts and check hook spacing, usable internal height and door clearance in the hanging meat cabinet. For dry ageing, consult the selected model’s technical information for the intended application and operating conditions.',
                        productId: 40,
                    },
                ],
                criteria: ['Define the counter display, hanging display or dry aged application.', 'Measure the counter space and staff service area.', 'Compare operating requirements and refrigeration arrangements.'],
                questions: [
                    { question: 'How should I choose the glass shape?', answer: 'Consider viewing angles, service access and your shop layout. Model photos and technical drawings allow you to compare upright, flat and curved glass counters.' },
                    { question: 'Are hanging meat and dry aged cabinets interchangeable?', answer: 'Their intended applications and operating requirements may differ. Describe your products and intended use, then confirm suitability against the specification of the selected model.' },
                ],
                quote: {
                    title: 'Butcher cabinet dimensions and quotes',
                    body: 'Share the width, depth and height available for the cabinet, plus the customer aisle and service clearance behind it. Include tray dimensions for a counter or the dimensions of the cuts for a hanging display. Module size, glass type, hanging equipment and refrigeration arrangement affect the quote.',
                },
                productUse: 'For a butcher layout, plan the presentation method, operating requirements and staff service area together.',
            },
        },
    },
    {
        id: 'meze', slug: 'kebap-meze-dolaplari', featuredProductId: 4, related: ['kasap', 'reyon', 'mutfak'],
        copy: {
            TR: {
                name: 'Kebap ve Meze Dolapları',
                description: 'Restoran ve şarküteriler için kebap, meze ve dikey meze teşhir dolapları. Model, modül ölçüsü ve teknik özellikleri inceleyerek teklif alın.',
                intro: 'Kebap teşhir dolabı, kebapçı ve restoranların servis alanında ürünleri müşteriye göstermek için kullanılır. Meze teşhir dolabı, restoran ve şarküterilerde farklı meze çeşitlerini kendi kaplarında bir arada sunar. Tezgâh üzerinden servis için yatay vitrinleri, ürünleri farklı raf seviyelerinde göstermek için dikey meze dolaplarını karşılaştırın.',
                sections: [
                    { heading: 'Teşhir alanını servis düzenine göre kurun', body: 'Meze çeşitlerini, kap veya tava ölçülerini ve servis sırasında ihtiyaç duyulan erişimi belirleyin. Bir yatay reyon ile dikey meze dolabı farklı bir sergileme düzeni sunar. Seçilen modelin ürün fotoğraflarını, cam sistemini ve teknik çizimlerini yerleşim planınızla birlikte inceleyin.' },
                    { heading: 'Ölçü ve çalışma koşullarını karşılaştırın', body: 'Katalogdaki modül seçenekleri, mevcut alan için uygun boyu değerlendirmenizi sağlar. Çalışma sıcaklığı ve soğutma sistemi modele göre kontrol edilmelidir. Teklif isterken sergileyeceğiniz ürünleri ve tezgâh yerleşimini paylaşmanız, ihtiyacın daha doğru tanımlanmasına yardımcı olur.' },
                ],
                criteria: ['Meze veya kebap teşhir miktarını ve kullanılacak kapları belirleyin.', 'Müşteri görüşünü ve personel erişimini aynı yerleşimde değerlendirin.', 'Modül ölçülerini, cam sistemini ve çalışma koşullarını kontrol edin.'],
                questions: [
                    { question: 'Yatay reyon mu, dikey meze dolabı mı seçmeliyim?', answer: 'Karar, teşhir miktarına ve servis şekline bağlıdır. Kullanılabilir alanı ve personelin ürünlere erişimini karşılaştırarak uygun model grubunu belirleyebilirsiniz.' },
                    { question: 'Teklif için hangi bilgileri paylaşmalıyım?', answer: 'Modeli, alan ölçülerini, sergilenecek ürünleri ve kap düzenini paylaşın. Cam, motor ve diğer seçenekler bu bilgiler üzerinden değerlendirilebilir.' },
                ],
                quote: {
                    title: 'Kebap ve meze dolabı için ölçü ve fiyat teklifi',
                    body: 'Dolap için ayırdığınız alanın uzunluğunu, derinliğini ve yüksekliğini ölçün. Aynı anda sergilenecek çeşit sayısını ve kullanacağınız kap veya tavaların ölçülerini paylaşın. Yatay ya da dikey yerleşim, kap düzeni, cam tipi ve servis yönü teklif kapsamını etkiler. Özel ölçüde imalat için alanın krokisini veya fotoğrafını da gönderin.',
                },
                productUse: 'Meze veya kebap servisinde teşhir miktarı, kap düzeni ve personelin ürüne erişimi birlikte değerlendirilmelidir.',
            },
            EN: {
                name: 'Kebab and Mezze Display Cabinets',
                description: 'Compare kebab, mezze and vertical mezze display cabinets for restaurants and delicatessens. Review module sizes and specifications and request a quote.',
                intro: 'Kebab display cabinets present products to customers in a restaurant service area. Mezze display cabinets hold a selection of dishes in individual containers for restaurants and delis. Compare horizontal displays for counter service and vertical mezze cabinets for presenting dishes across several shelves.',
                sections: [
                    { heading: 'Arrange the display around service', body: 'Identify the mezze selection, container or tray sizes and the access needed during service. Horizontal counters and vertical mezze cabinets offer different presentation arrangements. Compare the glass system, drawings and photos with your planned layout.' },
                    { heading: 'Compare sizes and operating requirements', body: 'Module options help you assess cabinet length for the available space. Check operating temperatures and refrigeration arrangements for the selected model. Sharing your products and counter layout when requesting a quote helps define the project requirements.' },
                ],
                criteria: ['Define the display quantity and containers you intend to use.', 'Consider customer visibility and staff access in the same layout.', 'Check module sizes, glass design and operating requirements.'],
                questions: [
                    { question: 'Should I choose a counter or vertical mezze cabinet?', answer: 'This depends on the display quantity and service arrangement. Compare the available space and staff access to select a suitable model group.' },
                    { question: 'What information is needed for a quote?', answer: 'Share the model, available dimensions, products and container arrangement. Glass, refrigeration and other options can then be discussed for your project.' },
                ],
                quote: {
                    title: 'Dimensions and quotes for kebab and mezze cabinets',
                    body: 'Measure the available length, depth and height. Share how many dishes you want to display at once and the dimensions of your containers or trays. Cabinet orientation, container layout, glass design and service access affect the quote. Include a sketch or photo of the space for a made-to-measure cabinet.',
                },
                productUse: 'For mezze or kebab service, consider display quantity, container arrangement and staff access together.',
            },
        },
    },
    {
        id: 'sutluk', slug: 'sutluk-market-dolaplari', featuredProductId: 38, related: ['reyon', 'meze', 'soguk-oda'],
        copy: {
            TR: {
                name: 'Sütlük ve Market Dolapları',
                description: 'Açık, cam kapaklı ve yarım boy sütlük; şişe soğutucu, peynir reyonu ve market dolaplarını ölçüleri ve teknik özellikleriyle inceleyin.',
                intro: 'Market ve şarküteriler için sütlük dolabı seçerken raf düzenini ve müşterinin ürüne erişimini birlikte planlayın. Açık sütlük ürünlere doğrudan erişim sağlar. Cam kapaklı sütlük dolabında sürgülü veya çarpma kapak seçimini koridor genişliğine göre değerlendirin. Yarım boy sütlükleri, şişe soğutucuları ve peynir reyonlarını da mağaza yerleşiminize göre karşılaştırabilirsiniz.',
                sections: [
                    { heading: 'Raf ve erişim düzenini ürün grubuna göre belirleyin', body: 'Süt, yoğurt ve şişeli içeceklerin ambalaj ölçülerine göre raf derinliğini ve raflar arasındaki mesafeyi planlayın. Çarpma kapak için dolap önünde açılım payı bırakın. Mağazada görüş alanını korumak istediğiniz noktalarda yarım boy sütlüğü değerlendirin. Zeytin ve manav teşhir ekipmanlarını da kullanım alanınıza göre karşılaştırın.' },
                    { heading: 'Mağaza alanı ve teknik seçenekler', body: 'Dolabın uzunluğu kadar yüksekliği, geçiş alanına etkisi ve ürün yükleme erişimi de önemlidir. İlgili ürünün modül ve çalışma sıcaklığı bilgilerini inceleyin. Soğutma grubu, kapak veya dekor seçeneklerini model bazında değerlendirerek yerleşiminize uygun teklif alabilirsiniz.' },
                ],
                criteria: ['Sergilenecek ürün grubunu ve raf yerleşimini belirleyin.', 'Açık veya kapaklı kullanım ile müşteri geçiş alanını birlikte değerlendirin.', 'Modelin modül ölçülerini ve soğutma bilgilerini karşılaştırın.'],
                questions: [
                    { question: 'Sütlük modellerinde açık ve cam kapaklı seçenekler var mı?', answer: 'Katalogda açık, cam kapaklı ve yarım boy sütlük modelleri bulunur. Ürünlere erişimi ve mağaza yerleşimini dikkate alarak bu seçenekleri karşılaştırabilirsiniz.' },
                    { question: 'Market yerleşimi için nasıl model seçebilirim?', answer: 'Ürün gruplarınızı, raf ihtiyacınızı ve kullanılabilir alan ölçülerini paylaşın. Sütlük, şişe soğutucu ve şarküteri reyonları aynı yerleşim içinde değerlendirilebilir.' },
                ],
                quote: {
                    title: 'Sütlük dolabı ölçüleri ve fiyat teklifi',
                    body: 'Dolabın yerleşeceği alanın genişliğini, derinliğini ve yüksekliğini ölçün. Koridor genişliğini ve teşhir edeceğiniz ürünleri de paylaşın. Modül uzunluğu, kapak tipi ve raf sayısı teklif kapsamını etkiler. Özel ölçü sütlük dolabı talebinde yerleşim krokisini veya alanın fotoğrafını da gönderin.',
                },
                productUse: 'Market yerleşiminde sergilenecek ürün, raf kullanımı ve müşterinin ürüne erişimi birlikte planlanmalıdır.',
            },
            EN: {
                name: 'Dairy and Supermarket Display Cabinets',
                description: 'Explore open, glass door and low dairy cabinets, bottle coolers, cheese displays and supermarket equipment with sizes and technical information.',
                intro: 'When choosing a dairy display cabinet for a supermarket or deli, plan the shelves and how customers will reach the products. An open dairy cabinet gives customers direct access. For a glass-door model, consider sliding or hinged doors based on aisle clearance. Compare low-height cabinets, bottle coolers and cheese displays within the same store layout.',
                sections: [
                    { heading: 'Plan shelves and access for the product group', body: 'Use the dimensions of milk cartons, yoghurt pots and bottles to plan shelf depth and spacing. Allow space in front for hinged doors to open. Consider a low-height dairy cabinet where clear sightlines matter. Compare olive and produce displays for their intended use as well.' },
                    { heading: 'Fit the equipment to your store', body: 'Consider cabinet height and circulation space as well as length. Review the module and temperature information on each product page. Refrigeration, door and decorative options can then be discussed for the chosen model and store layout.' },
                ],
                criteria: ['Define the product range and shelf arrangement.', 'Compare open and door-equipped access within the available circulation space.', 'Review model sizes and refrigeration information.'],
                questions: [
                    { question: 'Are open and glass door dairy models available?', answer: 'The catalogue includes open, glass door and low dairy cabinets. Compare these options against customer access and the proposed store layout.' },
                    { question: 'How can I select equipment for a supermarket layout?', answer: 'Share your product groups, shelf requirements and available dimensions. Dairy cabinets, bottle coolers and deli displays can be assessed together within the layout.' },
                ],
                quote: {
                    title: 'Dairy cabinet dimensions and quotes',
                    body: 'Measure the width, depth and height available for the cabinet. Share the aisle width and the products you plan to display. Module length, door type and shelf count affect the quote. Include a layout sketch or a photo of the space if you need a made-to-measure cabinet.',
                },
                productUse: 'For a supermarket layout, consider the product range, shelves and customer access together.',
            },
        },
    },
    {
        id: 'balik', slug: 'balik-teshir-dolaplari', featuredProductId: 7, related: ['reyon', 'kasap', 'soguk-oda'],
        copy: {
            TR: {
                name: 'Balık Teşhir ve Mostra Dolapları',
                description: 'Balık satış ve deniz ürünü teşhir alanları için mostra ve soğutmalı balık dolapları. Modelleri, cam yapısını ve katalog ölçülerini karşılaştırın.',
                intro: 'Balık teşhir dolabı seçerken sergileyeceğiniz deniz ürünlerinin kapladığı alanı ve personelin tezgâha nereden ulaşacağını belirleyin. Cam siperlikli ve kapaklı balık mostra modellerini teşhir yüzeyi ve servis erişimi açısından karşılaştırın. Kapaklı model için açılım payını da ölçün. Soğutmalı balık dolaplarının teknik bilgilerini ürün sayfalarında inceleyin.',
                sections: [
                    {
                        heading: 'Cam siperlikli balık mostrasında servis erişimi',
                        body: 'Cam siperlikli mostranın müşteriye bakan cephesini ve personelin servis tarafını yerleşim planında gösterin. Teşhir yüzeyine kaç sıra ürün yerleştireceğinizi ve çalışanların en uzak sıraya nasıl ulaşacağını belirleyin. Buzlu sunum düşünüyorsanız zemin ve tahliye seçeneklerini model üzerinden görüşün.',
                        productId: 7,
                    },
                    {
                        heading: 'Kapaklı balık mostrasında açılım ve temizlik',
                        body: 'Kapaklı modelde, kapağın açılması için gereken üst ve çevre boşluğunu seçtiğiniz modelin ölçüleriyle karşılaştırın. Personelin hem servis sırasında hem de temizlik için teşhir yüzeyine nasıl erişeceğini planlayın. Çalışma sıcaklığını ve soğutma grubunu ürünün teknik sayfasından kontrol edin.',
                        productId: 11,
                    },
                ],
                criteria: ['Deniz ürünü çeşitlerini ve teşhir miktarını belirleyin.', 'Cam, kapak ve tezgâha erişim düzenini karşılaştırın.', 'Ölçüleri ve çalışma koşullarını seçilen model üzerinden değerlendirin.'],
                questions: [
                    { question: 'Mostra dolabı seçerken hangi bilgiler önemlidir?', answer: 'Teşhir miktarı, alan ölçüsü, servis erişimi ve ürünün muhafaza koşulları önemlidir. Görünüşle birlikte modelin teknik bilgilerini de inceleyin.' },
                    { question: 'Cam siperlikli ve kapaklı modelleri nerede görebilirim?', answer: 'Bu sayfadaki model bağlantılarından cam ve kapak seçeneklerinin görsellerini, ölçülerini ve teknik bilgilerini inceleyebilirsiniz.' },
                ],
                quote: {
                    title: 'Balık teşhir dolabı ölçüleri ve fiyat teklifi',
                    body: 'Tezgâhın yerleşeceği alanın uzunluğunu ve derinliğini, sergileyeceğiniz ürünleri ve teşhir miktarını paylaşın. Cam siperlik veya kapak tercihini, servis yönünü ve varsa buzlu sunum ihtiyacını belirtin. Modül ölçüsü, soğutma grubu ve seçilen donanım teklif kapsamını etkiler.',
                },
                productUse: 'Balık satış alanında teşhir miktarı, ürünün muhafaza ihtiyacı ve tezgâha servis erişimi birlikte ele alınmalıdır.',
            },
            EN: {
                name: 'Fish Display Cabinets and Counters',
                description: 'Compare fish display counters and refrigerated seafood cabinets, glass designs, catalogue dimensions and technical specifications from Pars Cooling.',
                intro: 'When choosing a fish display cabinet, work out how much space the seafood needs and where staff will reach it from. Compare display surfaces and service access for glass guard and lidded counters. Measure the clearance for a lidded model and check the operating conditions on the product page.',
                sections: [
                    {
                        heading: 'Service access with a glass guard',
                        body: 'Show the customer-facing side and the staff service side on your layout. Work out how many rows of seafood you need and how staff will reach the furthest row. If you plan to display seafood on ice, ask about the display surface and drainage for the selected model.',
                        productId: 7,
                    },
                    {
                        heading: 'Lid clearance and cleaning access',
                        body: 'Use the model dimensions to check clearance above and around the lid. Plan how staff will reach the display surface for service and cleaning. Review operating temperatures and refrigeration options on the model page.',
                        productId: 11,
                    },
                ],
                criteria: ['Define the seafood range and display quantity.', 'Compare glass, lid and service access arrangements.', 'Review sizes and operating requirements for the selected model.'],
                questions: [
                    { question: 'What information is important when choosing a fish display?', answer: 'Consider quantity, available dimensions, staff access and product storage requirements. Review technical information as well as the appearance of the cabinet.' },
                    { question: 'Where can I compare glass guard and lidded designs?', answer: 'Follow the model links on this page to compare glass and lid options, dimensions and technical specifications.' },
                ],
                quote: {
                    title: 'Fish display cabinet dimensions and quotes',
                    body: 'Share the available counter length and depth, the seafood you plan to display and the quantity. Specify whether you prefer a glass guard or lid, which side staff will serve from and whether you plan to use ice. Module size, refrigeration arrangement and selected equipment affect the quote.',
                },
                productUse: 'For a fish sales area, consider display quantity, storage requirements and access for serving together.',
            },
        },
    },
    {
        id: 'reyon', slug: 'reyon-teshir-dolaplari', featuredProductId: 17, related: ['kasap', 'meze', 'balik'],
        copy: {
            TR: {
                name: 'Reyon ve Teşhir Dolapları',
                description: 'Dik, düz ve bombe camlı reyon dolapları; statik, üflemeli ve servis tipi teşhir modelleri. Ölçüleri, çizimleri ve seçenekleri inceleyin.',
                intro: 'Soğutmalı reyon dolabı, şarküteri, restoran ve marketlerde peynir, zeytin ve benzeri ürünlerin teşhiri ve tezgâhtan servisi için kullanılır. Şarküteri reyon dolabı seçerken dik, düz, yarım veya bombe camlı modelleri müşterinin görüş açısına ve personelin erişimine göre karşılaştırın.',
                sections: [
                    {
                        heading: 'Cam ve soğutma seçeneklerini karşılaştırın',
                        body: 'Personelin peyniri tartıp paketlediği bir şarküteride, teşhir yüzeyini, camın görüş açısını ve tezgâh arkasındaki çalışma boşluğunu birlikte değerlendirin. Aşağıdaki dik camlı modeli bu ölçütlerle inceleyebilirsiniz. Statik ve üflemeli soğutma seçeneklerinde seçtiğiniz modelin çalışma koşullarını sergileyeceğiniz ürünlerle karşılaştırın.',
                        productId: 17,
                    },
                    { heading: 'Modüler reyon yerleşimi', body: 'Katalogdaki uzunluk seçenekleri üzerinden kullanılabilir alanı planlayın. İç veya dış motor seçenekleri, cam erişimi ve dekor uygulamaları için seçilen modelin açıklamalarını inceleyin. Proje ölçülerini ve ürün grubunu paylaşmanız, teklifin ihtiyacınıza göre hazırlanmasına yardımcı olur.' },
                ],
                criteria: ['Ürün grubunu ve servis biçimini belirleyin.', 'Cam biçimini, görüş açısını ve temizliğe erişimi değerlendirin.', 'Modül ölçülerini ve modelin soğutma seçeneklerini karşılaştırın.'],
                questions: [
                    { question: 'Reyon dolabı hangi işletmeler için seçilebilir?', answer: 'Modelin kullanım amacına bağlı olarak şarküteri, market, kafe ve restoran projelerinde değerlendirilebilir. Uygunluk, sergilenecek ürün ve teknik özellikler üzerinden belirlenmelidir.' },
                    { question: 'Statik veya üflemeli model seçimini nasıl yapmalıyım?', answer: 'Önce ürün grubunu ve kullanım koşullarını tanımlayın. İlgili modellerin teknik bilgilerini karşılaştırarak uygulamanız için uygun seçeneği görüşebilirsiniz.' },
                ],
                quote: {
                    title: 'Soğutmalı reyon dolabı için ölçü ve fiyat teklifi',
                    body: 'Tezgâh için ayırdığınız uzunluğu, derinliği ve arka taraftaki servis boşluğunu ölçün. Sergileyeceğiniz ürünleri ve personelin hangi taraftan servis yapacağını paylaşın. Cam tipi, modül uzunluğu ve soğutma grubu teklif kapsamını etkiler. Özel üretim için kasa ve terazinin yerini de gösteren bir kroki gönderin.',
                },
                productUse: 'Reyon seçiminde sergilenecek ürün, cam biçimi ve servis düzeni birlikte değerlendirilmelidir.',
            },
            EN: {
                name: 'Refrigerated Display and Service Counters',
                description: 'Compare upright, flat and curved glass counters, static and ventilated displays, module dimensions, drawings and service cabinet options.',
                intro: 'Refrigerated display counters are used in delis, restaurants and supermarkets to present and serve cheese, olives and similar products. When choosing a deli display counter, compare upright, flat, half-height and curved glass according to what customers can see and how staff reach the products.',
                sections: [
                    {
                        heading: 'Compare glass and refrigeration options',
                        body: 'At a deli counter where staff weigh and package cheese, consider the display surface, customer sightlines and the working space behind the counter. Use the upright glass model below as an example. For static and fan-assisted cooling options, compare the operating conditions of the selected model with your products’ requirements.',
                        productId: 17,
                    },
                    { heading: 'Plan a modular counter layout', body: 'Use the catalogue length options to assess available space. Review the selected model for refrigeration arrangements, glass access and decorative options. Share the project dimensions and product group to help define the quotation.' },
                ],
                criteria: ['Define the product group and service arrangement.', 'Assess glass design, viewing angles and cleaning access.', 'Compare module dimensions and refrigeration options.'],
                questions: [
                    { question: 'Which businesses can use these display counters?', answer: 'Depending on the model, they can be assessed for delicatessen, supermarket, cafe and restaurant projects. Confirm suitability against the products and technical specifications.' },
                    { question: 'How should I compare static and ventilated models?', answer: 'First define the product group and operating conditions. Review the technical information for the relevant models when discussing a suitable option for the application.' },
                ],
                quote: {
                    title: 'Refrigerated counter dimensions and quotes',
                    body: 'Measure the available counter length and depth and the working space behind it. Share the products you plan to display and which side staff will serve from. Glass type, module length and refrigeration arrangement affect the quote. Include a sketch with the till and scales marked if you need a custom counter.',
                },
                productUse: 'When choosing a service counter, consider the product group, glass design and service arrangement together.',
            },
        },
    },
    {
        id: 'soguk-oda', slug: 'soguk-hava-depolari', featuredProductId: 97, related: ['sogutma', 'mutfak', 'sutluk'],
        copy: {
            TR: {
                name: 'Soğuk Hava Depoları ve Ekipmanları',
                description: 'Soğuk hava deposu, -18 derece depo, panel, kapı ve PVC şerit perde seçeneklerini inceleyin. Projenizin ölçüleri ve kullanım amacı için bilgi alın.',
                intro: 'Soğuk hava deposu planlamasına depolanacak ürün, hedef sıcaklık ve oda ölçüleriyle başlayın. Soğuk oda paneli, soğuk oda kapısı ve soğutma grubu bu bilgilere göre seçilir. Katalogda -18 derece depo modelleri, PVC şerit perdeler ve depo aksesuarları da bulunur.',
                sections: [
                    {
                        heading: 'Soğuk oda paneli ve yalıtım seçimi',
                        body: 'Duvar ve tavan paneli seçimini, odanın iç ölçüleriyle birlikte hedef çalışma sıcaklığı ve ortam koşullarına göre değerlendirin. Panel kalınlığı ve birleşimler için kapı ile tesisat açıklıklarını krokide işaretleyin. Soğutma grubunu da oda ve yalıtım bilgileriyle birlikte ele alın.',
                        productId: 102,
                        productLinkText: 'Soğuk oda paneli seçeneklerini inceleyin',
                    },
                    {
                        heading: 'Soğuk oda kapısı ve yükleme geçişi',
                        body: 'Menteşeli kapı için kanadın açılacağı alanı, sürgülü kapı için yan duvardaki boşluğu ölçün. Kasa veya taşıma arabası kullanılacaksa net geçiş genişliğini ve yüksekliğini taşıma ekipmanının ölçüleriyle karşılaştırın. Sık geçiş olan girişler için PVC şerit perde seçeneklerini de inceleyin.',
                        productId: 106,
                        productLinkText: 'Sürgülü soğuk oda kapısı',
                    },
                ],
                criteria: ['Oda iç ölçülerini, ürün grubunu ve kullanım amacını belirleyin.', 'Kapı, yükleme geçişi ve personel hareketini planlayın.', 'Panel, perde ve soğutma sistemi seçeneklerini birlikte değerlendirin.'],
                questions: [
                    { question: 'Soğuk hava deposu teklifi için hangi ölçüler gerekir?', answer: 'Odanın iç uzunluk, genişlik ve yükseklik bilgilerini; depolanacak ürünü ve kullanım şeklini paylaşın. Kapı ve soğutma sistemi ihtiyacı bu bilgilerle birlikte değerlendirilebilir.' },
                    { question: 'Panel, kapı ve PVC perde ürünleri de var mı?', answer: 'Katalogda soğuk oda panelleri, menteşeli ve sürgülü kapılar, PVC şerit perde modelleri ve depo aksesuarları bulunur. Modeller bölümünden her ürünün teknik sayfasını açabilirsiniz.' },
                ],
                quote: {
                    title: 'Soğuk hava deposu için proje ve fiyat teklifi',
                    body: 'Odanın iç uzunluğunu, genişliğini ve yüksekliğini veya yeni depoya ayrılan alanın ölçülerini paylaşın. Depolanacak ürünü, hedef oda sıcaklığını ve günlük yükleme düzenini belirtin. Soğuk hava deposu fiyatı panel, kapı, soğutma grubu ve montaj kapsamına göre belirlenir. Teklifte hangi kalemlere ihtiyaç duyduğunuzu yazın.',
                },
                productUse: 'Soğuk oda projesinde oda ölçüleri, depolanacak ürün, kapı geçişi ve çalışma koşulları birlikte planlanmalıdır.',
            },
            EN: {
                name: 'Cold Rooms and Cold Storage Equipment',
                description: 'Explore cold rooms, -18 degree storage models, insulated panels, doors, PVC strip curtains and accessories. Discuss your project dimensions and use.',
                intro: 'Start your cold room plan with the products to be stored, the target temperature and the room dimensions. Use that information to choose cold room panels, doors and refrigeration equipment. The catalogue also includes -18 °C storage models, PVC strip curtains and storage accessories.',
                sections: [
                    {
                        heading: 'Cold room panels and insulation',
                        body: 'Assess wall and ceiling panels against internal dimensions, target temperature and ambient conditions. Mark door and service openings on the plan when discussing panel thickness and joints. Consider the room and its insulation when selecting the refrigeration unit.',
                        productId: 102,
                    },
                    {
                        heading: 'Cold room doors and loading access',
                        body: 'Measure swing clearance for a hinged door and wall space at the side for a sliding door. If staff use crates or trolleys, compare them with the clear opening width and height. Consider PVC strip curtains for frequently used doorways.',
                        productId: 106,
                    },
                ],
                criteria: ['Define internal dimensions, the product group and intended use.', 'Plan doors, loading access and staff movement.', 'Assess panels, curtains and refrigeration together.'],
                questions: [
                    { question: 'Which dimensions are needed for a cold room quote?', answer: 'Share internal length, width and height, the products to be stored and the usage pattern. Doors and refrigeration requirements can then be discussed together.' },
                    { question: 'Are panels, doors and PVC curtains available?', answer: 'The catalogue includes cold room panels, hinged and sliding doors, PVC strip curtains and accessories. Open the model pages for individual specifications.' },
                ],
                quote: {
                    title: 'Cold room project details and quotes',
                    body: 'Share the internal length, width and height or the available space for a new cold room. Specify the products you will store, the target temperature and your daily loading pattern. Panel, door, refrigeration and installation requirements affect the price. Tell us which items you need the quote to cover.',
                },
                productUse: 'For a cold room project, plan internal dimensions, stored products, door access and operating conditions together.',
            },
        },
    },
    {
        id: 'mutfak', slug: 'endustriyel-mutfak-ekipmanlari', featuredProductId: 77, related: ['pasta', 'meze', 'soguk-oda'],
        copy: {
            TR: {
                name: 'Endüstriyel Mutfak Ekipmanları',
                description: 'Profesyonel mutfaklar için paslanmaz buzdolabı, tezgâh altı dolap, çalışma tezgâhı, evye, raf ve davlumbaz modellerini inceleyin.',
                intro: 'Paslanmaz çalışma tezgâhı, restoran ve otel mutfaklarında yemek hazırlığı için bir çalışma yüzeyi sağlar. Tezgâh altı buzdolabı, sık kullanılan malzemeleri hazırlık alanına yakın tutmak için bir seçenektir. Dikey paslanmaz buzdolaplarını, evyeli tezgâhları, rafları ve davlumbazları mutfağınızın iş akışına göre karşılaştırın.',
                sections: [
                    {
                        heading: 'Hazırlık için paslanmaz çalışma tezgâhı',
                        body: 'Üst yüzeyde yapılacak hazırlığı ve kullanılacak ekipmanın ölçülerini belirleyin. Kap ve gereçlere hızlı erişim için açık raflı, kapalı saklama için dolaplı seçenekleri karşılaştırın. Evyeli tezgâh düşünüyorsanız su ve gider noktalarını, davlumbaz için havalandırma projesini yerleşim planına dahil edin.',
                        productId: 87,
                    },
                    {
                        heading: 'Tezgâh altı buzdolabı ve dikey buzdolabı seçimi',
                        body: 'Sık kullanılan malzemeler için tezgâh altı dolabın iç ölçülerini kontrol edin. Dikey buzdolabında raf ihtiyacını ve cihaz için ayrılan alanı birlikte değerlendirin. Kapak açıkken personel geçişini ölçün. Çalışma sıcaklığını ve motor bölümünün servis boşluğunu modelin teknik sayfasından kontrol edin.',
                        productId: 79,
                    },
                ],
                criteria: ['Hazırlık, depolama ve servis adımlarını yerleşimde tanımlayın.', 'Dolap ve tezgâh ölçülerini personel geçişiyle birlikte kontrol edin.', 'Soğutmalı ürünleri, rafları ve havalandırma ekipmanlarını kullanım amacına göre seçin.'],
                questions: [
                    { question: 'Tezgâh altı ve dikey buzdolabı arasında nasıl seçim yapılır?', answer: 'Kullanılabilir alanı, muhafaza miktarını ve çalışma tezgâhına yakınlık ihtiyacını karşılaştırın. Seçilecek ürünün ölçülerini ve teknik özelliklerini inceleyerek uygun yerleşimi değerlendirebilirsiniz.' },
                    { question: 'Paslanmaz tezgâh, evye ve raf modellerini görebilir miyim?', answer: 'Modeller bölümündeki tezgâh, evye ve raf sayfalarından ölçüleri ve teknik bilgileri karşılaştırabilirsiniz.' },
                ],
                quote: {
                    title: 'Endüstriyel mutfak ekipmanları için ölçü ve fiyat teklifi',
                    body: 'Ekipman için ayrılan genişlik, derinlik ve yükseklik ile personel geçişini ölçün. Tezgâhın kullanım amacını, raf veya dolap ihtiyacını ve evye varsa su ile gider noktalarını paylaşın. Özel ölçüde imalat için bir kroki gönderin. Soğutmalı ekipman gerekiyorsa saklanacak ürünleri de belirtin.',
                },
                productUse: 'Profesyonel mutfakta ekipman ölçüleri, hazırlık akışı ve personel geçişi birlikte değerlendirilmelidir.',
            },
            EN: {
                name: 'Commercial Kitchen Equipment',
                description: 'Explore stainless steel refrigerators, undercounter cabinets, work tables, sinks, shelves and extractor hoods for professional kitchen layouts.',
                intro: 'A stainless steel work table provides a preparation surface in restaurant and hotel kitchens. An undercounter refrigerator can keep frequently used ingredients close to the preparation area. Compare upright stainless steel refrigerators, sink units, shelves and extractor hoods based on your kitchen workflow.',
                sections: [
                    {
                        heading: 'Stainless steel work tables for preparation',
                        body: 'Define the preparation tasks and measure the equipment that will sit on the work surface. Compare open shelves for quick access to containers and utensils with cabinets for enclosed storage. Mark water and drain points for sinks and include your ventilation plan when choosing an extractor hood.',
                        productId: 87,
                    },
                    {
                        heading: 'Undercounter and upright refrigerators',
                        body: 'Check the internal dimensions of an undercounter refrigerator for frequently used ingredients. For an upright cabinet, consider shelf requirements alongside the available space. Measure the aisle with doors open. Check operating temperatures and service clearance for the refrigeration unit on the model page.',
                        productId: 79,
                    },
                ],
                criteria: ['Define preparation, storage and service areas.', 'Check equipment sizes alongside staff circulation.', 'Select refrigeration, shelving and ventilation equipment for the intended use.'],
                questions: [
                    { question: 'Should I choose an undercounter or upright refrigerator?', answer: 'Compare available space, storage quantity and access from the work area. Review the model dimensions and technical information when assessing the layout.' },
                    { question: 'Can I compare work tables, sinks and shelving?', answer: 'Open the work table, sink and shelving pages in the models section to review dimensions and specifications.' },
                ],
                quote: {
                    title: 'Commercial kitchen equipment dimensions and quotes',
                    body: 'Measure the available width, depth and height and the staff aisle. Describe how you will use the work table, your shelf or cabinet needs and water and drain points for a sink. Include a sketch for made-to-measure equipment. List the products you need to store if you are also choosing a refrigerator.',
                },
                productUse: 'For a professional kitchen, assess equipment sizes, preparation workflow and staff circulation together.',
            },
        },
    },
    {
        id: 'sogutma', slug: 'sogutma-gruplari-sistemleri', featuredProductId: 94, related: ['soguk-oda', 'mutfak', 'reyon'],
        copy: {
            TR: {
                name: 'Soğutma Grupları ve Sistemleri',
                description: 'Monoblok, split, merkezi ve bireysel soğutma gruplarını inceleyin. Soğuk oda ve muhafaza projeniz için sistem seçeneklerini karşılaştırın.',
                intro: 'Endüstriyel soğutma sistemleri, soğutulacak oda ve reyonların sayısı, depolanacak ürün ve kurulum alanına göre seçilir. Tek bir soğuk oda için monoblok, split veya bireysel soğutma grubunu, birden fazla oda ya da reyon için merkezi soğutma seçeneklerini proje koşullarına göre karşılaştırın.',
                sections: [
                    {
                        heading: 'Monoblok ve split soğutma grubu yerleşimi',
                        body: 'Monoblok cihaz için montaj panelini, cihaz açıklığını ve bakım alanını projede gösterin. Split soğutma grubunda iç ve dış ünitenin yerlerini ayrı ayrı planlayın. İki ünite arasındaki hat güzergâhını ve varsa kot farkını teklife esas yerleşim çiziminde belirtin.',
                        productId: 94,
                    },
                    {
                        heading: 'Merkezi ve bireysel soğutma seçenekleri',
                        body: 'Birden fazla oda veya reyon ortak bir merkezi soğutma projesinde ele alınacaksa her bölümün kullanımını ve hedef sıcaklığını ayrı yazın. Tek bir soğutma noktası için bireysel grubu değerlendirirken oda ölçülerini, yalıtımı, kapı kullanımını ve saklanacak ürün miktarını birlikte ele alın.',
                        productId: 95,
                    },
                ],
                criteria: ['Hizmet verecek alanı ve muhafaza edilecek ürünü tanımlayın.', 'Oda ölçüleri, yalıtım ve günlük kullanım bilgilerini hazırlayın.', 'Sistem yerleşimini ve teknik seçenekleri proje üzerinden değerlendirin.'],
                questions: [
                    { question: 'Monoblok, split veya merkezi sistemden hangisi uygundur?', answer: 'Uygunluk; oda ve tesis özellikleri, kullanım düzeni ve hedef çalışma koşullarıyla birlikte değerlendirilir. Proje bilgilerinizi paylaşarak seçenekleri teknik olarak karşılaştırabilirsiniz.' },
                    { question: 'Soğutma grubu için teklif isterken neleri belirtmeliyim?', answer: 'Oda ölçülerini, depolanacak ürünleri, hedef çalışma koşullarını, yalıtım bilgilerini ve kullanım düzenini paylaşın. Kurulum alanı da teklif değerlendirmesine dahil edilmelidir.' },
                ],
                quote: {
                    title: 'Soğutma grubu için proje bilgileri ve fiyat teklifi',
                    body: 'Her soğutma alanının ölçülerini, hedef sıcaklığını, yalıtım bilgilerini ve günlük ürün giriş miktarını paylaşın. Oda kapısının kullanımını ve cihazın kurulabileceği yerleri krokide gösterin. Seçilen cihaz, kontrol donanımı, bağlantılar ve montaj kapsamı teklifi etkiler. Mevcut cihaz değişecekse etiketinin fotoğrafını da ekleyin.',
                },
                productUse: 'Soğutma sistemi seçiminde hizmet verecek alan, muhafaza edilecek ürün ve projenin çalışma koşulları birlikte değerlendirilmelidir.',
            },
            EN: {
                name: 'Refrigeration Units and Systems',
                description: 'Compare monoblock, split, central and individual refrigeration units for cold rooms and storage projects. Discuss the requirements of your installation.',
                intro: 'Industrial refrigeration systems are selected based on the rooms and counters to be cooled, the products being stored and the installation space. Compare monoblock, split and individual units for a single room. Consider a central system for multiple rooms or refrigerated counters, using the requirements of each area.',
                sections: [
                    {
                        heading: 'Monoblock and split refrigeration layouts',
                        body: 'Show the mounting panel, equipment opening and service clearance for a monoblock unit on the plan. For a split system, mark the indoor and outdoor unit positions and show the route and height difference between them when requesting a quote.',
                        productId: 94,
                    },
                    {
                        heading: 'Central and individual refrigeration options',
                        body: 'If several cold rooms or display counters are part of one central refrigeration project, list the use and target temperature of each area separately. For a single cooling point, consider room size, insulation, door use and the volume of products to be stored when comparing individual units.',
                        productId: 95,
                    },
                ],
                criteria: ['Define the area being served and the products being stored.', 'Prepare room dimensions, insulation details and usage information.', 'Assess installation arrangements and technical options against the project.'],
                questions: [
                    { question: 'Which type of refrigeration system is suitable?', answer: 'Suitability depends on the room and facility, usage pattern and required operating conditions. Share project information to compare monoblock, split and central options.' },
                    { question: 'What information is needed for a refrigeration quote?', answer: 'Share room dimensions, stored products, operating requirements, insulation details and usage pattern. The installation space should also be included in the assessment.' },
                ],
                quote: {
                    title: 'Refrigeration system project details and quotes',
                    body: 'Share the dimensions, target temperature, insulation and daily incoming product quantity for each area. Mark door use and possible unit locations on the plan. The selected equipment, controls, connections and installation scope affect the quote. Include a photo of the equipment label if you are replacing an existing unit.',
                },
                productUse: 'When selecting refrigeration, assess the area being served, stored products and project operating requirements together.',
            },
        },
    },
];

// The catalogue contains this identical cabinet in two legacy display groups.
export const productCanonicalIds: Readonly<Record<number, number>> = { 42: 12 };

export function getCanonicalProductId(id: number): number {
    return productCanonicalIds[id] ?? id;
}

export function isCanonicalProduct(product: ProductSummary): boolean {
    return getCanonicalProductId(product.id) === product.id;
}

const displayNames: Record<number, TranslatedString> = {
    7: { TR: 'Cam Siperlikli Balık Mostra Dolabı', EN: 'Fish Display Cabinet with Glass Guard' },
    11: { TR: 'Kapaklı Balık Mostra Dolabı', EN: 'Lidded Fish Display Cabinet' },
    27: { TR: 'Servis Tipi Promosyon Dolabı', EN: 'Service Type Promotional Display Cabinet' },
    30: { TR: 'Reyon Dolabı', EN: 'Display Cabinet' },
    53: { TR: 'Duvar Tipi Promosyon Dolabı', EN: 'Wall Type Promotional Display Cabinet' },
    41: { TR: 'Dikey Tip Dry Aged Dolabı', EN: 'Vertical Dry Aged Cabinet' },
    43: { TR: 'Duvar Tipi Dry Aged Dolabı', EN: 'Wall Type Dry Aged Cabinet' },
    92: { TR: 'Soğuk Oda Soğutma Sistemleri', EN: 'Cold Room Refrigeration Systems' },
};

export function getProductDisplayName(product: ProductSummary, language: CatalogLanguage): string {
    return displayNames[getCanonicalProductId(product.id)]?.[language] ?? product.name[language];
}

export function getCategoryPath(category: ProductCategory): string {
    return `/urunler/${category.slug}`;
}

export function findCategory(slug?: string): ProductCategory | undefined {
    return productCategories.find(category => category.slug === slug);
}

export function getProductCategory(product: ProductSummary): ProductCategory {
    const name = product.name.TR.toLocaleLowerCase('tr-TR');
    let id: CategoryId;
    if (product.category.TR === 'Soğuk Hava Depoları') id = 'soguk-oda';
    else if (product.category.TR === 'Soğutma Sistemleri') id = 'sogutma';
    else if (product.category.TR === 'Endüstriyel Mutfak Ekipmanları') id = 'mutfak';
    else if (product.category.TR === 'Unlu Mamüller' || name.includes('pasta')) id = 'pasta';
    else if (/kasap|et askı|dry aged/.test(name)) id = 'kasap';
    else if (/meze|kebap/.test(name)) id = 'meze';
    else if (name.includes('balık')) id = 'balik';
    else if (name.includes('sütlük') || ['Duvar Tipi Soğutmalı Reyonlar', 'Market Ekipmanları'].includes(product.category.TR)) id = 'sutluk';
    else id = 'reyon';
    return productCategories.find(category => category.id === id)!;
}

export function getCategoryProducts<T extends ProductSummary>(category: ProductCategory, products: T[]): T[] {
    return products.filter(product => isCanonicalProduct(product) && getProductCategory(product).id === category.id);
}

export function getFeaturedProduct<T extends ProductSummary>(category: ProductCategory, products: T[]): T {
    return getCategoryProducts(category, products).find(product => product.id === category.featuredProductId)
        ?? getCategoryProducts(category, products)[0];
}

