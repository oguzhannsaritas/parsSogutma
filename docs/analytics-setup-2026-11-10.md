# Organik ziyaret ve iletişim ölçümü — 10 Kasım 2026

Durum: GA4 siteye bağlandı ve canlı sayfa görüntüleme verisi doğrulandı. Search Console bağlantısı tamamlandı.

## Hesap ve web akışı

- Hesap: Pars Soğutma — Search Console ile aynı Google hesabı.
- Mülk: Pars Soğutma - parsogutma.com (`563483972`).
- Web akışı: Pars Soğutma Web — `https://parsogutma.com`.
- Akış kimliği: `16312156142`; ölçüm kimliği: `G-RP0R34V4ME`.
- Raporlama: Türkiye, GMT+03:00; Türk lirası.
- Sektör: Ticari ve Endüstriyel Hizmetler; çalışan aralığı kullanıcı tarafından 1–10 olarak teyit edildi.

Yeniden bağlanıldığında hesap, mülk ve işletme adımları tarayıcıda tamamlanmıştı. Bu adımlar veya şart kabulü tekrar edilmedi. Web akışı bu aşamadan devam edilerek oluşturuldu.

## Sitedeki uygulama

Mevcut Google etiketi yeniden kullanılır; ikinci bir yükleyici eklenmez. GA4 yapılandırması uygulama açılışında bir kez yapılır. Sayfa yüklemelerini ve React Router geçmiş değişikliklerini GA4 geliştirilmiş ölçüm yönetir; ayrıca elle `page_view` gönderen ikinci bir mekanizma yoktur.

`whatsapp_click` ve `phone_click` özel olayları yalnız bu GA4 hedefine gönderilir. Parametreler `contact_method` ve sorgu parametreleri çıkarılmış `page_path` alanıdır. WhatsApp mesajı, form girdileri veya ziyaretçinin e-posta/telefon bilgileri özel olaylara eklenmez. Bir iletişim tıklaması, tamamlanmış görüşme veya nitelikli teklif olarak adlandırılmaz.

Mevcut Google Ads AW dönüşüm hedefleri ve bağlantı açılış davranışları korunur. Yeni GA4 olayları Ads'e dönüşüm olarak aktarılmadı. Google sinyalleri ve reklam kişiselleştirme sinyalleri bu GA4 yapılandırmasında kapalıdır.

Geliştirilmiş ölçümde sayfa yüklemeleri ve tarayıcı geçmişi değişikliklerinin açık olduğu doğrulandı. Kaydırma ve dosya indirme açık; otomatik giden tıklama, site araması, form ve video ölçümü kapalıdır. E-posta redaksiyonu akış ayrıntılarında etkin görünüyordu.

## Search Console bağlantısı

`https://parsogutma.com/` URL ön eki mülkü, Pars Soğutma Web akışıyla ilişkilendirildi. Bağlantı sonucundaki kalıcı tabloda doğru Search Console mülkü, web akışı ve akış kimliği doğrulandı.

## Doğrulama

- `npm run lint`, `npm run analytics:check` ve `npm run build` başarılı.
- 135 canonical sayfanın mevcut SEO, kategori, referans, varlık ve iç bağlantı kontrolleri geçti.
- Analytics testleri tek yapılandırmayı, ayrı GA4 hedeflerini, mesaj/sorgu verisi gönderilmemesini ve bloke/eksik etiket toleransını doğrular. Ads testleri mevcut hedefleri, iptal edilmiş tıklamaları ve geri çağrı/zaman aşımıyla tek açılışı doğrular.
- PR #16 ile kod yayına alındı; Vercel üretim yayını başarılı. Etkinleştirme commit'i: `17825399f897f6ab00dffea2318540dd62d83082`.
- Canlı üretim JavaScript dosyasında gerçek GA4 kimliği ve mevcut Ads kimliği doğrulandı. Tek Google etiketi yükleyicisi korunuyor.
- Canlı ana sayfadan pasta kategorisine ve ürün 14'e uygulama içi geçiş yapıldı. Gerçek zamanlı raporda üç sayfanın yolları ve doğru sayfa başlıkları ayrı görüntülemeler olarak görüldü.
- Gerçek telefon araması veya WhatsApp mesajı başlatılmadı; canlı iletişim olayı alımı bu testte gösterilmedi. İletişim olaylarının kod davranışı otomatik testlerle doğrulandı.

Kurulum için yapılan test ziyaretleri SEO başarısı veya gerçek müşteri kazanımı olarak değerlendirilmez. Organik kanal, açılış sayfaları, sorgular ve gerçek nitelikli teklifler yeterli veri biriktiğinde birlikte izlenmelidir. Geçmişe dönük GA4 verisi oluşmaz; Search Console verilerinin raporlara yansıması ayrıca işlenir.

Kaynaklar: Google Analytics [SPA ölçümü](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications), [özel olaylar](https://developers.google.com/analytics/devguides/collection/ga4/events), [olay yönlendirme](https://developers.google.com/tag-platform/gtagjs/routing).
