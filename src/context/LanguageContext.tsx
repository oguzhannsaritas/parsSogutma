import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'TR' | 'EN';

interface Translations {
  [key: string]: {
    TR: string;
    EN: string;
  };
}

const translations: Translations = {
  // Menu Items
  'menu.home': { TR: 'ANASAYFA', EN: 'HOME' },
  'menu.corporate': { TR: 'KURUMSAL', EN: 'CORPORATE' },
  'menu.products': { TR: 'ÜRÜNLERİMİZ', EN: 'PRODUCTS' },
  'menu.references': { TR: 'REFERANSLAR', EN: 'REFERENCES' },
  'menu.contact': { TR: 'İLETİŞİM', EN: 'CONTACT' },
  'menu.gallery': { TR: 'FOTO GALERİ', EN: 'PHOTO GALLERY' },
  'menu.catalog': { TR: 'E-KATALOG', EN: 'E-CATALOG' },
  'loader.tagline': { TR: 'PROFESYONEL SOĞUTMA', EN: 'PROFESSIONAL COOLING' },
  'menu.search': { TR: 'Ürün Ara', EN: 'Search Products' },
  'menu.menu': { TR: 'MENU', EN: 'MENU' },
    'hero.socialMedia':{TR:' İletişim & Sosyal Medya', EN: ' Contact & Social Media'},
    'hero.socialMediaInfo':{TR : 'İşletmeniz için yüksek verimli, yenilikçi ve estetik soğutma çözümleri üretiyoruz. Sosyal Medya kanallarımızdan bizleri takip edebilir aynı zamanda iletişime geçebilirsiniz', EN: ' We produce highly efficient, innovative and aesthetic cooling solutions for your business. You can follow us on our Social Media channels and contact us at the same time'},

  // Hero Section
  'hero.slide1.subtitle': { TR: 'Maksimize Edilmiş Şeffaf Isıcamlı\nDuvar Tipi Soğutucu Reyon', EN: 'Maximized Transparent Double Glazed\nWall Type Cooling Unit' },
  'hero.slide1.title': { TR: 'Ticari kullanım için enerji verimli endüstriyel buzdolabı çözümleri', EN: 'Energy-efficient industrial refrigerator solutions for commercial use' },
  'hero.slide2.subtitle': { TR: 'Yüksek Enerji Verimliliği\nMarket Tipi Soğutucu', EN: 'High Energy Efficiency\nMarket Type Cooler' },
  'hero.slide2.title': { TR: 'Profesyonel mutfaklar için dayanıklı ve verimli ekipman çözümleri', EN: 'Durable and efficient equipment solutions for professional kitchens' },
  'hero.slide3.subtitle': { TR: 'Modern Tasarım ve Dayanıklılık\nŞarküteri Reyonu', EN: 'Modern Design and Durability\nDeli Counter' },
  'hero.slide3.title': { TR: 'Marketler için teşhir, depolama ve soğutma ekipmanları çözümleri', EN: 'Display, storage and refrigeration equipment solutions for markets' },
  'hero.button': { TR: 'ÜRÜNE GİT', EN: 'GO TO PRODUCT' },
    'hero.slide4.title': { TR: 'Güvenli ürün muhafazası için projeye özel soğuk hava deposu çözümleri', EN: 'Project-specific cold storage solutions for safe product storage' },
    'hero.slide5.title': { TR: 'İşletmenize özel yüksek verimli endüstriyel soğutma sistemleri', EN: 'High-efficiency industrial cooling systems tailored to your business' },
    'hero.slide6.title': { TR: 'Ürünlerinizi taze tutan modern soğutmalı reyon çözümleri', EN: 'Modern refrigerated aisle solutions that keep your products fresh' },
    'hero.slide7.title': { TR: 'Unlu mamuller için hijyenik teşhir ve soğutma çözümleri', EN: 'Hygienic display and cooling solutions for baked goods' },



    // Products Page
  'products.title': { TR: 'Ürünlerimiz', EN: 'Products' },
    'products.show': { TR: 'Ürün Sayısı', EN: 'Product Number' },
    'products.filter': { TR: 'Ürün Filtreleme', EN: 'Product Filter' },
  'products.breadcrumb.home': { TR: 'Ana Sayfa', EN: 'Home' },
  'products.view': { TR: 'Görüntüle', EN: 'View' },
  'products.cabinTypes': { TR: 'KABİN TÜRLERİ', EN: 'CABIN TYPES' },
    'products.notFound':{TR:'Sonuç bulunamadı. Filtreleri temizleyip tekrar deneyin.', EN:'No results found. Clean the filters and try again.'},

  // Footer / General
  'footer.visit': { TR: 'Çalışmalarımızı Yakından İnceleyin', EN: 'Take a Closer Look at Our Work' },
  'footer.desc': { TR: 'Ürettiğimiz soğutma sistemlerini, özel üretim çözümlerimizi ve üretimden montaja kadar sunduğumuz projeleri hızlıca inceleyebilirsiniz.', EN: 'You can quickly explore the cooling systems we manufacture, our custom production solutions, and the projects we deliver from production to installation.' },
  'footer.quickMenu': { TR: 'HIZLI MENÜ', EN: 'QUICK MENU' },
  'footer.productCategories': { TR: 'ÜRÜN KATEGORİLERİ', EN: 'PRODUCT CATEGORIES' },
  'footer.rights': { TR: 'Prosogutma Tüm Hakları Saklıdır.', EN: 'Prosogutma All Rights Reserved.' },
  
  // Sustainability Section
  'sust.title': { TR: 'Daha yaşanabilir bir\ngelecek için', EN: 'For a more livable\nfuture' },
  'sust.desc': { TR: 'Mağazanız için baştan sona her detayı ele alarak en iyi çözümler ile anahtar teslim projeler gerçekleştiriyoruz.', EN: 'We carry out turnkey projects with the best solutions by handling every detail from start to finish for your store.' },
  'sust.slidingDoors': { TR: 'Sürgülü Kapılar', EN: 'Sliding Doors' },
  'sust.efficientFans': { TR: 'Verimli Fanlar', EN: 'Efficient Fans' },
  'sust.cycle': { TR: 'Soğutma Döngüsü', EN: 'Cooling Cycle' },
  'sust.shelving': { TR: 'Raf Sistemi', EN: 'Shelving' },
  'sust.greenTech': { TR: 'R290 Yeşil Teknoloji', EN: 'R290 Green Tech' },
  'sust.ledLighting': { TR: 'LED Aydınlatma', EN: 'LED Lighting' },
  
  // Stats Section
  'stats.happyCustomers': { TR: 'MUTLU MÜŞTERİ', EN: 'HAPPY CUSTOMERS' },
  'stats.productOrders': { TR: 'ÜRÜN SİPARİŞİ', EN: 'PRODUCT ORDERS' },
  'stats.productVariety': { TR: 'ÜRÜN ÇEŞİDİ', EN: 'PRODUCT VARIETY' },
  'stats.supportRequests': { TR: 'YARDIM TALEBİ', EN: 'SUPPORT REQUESTS' },
  'stats.branches': { TR: 'FİRMA ŞUBESİ', EN: 'COMPANY BRANCHES' },
    'stats.number': { TR: 'SAYILARLA BİZ', EN: 'WE IN NUMBERS' },
    'stats.whatWeHaveDoneSoFar': { TR: 'Bugüne Kadar Neler Yaptık ?', EN: 'What We Have Done So Far?' },



    // Categories Section
  'cat.title': { TR: 'ÜRÜN KATEGORİLERİ', EN: 'PRODUCT CATEGORIES' },
  'cat.sutlukler': { TR: 'SÜTLÜKLER', EN: 'DAIRY' },
  'cat.kisaSutlukler': { TR: 'KISA SÜTLÜKLER', EN: 'SEMI-VERTICALS' },
  'cat.sarkuteri': { TR: 'ŞARKÜTERİ REYONLARI', EN: 'DELICATESSEN' },
  'cat.dikeyDondurucular': { TR: 'DİKEY DONDURUCULAR', EN: 'VERTICAL FREEZERS' },
  'cat.adaTipi': { TR: 'ADA TİPİ DONDURUCULAR', EN: 'ISLAND FREEZERS' },
  'cat.plugin': { TR: 'PLUG-IN KABİNLER', EN: 'PLUG-IN CABINETS' },
  'cat.butik': { TR: 'BUTİK', EN: 'BOUTIQUE' },
  'cat.sogutmaSistemleri': { TR: 'SOĞUTMA SİSTEMLERİ', EN: 'COOLING SYSTEMS' },
  'cat.sogukHava': { TR: 'SOĞUK HAVA DEPOLARI', EN: 'COLD STORAGE' },

  // Filter Items (Cabin Types)
  'filter.cabin.delicatessen': { TR: 'Şarküteri Reyonları', EN: 'Delicatessen Counters' },
  'filter.cabin.promotional': { TR: 'Promosyon Kabinleri', EN: 'Promotional Cabinets' },
  'filter.cabin.boutique': { TR: 'Butik Reyonları', EN: 'Boutique Counters' },
  'filter.cabin.dairy': { TR: 'Sütlükler', EN: 'Dairy' },
  'filter.cabin.bottle': { TR: 'Şişe Soğutucular', EN: 'Bottle Coolers' },
  'filter.cabin.freezers': { TR: 'Derin Dondurucular', EN: 'Deep Freezers' },
  'filter.cabin.island': { TR: 'Ada Tipi Derin Dondurucular', EN: 'Island Type Deep Freezers' },

  // Filter Items (Product Filters)
  'filter.prod.fish': { TR: 'Balık Ürünleri', EN: 'Fish Products' },
  'filter.prod.iceCream': { TR: 'Dondurma', EN: 'Ice Cream' },
  'filter.prod.frozen': { TR: 'Dondurulmuş Ürünler', EN: 'Frozen Products' },
  'filter.prod.meat': { TR: 'Et Ürünleri', EN: 'Meat Products' },
  'filter.prod.beverages': { TR: 'İçecekler', EN: 'Beverages' },
  'filter.prod.pastry': { TR: 'Pasta ve Unlu Mamuller', EN: 'Pastry and Bakery' },
  'filter.prod.fruitVeg': { TR: 'Sebze-Meyve', EN: 'Fruit and Vegetables' },
  'filter.prod.hot': { TR: 'Sıcak Ürünler', EN: 'Hot Products' },
  'filter.prod.sushi': { TR: 'Sushi', EN: 'Sushi' },
  'filter.prod.dairyProduct': { TR: 'Süt Ürünleri', EN: 'Dairy Products' },
  'filter.prod.delicatessen': { TR: 'Şarküteri', EN: 'Delicatessen' },

  // References Page
  'references.notFound': { TR: 'Proje bulunamadı', EN: 'Project not found' },
  'references.back': { TR: 'Referanslara Dön', EN: 'Back to References' },

  // Contact Page
  'contact.title': { TR: 'İLETİŞİM BİLGİLERİ', EN: 'CONTACT INFORMATION' },
  'contact.formTitle': { TR: 'BİZE ULAŞIN', EN: 'CONTACT US' },
  'contact.headquarters': { TR: 'MERKEZ', EN: 'HEADQUARTERS' },
  'contact.europeOffice': { TR: 'AVRUPA OFİSİ', EN: 'EUROPE OFFICE' },
  'contact.headquartersContact': { TR: 'MERKEZ İLETİŞİM', EN: 'HEADQUARTERS CONTACT' },
  'contact.europeContact': { TR: 'AVRUPA OFİS İLETİŞİM', EN: 'EUROPE OFFICE CONTACT' },
  'contact.email': { TR: 'E-POSTA', EN: 'E-MAIL' },
  'contact.form.name': { TR: 'Adınız Soyadınız', EN: 'Name Surname' },
  'contact.form.email': { TR: 'E-Posta', EN: 'E-Mail' },
  'contact.form.phone': { TR: 'Telefon No', EN: 'Phone No' },
  'contact.form.subject': { TR: 'Konu', EN: 'Subject' },
  'contact.form.message': { TR: 'Mesajınız', EN: 'Your Message' },
  'contact.form.send': { TR: 'GÖNDER', EN: 'SEND' },

  // About Us Page
  'menu.about': { TR: 'HAKKIMIZDA', EN: 'ABOUT US' },
  'about.title': { TR: 'Hakkımızda', EN: 'About Us' },
  'about.breadcrumb.home': { TR: 'ANASAYFA', EN: 'HOME' },
  'about.breadcrumb.current': { TR: 'HAKKIMIZDA', EN: 'ABOUT US' },
  'about.section1.title': { TR: 'PARS Soğutma', EN: 'PARS Cooling' },
  'about.section1.text': { 
    TR: '2011 yılında başlamış olduğumuz Soğutmalı Dolap sektöründe firmamızın açmış olduğu PARS SOĞUTMA olarak, Yaratıcı ve Yenilikçi ürün önceliğimiz olarak Üretim yapmaktayız. Ekibimiz alanında Bilgili ve Deneyimli olup, en iyi Hizmeti sunmak için Üretim yapmaktadır. Firmamız Müşteri isteğine bağlı olarak 3D çizim kullanılarak Mekanınızı görsele Dökmektedir. Sizi hayallerinizin ötesine taşıyarak istediğiniz Mekanı elde etmenizi sağlıyoruz. Firmamız her geçen gün kendini Yenilemekte ve Makinelere dönük iş yapıp, Kusursuz Üretim yapmak için Gayret göstermektedir. Makineleşmeye önem verip ürünlerimizi Kaliteli ve Şık ürünler olacak şekilde üretmekteyiz. Ürünlerimizi Modüler sistemde;  Poliüretan enjekte ederek uzun yıllar kullanabileceğiniz şekilde üretmekteyiz. Ürün sonrası hizmet için 7/24 Servis Hizmetimiz bulunmaktadır. Üretim alanlarımız; Reyon Dolabı, Sütlük Dolabı, Market Dolabı, Fırın Pasta Teşhir Dolapları, Kebap Dolabı, Meze Dolabı, Balık Dolabı, Paslanmaz Evye ve Çalışma Tezgahları, Soğuk Hava Deposu, Bireysel ve Merkezi soğutma Grupları, Dray Aged Et Dolapları, Zeytin Reçel Dolapları v.b. ürünler üretmekteyiz.  PARS SOĞUTMA firmasının tek amacı Güvenilir Hizmet  ve Müşteri Memnuniyetidir!',
    EN: 'As PARS COOLING, which was opened by our company in the Refrigerated Cabinet sector, which we started in 2011, we produce as our Creative and Innovative product priority. Our team is Knowledgeable and Experienced in the field and manufactures to provide the best Service. Our company visualizes your space using 3D drawing depending on the customer\'s request. We take you beyond your dreams and ensure that you get the Space you want. Our company renews itself day by day and strives to make perfect production by doing business for machines. We attach importance to mechanization and produce our products as Quality and Stylish products. Our products in the modular system;  We produce it in such a way that you can use it for many years by injecting polyurethane. We have 24/7 Service for after-product service. Our production areas; We produce products such as Aisle Cabinet, Milk Cabinet, Market Cabinet, Bakery Cake Display Cabinets, Kebab Cabinet, Appetizer Cabinet, Fish Cabinet, Stainless Sink and Work Benches, Cold Storage, Individual and Central Cooling Groups, Dray Aged Meat Cabinets, Olive Jam Cabinets, etc.  The only purpose of PARS COOLING is Reliable Service and Customer Satisfaction!'
  },
  'about.section2.title': { TR: 'Çalışma Prensibimiz', EN: 'Our Working Principle' },
  'about.section2.list1': { 
    TR: 'Ayrıca, 100 % müşteri memnuniyetini gözeterek servis, bakım, montaj, tadilat, ve yedek parça temini hizmetlerini de beraberinde sunmaktadır.', 
    EN: 'In addition, it offers service, maintenance, assembly, modification, and spare parts supply services with 100% customer satisfaction.' 
  },
  'about.section2.list2': { 
    TR: 'Sürekli gelişen teknolojiler doğrultusunda Pars Soğutma yeni gereksinimlere göre soğutma sektöründeki en son yenilikleri takip etmekte ve uygulamaya yönelik çalışmalarını sürdürmektedir.',
    EN: 'In line with constantly developing technologies, Pars Cooling follows the latest innovations in the cooling sector according to new requirements and continues its application-oriented studies.'
  },
  'about.section2.list3': { 
    TR: 'Firma politikamız, ürün satmanın ötesinde, gereksinimlere en iyi yanıtı veren çözümleri en uygun maliyetle “anahtar teslim” projeler halinde müşterilerine sunmaktır.', 
    EN: 'Our company policy is to offer solutions that best meet the requirements to its customers as "turnkey" projects at the most affordable cost, beyond selling products.' 
  },
  'about.section2.list4': { 
    TR: 'Proje öncesi ve sonrasında müşterilerine üstün kaliteli ürünler ve mükemmele yakın hizmet sunulması Pars Soğutma’nın vazgeçilmez ilkesidir.',
    EN: 'Providing superior quality products and near-perfect service to its customers before and after the project is the indispensable principle of Pars Cooling.'
  },
  'about.section2.list5': { 
    TR: 'Hedefimiz, standartlara uygun üretim ve ürünlerimizi, ileri hizmet anlayışı ile en iyi şekilde bütünleştiren ve müşteriyle buluşturan referans firma olarak tanınmaktır', 
    EN: 'Our goal is to be recognized as a reference company that integrates our production and products in accordance with standards with an advanced service understanding in the best way and brings them together with the customer.' 
  },

  // Nested Menu Items
  'menu.refrigerators': { TR: 'BUZDOLAPLARI', EN: 'REFRIGERATORS' },
  'menu.verticalCooling': { TR: 'Dikey Tip Soğutuculu Reyonlar', EN: 'Vertical Type Cooling Aisles' },
  'menu.wallCooling': { TR: 'Duvar Tipi Soğutmalı Reyonlar', EN: 'Wall Type Cooling Aisles' },
  'menu.serviceAisles': { TR: 'Servis Reyonları', EN: 'Service Aisles' },
  'menu.productGroups': { TR: 'ÜRÜN GRUPLARI', EN: 'PRODUCT GROUPS' },
  'menu.bakery': { TR: 'Unlu Mamüller', EN: 'Bakery Products' },
  'menu.industrialKitchen': { TR: 'Endüstriyel Mutfak Ekipmanları', EN: 'Industrial Kitchen Equipment' },
  'menu.marketEquip': { TR: 'Market Ekipmanları', EN: 'Market Equipment' },
  'menu.coldStorage': { TR: 'Soğuk Hava Depoları', EN: 'Cold Storage' },
  'menu.coolingSystems': { TR: 'Soğutma Sistemleri', EN: 'Cooling Systems' },
  'menu.coolingAisles': { TR: 'Soğutmalı Reyonlar', EN: 'Cooling Aisles' },

  // Product Detail Page
  'product.tabs.about': { TR: 'Ürün Hakkında', EN: 'About Product' },
  'product.tabs.drawings': { TR: 'Teknik Çizimler', EN: 'Technical Drawings' },
  'product.tabs.catalog': { TR: 'Katalog Sayfası', EN: 'Catalog Page' },
  'product.table.modules': { TR: 'Kullanılabilir Modüller', EN: 'Available Modules' },
  'product.table.length': { TR: 'Uzunluk (mm)', EN: 'Length (mm)' },
  'product.table.sidePanel': { TR: 'Yan kapak (mm)', EN: 'Side panel (mm)' },
  'product.table.temp': { TR: 'Çalışma Sıcaklıkları', EN: 'Operating Temperatures' },
  'product.table.ambient': { TR: 'Ortam Koşulları', EN: 'Ambient Conditions' },
  'product.extra.title': { TR: 'EK BİLGİ', EN: 'ADDITIONAL INFO' },
  'product.extra.product': { TR: 'Ürün', EN: 'Product' },
  'product.extra.cabinType': { TR: 'Kabin Türü', EN: 'Cabin Type' },
  'product.extra.plugin': { TR: 'Plug-in', EN: 'Plug-in' },
  'product.extra.categories': { TR: 'Kategoriler', EN: 'Categories' },
    'product.table.specification': { TR: 'Ürün Teknik Özelliği', EN: 'Product Specification' },
    'product.table.optionalAccessories': { TR: 'Opsiyonel Aksesuarlar', EN: 'Optional Accessories' },
    'product.table.technicalDrawingImageNotAdded': { TR: 'Teknik çizim görseli mevcut değil', EN: 'Technical drawing image not available' },
    'product.notFound': {TR : 'Ürünler sayfasında geri dön', EN :"Back to Products Page"},
    'product.notFoundButton': {TR : 'Ürün Bulunumadı', EN : 'Product Not Found'},
    'product.technical':{TR : 'Teknik özellik bilgisi bulunmuyor', EN : 'No technical specification information'},
    'product.optional':{TR : 'Opsiyonel aksesuar bilgisi bulunmuyor', EN:'No optional accessory information'},

    // Product Filter Menu


    'filters.items.reyonDolabi': { TR: 'Reyon Dolabı', EN: 'Display Cabinet' },
    'filters.items.kasapDolabi': { TR: 'Kasap Dolabı', EN: 'Butcher Cabinet' },
    'filters.items.kebapMezeDolabi':{TR:'Kebap - Meze Dolabı', EN :'Kebab - Appetizer Cabinet'},
    'filters.items.kasapTeshirDolabi': { TR: 'Kasap Teşhir Dolabı', EN: 'Butcher Showcase Cabinet' },
    'filters.items.kebabMezeDolabi': { TR: 'Kebab-Meze Dolabı', EN: 'Kebab & Mezze Cabinet' },
    'filters.items.kasapDolabiDikCamli': { TR: 'Kasap Dolabı Dik Camlı', EN: 'Butcher Cabinet (Upright Glass)' },
    'filters.items.reyonDolabiDikCamli': { TR: 'Reyon Dolabı Dik Camlı', EN: 'Display Cabinet (Upright Glass)' },
    'filters.items.balikMostraDolabi': { TR: 'Balık Mostra Dolabı', EN: 'Fish Mostra Cabinet' },
    'filters.items.sogutmaliBalikDolabi': { TR: 'Soğutmalı Balık Dolabı', EN: 'Refrigerated Fish Cabinet' },
    'filters.items.kasapReyonDolabiBombeCamli': { TR: 'Kasap Reyon Dolabı Bombe Camlı', EN: 'Butcher Display (Curved Glass)' },
    'filters.items.mezeDolabiDikeyTip': { TR: 'Meze Dolabı Dikey Tip', EN: 'Mezze Cabinet (Vertical)' },
    'filters.items.sogukTeshirDolabi': { TR: 'Soğuk Teşhir Dolabı', EN: 'Cold Display Cabinet' },
    'filters.items.yatayEklerPastaDolabi': { TR: 'Yatay Ekler Pasta Dolabı', EN: 'Horizontal Eclair Pastry Cabinet' },
    'filters.items.venusPastaTeshirDolabi': { TR: 'VENUS - Pasta Teşhir Dolabı', EN: 'VENUS - Pastry Showcase' },
    'filters.items.moonBombeCamliReyonDolabi': { TR: 'MOON - Bombe Camlı Reyon Dolabı', EN: 'MOON - Curved Glass Display' },
    'filters.items.fullMoonDikCamliReyonDolabi': { TR: 'FULL MOON - Dik Camlı Reyon Dolabı', EN: 'FULL MOON - Upright Glass Display' },
    'filters.items.newMoonDuzCamliReyonDolabi': { TR: 'NEW MOON - Düz Camlı Reyon Dolabı', EN: 'NEW MOON - Flat Glass Display' },
    'filters.items.duzCamliReyonDolabi': { TR: 'Düz Camlı Reyon Dolabı', EN: 'Flat Glass Display Cabinet' },
    'filters.items.kuruSogutmaliReyonDolabi': { TR: 'Kuru Soğutmalı Reyon Dolabı', EN: 'Dry-Cooled Display Cabinet' },
    'filters.items.reyonTeshirDolabi': { TR: 'Reyon Teşhir Dolabı', EN: 'Display Showcase Cabinet' },
    'filters.items.kafeRestoranTeshirDolabi': { TR: 'Kafe Restoran Teşhir Dolabı', EN: 'Cafe/Restaurant Showcase' },
    'filters.items.kasapReyonDolabi': { TR: 'Kasap Reyon Dolabı', EN: 'Butcher Display Cabinet' },
    'filters.items.uflemeliReyonDolabi': { TR: 'Üflemeli Reyon Dolabı', EN: 'Fan-Assisted Display Cabinet' },
    'filters.items.balikTeshirDolabi': { TR: 'Balık Teşhir Dolabı', EN: 'Fish Showcase Cabinet' },
    'filters.items.mezeTeshirDolabi': { TR: 'Meze Teşhir Dolabı', EN: 'Mezze Showcase Cabinet' },
    'filters.items.kebapTeshirDolabi': { TR: 'Kebap Teşhir Dolabı', EN: 'Kebab Showcase Cabinet' },
    'filters.items.promosyonDolabi': { TR: 'Promosyon Dolabı', EN: 'Promotion Cabinet' },
    'filters.items.statikSogutmaliReyonDolabi': { TR: 'Statik Soğutmalı Reyon Dolabı', EN: 'Static Cooled Display Cabinet' },
    'filters.items.dikCamliReyonDolabi': { TR: 'Dik Camlı Reyon Dolabı', EN: 'Upright Glass Display Cabinet' },
    'filters.items.yarimCamliReyonDolabi': { TR: 'Yarım Camlı Reyon Dolabı', EN: 'Half Glass Display Cabinet' },
    'filters.items.bombeCamliReyonDolabi': { TR: 'Bombe Camlı Reyon Dolabı', EN: 'Curved Glass Display Cabinet' },
    'filters.items.kuzuEtAskiDolabi': { TR: 'Kuzu Et Askı Dolabı', EN: 'Lamb Hanging Meat Cabinet' },
    'filters.items.dikeyPastaDolabi': { TR: 'Dikey Pasta Dolabı', EN: 'Vertical Pastry Cabinet' },
    'filters.items.manavSutlukDolabi': { TR: 'Manav Sütlük Dolabı', EN: 'Produce Dairy Cabinet' },
    'filters.items.yarimBoySutlukDolabi': { TR: 'Yarım Boy Sütlük Dolabı', EN: 'Half-Height Dairy Cabinet' },
    'filters.items.camKapakliSutlukDolabi': { TR: 'Cam Kapaklı Sütlük Dolabı', EN: 'Glass-Door Dairy Cabinet' },
    'filters.items.sutlukDolabi': { TR: 'Sütlük Dolabı', EN: 'Dairy Cabinet' },
    'filters.items.etAskiDolabi': { TR: 'Et Askı Dolabı', EN: 'Hanging Meat Cabinet' },
    'filters.items.dryAgedDolabi': { TR: 'Dry Aged Dolabı', EN: 'Dry-Aged Cabinet' },
    'filters.items.dikeyTipAlttanMotorluSutluk': { TR: 'Dikey Tip Alttan Motorlu Sütlük', EN: 'Vertical Under-Motor Dairy' },
    'filters.items.dikeySiseSogutucuAhsapKaplamali': { TR: 'Dikey Şişe soğutucu Ahşap Kaplamalı', EN: 'Vertical Bottle Cooler (Wood Clad)' },
    'filters.items.petrolDolabiSiseSogutucu': { TR: 'Petrol Dolabı Şişe Soğutucu', EN: 'Gas Station Bottle Cooler' },
    'filters.items.mesrubatVeKolaDolabi': { TR: 'Meşrubat ve kola Dolabı', EN: 'Soft Drinks & Cola Cabinet' },
    'filters.items.siseSogutucuDolabi': { TR: 'Şişe Soğutucu Dolabı', EN: 'Bottle Cooler Cabinet' },
    'filters.items.marketDolabi': { TR: 'Market Dolabı', EN: 'Market Cabinet' },
    'filters.items.sarkuteriDolabi': { TR: 'Şarküteri Dolabı', EN: 'Deli Cabinet' },
    'filters.items.duvarTipiPeynirReyonlari': { TR: 'Duvar Tipi Peynir Reyonları', EN: 'Wall-Type Cheese Aisles' },
    'filters.items.duvarTipiSutlukReyonlari': { TR: 'Duvar Tipi Sütlük Reyonları', EN: 'Wall-Type Dairy Aisles' },
    'filters.items.pastaCikolataDolabi': { TR: 'Pasta - Çikolata Dolabı', EN: 'Pastry & Chocolate Cabinet' },
    'filters.items.yatayTipPastaDolabi': { TR: 'Yatay Tip Pasta Dolabı', EN: 'Horizontal Pastry Cabinet' },
    'filters.items.eklerPastaDolabi': { TR: 'Ekler Pasta Dolabı', EN: 'Eclair Pastry Cabinet' },
    'filters.items.pastaDolabi': { TR: 'Pasta Dolabı', EN: 'Pastry Cabinet' },
    'filters.items.yatayPastaDolabi': { TR: 'Yatay Pasta Dolabı', EN: 'Horizontal Pastry Cabinet' },
    'filters.items.pastaneTezgahi': { TR: 'Pastane Tezgahı', EN: 'Bakery Counter' },
    'filters.items.firinDolabi': { TR: 'Fırın Dolabı', EN: 'Oven Cabinet' },
    'filters.items.isitmaliBorekTezgahi': { TR: 'Isıtmalı Börek Tezgahı', EN: 'Heated Borek Counter' },
    'filters.items.isitmaliPogacaTezgahi': { TR: 'Isıtmalı Poğaça Tezgahı', EN: 'Heated Pogaca Counter' },
    'filters.items.kumpirWaffleDolabi': { TR: 'Kumpir Waffle Dolabı', EN: 'Kumpir & Waffle Cabinet' },
    'filters.items.kuruyemisDolabi': { TR: 'Kuruyemiş Dolabı', EN: 'Nuts Cabinet' },
    'filters.items.cikolataDolabi': { TR: 'Çikolata Dolabı', EN: 'Chocolate Cabinet' },
    'filters.items.baklavaTezgahi': { TR: 'Baklava Tezgahı', EN: 'Baklava Counter' },
    'filters.items.kuruPastaDolabi': { TR: 'Kuru Pasta Dolabı', EN: 'Dry Pastry Cabinet' },
    'filters.items.cephePastaTeshirDolabi': { TR: 'Cephe Pasta Teşhir Dolabı', EN: 'Front Pastry Showcase' },
    'filters.items.yatayPastaTeshirDolabi': { TR: 'Yatay Pasta Teşhir Dolabı', EN: 'Horizontal Pastry Showcase' },
    'filters.items.pastaTeshirDolabi': { TR: 'Pasta Teşhir Dolabı', EN: 'Pastry Showcase' },
    'filters.items.ortaTipPaslanmazDavlumbaz': { TR: 'Orta Tip Paslanmaz Davlumbaz', EN: 'Medium Stainless Hood' },
    'filters.items.kutuTipiPaslanmazDavlumbaz': { TR: 'Kutu Tipi Paslanmaz Davlumbaz', EN: 'Box-Type Stainless Hood' },
    'filters.items.duvarTipiFiltreliDavlumbaz': { TR: 'Duvar Tipi Filtreli Davlumbaz', EN: 'Wall-Type Filtered Hood' },
    'filters.items.duvarTipiDavlumbaz': { TR: 'Duvar Tipi Davlumbaz', EN: 'Wall-Type Hood' },
    'filters.items.dikeyTipBuzdolabiPaslanmazCiftKapiliCamli': { TR: 'Dikey Tip Buzdolabı Paslanmaz Çift Kapılı Camlı', EN: 'Vertical Stainless Double Glass Door Fridge' },
    'filters.items.paslanmazDikeyTipBuzDolabiCiftKapili': { TR: 'Paslanmaz Dikey Tip Buzdolabı Çift Kapılı', EN: 'Stainless Vertical Type Refrigerator Double Door' },
    'filters.items.dikeyTipBuzBuzdolabiCiftKapili': { TR: 'Dikey Tip Buz Buzdolabı Çift Kapılı', EN: 'Vertical Double-Door Fridge' },
    'filters.items.dikeyTipBuzdolabiCamli': { TR: 'Dikey Tip Buzdolabı Camlı', EN: 'Vertical Glass Fridge' },
    'filters.items.paslanmazBuzdolabiDikeyTip': { TR: 'Paslanmaz Buzdolabı Dikey Tip', EN: 'Vertical Stainless Fridge' },
    'filters.items.tezgahAltiDolapCamli': { TR: 'Tezgah Altı Dolap Camlı', EN: 'Under-Counter Glass Cabinet' },
    'filters.items.tezgahAltiBuzdolabi': { TR: 'Tezgah Altı Buzdolabı', EN: 'Under-Counter Fridge' },
    'filters.items.calismaTezgahiAraRafli': { TR: 'Çalışma Tezgahı Ara Raflı', EN: 'Workbench with Mid Shelf' },
    'filters.items.calismaTezgahiTabanRafli': { TR: 'Çalışma Tezgahı Taban Raflı', EN: 'Workbench with Base Shelf' },
    'filters.items.calismaTezgahiPolietilenTablaliTabanRafli': { TR: 'Çalışma Tezgahı Polietilen Tablalı Taban Raflı', EN: 'Workbench (Poly Top) with Base Shelf' },
    'filters.items.tekEvyeliTezgahPaslanmaz': { TR: 'Tek Evyeli Tezgah Paslanmaz', EN: 'Single-Sink Stainless Bench' },
    'filters.items.sogukOdaRafi': { TR: 'Soğuk Oda Rafı', EN: 'Cold Room Shelf' },
    'filters.items.paslanmazTelRaf': { TR: 'Paslanmaz Tel Raf', EN: 'Stainless Wire Shelf' },
    'filters.items.telRafIstifRafi': { TR: 'Tel Raf İstif Rafı', EN: 'Stackable Wire Shelf' },
    'filters.items.paslanmazEvyeliDolapliTezgah': { TR: 'Paslanmaz Evyeli Dolaplı Tezgah', EN: 'Stainless Bench with Sink & Cabinet' },
    'filters.items.paslanmazDolapliCalismaTezgahi': { TR: 'Paslanmaz Dolaplı Çalışma Tezgahı', EN: 'Stainless Cabinet Workbench' },
    'filters.items.paslanmazCalismaTezgahi': { TR: 'Paslanmaz Çalışma Tezgahı', EN: 'Stainless Workbench' },
    'filters.items.sutluk': { TR: 'Sütlük', EN: 'Dairy' },
    'filters.items.zeytinDolabi': { TR: 'Zeytin Dolabı', EN: 'Olive Cabinet' },
    'filters.items.manavTezgahi': { TR: 'Manav Tezgahı', EN: 'Produce Counter' },
    'filters.items.zeytinlikVeRecetelikDolabi': { TR: 'Zeytinlik ve Reçetelik Dolabı', EN: 'Olive & Condiments Cabinet' },
    'filters.items.endustriyelSogutmaSistemleri': { TR: 'Endüstriyel Soğutma Sistemleri', EN: 'Industrial Refrigeration Systems' },
    'filters.items.monoblokSogutmaSistemleri': { TR: 'Monoblok Soğutma Sistemleri', EN: 'Monoblock Refrigeration Systems' },
    'filters.items.splitSogutmaGrubu': { TR: 'Split Soğutma Grubu', EN: 'Split Refrigeration Unit' },
    'filters.items.merkeziSogutmaSistemleri': { TR: 'Merkezi Soğutma Sistemleri', EN: 'Central Refrigeration Systems' },
    'filters.items.bireyselSogutmaGruplari': { TR: 'Bireysel Soğutma Grupları', EN: 'Individual Refrigeration Units' },
    'filters.items.kasapReyonDolabiDuzCamli': { TR: 'Kasap Reyon Dolabı Düz Camlı', EN: 'Butcher Display (Flat Glass)' },
    'filters.items.sogukHavaDeposu': { TR: 'Soğuk Hava Deposu', EN: 'Cold Storage Room' },
    'filters.items.eksi18SogukHavaDeposu': { TR: '-18 Derece Soğuk Hava Deposu', EN: '-18°C Cold Storage Room' },
    'filters.items.pvcSeritHavaPerdesi': { TR: 'PVC Şerit Hava Perdesi', EN: 'PVC Strip Air Curtain' },
    'filters.items.pvcPerde': { TR: 'PVC Perde', EN: 'PVC Curtain' },
    'filters.items.pvcPerdeSistemleri': { TR: 'PVC Perde Sistemleri', EN: 'PVC Curtain Systems' },
    'filters.items.sogukOdaPanelleri': { TR: 'Soğuk Oda Panelleri', EN: 'Cold Room Panels' },
    'filters.items.sogukHavaDeposuPvcPerdeSistemleri': { TR: 'Soğuk Hava Deposu PVC Perde Sistemleri', EN: 'Cold Storage PVC Curtain Systems'},
    'filters.items.sogukHavaDeposuAksesuarlari': { TR: 'Soğuk Hava Deposu Aksesuarlari', EN: 'Cold Storage and Accessories'},
    'filters.items.menteseliSogukHavaDeposuKapisi': { TR: 'Menteşeli Soğuk Hava Deposu Kapısı', EN: 'Hinged Cold Room Door' },
    'filters.items.surguluSogukHavaDeposuKapisi': { TR: 'Sürgülü Soğuk Hava Deposu Kapısı', EN: 'Sliding Cold Room Door' },
    'filter.items.clear':{TR:'Temzile',EN:'Clear'},
    'filter.items.seeResults':{TR:'Sonuçları Gör',EN:'See results'},


    //FOOTER

    'pars.footer':{TR : '© 2025 — Tüm Hakları Pars Soğutma\'ya Aittir.', EN:'© 2025 — All Rights Reserved by Pars Cooling'},
    'pars.footer.adress':{TR:'Mimar Sinan, Cuma Cd. No: 7 İç Kapı No: 2, 34920 Sultanbeyli/İstanbul', EN:'Mimar Sinan, Cuma Cd. No: 7 Inner Door No: 2, 34920 Sultanbeyli/Istanbul'},
    'pars.footer.contact':{TR:' İletişim Bilgilerimiz',EN:' Contact Information'},
    'pars.footer.verticalTypeRefrigeratedCounters': {TR: 'Dikey Tip Soğutuculu Reyonlar', EN : 'Vertical Type Refrigerated Counters'},
    'pars.footer.wallMountedRefrigeratedCounters':{TR:'Duvar Tipi Soğutuculu Reyonlar',EN :'Wall Mounted Refrigerated Counters'},
    'pars.footer.serviceCounters':{TR:'Servis Reyonları',EN :'Service Counters'},
    'pars.footer.bakeryProducts':{TR:'Unlu Mamüller',EN :'Bakery Products'},
    'pars.footer.industrialKitchenEquipment':{TR:'Endüstriyel Mutfak Ekipmanları',EN :'Industrial Kitchen Equipment'},
    'pars.footer.marketEquipment':{TR:'Market Ekipmanları',EN :'Market Equipment'},
    'pars.footer.coldStorage':{TR:'Soğuk Hava Depoları',EN :'Cold Storage'},
    'pars.footer.coolingSystems':{TR:'Soğutma Sistemleri',EN :'Cooling Systems'},
    'pars.footer.home':{TR: 'Ana Sayfa', EN :'Home Page'},
    'pars.footer.corporate':{TR: 'Kurumsal', EN :'Corporate'},
    'pars.footer.about':{TR: 'Hakkımızda', EN :'About Page'},
    'pars.footer.products':{TR:'Ürünlerimiz', EN :'Products Page'},
    'pars.footer.telephone':{TR:'İletişim Bilgilerimiz', EN :'Contact Information'},
    'pars.footer.info':{TR:'Pars Soğutma, süpermarketler, soğuk odalar ve endüstriyel soğutma sistemleri alanında sektörün öncü firmalarından biri olma yolunda emin adımlarla ilerlemektedir. Kuruluşumuzdan bu yana, müşterilerimizin ihtiyaçlarına özel çözümler sunarak, yüksek kalite ve enerji tasarrufunu bir araya getiren projelerle fark yaratmayı hedefledik.\n', EN:' Pars Refrigeration is taking firm steps towards becoming one of the leading companies in the sector in the field of supermarkets, cold rooms and industrial refrigeration systems. Since our establishment, we have aimed to make a difference by offering customized solutions to our customers\' needs and projects that combine high quality and energy savings.\n'},

// NOT FOUND PAGE

    'notfound.title': { TR: 'Sayfa Bulunamadı', EN: 'Page Not Found' },
    'notfound.desc': { TR: 'Üzgünüz, aradığınız sayfaya şu anda ulaşılamıyor. Sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı olabilir.', EN: 'Sorry, the page you are looking for is currently unavailable. The page may have been removed, had its name changed, or is temporarily unavailable.' },
    'notfound.back': { TR: 'Geri Dön', EN: 'Go Back' },
    'notfound.home': { TR: 'Ana Sayfa', EN: 'Home' },
    'notfound.meta.title': { TR: '404 - Sayfa Bulunamadı | Pars Soğutma Sistemleri', EN: '404 - Page Not Found | Pars Cooling Systems' },
    'notfound.meta.desc': { TR: 'Aradığınız sayfa bulunamadı. Pars Soğutma Sistemleri ana sayfasına dönerek endüstriyel soğutma çözümlerimizi inceleyebilirsiniz.', EN: 'The page you are looking for could not be found. You can return to the Pars Cooling Systems home page to examine our industrial cooling solutions.' },

};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('TR');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
