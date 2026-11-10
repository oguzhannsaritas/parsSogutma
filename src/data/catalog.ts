import type { Product, TranslatedString } from './products/types';

export type CatalogLanguage = keyof TranslatedString;
export type CategoryId = 'pasta' | 'kasap' | 'meze' | 'sutluk' | 'balik' | 'reyon' | 'mutfak' | 'sogutma' | 'soguk-oda';

export type CategoryCopy = {
    name: string;
    description: string;
    intro: string;
    sections: Array<{ heading: string; body: string }>;
    criteria: string[];
    questions: Array<{ question: string; answer: string }>;
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
                intro: 'Pasta ve çikolata dolabı seçimi, sergilenecek ürünün muhafaza ihtiyacı ile vitrinin servis düzenini birlikte değerlendirmeyi gerektirir. Pars Soğutma kataloğunda yatay, dikey ve cephe tipi pasta dolapları; ekler ve çikolata sunumuna yönelik modeller ile pastane tezgâhları yer alır.',
                sections: [
                    { heading: 'Ürüne göre teşhir modeli seçimi', body: 'Yaş pasta, çikolata, ekler ve kuru pasta aynı teşhir koşullarına ihtiyaç duymayabilir. Önce ürün grubunu belirleyin; ardından seçtiğiniz modelin teknik sayfasındaki çalışma sıcaklığını, raf düzenini ve cam yapısını inceleyin. Bu grupta baklava, kuruyemiş ve sıcak servis tezgâhları da bulunur; soğutmalı, kuru ve ısıtmalı seçeneklerin kullanım amaçları farklıdır.' },
                    { heading: 'Vitrin ölçüsü ve servis akışı', body: 'Dolabın yerleşeceği alanın uzunluğu kadar geçiş alanı, ürün yükleme yönü ve servis erişimi de önemlidir. Yatay bir vitrin ile dikey ya da cephe tipi bir modelin sergileme düzenini karşılaştırın. Ürün sayfalarındaki modül bilgileri, çizimler ve uygulama fotoğrafları üzerinden işletmenize uygun seçeneği değerlendirebilirsiniz.' },
                ],
                criteria: ['Sergilenecek ürün türünü ve günlük teşhir miktarını belirleyin.', 'Yerleşim ölçüsünü, raf ihtiyacını ve servis yönünü birlikte planlayın.', 'Çalışma sıcaklığı ile motor ve aksesuar seçeneklerini seçilen model üzerinden teyit edin.'],
                questions: [
                    { question: 'Pasta ve çikolata için aynı dolap seçilebilir mi?', answer: 'Seçim, ürünün muhafaza gereksinimine ve dolabın teknik özelliklerine bağlıdır. Pasta–çikolata modellerini inceleyin; sergileyeceğiniz ürünleri belirterek uygun çalışma koşulları için bilgi alın.' },
                    { question: 'Pasta dolabı için nasıl teklif alabilirim?', answer: 'Beğendiğiniz modeli, kullanılabilir alan ölçülerini ve sergileyeceğiniz ürünleri paylaşın. Raf, cam ve soğutma seçenekleriyle birlikte projenize uygun teklif hazırlanabilir.' },
                ],
                productUse: 'Pastane ve kafe vitrini planlarken ürün türü, raf ihtiyacı ve servis erişimi birlikte değerlendirilmelidir.',
            },
            EN: {
                name: 'Pastry and Chocolate Display Cabinets',
                description: 'Compare horizontal, vertical and facade pastry displays, chocolate and eclair cabinets, technical dimensions and bakery counters from Pars Cooling.',
                intro: 'Choosing a pastry or chocolate display starts with the storage needs of your products and the way your team serves customers. The Pars Cooling range includes horizontal, vertical and facade pastry cabinets, eclair and chocolate displays, and bakery counters.',
                sections: [
                    { heading: 'Match the display to your products', body: 'Cakes, chocolate, eclairs and dry pastries may require different display conditions. Identify the product group before comparing operating temperatures, shelf arrangements and glass designs on each model page. Baklava, nut and heated service counters are also listed here; refrigerated, ambient and heated models serve different purposes.' },
                    { heading: 'Plan the counter and service area', body: 'Consider access for loading and serving as well as the available counter length. Compare the presentation of horizontal, vertical and facade models. Module information, drawings and installation photos help you assess a cabinet within your bakery or cafe layout.' },
                ],
                criteria: ['Identify the product type and the quantity you intend to display.', 'Plan the available space, shelves and service access together.', 'Confirm temperatures, refrigeration arrangements and accessories for the selected model.'],
                questions: [
                    { question: 'Can one cabinet display both pastry and chocolate?', answer: 'This depends on the products and the technical specification of the cabinet. Review the pastry–chocolate models and tell us what you plan to display so that the operating requirements can be discussed.' },
                    { question: 'How do I request a pastry cabinet quote?', answer: 'Share the model, available dimensions and products to be displayed. The quote can then reflect the shelves, glass and refrigeration options required for your project.' },
                ],
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
                intro: 'Kasap dolabı seçerken etin sunum biçimi, teşhir alanı ve çalışma düzeni birlikte ele alınır. Bu grupta dik, düz ve bombe camlı kasap reyonlarının yanında et askı ve dry aged dolapları bulunur. Her modelin amacı ve teknik gereksinimi kendi ürün sayfasında değerlendirilmelidir.',
                sections: [
                    { heading: 'Reyon, et askı ve dry aged seçenekleri', body: 'Tezgâh üzerinden servis edilen bir reyon ile askıda sunum yapılan bir dolap farklı bir yerleşim gerektirir. Dry aged modellerini de kendi teknik özellikleri üzerinden inceleyin. Ürünün kullanım amacını netleştirmek, cam biçimi veya dış görünüşten önce doğru model grubuna ulaşmanızı sağlar.' },
                    { heading: 'Çalışma alanına uygun yerleşim', body: 'Modül uzunluğu, personelin servis erişimi ve dolabın önündeki müşteri alanı beraber planlanmalıdır. Seçilen ürünün sıcaklık bilgisini, motor seçeneklerini ve temizlik erişimini teknik sayfasından kontrol edin. Uygulama görselleri, reyonun işletme içindeki konumunu değerlendirmenize yardımcı olur.' },
                ],
                criteria: ['Tezgâh teşhiri, askıda sunum veya dry aged kullanımını belirleyin.', 'Reyon uzunluğunu ve personel servis alanını ölçün.', 'Modelin çalışma koşullarını ve soğutma grubu seçeneklerini karşılaştırın.'],
                questions: [
                    { question: 'Dik, düz ve bombe camlı reyon arasında nasıl seçim yapılır?', answer: 'Cam biçimi; görüş açısı, servis erişimi ve mağaza yerleşimiyle birlikte değerlendirilir. Seçenekleri model fotoğrafları ve teknik çizimler üzerinden karşılaştırabilirsiniz.' },
                    { question: 'Et askı dolabı ile dry aged dolabı aynı amaçla mı kullanılır?', answer: 'Kullanım amaçları ve ihtiyaç duyulan çalışma koşulları farklı olabilir. Sergileyeceğiniz ürünü ve uygulamanızı belirterek modelin uygunluğunu teknik özellikleriyle birlikte teyit edin.' },
                ],
                productUse: 'Kasap yerleşiminde ürünün sunum biçimi, çalışma koşulları ve personelin servis alanı birlikte planlanmalıdır.',
            },
            EN: {
                name: 'Butcher and Meat Display Cabinets',
                description: 'Explore butcher counters, meat displays, hanging meat and dry aged cabinets. Compare upright, flat and curved glass models and technical specifications.',
                intro: 'A butcher cabinet should suit the way meat is presented and served. This group includes upright, flat and curved glass counters alongside hanging meat and dry aged cabinets. Assess the intended use and specification of each model on its own product page.',
                sections: [
                    { heading: 'Counters, hanging displays and dry aged models', body: 'A service counter and a hanging meat display call for different layouts. Dry aged models should also be assessed against their individual specification. Clarify the intended application before selecting a cabinet by its glass shape or appearance.' },
                    { heading: 'Fit the cabinet to the working area', body: 'Plan module length, staff access and customer circulation together. Review the temperature information, refrigeration options and cleaning access of the selected product. Installation images help you assess where the counter will sit within the shop.' },
                ],
                criteria: ['Define the counter display, hanging display or dry aged application.', 'Measure the counter space and staff service area.', 'Compare operating requirements and refrigeration arrangements.'],
                questions: [
                    { question: 'How should I choose the glass shape?', answer: 'Consider viewing angles, service access and your shop layout. Model photos and technical drawings allow you to compare upright, flat and curved glass counters.' },
                    { question: 'Are hanging meat and dry aged cabinets interchangeable?', answer: 'Their intended applications and operating requirements may differ. Describe your products and intended use, then confirm suitability against the specification of the selected model.' },
                ],
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
                intro: 'Kebap ve meze dolapları, ürünlerin görünür biçimde sunulduğu servis alanının bir parçasıdır. Restoran, kebapçı ve şarküteri projelerinde tezgâh tipi veya dikey bir model seçerken teşhir miktarı, kullanılan kaplar ve personelin erişimi birlikte değerlendirilir.',
                sections: [
                    { heading: 'Teşhir alanını servis düzenine göre kurun', body: 'Meze çeşitlerini, kap veya tava ölçülerini ve servis sırasında ihtiyaç duyulan erişimi belirleyin. Bir yatay reyon ile dikey meze dolabı farklı bir sergileme düzeni sunar. Seçilen modelin ürün fotoğraflarını, cam sistemini ve teknik çizimlerini yerleşim planınızla birlikte inceleyin.' },
                    { heading: 'Ölçü ve çalışma koşullarını karşılaştırın', body: 'Katalogdaki modül seçenekleri, mevcut alan için uygun boyu değerlendirmenizi sağlar. Çalışma sıcaklığı ve soğutma sistemi modele göre kontrol edilmelidir. Teklif isterken sergileyeceğiniz ürünleri ve tezgâh yerleşimini paylaşmanız, ihtiyacın daha doğru tanımlanmasına yardımcı olur.' },
                ],
                criteria: ['Meze veya kebap teşhir miktarını ve kullanılacak kapları belirleyin.', 'Müşteri görüşünü ve personel erişimini aynı yerleşimde değerlendirin.', 'Modül ölçülerini, cam sistemini ve çalışma koşullarını kontrol edin.'],
                questions: [
                    { question: 'Yatay reyon mu, dikey meze dolabı mı seçmeliyim?', answer: 'Karar, teşhir miktarına ve servis şekline bağlıdır. Kullanılabilir alanı ve personelin ürünlere erişimini karşılaştırarak uygun model grubunu belirleyebilirsiniz.' },
                    { question: 'Teklif için hangi bilgileri paylaşmalıyım?', answer: 'Modeli, alan ölçülerini, sergilenecek ürünleri ve kap düzenini paylaşın. Cam, motor ve diğer seçenekler bu bilgiler üzerinden değerlendirilebilir.' },
                ],
                productUse: 'Meze veya kebap servisinde teşhir miktarı, kap düzeni ve personelin ürüne erişimi birlikte değerlendirilmelidir.',
            },
            EN: {
                name: 'Kebab and Mezze Display Cabinets',
                description: 'Compare kebab, mezze and vertical mezze display cabinets for restaurants and delicatessens. Review module sizes and specifications and request a quote.',
                intro: 'Kebab and mezze cabinets form part of a visible, organised service area. For restaurant and delicatessen projects, compare counter and vertical models against the display quantity, containers and access required by staff.',
                sections: [
                    { heading: 'Arrange the display around service', body: 'Identify the mezze selection, container or tray sizes and the access needed during service. Horizontal counters and vertical mezze cabinets offer different presentation arrangements. Compare the glass system, drawings and photos with your planned layout.' },
                    { heading: 'Compare sizes and operating requirements', body: 'Module options help you assess cabinet length for the available space. Check operating temperatures and refrigeration arrangements for the selected model. Sharing your products and counter layout when requesting a quote helps define the project requirements.' },
                ],
                criteria: ['Define the display quantity and containers you intend to use.', 'Consider customer visibility and staff access in the same layout.', 'Check module sizes, glass design and operating requirements.'],
                questions: [
                    { question: 'Should I choose a counter or vertical mezze cabinet?', answer: 'This depends on the display quantity and service arrangement. Compare the available space and staff access to select a suitable model group.' },
                    { question: 'What information is needed for a quote?', answer: 'Share the model, available dimensions, products and container arrangement. Glass, refrigeration and other options can then be discussed for your project.' },
                ],
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
                intro: 'Sütlük ve market dolapları seçilirken ürün çeşitliliği, raf kullanımı ve müşterinin ürüne erişimi birlikte planlanır. Bu grupta açık veya cam kapaklı sütlükler, yarım boy modeller, şişe soğutucular, peynir ve şarküteri reyonları ile market teşhir ekipmanları bulunur.',
                sections: [
                    { heading: 'Raf ve erişim düzenini ürün grubuna göre belirleyin', body: 'Süt ürünleri, şişeli içecekler ve şarküteri ürünleri farklı bir raf düzeni gerektirebilir. Açık veya kapaklı bir modelin erişimini, ürün yerleştirme biçimini ve mağaza içindeki konumunu değerlendirin. Zeytin ve manav teşhir ekipmanlarını da kendi kullanım amaçlarına göre karşılaştırın.' },
                    { heading: 'Mağaza alanı ve teknik seçenekler', body: 'Dolabın uzunluğu kadar yüksekliği, geçiş alanına etkisi ve ürün yükleme erişimi de önemlidir. İlgili ürünün modül ve çalışma sıcaklığı bilgilerini inceleyin. Soğutma grubu, kapak veya dekor seçeneklerini model bazında değerlendirerek yerleşiminize uygun teklif alabilirsiniz.' },
                ],
                criteria: ['Sergilenecek ürün grubunu ve raf yerleşimini belirleyin.', 'Açık veya kapaklı kullanım ile müşteri geçiş alanını birlikte değerlendirin.', 'Modelin modül ölçülerini ve soğutma bilgilerini karşılaştırın.'],
                questions: [
                    { question: 'Sütlük modellerinde açık ve cam kapaklı seçenekler var mı?', answer: 'Katalogda açık, cam kapaklı ve yarım boy sütlük modelleri bulunur. Ürünlere erişimi ve mağaza yerleşimini dikkate alarak bu seçenekleri karşılaştırabilirsiniz.' },
                    { question: 'Market yerleşimi için nasıl model seçebilirim?', answer: 'Ürün gruplarınızı, raf ihtiyacınızı ve kullanılabilir alan ölçülerini paylaşın. Sütlük, şişe soğutucu ve şarküteri reyonları aynı yerleşim içinde değerlendirilebilir.' },
                ],
                productUse: 'Market yerleşiminde sergilenecek ürün, raf kullanımı ve müşterinin ürüne erişimi birlikte planlanmalıdır.',
            },
            EN: {
                name: 'Dairy and Supermarket Display Cabinets',
                description: 'Explore open, glass door and low dairy cabinets, bottle coolers, cheese displays and supermarket equipment with sizes and technical information.',
                intro: 'Dairy and supermarket displays should suit the product range, shelf arrangement and customer access. This group includes open and glass door dairy cabinets, low models, bottle coolers, cheese and deli displays, and supermarket display equipment.',
                sections: [
                    { heading: 'Plan shelves and access for the product group', body: 'Dairy products, bottled drinks and delicatessen products can call for different arrangements. Consider access, loading and the location of an open or door-equipped model. Olive and produce display equipment should also be compared against their own intended applications.' },
                    { heading: 'Fit the equipment to your store', body: 'Consider cabinet height and circulation space as well as length. Review the module and temperature information on each product page. Refrigeration, door and decorative options can then be discussed for the chosen model and store layout.' },
                ],
                criteria: ['Define the product range and shelf arrangement.', 'Compare open and door-equipped access within the available circulation space.', 'Review model sizes and refrigeration information.'],
                questions: [
                    { question: 'Are open and glass door dairy models available?', answer: 'The catalogue includes open, glass door and low dairy cabinets. Compare these options against customer access and the proposed store layout.' },
                    { question: 'How can I select equipment for a supermarket layout?', answer: 'Share your product groups, shelf requirements and available dimensions. Dairy cabinets, bottle coolers and deli displays can be assessed together within the layout.' },
                ],
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
                intro: 'Balık teşhir dolabı, deniz ürünlerinin sunulduğu alan ile personelin servis düzenine uygun seçilmelidir. Pars Soğutma kataloğunda balık mostra ve soğutmalı balık dolapları yer alır. Cam siperlikli veya kapaklı tasarımları, teknik bilgiler ve uygulama görselleri üzerinden karşılaştırabilirsiniz.',
                sections: [
                    { heading: 'Sunum biçimi ve tezgâh erişimi', body: 'Balık satış alanında sergilenecek ürün miktarı, müşterinin görüşü ve personelin tezgâha erişimi beraber değerlendirilir. Modelin cam veya kapak yapısını fotoğraflardan inceleyin. Teşhir yüzeyinin düzeni ile temizlik ve servis ihtiyacını yerleşim planına dahil edin.' },
                    { heading: 'Modele uygun teknik değerlendirme', body: 'Çalışma sıcaklığı ve soğutma grubu seçenekleri için ilgili ürünün teknik sayfasına başvurun. Katalogdaki modül ölçüleri, işletmenizdeki kullanılabilir alanla karşılaştırılmalıdır. Ürün türünü ve planlanan uygulamayı paylaşarak uygun model ve seçenekler için bilgi alabilirsiniz.' },
                ],
                criteria: ['Deniz ürünü çeşitlerini ve teşhir miktarını belirleyin.', 'Cam, kapak ve tezgâha erişim düzenini karşılaştırın.', 'Ölçüleri ve çalışma koşullarını seçilen model üzerinden değerlendirin.'],
                questions: [
                    { question: 'Mostra dolabı seçerken hangi bilgiler önemlidir?', answer: 'Teşhir miktarı, alan ölçüsü, servis erişimi ve ürünün muhafaza koşulları önemlidir. Görünüşle birlikte modelin teknik bilgilerini de inceleyin.' },
                    { question: 'Cam siperlikli ve kapaklı modelleri nerede görebilirim?', answer: 'Aşağıdaki ürün sayfalarında farklı tasarımların görselleri, modül bilgileri ve teknik özellikleri bulunur. Beğendiğiniz modeli belirterek uygulamanız için teklif isteyebilirsiniz.' },
                ],
                productUse: 'Balık satış alanında teşhir miktarı, ürünün muhafaza ihtiyacı ve tezgâha servis erişimi birlikte ele alınmalıdır.',
            },
            EN: {
                name: 'Fish Display Cabinets and Counters',
                description: 'Compare fish display counters and refrigerated seafood cabinets, glass designs, catalogue dimensions and technical specifications from Pars Cooling.',
                intro: 'A fish display should suit the seafood presentation and the way staff work behind the counter. The Pars Cooling catalogue includes fish display counters and refrigerated cabinets. Compare glass guard and lidded designs using the product photos and technical information.',
                sections: [
                    { heading: 'Presentation and counter access', body: 'Consider display quantity, customer visibility and staff access together. Review the glass or lid arrangement in the product images. Include the display surface, cleaning access and service requirements in your layout.' },
                    { heading: 'Assess the individual model', body: 'Refer to each product page for temperature information and refrigeration options. Compare catalogue module dimensions with the available space. Share the seafood range and intended application when discussing a suitable model and options.' },
                ],
                criteria: ['Define the seafood range and display quantity.', 'Compare glass, lid and service access arrangements.', 'Review sizes and operating requirements for the selected model.'],
                questions: [
                    { question: 'What information is important when choosing a fish display?', answer: 'Consider quantity, available dimensions, staff access and product storage requirements. Review technical information as well as the appearance of the cabinet.' },
                    { question: 'Where can I compare glass guard and lidded designs?', answer: 'The product pages below show images, module information and technical specifications. Identify a preferred model when requesting a quote for your application.' },
                ],
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
                intro: 'Reyon ve teşhir dolapları, şarküteri, restoran ve marketlerde ürün sunumunun yerleşimle birlikte planlandığı ekipmanlardır. Bu grupta farklı cam biçimleri, servis düzenleri ve soğutma seçenekleri sunan modeller bulunur. Kasap, meze ve balık için ayrılmış ürün gruplarını da kullanım amacınıza göre inceleyebilirsiniz.',
                sections: [
                    { heading: 'Cam ve soğutma seçeneklerini karşılaştırın', body: 'Dik, düz, yarım veya bombe cam biçimi; ürünün görünürlüğü ve servis erişimiyle birlikte değerlendirilir. Statik ve üflemeli soğutma gibi model adları, teknik sayfalardaki özelliklerle birlikte okunmalıdır. Her seçeneğin uygunluğu, sergilenecek ürüne ve çalışma koşullarına göre belirlenir.' },
                    { heading: 'Modüler reyon yerleşimi', body: 'Katalogdaki uzunluk seçenekleri üzerinden kullanılabilir alanı planlayın. İç veya dış motor seçenekleri, cam erişimi ve dekor uygulamaları için seçilen modelin açıklamalarını inceleyin. Proje ölçülerini ve ürün grubunu paylaşmanız, teklifin ihtiyacınıza göre hazırlanmasına yardımcı olur.' },
                ],
                criteria: ['Ürün grubunu ve servis biçimini belirleyin.', 'Cam biçimini, görüş açısını ve temizliğe erişimi değerlendirin.', 'Modül ölçülerini ve modelin soğutma seçeneklerini karşılaştırın.'],
                questions: [
                    { question: 'Reyon dolabı hangi işletmeler için seçilebilir?', answer: 'Modelin kullanım amacına bağlı olarak şarküteri, market, kafe ve restoran projelerinde değerlendirilebilir. Uygunluk, sergilenecek ürün ve teknik özellikler üzerinden belirlenmelidir.' },
                    { question: 'Statik veya üflemeli model seçimini nasıl yapmalıyım?', answer: 'Önce ürün grubunu ve kullanım koşullarını tanımlayın. İlgili modellerin teknik bilgilerini karşılaştırarak uygulamanız için uygun seçeneği görüşebilirsiniz.' },
                ],
                productUse: 'Reyon seçiminde sergilenecek ürün, cam biçimi ve servis düzeni birlikte değerlendirilmelidir.',
            },
            EN: {
                name: 'Refrigerated Display and Service Counters',
                description: 'Compare upright, flat and curved glass counters, static and ventilated displays, module dimensions, drawings and service cabinet options.',
                intro: 'Display and service counters are planned around both product presentation and the layout of a delicatessen, restaurant or supermarket. This group includes different glass designs, service arrangements and refrigeration options. Dedicated butcher, mezze and fish groups can also be explored for specific applications.',
                sections: [
                    { heading: 'Compare glass and refrigeration options', body: 'Upright, flat, half-height or curved glass should be assessed alongside visibility and service access. Read model descriptions such as static or ventilated cooling together with the technical specifications. Suitability depends on the products and operating conditions.' },
                    { heading: 'Plan a modular counter layout', body: 'Use the catalogue length options to assess available space. Review the selected model for refrigeration arrangements, glass access and decorative options. Share the project dimensions and product group to help define the quotation.' },
                ],
                criteria: ['Define the product group and service arrangement.', 'Assess glass design, viewing angles and cleaning access.', 'Compare module dimensions and refrigeration options.'],
                questions: [
                    { question: 'Which businesses can use these display counters?', answer: 'Depending on the model, they can be assessed for delicatessen, supermarket, cafe and restaurant projects. Confirm suitability against the products and technical specifications.' },
                    { question: 'How should I compare static and ventilated models?', answer: 'First define the product group and operating conditions. Review the technical information for the relevant models when discussing a suitable option for the application.' },
                ],
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
                intro: 'Soğuk hava deposu planlamasında depolanacak ürün, hedef çalışma koşulları, oda ölçüleri ve kullanım sıklığı birlikte değerlendirilir. Bu grupta soğuk hava depoları ve -18 derece depo modellerinin yanında panel, kapı, PVC şerit perde ve depo aksesuarları yer alır.',
                sections: [
                    { heading: 'Depoyu bileşenleriyle birlikte değerlendirin', body: 'Bir depo projesi; oda yerleşimi, yalıtım, kapı ve soğutma sistemiyle birlikte ele alınmalıdır. Menteşeli veya sürgülü kapı seçimini geçiş ve yükleme düzenine göre karşılaştırın. Panel ve PVC perde ürünlerinin teknik bilgilerini kendi sayfalarından inceleyebilirsiniz.' },
                    { heading: 'Teklif için proje bilgileri', body: 'İç ölçüler, depolanacak ürün, günlük kullanım ve giriş–çıkış düzeni ihtiyacın tanımlanmasına yardımcı olur. Seçilecek soğutma grubunu da oda ve kullanım koşullarıyla birlikte değerlendirin. İlgili soğutma sistemleri grubundan monoblok, split ve merkezi seçeneklere ulaşabilirsiniz.' },
                ],
                criteria: ['Oda iç ölçülerini, ürün grubunu ve kullanım amacını belirleyin.', 'Kapı, yükleme geçişi ve personel hareketini planlayın.', 'Panel, perde ve soğutma sistemi seçeneklerini birlikte değerlendirin.'],
                questions: [
                    { question: 'Soğuk hava deposu teklifi için hangi ölçüler gerekir?', answer: 'Odanın iç uzunluk, genişlik ve yükseklik bilgilerini; depolanacak ürünü ve kullanım şeklini paylaşın. Kapı ve soğutma sistemi ihtiyacı bu bilgilerle birlikte değerlendirilebilir.' },
                    { question: 'Panel, kapı ve PVC perde ürünleri de var mı?', answer: 'Katalogda soğuk oda panelleri, menteşeli ve sürgülü kapılar, PVC şerit perde modelleri ve depo aksesuarları bulunur. Her ürünün detayına aşağıdaki listeden ulaşabilirsiniz.' },
                ],
                productUse: 'Soğuk oda projesinde oda ölçüleri, depolanacak ürün, kapı geçişi ve çalışma koşulları birlikte planlanmalıdır.',
            },
            EN: {
                name: 'Cold Rooms and Cold Storage Equipment',
                description: 'Explore cold rooms, -18 degree storage models, insulated panels, doors, PVC strip curtains and accessories. Discuss your project dimensions and use.',
                intro: 'Cold room planning starts with the stored products, required operating conditions, internal dimensions and usage pattern. This group includes cold rooms and -18 degree storage models together with panels, doors, PVC strip curtains and storage accessories.',
                sections: [
                    { heading: 'Assess the room and its components together', body: 'Consider the room layout, insulation, doors and refrigeration as one project. Compare hinged and sliding doors against the loading and access arrangement. Panel and PVC curtain details can be reviewed on their individual product pages.' },
                    { heading: 'Information for a project quote', body: 'Internal dimensions, the stored products, daily use and loading pattern help define the requirement. Assess the refrigeration unit against the room and operating conditions. The refrigeration systems group lists monoblock, split and central options.' },
                ],
                criteria: ['Define internal dimensions, the product group and intended use.', 'Plan doors, loading access and staff movement.', 'Assess panels, curtains and refrigeration together.'],
                questions: [
                    { question: 'Which dimensions are needed for a cold room quote?', answer: 'Share internal length, width and height, the products to be stored and the usage pattern. Doors and refrigeration requirements can then be discussed together.' },
                    { question: 'Are panels, doors and PVC curtains available?', answer: 'The catalogue includes cold room panels, hinged and sliding doors, PVC strip curtains and accessories. Open the individual product pages below for details.' },
                ],
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
                intro: 'Endüstriyel mutfak ekipmanları, hazırlık, muhafaza ve servis işlerini destekleyen bir yerleşim içinde değerlendirilir. Bu grupta paslanmaz buzdolapları, tezgâh altı dolaplar, çalışma tezgâhları, evyeli üniteler, raflar ve davlumbazlar bulunur.',
                sections: [
                    { heading: 'Hazırlık ve muhafaza alanını birlikte planlayın', body: 'Çalışma tezgâhının konumu ile malzemeye erişim birbirini etkiler. Dikey bir buzdolabı, tezgâh altı dolap veya evyeli tezgâh seçerken günlük iş akışını ve personel geçişini değerlendirin. Soğutmalı modellerin sıcaklık bilgileri kendi ürün sayfalarında incelenmelidir.' },
                    { heading: 'Ekipmanı kullanım amacıyla eşleştirin', body: 'Raf ve tezgâh ölçülerini mevcut alanla karşılaştırın. Camlı veya kapalı dolap, ara raflı veya taban raflı tezgâh gibi seçenekleri ihtiyaca göre değerlendirin. Davlumbaz seçimi, mutfak yerleşimi ve havalandırma projesiyle birlikte ele alınmalıdır.' },
                ],
                criteria: ['Hazırlık, depolama ve servis adımlarını yerleşimde tanımlayın.', 'Dolap ve tezgâh ölçülerini personel geçişiyle birlikte kontrol edin.', 'Soğutmalı ürünleri, rafları ve havalandırma ekipmanlarını kullanım amacına göre seçin.'],
                questions: [
                    { question: 'Tezgâh altı ve dikey buzdolabı arasında nasıl seçim yapılır?', answer: 'Kullanılabilir alanı, muhafaza miktarını ve çalışma tezgâhına yakınlık ihtiyacını karşılaştırın. Seçilecek ürünün ölçülerini ve teknik özelliklerini inceleyerek uygun yerleşimi değerlendirebilirsiniz.' },
                    { question: 'Paslanmaz tezgâh, evye ve raf modellerini görebilir miyim?', answer: 'Aşağıdaki listede farklı tezgâh, evye ve raf seçenekleri yer alır. Her modelin ölçü ve teknik bilgilerini açarak mutfak projeniz için karşılaştırabilirsiniz.' },
                ],
                productUse: 'Profesyonel mutfakta ekipman ölçüleri, hazırlık akışı ve personel geçişi birlikte değerlendirilmelidir.',
            },
            EN: {
                name: 'Commercial Kitchen Equipment',
                description: 'Explore stainless steel refrigerators, undercounter cabinets, work tables, sinks, shelves and extractor hoods for professional kitchen layouts.',
                intro: 'Commercial kitchen equipment should support preparation, storage and service within a practical layout. This group includes stainless steel refrigerators, undercounter cabinets, work tables, sink units, shelving and extractor hoods.',
                sections: [
                    { heading: 'Plan preparation and storage together', body: 'Work table placement and ingredient access affect each other. Compare upright refrigerators, undercounter cabinets and sink tables against the daily workflow and staff circulation. Review operating temperatures on the individual refrigerated model pages.' },
                    { heading: 'Match equipment to its intended use', body: 'Compare shelf and table dimensions with the available space. Assess glass door or solid door cabinets and different table shelf arrangements against your requirements. Extractor hoods should be considered together with the kitchen layout and ventilation design.' },
                ],
                criteria: ['Define preparation, storage and service areas.', 'Check equipment sizes alongside staff circulation.', 'Select refrigeration, shelving and ventilation equipment for the intended use.'],
                questions: [
                    { question: 'Should I choose an undercounter or upright refrigerator?', answer: 'Compare available space, storage quantity and access from the work area. Review the model dimensions and technical information when assessing the layout.' },
                    { question: 'Can I compare work tables, sinks and shelving?', answer: 'The list below includes different table, sink and shelf arrangements. Open each model to review dimensions and technical details for your kitchen project.' },
                ],
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
                intro: 'Soğutma sistemi seçimi, muhafaza edilecek ürün ve tesisin çalışma koşullarıyla birlikte yapılır. Pars Soğutma kataloğunda monoblok, split, merkezi ve bireysel soğutma grupları yer alır. Uygun seçenek, oda ve proje bilgileri üzerinden değerlendirilmelidir.',
                sections: [
                    { heading: 'Sistem türlerini proje ihtiyacıyla karşılaştırın', body: 'Monoblok, split ve merkezi sistemler farklı kurulum düzenleri sunar. Yalnızca ekipman adı üzerinden seçim yapmak yerine hizmet verecek alanı, hedef çalışma koşullarını ve kurulum yerini tanımlayın. Teknik sayfalardaki bilgiler, seçenekleri karşılaştırmak için başlangıç noktasıdır.' },
                    { heading: 'Oda, ekipman ve kullanım koşulları', body: 'Soğutma ihtiyacını değerlendirirken oda ölçüleri, yalıtım, kapı kullanımı ve ürün giriş–çıkışı birlikte ele alınır. Soğuk hava deposu grubundaki panel, kapı ve diğer bileşenleri de projeye dahil edin. Bu bilgileri paylaşarak uygulamanıza uygun sistem için teknik görüş ve teklif alabilirsiniz.' },
                ],
                criteria: ['Hizmet verecek alanı ve muhafaza edilecek ürünü tanımlayın.', 'Oda ölçüleri, yalıtım ve günlük kullanım bilgilerini hazırlayın.', 'Sistem yerleşimini ve teknik seçenekleri proje üzerinden değerlendirin.'],
                questions: [
                    { question: 'Monoblok, split veya merkezi sistemden hangisi uygundur?', answer: 'Uygunluk; oda ve tesis özellikleri, kullanım düzeni ve hedef çalışma koşullarıyla birlikte değerlendirilir. Proje bilgilerinizi paylaşarak seçenekleri teknik olarak karşılaştırabilirsiniz.' },
                    { question: 'Soğutma grubu için teklif isterken neleri belirtmeliyim?', answer: 'Oda ölçülerini, depolanacak ürünleri, hedef çalışma koşullarını, yalıtım bilgilerini ve kullanım düzenini paylaşın. Kurulum alanı da teklif değerlendirmesine dahil edilmelidir.' },
                ],
                productUse: 'Soğutma sistemi seçiminde hizmet verecek alan, muhafaza edilecek ürün ve projenin çalışma koşulları birlikte değerlendirilmelidir.',
            },
            EN: {
                name: 'Refrigeration Units and Systems',
                description: 'Compare monoblock, split, central and individual refrigeration units for cold rooms and storage projects. Discuss the requirements of your installation.',
                intro: 'A refrigeration system should be selected against the products being stored and the operating conditions of the facility. The Pars Cooling catalogue includes monoblock, split, central and individual units. Assess suitable options using the room and project information.',
                sections: [
                    { heading: 'Compare system types for the project', body: 'Monoblock, split and central systems offer different installation arrangements. Define the area being served, the required operating conditions and the installation space before selecting equipment. Technical product pages provide a starting point for comparison.' },
                    { heading: 'Consider the room and its use', body: 'Room dimensions, insulation, door use and product movements should be considered together. Include panels, doors and other components from the cold room group in the project assessment. Sharing this information helps define a suitable system and quotation.' },
                ],
                criteria: ['Define the area being served and the products being stored.', 'Prepare room dimensions, insulation details and usage information.', 'Assess installation arrangements and technical options against the project.'],
                questions: [
                    { question: 'Which type of refrigeration system is suitable?', answer: 'Suitability depends on the room and facility, usage pattern and required operating conditions. Share project information to compare monoblock, split and central options.' },
                    { question: 'What information is needed for a refrigeration quote?', answer: 'Share room dimensions, stored products, operating requirements, insulation details and usage pattern. The installation space should also be included in the assessment.' },
                ],
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

export function isCanonicalProduct(product: Product): boolean {
    return getCanonicalProductId(product.id) === product.id;
}

const displayNames: Record<number, TranslatedString> = {
    7: { TR: 'Cam Siperlikli Balık Mostra Dolabı', EN: 'Fish Display Cabinet with Glass Guard' },
    11: { TR: 'Kapaklı Balık Mostra Dolabı', EN: 'Lidded Fish Display Cabinet' },
    27: { TR: 'Servis Tipi Promosyon Dolabı', EN: 'Service Type Promotional Display Cabinet' },
    53: { TR: 'Duvar Tipi Promosyon Dolabı', EN: 'Wall Type Promotional Display Cabinet' },
    41: { TR: 'Dikey Tip Dry Aged Dolabı', EN: 'Vertical Dry Aged Cabinet' },
    43: { TR: 'Duvar Tipi Dry Aged Dolabı', EN: 'Wall Type Dry Aged Cabinet' },
    92: { TR: 'Soğuk Oda Soğutma Sistemleri', EN: 'Cold Room Refrigeration Systems' },
};

export function getProductDisplayName(product: Product, language: CatalogLanguage): string {
    return displayNames[getCanonicalProductId(product.id)]?.[language] ?? product.name[language];
}

export function getCategoryPath(category: ProductCategory): string {
    return `/urunler/${category.slug}`;
}

export function findCategory(slug?: string): ProductCategory | undefined {
    return productCategories.find(category => category.slug === slug);
}

export function getProductCategory(product: Product): ProductCategory {
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

export function getCategoryProducts(category: ProductCategory, products: Product[]): Product[] {
    return products.filter(product => isCanonicalProduct(product) && getProductCategory(product).id === category.id);
}

export function getFeaturedProduct(category: ProductCategory, products: Product[]): Product {
    return getCategoryProducts(category, products).find(product => product.id === category.featuredProductId)
        ?? getCategoryProducts(category, products)[0];
}

