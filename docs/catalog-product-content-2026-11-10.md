# Diğer ürün gruplarının içerikleri — 10 Kasım 2026

Pasta ve çikolata grubunda daha önce yapılan içerik çalışması diğer sekiz gruptaki 88 esas ürüne uygulandı. Böylece dokuz gruptaki 108 esas ürünün her birinde Türkçe ve İngilizce ayrı arama sonucu açıklaması, giriş paragrafı, üç seçim notu ve iki soru-cevap bulunuyor.

| Grup | Bu aşamada geliştirilen ürün |
| --- | ---: |
| Kasap ve et teşhir | 10 |
| Kebap ve meze | 4 |
| Sütlük ve market | 18 |
| Balık | 4 |
| Reyon ve teşhir | 17 |
| Soğuk oda ve bileşenleri | 10 |
| Endüstriyel mutfak | 20 |
| Soğutma grupları | 5 |
| **Yeni kapsam** | **88** |
| Önceki pasta ve çikolata kapsamı | 20 |
| **Toplam** | **108** |

Esas ürün sayısına aynı ürünün eski adresleri ayrıca dahil edilmez. Önceden doğrulanmış 42 → 12 yönlendirmesi korunur.

## Kaynak ve içerik sınırı

Her ürünün mevcut katalog adı, mevcut teknik metni ve kapak fotoğrafı incelendi. Sunum biçimi, kullanım amacı, servis/ürün alma yönü, ambalaj/tepsi ölçüsü, montaj ve teklif kapsamı gibi alıcıya yardımcı konular işlendi. Sayısal güç, kapasite, yük, enerji tasarrufu veya doğrulanmamış sıcaklık/nem kontrolü özelliği eklenmedi. Dry aged süresi, gıda saklama süresi veya ürün işleme reçetesi verilmedi. Yangın önleme, antibakteriyel etki, sertifika veya performans garantisi üretilmedi.

Ürün adları, adresler, kategori üyelikleri, fotoğraflar, teknik tablolar ve teknik özellikler bu aşamada değiştirilmedi. Ortak fotoğraflar farklı mühendislik özelliğinin kanıtı sayılmadı. 19 ve 30 dahil, teyit edilmemiş kayıtlar birleştirilmedi. Önceki 20 pasta ürünü içeriğinin metinleri aynen korundu.

Çalışma teknik veri doğrulamasını tamamlamaz. Önceki bekleyenler `model-content-review-2026-11-10.md` ve `pastry-product-content-2026-11-10.md` içinde duruyor. Bu taramada görülen ek teyit konuları:

| Konu | Teyit gereksinimi |
| --- | --- |
| 34 / 40; 44 / 88; 46 / 47 / 48; 83 / 84 / 85 | Ortak kapak görselleri var. Gerçek model kodu, gövde, donanım ve varsa teknik ayrım doğrulanmalı. |
| 41 / 43 dry aged | Kontrol, nem, izleme ve raf yükleri için model föyü gerekli. Eski teknik metinlerdeki tuz/antibakteriyel iddiaları bu çalışma ile doğrulanmış sayılmaz ve yeni metinlere taşınmadı. |
| 51 peynir reyonu | Mevcut teknik özellik listesi boş. Donanım ya da kapasite fotoğraftan çıkarılmadı. |
| 81 / 107 tezgâh yüzeyi | Ortak fotoğraf ve tabla malzemesi hakkında uyuşmayan katalog ifadeleri var. Siparişte tabla malzemesi ayrıca doğrulanmalı. |
| 99 / 100 / 101 / 103 PVC ürünleri | Malzeme sınıfı, ortam uygunluğu ve eski metindeki yanmazlık/UV iddiaları için ürün belgesi gerekli. Renkten sınıf çıkarılmadı. |
| 70–73 davlumbazlar | Pişirme yükü, kanal ve fan projesi ile gerçek donanım kapsamı gerekli; filtre görünümünden güvenlik veya kapasite sonucu çıkarılmadı. |
| 97 / 98 / 102–106 soğuk oda bileşenleri | Panel, zemin, kapı, aksesuar ve cihaz kapsamı ayrı belirtilmeli; oda kapasitesi veya kapı uygunluğu yalnızca addan belirlenmedi. |

## Yayın ve yüklenme düzeni

Uzun ürün metinleri mevcut ürün bilgileri alanındaki ortak bileşenlerle gösteriliyor. Aynı bileşenler ilk HTML üretiminde de kullanılıyor. İlk HTML Türkçe; mevcut dil seçici ile İngilizce metinler, başlıklar ve açıklamalar güncelleniyor. Yeni dil adresi ya da URL yapısı eklenmedi.

İçerik kaynakları grup dosyalarına ayrıldı. Arama sonucu açıklamaları bu kaynaklardan `npm run content:generate` ile üretiliyor. Paylaşılan SEO kodu yalnızca kısa açıklamaları yüklüyor; uzun metinler ürün ekranı açıldığında gelen bölümde bulunuyor. Bu sayede tüm ürün rehberleri ana sayfanın başlangıç dosyasına eklenmiyor. Ana JavaScript dosyası önceki 906,79 kB / 210,82 kB gzip değerinden 886,13 kB / 204,95 kB gzip değerine indi. Bunlar derleme boyutlarıdır; hız puanı veya Core Web Vitals ölçümü değildir. Önceden var olan büyük dosya uyarısı sürüyor.

## Tamamlanan yerel kontroller

- `npm run lint`: geçti.
- `npm run analytics:check`: geçti; GA4 ve mevcut Ads dönüşüm davranışları korundu.
- `npm run build`: geçti.
- 135 esas sayfa, dokuz grup, 11 referans ve 762 ürün görseli üretildi.
- 108 ürünün iki dilde kapsamı ve grup üyelikleri; ayrı girişleri ve açıklamaları; ilk HTML'de seçim notları ve soru-cevapları; metadata/yapılandırılmış veri uyumu kontrol edildi.
- Tek giriş paragrafı, kategori bağlantıları, eski adresler, 42 yönlendirmesi, 19/30 ayrımı, önceki sıcaklık korumaları ve Search Console doğrulama dosyası kontrolleri geçti.
- Uzun ürün metinlerinin ana başlangıç dosyasında bulunmadığı kontrol edildi.

Canlı dizine ekleme veya sıralama artışı bu teknik kontrollerden çıkarılamaz. Üretim teyidi ve Search Console performans değerlendirmesi ayrı işlerdir.
