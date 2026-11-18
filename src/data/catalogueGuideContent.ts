import type { BlogArticleContent } from './blogContent';
import type { CatalogLanguage } from './catalog';

export const catalogueGuideContent: Record<string, Record<CatalogLanguage, BlogArticleContent>> = {
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
                    links: [{ label: 'Kale Restoran meze vitrini uygulaması', to: '/referans/kale-restoran' }],
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
                    links: [{ label: 'Kale Restoran display project', to: '/referans/kale-restoran' }],
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
                    links: [{ label: 'Şarküteri dolabı', to: '/products/50' }, { label: 'Dik camlı reyon dolabı', to: '/products/17' }, { label: 'Statik soğutmalı reyon dolabı', to: '/products/28' }, { label: 'Üflemeli reyon dolabı', to: '/products/33' }],
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
                    links: [{ label: 'Deli display cabinet', to: '/products/50' }, { label: 'Upright-glass display counter', to: '/products/17' }, { label: 'Static refrigerated counter', to: '/products/28' }, { label: 'Ventilated refrigerated counter', to: '/products/33' }],
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
