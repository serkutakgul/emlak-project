# emlak-project
EMLAK OTOMASYONU
1.Özet
Bu projede kullanıcının sisteme emlak dükkanı, müşteri ve gayrimenkul kaydetmesi ve listelenmesi işlemleri yapılmıştır.
2.Giriş
Projede arka yüzde Spring Boot, ön yüzde React framework'leri kullanıldı. Veritabanı olarak PostgreSQL kullanıldı. Veritabanı bağlantısı application.properties dosyasında PostgreSQL için tanımlandı ve pgAdmin4 aracı ile veritabanı yönetimi sağlandı.
Arka yüzde  klasik olan MVC mimari dizaynı kullanıldı."model",  "controler", "service" ve "repository" 4 package oluşturuldu. "model" packagendaki sınıflar :"Emlak", "IsYeri","MulkSahibi". Emlak ve MulkSahibi sınıflarında @OneToMany ve @ManyToOne anotasyonları kullanılarak veritabanıyla uyumlu olarak ilişkilendirildi. Veritabanı okuma-yazma işlemleri Spring Data JPA katmanı ile sağlandı.

Veri tabanı tablo isimleri "emlak","mulk_sahibi","is_yeri". "emlak" tablosundaki "sahip_id" "mulk_sahibi" tablosunun "id"'sinin foreign key'idir.
Http request işlemleri Postman uygulaması kullanılarak yapıldı.
3.Gereksinimler
-Emlak işletmesinin kaydı alınır
-Müşteri kaydı alınır
-Yeni gayrimenkul eklenir.
-Gayrimenkul araması yapılır.

