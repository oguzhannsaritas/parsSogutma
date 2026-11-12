# Eski ürün adresleri — 12 Kasım 2026

Önceki `/urun/...` ve `/blog/...` ürün adresleri doğru içeriği ve güncel canonical adresini 200 yanıtıyla sunuyordu. Bu adresler artık aynı ürüne ait `/products/{id}` adresine Vercel üzerinden kalıcı 308 yönlendirmesi yapar.

- 317 benzersiz eski adres, mevcut HTML üreticisinin ürün eşleşmeleriyle aynı hedefe gider. Ortak isimlerde mevcut ilk kayıt eşleşmesi korunur.
- Önceden teyit edilmiş 42 → 12 ve beş kurumsal sayfa yönlendirmesi korunur. 19 ve 30 numaralı modeller ayrı kalır.
- `cleanUrls` açık olduğundan `.html` uzantılı eski bağlantılar önce uzantısız adrese, ardından ürünün canonical adresine geçebilir. `www` alan adı normalleştirmesi de ayrı bir adımdır.
- Eski etiket arşivlerine toplu veya ana sayfaya yönlendirme eklenmez; bunlar için eşdeğer içerik ayrıca doğrulanmalıdır.

Ürün adları değiştiğinde `npm run redirects:generate` çalıştırılıp `vercel.json` değişikliği commit edilmelidir. Vercel bu dosyayı derlemeden önce okur.

`npm run build` mevcut her eski HTML'in canonical adresiyle yönlendirmeyi karşılaştırır; hedefin site haritasında olduğunu, kendi canonical adresini verdiğini ve yönlendirme zinciri/döngüsü olmadığını kontrol eder. Mevcut SEO, ilk HTML, hydration, performans ve iletişim ölçümü kontrolleri de bu derlemede çalışır. `npm run lint` ayrıca TypeScript kontrolünü yapar.

Bu değişiklik URL geçişini netleştirir; dizine alınma veya sıralama artışı garantisi değildir.

Kaynaklar: [Google — URL değişiklikleriyle site taşıma](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), [Vercel yönlendirme yapılandırması](https://vercel.com/docs/project-configuration/vercel-json#redirects).
