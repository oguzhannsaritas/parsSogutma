# İlk ekranın açılışı — 11 Kasım 2026

## Sorun ve değişiklik

Önceki sürüm (`1acbad495fec6dfa4d0ed86d6ae6962c53a18754`) SEO için ayrı HTML üretiyor, ziyaretçinin asıl görünümünü ise uygulama çalışana kadar yükleme ekranının arkasında tutuyordu. Görsellerin aktarımı hafiflese de bu bekleme sürüyordu.

Bu sürümde mevcut React sayfalarının **gerçek görünümü derleme sırasında hazırlanıyor**. Aynı başlık, ana fotoğraf, kartlar, açıklamalar, tablolar ve soru cevaplar ilk yanıtta yer alıyor. Tarayıcı hazır görünümü `hydrateRoot` ile etkileşimli hâle getiriyor; ilk ekran silinip yeniden oluşturulmuyor. Sunucuda her istekte render veya yeni bir hosting hizmeti gerekmiyor; Vercel statik dosyaları sunmaya devam ediyor.

- Derleme ve ilk tarayıcı render'ı aynı sayfa modülünü ve veriyi kullanıyor. Yükleme ekranı ve HTML'yi gizleyen sekiz saniyelik açılış düzeni kaldırıldı. İlk görünümün giriş animasyonları içerikleri gizlemiyor; sonraki etkileşimler korunuyor.
- Yalnızca açık ürünün tam kaydı güvenli bir `application/json` bloğunda HTML ile geliyor. İlk model için ek JSON isteği yok; sonraki modellerde önceki sürümün ayrı dosyaları ve istek önbelleği kullanılıyor. Böylece ilk HTML ile sonradan değişmiş bir model dosyası arasında fark oluşması da önleniyor.
- Floating iletişim araçları uygulama hazır olduğunda yükleniyor. Sabit içerikteki telefon/WhatsApp bağlantıları için **bağımsız ve küçük bir erken takip girişi** var. Mevcut GA4/Ads kimlikleri korunuyor; aynı GA4 örneği tekrar yapılandırılmıyor. Native ve React tıklamaları aynı olay üzerinden ayıklanarak tek dönüşüm sayılıyor. İptal edilmiş/sürüklenmiş tıklamalar ve özel mesaj/sorgu verileri gönderilmiyor.
- Kayıtlı gece modu ilk HTML ile uyumlu biçimde geri yükleniyor. Arama/filtre sorguları ilk uyumlu render'dan sonra uygulanıyor. İlk yüklemede ziyaretçi sayfayı okumaya başlamışsa konumu başa sıfırlanmıyor. Başka sayfaya geçişte üst konuma dönüş korunuyor.
- Statik 404 dosyasının farklı bir URL'de sunulduğu durumda uygulama yanlış sayfayı hydrate etmeye çalışmıyor. Bilinen sayfalarda gerçek HTML ile uyumlu açılış devam ediyor.
- Ürün fotoğraflarında `object-contain` nedeniyle görüntünün kapladığı gerçek genişlik, 4:3 çerçevenin genişliğinden küçük olabiliyor. Duyarlı görsel seçimi ve ön yükleme bu gerçek genişliğe uyarlandı; medya eşikleri, piksel yoğunluğu, çerçeve düzeni ve yakınlaştırma kaynakları korundu.
- Sayfa adresleri, canonical ve sitemap'ler, 108 iki dilli ürün rehberi, 11 referans ve üretim teyidi bekleyen teknik değerler değiştirilmedi.

## Doğrulama

`npm run build` içinde 135 canonical sayfanın SEO kontrolleri, model/görsel performans kontrolleri, hazır ilk ekran ve etkileşime geçiş testleri, mevcut ve erken iletişim ölçümü testleri çalışıyor. `npm run lint` de uygulandı.

İlk ekran testleri 135 sayfada tamamlanmış görünüm bulunduğunu, gizli yükleme katmanı veya Suspense içerik açma betiği olmadığını doğruluyor. Üç ana örnekte **hiçbir JavaScript çalıştırılmadan** başlık ve ana görselin görünür HTML içinde olduğu kontrol ediliyor. Bunlar DOM doğruluk testleridir; hız puanı olarak sunulmuyor.

Etkileşim testleri ilk başlık DOM düğümünün korunduğunu; ürün verisinin tekrar indirilmediğini; dil, model geçişi, kayıtlı tema, arama ve okuma konumunun korunduğunu denetliyor. E-katalog, galeri ve iletişim sayfaları ayrıca kontrol edildi. Takip testleri gerçek Google'a olay veya müşterilere mesaj göndermez.

## Ölçüm yöntemi ve yayın öncesi sonuçlar

PageSpeed Insights **Mobil**, emülasyonlu Moto G Power, Lighthouse 13.6.0, HeadlessChromium 157.0.8103.38, yavaş 4G, ilk yükleme. Üç sayfa için üçer ayrı koşu alındı. Karşılaştırma her metrikte üç koşunun **ortanca (medyan)** değeriyle yapılacak; en iyi koşu seçilmiyor.

| Sayfa | Performans koşuları | Performans medyanı | LCP koşuları (sn) | LCP medyanı | TBT medyanı | SEO |
| --- | --- | ---: | --- | ---: | ---: | ---: |
| Ana sayfa | 67 / 77 / 72 | 72 | 5,9 / 5,9 / 6,1 | 5,9 sn | 270 ms | 100 |
| Pasta ve çikolata grubu | 73 / 78 / 73 | 73 | 5,3 / 6,2 / 6,0 | 6,0 sn | 260 ms | 100 |
| Ürün 14 | 77 / 77 / 76 | 77 | 6,2 / 6,5 / 6,2 | 6,2 sn | 90 ms | 100 |

Ham ekran verileri, zamanlar ve dokuz ayrı Google raporu bağlantısı [ölçüm kaydında](qa/first-paint-runs-2026-11-11.json). Bu koşular 11:03–11:11 (İstanbul) aralığında önceki canlı sürümde alındı.

Yayın sonrası aynı üç URL'de üçer koşu ve canlı görünüm/etkileşim kontrolü tamamlanınca sonuçlar bu belgeye eklenecek. PageSpeed'in üst kısmındaki 28 günlük veriler sayfaya özel değil kaynak/origin geneli; LCP 2 sn, INP 140 ms, CLS 1 olan tarihsel pencere yeni laboratuvar sonuçlarından ayrıdır. Bu çalışma sıralama yükselişi veya teknik model değerlerinin üretimden teyidi olarak sunulmuyor.
