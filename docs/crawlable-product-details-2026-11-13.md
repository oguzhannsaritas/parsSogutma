# Ürün teknik içeriği ve kategori seçimi — 13 Kasım 2026

Ürün sayfalarının ayrıntılı teknik özellik ve aksesuar listeleri yalnız kullanıcı bölümü açınca DOM'a ekleniyordu. İki bölüm artık kapalı başlayan yerel HTML `details/summary` kontrolleriyle oluşturulur; mevcut metnin tamamı ilk HTML içinde bulunur. Kontroller JavaScript yüklenmeden de açılıp kapanır. Ürün ana görünümü, katalog metinleri ve canonical adresler korunur.

Pasta, sütlük ve kasap kategorilerindeki 48 model, kullanım başlıkları altında düzenlendi. Pasta ve sütlükte dörder, kasapta üç alt grup ve sayfa içi geçiş bağlantıları var. Kartların görsel oranı ve mobil sütun düzeni korunur. Kategori adresleri ve ürün üyelikleri aynı kalır. Google'a sunulan `ItemList` sırası ekrandaki kart sırasıyla eşleşir. Yeni katalog kayıtları tanımlı bir alt gruba ait değilse “Diğer modeller” bölümünde görünür.

## Doğrulama

- `npm run lint` ve `npm run build` başarılı.
- 108 canonical üründe 1.523 teknik madde ve 302 aksesuar maddesi, JSON içinden değil ilk HTML ana içeriğindeki gerçek liste düğümlerinden doğrulandı.
- 135 canonical sayfanın mevcut SEO, ilk görünüm, 317 eski ürün yönlendirmesi ve varlık kontrolleri geçti.
- Üç kategoride her modelin tek kartla gösterilmesi, alt grup bağlantıları, Türkçe/İngilizce başlıklar ve yapılandırılmış liste sırası kontrol edildi.
- Hydration kontrolleri, teknik bölümlerin JavaScript öncesi/sonrası açılıp kapanmasını, dil değişimini, model geçişinde açılır durumun sıfırlanmasını ve mobil/koyu tema senaryolarını kapsar.
- Mevcut Ads/GA4 iletişim ve erken tıklama ölçümü testleri geçti; gerçek arama veya WhatsApp başlatılmadı.
- Ana giriş JavaScript'i 651.804 bayt, ürün modülü 23.872 bayt. Bunlar dosya boyutlarıdır; yeni PageSpeed puanı veya gerçek kullanıcı hızı ölçümü değildir.

Fiyat, garanti, teslimat/kurulum koşulları ve yeni proje ayrıntıları işletme teyidi gerektiren ayrı içerik işleridir. Bu uygulama mevcut teknik metnin doğruluğunu yeniden belgelemez; taranabilirlik ve seçim düzenini iyileştirir. Google'ın dizin veya sıralama etkisi ayrıca ölçülmelidir.

Kaynak: [Google — kullanıcı etkileşimine bağlı içerik yükleme](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading).
