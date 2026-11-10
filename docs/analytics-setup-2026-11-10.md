# Organik ziyaret ve iletişim ölçümü — 10 Kasım 2026

Durum: web akışı oluşturuldu; yayın ve canlı veri doğrulaması hazırlanıyor. Google Ads etiketi ve mevcut dönüşüm kimlikleri korunur.

## Hazırlanan uygulama

- Mevcut Google etiketi yeniden kullanılır; ikinci bir etiket yükleyici eklenmez.
- Doğrulanmış web akışı ölçüm kimliği `src/lib/analyticsConfig.ts` içine girilir. Boş kimlikte GA4 başlatılmaz ve GA4 olayı gönderilmez.
- Başlatma tek sefer yapılır. Sayfa görüntülemelerini GA4 geliştirilmiş ölçüm yönetir; React Router için ayrıca elle `page_view` gönderen ikinci bir mekanizma eklenmez.
- `whatsapp_click` ve `phone_click` olayları yalnız ilgili GA4 ölçüm kimliğine gönderilir. `contact_method` ve sorgu parametreleri çıkarılmış `page_path` alanları bulunur.
- WhatsApp mesajı, form girdileri, ziyaretçinin e-posta veya telefon bilgileri özel olaylara eklenmez. Tıklama tamamlanmış görüşme/teklif olarak adlandırılmaz.
- Ads dönüşümleri mevcut AW hedefleriyle ayrı çalışır. GA4 olayları Ads'e yeni bir dönüşüm olarak aktarılmaz.
- Google sinyalleri ve reklam kişiselleştirme sinyalleri bu GA4 yapılandırmasında kapalıdır. Hesap kurulumunda isteğe bağlı ek veri paylaşımı seçenekleri kapatılmıştır.

## Hesap kurulumu

İlgili Google hesabı: Pars Soğutma, Search Console ile aynı hesap. Bu oturumda mevcut Analytics hesabı/mülkü yerine yeni kurulum ekranı açıldı.

Hazırlanan bilgiler:

- Hesap: Pars Soğutma
- Mülk: Pars Soğutma - parsogutma.com
- Raporlama ülkesi/saat dilimi: Türkiye, GMT+03:00
- Para birimi: Türk lirası
- Sektör: Ticari ve Endüstriyel Hizmetler
- İşletme boyutu: Küçük — 1–10 çalışan (kullanıcı teyidi)

Kullanıcı çalışan sayısını 1–10 olarak teyit etti. Yeniden bağlanıldığında hesap/mülk/işletme adımları tarayıcıda tamamlanmış ve veri toplama aşaması açılmıştı; bu adımlar veya şart kabulü tekrar edilmedi.

Web akışı: Pars Soğutma Web — `https://parsogutma.com`

Akış kimliği: `16312156142` — Ölçüm kimliği: `G-RP0R34V4ME`

Geliştirilmiş ölçümde sayfa yüklemeleri ve tarayıcı geçmişi değişiklikleri doğrulandı. Kaydırma ve dosya indirme açık; otomatik giden tıklama, site araması, form ve video ölçümü kapalı. Özel WhatsApp/telefon olayları ayrı kalır.

## Etkinleştirme ve doğrulama

1. İşletme boyutunu doğru aralıkla tamamla, hedeflerde potansiyel müşteri kazanımını seç; şart onayından sonra hesabı/mülkü oluştur.
2. `https://parsogutma.com` için web akışı oluştur; gerçek G- ölçüm kimliğini kaydet.
3. Geliştirilmiş ölçümde sayfa yüklemeleri ve tarayıcı geçmişi değişiklikleri açık olmalı. Form etkileşimleri gibi kapsam dışı otomatik ölçümleri kapat; URL/e-posta redaksiyonunu kontrol et.
4. Gerçek kimliği yapılandırmaya ekle; kontrolleri ve üretim derlemesini yeniden çalıştır, yayımla.
5. Canlı ilk sayfa ve sayfa geçişlerini Realtime/DebugView ile doğrula. Gerçek telefon/WhatsApp görüşmesi başlatmadan etiket davranışını test et. Doğrulama verisini gerçek müşteri talebi gibi raporlama.
6. İlgili Search Console mülkünü Analytics'e bağlayarak organik açılış sayfaları ve sorgu verilerini birlikte izle. Telefon/WhatsApp tıklaması ile gerçek nitelikli teklifi ayrı değerlendir.

Kontroller: `npm run lint`, `npm run analytics:check`, `npm run build`. GA4 kimliği boş kaldığı sürece Analytics kurulumu tamamlanmış veya veri topluyor olarak raporlanmaz.

Kaynaklar: Google Analytics [SPA ölçümü](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications), [özel olaylar](https://developers.google.com/analytics/devguides/collection/ga4/events), [olay yönlendirme](https://developers.google.com/tag-platform/gtagjs/routing).
