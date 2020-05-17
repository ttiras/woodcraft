import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

import "./documents.css";

export default function Guvenlik({ location }) {
  const { pathname } = location;
  return (
    <Fragment>
      <MetaTags>
        <title>Micota | KVKK</title>
        <meta
          name='description'
          content='About page of flone react minimalist eCommerce template.'
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
        Anasayfa
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        KVKK
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        <Breadcrumb />
        <div className='container mt-5'>
          <div className='welcome-content text-center'>
            <h5>KİŞİSEL VERİLERİN KORUNMASI KANUNU HAKKINDA BİLGİLENDİRME</h5>
            <h1 className='mt-3'>KVKK</h1>
            <div className='text-left'>
              <p className='w-100'>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”)
                uyarınca, MICOTA olarak, Veri Sorumlusu sıfatıyla, kişisel
                bilgileriniz aşağıda açıklandığı çerçevede; işlenebilecektir.
                Kişisel verilerin işlenme amaçları ve hukuki sebepleri; Kişisel
                Verileriniz hukuka ve iyi niyete uygun olarak belirli, açık ve
                meşru amaçlar için sınırlı, ölçülü ve amaç için gerekli şekilde
                işlenmektedir.{" "}
              </p>
              <p className='w-100'>
                Vergi Usul Kanunu çerçevesinde aldığınız mal ve hizmete karşılık
                fatura düzenlemek, Elektronik Ticaretin Düzenlenmesi hakkındaki
                Kanun çerçevesinde elektronik ileti ile reklam promosyon
                kampanyalarla ilgili bilgilendirme yapmak, sizlere daha kaliteli
                ürün ve hizmet sunabilmek için alışveriş detaylarınız yasal
                sınırlar içerisinde gerekli mevzuatlar ve şirket işleyişinin
                zorunlu kıldığı sebeplerle işlenmektedir.
              </p>
              <p className='w-100'>
                Kişisel Verilerin Aktarılması : Kişisel Verileriniz, yasal
                olarak aktarılması gereken idari ve resmi makamlara, hukuki
                zorunluluklar sebebiyle ve yasal sınırlar çerçevesinde kişisel
                verileriniz grup şirketlerimiz, faaliyetlerimizi yürütmek üzere
                hizmet aldığımız, işbirliği yaptığımız yurtiçi ya da yurtdışında
                mukim iş ortaklarımız, hizmet alınan yurt içi ve yurtdışı üçüncü
                kişilere aktarılabilecektir.
              </p>
              <p className='w-100 '>
                Kişisel Verilerinizin Toplanma Yöntemi: Kişisel verileriniz,
                mağaza müşterisi olmanız sebebiyle muhasebe kayıtlarının
                tutulması, alışveriş geçmişi oluşturmak ve taleplerinize uygun
                hizmet sunabilmek için tarafınızdan temin edilerek ilgili
                mevzuat uyarınca saklanmaktadır.{" "}
              </p>
              <p className='w-100'>
                KVKK’nın 11. maddesi gereği uyarınca haklarınız; Tarafımıza
                başvurarak, kişisel verilerinizin; a) işlenip işlenmediğini
                öğrenme, b) işlenmişse bilgi talep etme, c) işlenme amacını ve
                amacına uygun kullanılıp kullanılmadığını öğrenme, ç) yurt
                içinde/ yurt dışında aktarıldığı 3. kişileri bilme, d) eksik/
                yanlış işlenmişse düzeltilmesini isteme, e) KVKK’nın 7.
                maddesinde öngörülen şartlar çerçevesinde silinmesini / yok
                edilmesini isteme, f) aktarıldığı üçüncü kişilere yukarıda
                sayılan (d) ve (e) bentleri uyarınca yapılan işlemlerin
                bildirilmesini isteme, g) münhasıran otomatik sistemler ile
                analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya
                çıkmasına itiraz etme, ğ) kanuna aykırı olarak işlenmesi
                sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep
                etme hakkına sahipsiniz.
              </p>
              <p className='w-100'>
                rmişilgi akışının güvHaklarınızı kullanabilmek için Kişisel
                Verileri Micota Şirketleri tarafından işlenen Veri Sahipleri
                tarafından yapılacak şikâyetler, Micota Şirketleri tarafından en
                kısa süre içerisinde ve en geç 30 gün içerisinde
                cevaplandırılacak ve sonuçlandırılacaktır. Veri Sahibi, talep ve
                şikâyetlerini Micota Holding A.Ş. Şirketi Micota KVK Komitesi
                tarafından kimlik kontrolü yapılmak kaydıyla şahsen veya noter
                onaylı vekâlet sunulması kaydıyla vekaleten yapılan başvurular,
                noter kanalı ile yapılan başvurular ve güvenli elektronik imza
                kullanılmak kaydıyla kayıtlı elektronik posta adresleri ile
                KVKK@micota.com.tr adresine yapılabilecektir.{" "}
              </p>
              <h4>MICOTA AHŞAP ÜRÜNLERİ KVKK POLİTİKASI</h4>
              <h5>Güncellenme Tarihi: 19 Mayıs 2020</h5>
              <h4>GİRİŞ</h4>
              <p>
                İşbu Politika, Micota Holding A.Ş. ve bünyesindeki şirketler
                tarafından kişisel verilerin korunması ve hukuka uygun işlenmesi
                için benimsenecek ve içselleştirilecek idari yapı, süreç ve
                prosedürleri ifade etmektedir. İşbu Politika’nın amacı, kişisel
                verilerin güvenliği ve korunması hususunda gerekli teknik ve
                idari önlemleri alarak, kişisel verilerin 6698 Sayılı Kişisel
                Verilerin Korunması Kanunu’na (“KVKK” veya “Kanun”) uyumlu
                olarak işlenmesinin ve tutulmasının içselleştirilmesi ve
                çalışanlar ve tüm iş ortaklarında gerekli farkındalığın
                yaratılarak Kanun’a uyum sağlanmasıdır.
              </p>
              <p>
                Micota Şirketleri iş ve işlemleri süresince kişisel verilerin
                yasal gerekliliklere uygun olarak ele alınması ve uygunluğun
                sağlanması amacıyla hem kendi içinde hem de mümkün olduğu sürece
                Micota Şirketleri’nin verileri dahil bunlar tarafından sağlanan
                verileri işleyen üçüncü kişiler tarafından makul adımların
                atılmasını sağlama sorumluluğu altındadır. Bu sorumluluğunun
                bilincinde olan Micota, bu konuda yetkin idari ve hukuki
                görüşler almakta ve verilerin Kanun’un gerekliliklerinin
                ötesinde güvenle korunması için gereken adımları uygulamaktadır.
              </p>
              <p>
                Bu kapsamda, mevcut uygulamalarına ilişkin de detaylı analiz
                çalışmaları gerçekleştirmiş ve analiz sonuçları çerçevesinde tüm
                süreçlerini Kanun’a ve kişisel verilerin korunmasına ilişkin tüm
                uluslararası düzenlemelere uygun hale getirmek üzere her tür
                idari ve teknik süreci başlatmıştır. İşbu Politika’da ifade
                edilen pek çok adım halihazırda Micota Şirketleri bünyesinde
                uygulanmakta olan sistemi yansıtmakta ve Kanun’un
                gerektirdikleri halihazırda Micota Şirketleri tarafından yerine
                getirilmektedir. Micota, Kanun ve kişisel verilerin korunmasına
                ilişkin başlattığı uyum çalışmasını, kişisel verilerin
                korunmasına ilişkin en üst düzey standartların belirlenmesi ve
                uygulanabilmesini sağlamak üzere iş yapış sürecinde bir
                iyileştirme fırsatı olarak görmektedir.
              </p>
              <p>
                İşbu Politika, Micota Şirketleri tarafından tutulan ve
                çalışanlarına, müşterilerine, tedarikçilerine ve diğer tüm
                bireylere ait kişisel verilerin hukuka uygun bir biçimde
                işlendiğinden, Kanun ve buna ait değişiklikler kapsamında
                öngörülen gereklilikler de dâhil olmak üzere, ilgili tüm yasal
                gerekliliklere uyulduğundan ve Micota Şirketleri’nin iç
                prosedürlerinin dürüstlük kurallarına ve hukuka uygunluğu
                sağlamak için periyodik olarak denetlendiğinden emin olmak için
                gerekli tüm adımların atılması amacıyla hazırlanmıştır.
              </p>
              <p>
                Micota Şirketleri tarafından bu Politika’ya tam bir uyum ile
                hareket edilecek olup tüm Micota Şirketleri bu Politika uyarınca
                denetlenecek ve uyum devamlılığı ile Micota ailesinin her bir
                ferdi bakımından içselleştirilmesi temin edilecektir.
              </p>
              <h4>TANIMLAR</h4>
              <p>Micota Ahşap Ürünleri Şirket olarak anılacaktır.</p>
              <p>
                Veri: Elektronik olarak bilgisayarda ya da bir takım kâğıt bazlı
                dosyalama sistemlerinde saklanan bilgileri ifade etmektedir.
                Kişisel Veri: Kimliği belirli veya belirlenebilir gerçek kişiye
                ilişkin her türlü bilgiyi ifade etmektedir. Micota Şirketleri,
                müşteri tercihlerini anlamak ve daha iyi hizmet vermek ve
                benzeri amaçlar ile internet siteleri aracılığıyla, genel olarak
                “web kayıt bilgisi" adı verilen verileri (kullanıcıların
                internet tarayıcılarına, mobil cihazlarına, işletim sistemine,
                ziyaret ettiği sayfalara, bu sayfalara eriştiği diğer internet
                sayfalarına, ilgili internet sitesini ziyaret ettiği tarih ve
                zamana, ziyaret edilen spesifik sayfalara ve daha fazlasına ait
                bilgiler ve benzerlerini) toplayabilir ve internet sitesinde yer
                alan sayfaların ziyaret edilmesi halinde, çerezleri (cookies)
                kullanabilir. Bu kapsamda Kişisel Veri elde edilmesi ya da bu
                yol ile toplanan verilerin birlikte işlenmesi halinde belirli
                bir kişiye işaret etmeleri durumunda, çerezler ve web kayıt
                bilgileri de işbu Politika’ya tabi olacaktır.{" "}
              </p>
              <p>
                Özel Nitelikli / Hassas Kişisel Veri: Irka, etnik kökene, siyasi
                düşüncelere, felsefi inanca, dine, mezhebe veya diğer inançlara,
                kılık ve kıyafete, dernek, vakıf ya da sendika üyeliklerine,
                sağlığa, cinsel hayata, ceza mahkûmiyeti ve güvenlik
                tedbirlerine ve biyometrik verilere ilişkin verileri ifade
                etmektedir. Hassas veriler sadece sıkı şartlar altında
                işlenebilirler ve işlenmesi genellikle veri sahibinin açık
                rızasını gerektirmektedir.
              </p>
              <p>
                Veri İlgilisi veya Sahipleri: Kişisel Verileri Micota tarafından
                işlenen çalışanlar dahil tüm gerçek kişileri kapsamaktadır. Veri
                sahibi Türk vatandaşı olmak ya da Türkiye’de ikamet etmek
                zorunda değildir. Tüm veri sahipleri, kendi kişisel verilerine
                ilişkin yasal haklara sahiptir.
              </p>
              <p>
                Veri Sorumlusu: Kişisel verilerin işleme amaçlarını ve
                vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve
                yönetilmesinden sorumlu olan gerçek veya tüzel kişiyi ifade
                etmektedir. Bu kişilerin, Kanun’a uygun olarak uygulamalar ve
                ilkeler belirlemek yönünde sorumlulukları vardır. Micota’nun iş
                süreçlerinde kullanılan tüm kişisel verilere ilişkin veri
                sorumlusu ilgili Micota Şirketi ve Micota olmaktadır.
              </p>
              <p>
                Veri İşleyen: Bir veri sorumlusu tarafından verilen yetkiye
                dayanarak ve onun adına veri işleyen herhangi bir kişidir. Veri
                sorumlusunun çalışanlar bu tanımın dışındadır, ancak
                uygulanabilir olması halinde, Micota adına kişisel veri işleyen
                tedarikçiler, iş ortakları ve diğer üçüncü kişiler bu tanıma
                dahil edilebilir.
              </p>
              <p>
                Veri İşleme / İşleme: Veri kullanımına ilişkin her türlü
                aktiviteyi kapsamaktadır. Verinin elde edilmesi, kaydedilmesi ya
                da tutulmasını, ya da veriyi düzenlenme, değiştirme, geri alma,
                kullanma, açıklama, silme ya da yok etme de dâhil olmak üzere
                veri üzerinde yürütülen bir veya bir takım işlemleri içerir.
                Verinin üçüncü kişilere aktarılması da verinin işlenmesi
                anlamına gelmektedir.
              </p>
              <h4>POLİTİKANIN AMACI </h4>
              <p>
                İşbu Politika ile amaçlanan, Micota Şirketleri tarafından
                Kanun’a uyum için gerekli düzenlemelerin her bir Micota Şirketi
                bünyesinde benimsenmesinin sağlanması, uygulanacak politikaların
                düzenlenmesi ve iştirakler arasında bir birliğin
                oluşturulmasıdır. Bu bağlamda Politika, Kanun ve ilgili mevzuat
                tarafından konulan kuralların Micota Şirketleri tarafından nasıl
                uygulandığına / uygulayacağına ilişkin temel ve tüm iş birimleri
                için geçerli kurallar ve ilkelerin belirlenmesini amaç
                edinmektedir. Micota Şirketleri, tüm iç süreçlerini Politika’ya
                uygun hale getirecektir.
              </p>
              <p>
                Politika’ya uyum için gerekli düzenlemeleri yapacak ve belirli
                aralıklara Politika’ya uyum konusunda, denetim mekanizmalarını
                işleterek Politika’ya uyumun devamlılığını sağlayacaklardır. Tüm
                çalışanlarının Politika’ya uyumunu teyit edecek ve değişiklikler
                hakkında tüm ilgililerin bilgilendirilmesini temin edecektir.
                Değişen ve yenilenen süreçlere, en kısa sürede uyum gösterilmesi
                için şirket içi eğitimler düzenlenecek ve tüm çalışanlar
                nezdinde tüm sürecin Kanun’a uygun yürütülmesinden sorumlu
                olacaktır. Bu Politika ile Micota Şirketleri’nin Kanun ve ilgi
                mevzuat kapsamında gerekli idari yapı, süreç ve prosedürlerin
                oluşturulup, Kişisel Verilerin güvenliği ve korunması hususunda
                gerekli teknik ve idari önlemlerin alınması sağlanarak, Kişisel
                Verilerin Kanun’a uyumlu şekilde işlenmesinin ve tutulmasının
                içselleştirilmesi, çalışanlar ve tüm iş ortaklarında gerekli
                farkındalığın yaratılarak, Kanun’a uyum sağlaması
                amaçlanmaktadır.
              </p>
              <h4>A. KİŞİSEL VERİLERİN İŞLENMESİNE İLİŞKİN İLKELER </h4>
              <p>
                Micota bakımından önem arz eden hususlardan biri, Kişisel
                Verilerin Kanun ve ilgili mevzuatta öngörülen genel ilkelere
                uygun olarak işlenmesidir. Bu kapsamda, Micota Şirketleri
                tarafından Kişisel Veriler; Hukuka ve iyi niyete uygun olarak
                işlenmelidir: Bu ilkenin amacı Kişisel Verinin işlenmesi önlemek
                değil, Kişisel Verilerin işlenmesinin dürüstlük kurallarına ve
                hukuka uygun, Veri İlgisinin haklarını olumsuz şekilde
                etkilemeyecek şekilde yapıldığından emin olmaktır. Veri
                Sahibine, Veri Sorumlusunun kim olduğu, verinin Micota
                tarafından hangi amaçla işleneceği, verinin açıklanabileceği
                veya aktarılabileceği kişilerin kimliği ve bu veri sahibinin
                hakları söylenmelidir. Kişisel Verinin hukuka uygun olarak
                işlenebilmesi için bir takım şartların sağlanması gerekir.
                Bunlar, diğerlerinin yanı sıra, Veri Sahibinin Kişisel
                Verilerinin işlenmesine rıza göstermiş olması ya da işlemenin
                Veri Sorumlusunun veya verinin açıklandığı üçüncü kişinin meşru
                menfaati kapsamında gerekli olması gibi gereklilikleri
                içerebilir. Bazı durumlarda Veri Sahibinin ilgili verinin
                işlenmesine ilişkin açık onay vermesi gerekebilir. Kişisel
                Veriler, Veri Sahibinin açık rızası halinde İşleme hariç olarak,
                ancak işlemenin kanunlarda açıkça öngörülmüş olması; fiili
                imkansızlık nedeniyle rızasını açıklayamayacak durumunda bulunan
                veya rızasına hukuki geçerlilik tanınmayan kişinin kendisinin ya
                da bir başkasının hayatı veya beden bütünlüğünün korunması için
                zorunlu olması; bir sözleşmenin kurulması veya ifasıyla doğrudan
                doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait
                kişisel verilerin işlenmesinin gerekli olması; işlemenin veri
                sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için
                zorunlu olması; işlenen verinin ilgili kişinin kendisi
                tarafından alenileştirilmiş olması; işlemenin bir hakkın tesisi,
                kullanılması veya korunması için zorunlu olması; ilgili kişinin
                temel hak ve özgürlüklerine zarar vermemek kaydıyla, işlemenin
                veri sorumlusunun meşru menfaatleri için zorunlu olması
                hallerinden birinin varlığı halinde işlenecektir.
              </p>
              <p>
                Ancak Kişisel Verilerin işlenmesine ilişkin burada sınırlı
                olarak sayılan istisnalar kapsamında işlenen verilerin Veri
                İlgililerine, Kanun’un 16. Maddesi uyarınca öngörülen Aydınlatma
                Yükümlülüğü’nü kapsayacak şekilde bilgilendirme yapılacak, söz
                konusu bilgilendirme ile Kişisel Verilerin Micota Şirketleri
                tarafından işbu Politika uyarınca işlendiği konusunda bilgi
                verilecek ve verilerin Kanun, ilgili mevzuat ve işbu Politika’ya
                uygun olarak işlendiği teyit edilecektir. Micota, bu çerçevede,
                Kanun’daki düzenlemelere uyum için gerekli süreçleri
                oluşturacaktır.
              </p>
              <p>
                Belirli, açık ve meşru amaçlar için işlenmelidir: Kişisel Veri,
                verinin ilk toplandığı sırada Veri Sahibine bildirilen belirli
                amaçlar çerçevesinde ya da Kanun tarafından özellikle izin
                verilen herhangi başka bir amaçla işlenebilir. Bu, Kişisel
                Verinin belirli bir amaç için toplanıp, sonradan başka bir amaç
                için kullanılamayacağı anlamına gelir. Eğer Kişisel Verinin
                işlenme amacının değiştirilmesi zorunlu hale gelirse, Kişisel
                Veri işlenmeden önce veri sahibinin söz konusu yeni işleme
                amacından haberdar edilmesi gerekir. Sınırlı, ölçülü ve amaç
                için gerekli şekilde işlenmelidir: Kişisel veri, sadece Veri
                Sahibine bildirilen belirli amacın gerektirdiği ölçüde
                toplanmalıdır.
              </p>
              <p>
                Bu amaç için gerekli olmayan herhangi bir verinin toplanmaması
                gerekir. Tüm çalışanlar gerekli olmayan kişisel verileri
                almaktan kaçınmalıdır. Tedarikçilerle/üçüncü kişilerle imzalanan
                sözleşmeler de bu kuralı yürürlüğe koyan mekanizmalar
                içermelidir. Doğru ve gerektiğinde güncel olmalıdır: Veri
                Sahiplerinin verilerini güncellemeleri için olanaklar tanınmalı
                ve bu olanaklar konusunda Veri Sahipleri bilgilendirilmelidir.
                Kişisel verilerin alınması sırasında, güncelleme süreçlerine
                ilişkin Veri Sahiplerine bilgi verilmelidir. Çalışanlar
                tarafından da belirli aralıklarla verilerin güncelliği teyit
                edilmeli ve güncel olmayan veya güncel olarak işlenmesinde yarar
                görülmeyen tüm veriler, güncellenme imkanı söz konusu değil ise
                silinmeli ya da anonim hale getirilmelidir. İlgili mevzuat
                uyarınca öngörülmüş süreden ya da veri toplama amacının zorunlu
                kıldığı süreden fazla tutulmamalı / saklanmamalı ve
                arşivlenmemelidir: Kişisel Veri, amacın gerektirdiğinden daha
                uzun süre tutulmamalıdır. Başka bir deyişle, kişisel verilerin
                işlenmesi artık gerekli olmadığında veya ihtiyaç kalmadığında,
                kişisel veriler yok edilmeli ya da Micota sistemlerinden
                silinmelidir veya anonim hale getirilmelidir.
              </p>
              <p>
                Kişisel Verinin gelecekte kullanılması gerekebileceği varsayımı
                ile saklanmaması ve arşivlenmemesi gerekmektedir. Her bir iş
                birimi, farklı türdeki Kişisel Verilerin işlenmesi için gerekli
                süreyi değerlendirmeli ve gerekli sürenin ne kadar olduğunu
                yazılı şekilde belirlemelidir. Bu süre, işlemenin amacı
                gereğince iş biriminin veriyi tutmasını gerektiren süreyi
                aşmamalıdır. Kişisel Verilerin saklanması, silinmesi, yok
                edilmesi ve anonim hale getirilmesine ilişkin politikalara
                ilişkin ( E) başlığına bakınız. Veri Sahibinin haklarıyla uyumlu
                olarak işlenmelidir: Veri Sahibini haklarına ve hukuki başvuru
                yollarına ilişkin (C) başlığına bakınız. Güvende tutulmalıdır:
                Veri Güvenliğine ilişkin Micota politikalarının detaylarına
                ilişkin (D) başlığına bakınız. Yeterli korumaya sahip olmayan
                ülkelerde bulunan kişilere ya da organizasyonlara
                aktarılmamalıdır: Micota Şirketleri tarafından Kişisel Veriler,
                yurtdışına aktarılmamaktadır.
              </p>
              <p>
                Arşivleme amacı ile Kişisel Verilerin tutulduğu, üçüncü
                kişilerin mülkiyetindeki serverlar dahi Türkiye’de yer almakta
                ve güncel durumda verilerin yurtdışına aktarımı söz konusu
                olmamaktadır. Ancak, Şirket politikaları gereği Kişisel
                Verilerin yurtdışına aktarılması veya yurtdışındaki serverlarda
                tutulmasının kararlaştırılması halinde, ancak KVKK hükümlerine
                uygun şekilde ve Kişisel Verileri Koruma Kurulu’nun (“Kurul”)
                belirleyeceği kurallar çerçevesinde yurt dışına aktarılacaktır.
                Kişisel Verilerin üçüncü kişilere aktarımına ilişkin (D)
                başlığına bakınız.
              </p>
              <h4>B. KİŞİSEL VERİ SAHİBİNİN HAKLARI </h4>
              <p>
                Kişisel Veri Sahipleri, Kanun’un 11. Maddesinde düzenlenen,
                Kişisel Verisinin işlenip işlenmediğini öğrenme, Kişisel Veri
                işlenmişse, buna ilişkin bilgi talep etme, Kişisel Veri işleme
                amacını ve verilerin amaca uygun kullanılıp kullanılmadığını
                öğrenme, Kişisel Verilerin aktarıldığı üçüncü kişileri öğrenme
                ve Kişisel Veriler eksik ya da yanlış işlenmişse bunların
                düzeltilmesini isteme ve bunun Kişisel Verilerin aktarıldığı
                üçüncü kişilere bildirilmesini talep etme hakları ile Kişisel
                Verilerin Kanun’a aykırı işlenmesi sebebiyle zarara uğranması
                durumunda tazminat talep etme haklarını haiz olup Micota
                Şirketleri tarafından Veri Sahibinin talebi üzerine bu hakların
                yerine getirilmesi konusunda en kısa süre içerisinde aksiyon
                alınacak ve Veri Sahibine taleplerine ilişkin prosedür ile
                ilgili detaylı bilgi verilecektir.
              </p>
              <h4>C. KİŞİSEL VERİLERİN GÜVENLİĞİ</h4>
              <p>
                Micota Şirketleri, Kişisel Verilerin hukuka aykırı işlenmesini
                önlemek, Kişisel Verilere hukuka aykırı olarak erişilmesini
                önlemek ve Kişisel Verilerin muhafazasını sağlamak amaçlarıyla
                uygun güvenlik düzeyini temin etmeye yönelik gerekli her türlü
                teknik ve idari tedbirleri almakla yükümlüdür. Micota, hukuka
                aykırı ya da yetkisiz Kişisel Veri işlenmesine veya Kişisel
                Verinin bir kaza sonucu kaybı ya da zarar görmesine karşı uygun
                güvenlik önlemlerinin alındığından emin olmalıdır. Bu tür
                zararlara uğramaları durumunda Veri Sahipleri, dava yolu ile
                tazminat talebinde bulunabilecektir. Kanun, Kişisel Verilerin
                toplanma anından yok edilme anına kadar güvenliğinin
                sağlanabilmesi için, Micota’nun bir takım idari ve teknik
                önlemler almasını zorunlu kılmaktadır. Veri güvenliğinin
                sağlanması, aşağıda tanımlandığı üzere, kişisel verinin
                gizliliğinin, bütünlüğünün ve erişiminin garanti altına alınması
                anlamına gelmektedir. Gizlilik, sadece veriyi kullanmaya yetkili
                kişilerin veriye erişmesi anlamına gelmektedir. Bütünlük,
                kişisel verinin doğru olması ve işlenme amacına uygun olması
                anlamına gelmektedir. Erişim, yetkili kullanıcıların,
                yetkilendirilmiş oldukları amaç çerçevesinde ihtiyaç duymaları
                halinde, veriye erişebilmeleri anlamına gelmektedir. Kişisel
                Verilere ilişkin güvenlik prosedürleri, veri güvenliğine ilişkin
                teknik anlamda yetkin Micota bünyesindeki Bilişim Teknolojileri
                (“BT”, “IT”) birimine danışılarak yürürlüğe konacaktır.
              </p>
              <p>
                Micota Şirketleri’nin halihazırdaki uygulamalarına uyumlu olarak
                her bir iş biriminin erişim yetkileri, ilgili iş birimi
                bakımından gerektiği ölçüde sınırlandırılacaktır. İlgili
                sınırlandırmalar, Micota Şirketleri nezdinde halihazırda
                uygulanmaktadır ve bu sınırlandırmalar düzenli aralıklarla
                gözden geçirilecek ve Kişisel Verilere erişim yalnızca zorunlu
                olduğu ölçüde söz konusu olabilecektir. Micota Şirketleri’nin
                tüm çalışanları, veri güvenliğine ilişkin belirlenecek
                prosedürler çerçevesinde bilgilendirilecek ve eğitilecektir. Bu
                kapsamda, Kişisel Verilere erişmek üzerine şifre ile giriş
                yapılan sistemlere ilişkin şifreler, herhangi bir üçüncü kişiye
                veya yetkisiz çalışana açıklanmayacaktır. Kişisel Verilere
                erişme yetkisi verilen kullanıcılar, uygulanabilir olması
                durumunda, bireysel ekranlarının yakınından geçenlere gizli
                bilgilerin gösterilmediğinden ve ekranlarının başında
                olmadıkları zaman bilgisayar oturumlarını kapattıklarından emin
                olacaktır.
              </p>
              <p>
                Micota Şirketleri nezdinde tutulan Kişisel Veriler dahil tüm
                verilerin güvenliği için gereken teknik önlemler halihazırda
                alınmakta olup Micota Şirketleri tarafından mevcut güvenlik
                sistemleri, virüs koruma programları ve ileti gönderilerine
                ilişkin koruma sistemleri periyodik olarak denetlenecek ve tüm
                bu sistemlerin en güncel sürümleri yürürlüğe konulacaktır. Bu
                konuda, teknolojik gelişmeler takip edilecek ve ortaya
                çıkabilecek risklere en kısa sürede müdahale edecek teknik ekip
                ve sistem tahsis edilecektir. Yukarıdakilere ek olarak, tüm
                Micota çalışanları, işlenen Kişisel Verilerin kanuni olmayan
                yollarla başkaları tarafından elde edilmesi ve/veya Kişisel
                Verilerin güvenliğine ilişkin herhangi bir riskin söz konusu
                olması hâlinde derhal , gereken önlemlerin koordinasyonu ve
                uygulanabilir olması halinde bu durumun en kısa sürede ilgili
                Veri Sahibine ve Kurula bildirilmesi için [Micota KVK Komitesi]
                birimine bilgi verecektir.
              </p>
              <p>
                Uygulanabilir olması halinde, Kişisel Verilerin hukuka uygun
                olarak aktarıldığı mevcut üçüncü kişiler ile yapılan
                sözleşmeler, halihazırdaki gizlilik yükümlülüklerine ek olarak,
                Kişisel Verilerin aktarıldığı kişilerin, Kişisel Verilerin
                korunması amacıyla gerekli güvenlik tedbirlerini alacağını ve
                kendi işletmelerinde / kurumlarında / kuruluşlarında bu
                tedbirlere uyulmasını sağlayacağını temin etmek üzere
                değiştirilmektedir. Micota’nun gerektirdiği güvenlik önlemlerini
                sağlamayan ve verilerin gizliliği, bütünlüğü ve erişimine
                ilişkin Kanun’un gerekliliklerini yerine getirmeyen üçüncü
                kişilere hiçbir surette Kişisel Veri aktarılmayacaktır.
              </p>
              <h4>D. KİŞİSEL VERİLERİN ÜÇÜNCÜ KİŞİLERE AKTARILMASI</h4>
              <p>
                Kişisel Verilerin yurtiçindeki üçüncü kişilere aktarılabilmesi,
                Kişisel Verilerin işlenme amaçları ile Veri Sahipleri ile
                akdedilen sözleşmelerin ifası için zorunlu olması ve Şirketin
                meşru menfaatleri gerektirdiği ölçüde Kanun’un öngördüğü
                şartlara uygun olarak gerçekleştirilmektedir. Kişisel Verilerin
                işlenme amaçları dışında başka bir amaçla veri aktarımı
                yapılmamaktadır. Ancak her ne kadar İşlemenin, rıza alınmasını
                gerektiren istisnaları kapsamında değerlendirilse de elde
                edilecek olan yeni Veri Sahiplerinin Kişisel Verilerinin Micota
                Şirketleri’nin kendi aralarında ve Micota’nun gerektirdiği
                güvenlik önlemlerini alan iş ortaklarına aktarılması için ilgili
                Veri Sahibinin açık rızasının alınması sağlanacaktır. Micota
                Şirketleri, iş ortaklarının seçiminde kişisel verilerin
                gizliliğine ilişkin hususlarda ön inceleme yapacak ve onlarla
                yapacağı sözleşmelerde Kişisel Verilerin güvenliği ve
                gizliliğine ilişkin Kanun’un gerekliliklerini tatmin edecek
                hükümlere yer verilmesini sağlayacaktır. Micota Şirketleri
                tarafından Kişisel Veriler, yurtdışına aktarılmamaktadır.
              </p>
              <p>
                Arşivleme amacı ile Kişisel Verilerin tutulduğu, üçüncü
                kişilerin mülkiyetindeki serverlar dahi Türkiye’de yer almakta
                ve güncel durumda verilerin yurtdışına aktarımı söz konusu
                olmamaktadır. Ancak, Şirket politikaları gereği Kişisel
                Verilerin yurtdışına aktarılması veya yurtdışındaki serverlarda
                tutulmasının kararlaştırılması halinde, alınmamış ise Veri
                İlgilisinin ilgili Micota Şirketi tarafından açık rızası
                alınacak ve veri, kural olarak, Kurul’un belirleyeceği yeterli
                korumanın bulunduğu ülkelerden dışında bir ülkeye
                aktarılmayacaktır.
              </p>
              <p>
                Kişisel Veriler, uygulanabilir olması durumunda, ancak Micota ve
                ilgili ülkede veri sorumlusu olacak gerçek ve/veya tüzel kişi
                tarafından yeterli korumanın bulunduğu yazılı olarak taahhüt
                edilmek ve Kurul’un veri transferine izni alınmak kaydıyla
                yeterli korumanın olmadığı yabancı ülkelere de
                aktarılabilecektir. Bu bağlamda, Micota tarafından Kanun’un 8.
                ve 9. Maddesinde öngörülen düzenlemelere uygun hareket etmeye
                yönelik gerekli süreçler tasarlanacaktır. İşbu Politika’yı
                onaylayan Veri Sahipleri, işbu Politika’da belirtilen hususlara
                tabi olmak üzere, Kişisel Verilerinin, işlenmesinin gerektirdiği
                amaçlar ve arşivleme amacı ile sınırlı olarak, kanun ve yargı
                kararları ile idari kararlar dâhil kamu kurum ve kuruluşlarının
                ilgili mevzuatta düzenlenen hakları çerçevesinde bilgi ve belge
                talep ettiği hallerde Kişisel Verilerin aktarılabileceği
                istisnası saklı kalmak kaydıyla, Micota Şirketleri arasında ve /
                veya üçüncü kişi iş ortakları, hizmet / destek / danışmanlık
                alınan ya da işbirliği yapılan ya da proje / program / finansman
                ortağı olunan kamu / özel kurum ve kuruluşlar, tedarikçiler,
                Micota Şirketlerinin ortakları, şirket yetkilileri, bankalar,
                fonlar, şirketler ve sair 3. kişi ya da kuruluşlar ile
                paylaşılmasına açık şekilde rıza göstermektedir.
              </p>
              <p>
                Micota Şirketlerinin faaliyetlerinin şirketler topluluğumuzun
                ilke, operasyon, süreç, hedef ve stratejilerine uygun olarak
                yürütülmesi, Micota’nun hak ve menfaatleri ile itibarının
                korunması amacıyla gerekli görülmesi halinde, kişisel verilerin,
                Micota Şirketleri veya iş ortakları tarafından ve şirketler
                topluluğumuzun hâkim şirketi tarafından işlenebilmesi,
                grubumuzun meşru menfaati kapsamındadır. Bu durum, Kişisel
                Verilerin, Kanun’a aykırı şekilde işlenmesi anlamına gelmeyecek
                olup tüm Micota Şirketleri, Kanun’a en üst derecede uyum
                gösterecek şekilde süreçlerini yönetmektedir. Micota Şirketleri,
                tüm Veri İlgililerine bu duruma ilişkin aydınlatma yükümlülüğünü
                yerine getirecek ve veri aktarımına ilişkin Veri İlgililerinin
                yazılı rızalarını alacaktır.
              </p>
              <h4>
                E. KİŞİSEL VERİLERİN SİLİNMESİ, YOK EDİLMESİ VE
                ANONİMLEŞTİRİLMESİ PROSEDÜRLERİ
              </h4>
              <p>
                Kişisel Verilerin Silinmesi ve Yok Edilmesi Prosedürü Micota
                Şirketleri, Kanun’a uygun şekilde, işlenmesini gerektiren
                sebeplerin ortadan kalkması hâlinde, ilgili kanun ve mevzuatta
                öngörülen asgari saklama sürelerine riayet etmek koşulu ile
                Kişisel Verileri re’sen veya ilgili kişinin talebi üzerine
                silecek veya yok edecektir. Silme veya yok etme sırasında
                kullanılan teknikler; Fiziksel Olarak Yok Edilebilir Kişisel
                veriler herhangi bir veri kayıt sisteminin parçası olmak
                kaydıyla otomatik olmayan yollarla da işlenebilmektedir. Bu tür
                veriler silinirken/yok edilirken kişisel verinin sonradan
                kullanılamayacak biçimde fiziksel olarak yok edilmesi sistemi
                uygulanmaktadır. Yazılımdan Güvenli Olarak Silinebilir Tamamen
                veya kısmen otomatik olan yollarla işlenen ve dijital ortamlarda
                muhafaza edilen veriler silinirken/yok edilirken; bir daha
                kurtarılamayacak biçimde verinin ilgili yazılımdan silinmesine
                ilişkin yöntemler kullanılır. Kişisel Verileri Anonim Hale
                Getirme Prosedürü Kişisel verilerin anonimleştirilmesi, kişisel
                verilerin başka verilerle eşleştirilerek dahi hiçbir
                surettekimliği belirli veya belirlenebilir bir gerçek kişiyle
                ilişkilendirilemeyecek hâle getirilmesini ifade eder.
                Anonimleştirme için kullanılan Prosedürler Maskeleme (Masking)
                Veri maskeleme ile kişisel verinin temel belirleyici bilgisini
                veri seti içerisinden çıkartılarak kişisel verinin anonim hale
                getirilmesi yöntemidir. Toplulaştırma (Aggregation) Veri
                toplulaştırma yöntemi ile birçok veri toplulaştırılmakta ve
                kişisel veriler herhangi bir kişiyle ilişkilendirilemeyecek hale
                getirilmektedir. Veri Türetme (Data Derivation) Veri türetme
                yöntemi ile kişisel verinin içeriğinden daha genel bir içerik
                oluşturulmakta ve kişisel verinin herhangi bir kişiyle
                ilişkilendirilemeyecek hale getirilmesi sağlanmaktadır. Veri
                Karma (Data Shuffling, Permutation) Veri karma yöntemi ile
                kişisel veri seti içindeki değerlerinin karıştırılarak değerler
                ile kişiler arasındaki bağın kopartılması sağlanmaktadır.
                Kişisel Verilerin, silinmesi, yok edilmesi ve anonim hale
                getirilmesi için asgari süreler, ilgili Kişisel Veriyi işleyen
                iş birimi tarafından belirlenecek ve tüm Micota Şirketleri’nin
                sistemleri, bu süreçlere uygun hale getirilecektir. Yasal
                zorunluluklardan daha uzun süre veri saklanmasına ilişkin Micota
                Şirketlerinin Kişisel Veri işleme amaçları uyarınca bir karar
                alınması halinde, bu karar ve Kişisel Verilerinin ne kadar süre
                işleneceğine ilişkin Veri İlgililerine ayrıca bilgi
                verilecektir.
              </p>
              <p>
                Her halde, Micota Şirketleri, Kişisel Verilerin saklanmasına
                ilişkin prosedürlerine ve veri işleme amaçlarına ilişkin
                aydınlatma yükümlülüğüne uygun davranmak zorundadır. İlgili
                kanun ve mevzuat uyarınca saklanması için asgari sürelerin söz
                konusu olduğu verilere ilişkin bu sürelerin geçmesinden önce
                Veri İlgililerinden gelecek silme, yok etme veya anonim hale
                getirmeye ilişkin talepler, ilgili yasal zorunluluklar
                açıklanmak kaydıyla reddedilecektir. Kişisel verilerin
                saklanmasına ilişkin mevzuatta bir süre düzenlenmemişse, Kişisel
                Veriler Micota’nun veri işleme amacı uyarınca belirleyeceği,
                mevcut iş yapış, prosedür ve uygulamaları ve ticari yaşamının
                teamülleri uyarınca işlenmesini gerektiren süre kadar
                işlenmekte; daha sonra silinmekte, yok edilmekte veya anonim
                hale getirilmektedir. Kişisel verilerin işlenme amacı, ilgili
                mevzuat ve Micota Şirketleri’nin belirlediği süreler sona erse
                dahi, kişisel veriler olası hukuki uyuşmazlıklarda delil teşkil
                etmesi veya kişisel veriye bağlı ilgili hakkın ileri
                sürülebilmesi veya savunmanın tesis edilmesi amacıyla
                (güncellikleri teyit ve temin edilmeden) yeniden olağan
                işlenmeleri söz konusu olmamak kaydıyla arşivlenebilecektir.
              </p>
              <p>
                Arşivleme sürelerinin tespitinde zamanaşımı süreleri dikkate
                alınmakla beraber, Micota Şirketlerinin kendi tecrübeleri ve
                benzer veri gruplarına ilişkin önceki talepler ışığında
                zamanaşımı sürelerini aşan süreler belirlenmesi mümkün
                olabilecektir. Bu durumlarda, kişisel verilere (güncellikleri ve
                işlenmelerine ilişkin yeni bir açık rızanın alınması teyit ve
                temin edilmeden) hukuki uyuşmazlığın çözümü dışında herhangi bir
                başka amaçla erişilmeyecektir. Arşivleme için belirlenecek
                süreler sonunda, arşivlenmesine karar verilen veriler dahi
                silinecek, yok edilecek ve anonim hale getirilecektir. Micota
                Şirketleri tarafından işlenen başlıca Kişisel Veriler ve bu
                verilerin başlıca işleme amaçları aşağıdaki gibidir: Gerçek Kişi
                Müşteri Verileri Her Micota Şirketi için geçerli olmamakla
                beraber, gerçek kişi müşterilere ilişkin ad, soyad, adres,
                e-mail, cep tel, ev tel, iş tel, doğum tarihi, T.C. kimlik no,
                cinsiyet, sadakat kartı numarası, ebeveyn türü, medeni durum,
                meslek, evlilik tarihi, eş adı, eş doğum tarihi, eğitim durumu,
                okul adı, çocuk sayısı, üye olunan dernekler, takip edilen
                medya, sosyal medya, telefon markası, tuttuğu takım, araba
                markası, en sık girilen web sitesi, yurtiçi seyahat tercihi,
                yurtdışı seyahat tercihi, beden ölçüsü, ayakkabı ölçüsü,
                uygulanabilir olması halinde gelin-damat ad, soyadı, düğün ve
                davetlilere ilişkin veriler ve benzeri Kişisel Veriler
                işlenebilmektedir.
              </p>
              <p>
                Söz konusu Kişisel Veriler, işlenen her Kişisel Veriyi
                kapsamamakla beraber, satış tarihçesi oluşturmak, fatura
                oluşturmak, fatura kesmek, üyelik hesabına sadakat kartını
                tanımlamak, sadakat kartı veya basılı iletişim materyalleri
                iletmek, ürünü teslim etmek, e-fatura göndermek, newsletter
                göndermek, pazarlama iletişimi yapmak, müşteri analizi yapmak,
                müşteri sadakatini artırmak, özel üretim yapmak ve benzeri
                amaçlar ile sınırlı olarak işlenmektedir. Kurumsal Müşteriler,
                Tedarikçi ve Hizmet Sağlayıcıların Personellerine ve İmza
                Yetkililerine İlişkin Veriler Her Micota Şirketi için geçerli
                olmamakla beraber, kurumsal müşterilerin personelleri için
                yapılan özel dikimler kapsamında veya en genel anlamda kurumsal
                müşterilerin, tedarikçilerin ve hizmet sağlayıcıların imza
                yetkililerine ve şahıs firmalarına ilişkin personel adı,
                personel soyadı, personel sicil no, personel t.c. kimlik no,
                personel boyu, personel kilosu, personel cinsiyeti, personel
                bedeni; imzaya yetkili kişinin adı, soyadı, e-mail, T.C. kimlik
                no, banka bilgileri, şahıs firmalarına ilişkin diğer bilgiler ve
                benzeri Kişisel Veriler işlenebilmektedir. Söz konusu Kişisel
                Veriler, işlenen her Kişisel Veriyi kapsamamakla beraber, özel
                dikim kıyafet üretimi yapmak, toptan satış yapmak, satış
                tarihçesi oluşturmak, fatura oluşturmak, fatura kesmek, ürünü
                teslim etmek, e-fatura göndermek, newsletter göndermek,
                pazarlama iletişimi yapmak, müşteri analizi yapmak, cari hesap
                açmak, mutabakat yapmak, proje bazlı devlet teşviki almak ve
                benzeri amaçlar ile sınırlı olarak işlenmektedir. Bu kişilere
                Micota Şirketleri nezdinde işlenen verilerin aktarılması da söz
                konusu olabilmekte ve aktarma prosedürleri işbu Politika’nın (E)
                başlığı altında düzenlenmiştir. Potansiyel Müşteri Verileri Her
                Micota Şirketi için geçerli olmamakla beraber, Micota
                Şirketlerinin potansiyel müşterilerine ilişkin ad, soyad,
                e-mail, cinsiyet, cep tel, doğum tarihi, ev adresi, iş adresi,
                beden, evlilik tarihi ve benzeri Kişisel Veriler
                işlenebilmektedir. Söz konusu Kişisel Veriler, işlenen her
                Kişisel Veriyi kapsamamakla beraber, hediye göndermek, sadakat
                kartı göndermek, etkinlik davetiyesi göndermek, newsletter
                göndermek, pazarlama iletişimi yapmak, analiz yapmak, yeni çıkan
                ürün hakkında bilgilendirmek ve benzeri amaçlar ile sınırlı
                olarak işlenmektedir.
              </p>
              <p>
                Potansiyel müşterilere ilişkin veriler, söz konusu veriyi
                aktarmak konusunda verisinin Micota Şirketleri tarafından
                yukarıda belirtilen amaçlar çerçevesinde işlenebileceğine
                ilişkin bilgilendirilmek kaydıyla, ilgili potansiyel müşterinin
                ilgili verinin üçüncü kişilere aktarımına rızası dahilinde
                edinilmiş veriler olmaktadır. Potansiyel müşteriler ile ilk
                iletişimde, potansiyel müşteri, işbu Politika ve bu kapsamda
                işlenen verileri hakkında aydınlatma yükümlülüğü kapsamında
                bilgilendirilecek ve itiraz / şikayeti üzerine söz konusu
                Kişisel Veri derhal silinecek, yok edilecek ve anonim hale
                getirilecektir.
              </p>
              <p>
                Potansiyel müşteri ile müşteri ilişkisi kurulması halinde, bu
                kapsamda işlenen veriler de müşteri verilerine ilişkin
                prosedürlere tabi olacaktır. Çalışan Verileri Her Micota Şirketi
                için geçerli olmamakla beraber, Micota Şirketlerinin
                çalışanlarına ilişkin ad, soyad, doğum yeri, doğum tarihi, cep
                tel, e-mail, ikametgah adresi, ikametgahın durumu, ikamet edilen
                yapının yaşı, cinsiyet, maaş, medeni hali, eşinin adı, eşinin
                soyadı, eşinin iş durumu, mükellefle oturan veya mükellef
                tarafından bakılan çocukların durumu, çocuk sayısı, sicil no,
                t.c. kimlik no, sosyal güvenlik no, ayakkabı numarası, fotoğraf,
                acil durumda ulaşılacak kişinin adı soyadı, acil durumda
                ulaşılacak kişinin yakınlık derecesi, acil durumda ulaşılacak
                kişinin cep tel, eğitim bilgileri, özgeçmiş bilgileri, ikametgah
                belgesi, nüfus cüzdan sureti, diploma, çalışma belgesi, sabıka
                kaydı, kan grubu, askerlik belgesi, sağlık raporu, sigorta
                hizmet dökümü, SGK bildirge kaydı, iş sözleşmesi, not dökümü,
                referans mektubu, işe uyum anketi, performans formları, işten
                çıkış mülakat formu, mazeretli izin formu, yıllık izin formu,
                görev tanımları ve benzeri Kişisel Veriler işlenebilmektedir.
              </p>
              <p>
                Çalışanların sağlık verileri dâhil Özel Nitelikli Kişisel
                Verileri de, mevzuatın gerektirdiği ölçüde, İnsan Kaynakları iş
                birimi tarafından işlenebilmektedir. Özel Nitelikli Kişisel
                Verilerin işlenmesine ilişkin (G) başlığına bakınız. Ayrıca, bir
                takım sağlık verileri iş yeri hekimi ve iş güvenliği uzmanları
                tarafından işlenebilmektedir. İnsan Kaynakları ve işyeri hekimi
                tarafından işlenen sağlık verileri, 20 Ekim 2016 tarih ve 29863
                sayılı Resmi Gazete’de yayınlanan Kişisel Verilerin İşlenmesi ve
                Mahremiyetinin Sağlanması Hakkında Yönetmelik uyarınca
                işlenmekte ve ilgili birimler dahil hiçbir iş birimi ile
                paylaşılmamaktadır. Söz konusu verilere erişim en üst düzeyde
                sınırlıdır. Bu veri grubuna ilişkin arşivleme amacıyla üçüncü
                kişiler ile paylaşımlar şifreleme sistemleri ile korunacak /
                korunmaktadır ve arşiv firması dahil ilgili birimler dışında
                hiçbir kişinin sağlık verilerine erişimi söz konusu
                olmayacaktır. Üçüncü kişiler ile yapılan ilgili sözleşmeler, bu
                hususu teyit edecek şekilde revize edilecektir. İşyeri hekimi
                tarafından işlenen verilerin arşivleme amacı için dahi olsa
                hiçbir üçüncü kişi ile paylaşımı söz konusu değildir. İşyeri
                hekimi tarafından ilgili sağlık verileri, Kişisel Sağlık
                Verilerinin İşlenmesi ve Mahremiyetinin Sağlanması Hakkında
                Yönetmelik uyarınca Sağlık Bakanlığı’nın belirleyeceği
                standartlar çerçevesinde sağlık verilerini Sağlık Bakanlığı
                nezdindeki Merkezi Sağlık Veri Sistemi’ne aktarılması
                gerekecektir. Söz konusu Kişisel Veriler, işlenen her Kişisel
                Veriyi kapsamamakla beraber, personel kaydı açmak, atölyelerde
                performans ölçümü yapmak, personel maaşını ödemek, proje için
                devlet teşviki almak, işe giriş çıkış saatlerini kaydetmek,
                bilgi güncellemek, çalışanın sigorta bildirimini yapmak, analiz
                yapmak, çalışanın performansını değerlendirmek, çıkış
                değerlendirmesi yapmak, izin almak, avans talebi işletmek ve
                benzeri amaçlar ile sınırlı olarak çalışanların rızası ve
                muvafakati dahilinde işlenmektedir.
              </p>
              <p>
                Çalışan verilerinin işlenmesi ve çalışanların özlük dosyaları,
                tüm Micota Şirketleri adına, Micota Holding Anonim Şirketi
                bünyesindeki ortak İnsan Kaynakları birimi tarafından
                saklanmaktadır ve işlenmektedir. İnsan Kaynakları birimi
                tarafından işlenen veriler ile sınırlı olarak tüm çalışanlar,
                işbu Politika’nın kabul edilmesiyle mevcut sisteme ve Kişisel
                Verilerinin bordrosuna kayıtlı olduğu Micota Şirketi dışındaki
                bir Micota Şirketi’nin bünyesindeki İnsan Kaynakları birimi
                tarafından işlenmesine rıza göstermektedir. Çalışan Adayı
                Verileri Her Micota Şirketi için geçerli olmamakla beraber,
                Micota Şirketlerinde çalışmak için başvuran adaylara ilişkin ad,
                soyad, anne adı, baba adı, cinsiyet, doğum yeri, doğum tarihi,
                askerlik durumu, medeni hali, eş adı, eş soyadı, çocuk sayısı,
                ikametgah adresi, ev telefonu, iş telefonu, cep telefonu,
                e-mail, acil durumda ulaşılacak kişinin adı soyadı, acil durumda
                ulaşılacak kişinin yakınlık derecesi, acil durumda ulaşılacak
                kişinin cep telefonu, acil durumda ulaşılacak kişinin ev
                telefonu, acil durumda ulaşılacak kişinin iş telefonu, özgeçmiş
                bilgileri, eğitim bilgileri, yabancı dil düzeyi, katıldığı staj,
                kurs ve seminerler, iş tecrübesi, şahsi bilgiler, referans veren
                kişinin adı, referans veren kişinin soyadı, referans veren
                kişinin çalıştığı yer/görevi, referans veren kişinin cep
                telefonu ve benzeri Kişisel Veriler işlenebilmektedir. Söz
                konusu Kişisel Veriler, işlenen her Kişisel Veriyi kapsamamakla
                beraber, uygun çalışan adayını işe almak amacıyla sınırlı olarak
                işlenmektedir. Hizmet sözleşmesi ilişkisinin kurulması ile
                birlikte bu kapsamda işlenen veriler de çalışan verilerine
                ilişkin prosedür ve süreçlere tabi olacaktır. Öğrenci Verileri
                Micota’nun uluslararası moda okulu ESMOD ile birlikte moda
                sektörüne ilişkin eğitim verdiği birimi Micota ESMOD
                programlarına katılan öğrencilere ilişkin ad, soyad, telefon,
                e-mail, adres, T.C. kimlik no, ödemeyi yapacak kişinin adı,
                ödemeyi yapacak kişinin soyadı, fatura unvanı, fatura adresi,
                fatura için vergi dairesi ve no, en son mezun olunan okul, okul
                / sektör ve benzeri Kişisel Veriler işlenebilmektedir. Söz
                konusu verilerin işlenmesi, sözleşme ifası, sertifika
                düzenlenmesi için kamu otoriteleri nezdinde gereklilik ve/veya
                ilgili kişilerin rızası dahilinde gerçekleştiriliyor olup Micota
                tarafından aydınlatma yükümlülüğünün gereklilikleri yerine
                getirilecektir.
              </p>
              <p>
                Söz konusu Kişisel Veriler, işlenen her Kişisel Veriyi
                kapsamamakla beraber, eğitime kaydetmek, ESMOD ile sertifikasyon
                ve kayıt prosedürlerine ilişkin paylaşmak, eğitimin devamını
                sağlamak, eğitim sonunda eğitime ilişkin bilgi ve talepleri
                yerine getirmek ve benzeri amaçlar ile sınırlı olarak
                işlenmektedir. Ödeme Araçlarına İlişkin Veriler Her Micota
                Şirketi için geçerli olmamakla beraber, toptan satışlar ve
                Eğitim birimince sürdürülen faaliyetlere ilişkin mail order
                yöntemi ile ödeme gerçekleştirebilme olanağı tanınması için
                öğrencinin adı, öğrencinin soyadı, kart sahibinin adı, kart
                sahibinin soyadı, kart sahibinin T.C. kimlik numarası, banka adı
                ve kart türü ile kredi kartı bilgileri ve benzeri Kişisel
                Veriler işlenebilmektedir. Söz konusu Kişisel Veriler, ödeme
                amacıyla sınırlı olarak işlenmektedir.
              </p>
              <p>
                Bu verilerin güvenliğini temin etmek için gereken önlemler
                alınmaktadır ve bu verilere erişim yalnızca yetkili personel ile
                sınırlandırılacak, verilerin işlem güvenliğini de temin etmek
                amacıyla yeniden ve başka bir şekilde kullanılmasını
                engelleyecek (güvenlik kodunun kullanım sonrası silinmesi ve
                benzeri) mevcut uygulamalara devam edilmekle beraber güvenliği
                temin edecek daha ileri düzey prosedürler, mevcut olmaları
                halinde, uygulanmaya başlanacak ve gerektiğinde
                güncellenecektir. Dinleyici Verileri Temel olarak, Micota
                nezdinde müzik yayını yapan iş birimleri (Power, PowerFM,
                PowerTürk) için geçerli olmak üzere, dinleyiciler arasında
                düzenlenen yarışmalar ve analizler için gerçek kişilere ilişkin
                ad, soyad, telefon no, e-mail, adres, şehir, yaş, doğum tarihi,
                cinsiyet, meslek, kimlik bilgileri, eğitim durumu, cep telefonu,
                bu kişiler tarafından çekilen özçekimler hariç fotoğraf ve
                benzeri Kişisel Veriler işlenebilmektedir.
              </p>
              <p>
                Söz konusu Kişisel Veriler, yarışmalara katılım, hediye
                çeklerinin ve yarışma ödüllerinin gerçekleştirilmesi ile analiz
                yapılması ve benzeri amaçlar ile söz konusu verilerin
                işlenmesine ilişkin üçüncü kişiler ile çalışılması halinde,
                üçüncü kişiler ile paylaşımı da kapsayacak şekilde
                işlenmektedir. Üçüncü kişilere aktarım konusunda (E) başlığına
                bakınız.
              </p>
              <p>
                Şikayet Verileri Her Micota Şirketi için geçerli olmamakla
                beraber, 6502 sayılı Tüketicinin Korunması Hakkında Kanun
                uyarınca tüketici şikâyet ve taleplerinin yerine getirilmesine
                ilişkin olarak tüketicilerin ad, soyad, cinsiyet, e-mail, cep
                telefonu, ev telefonu, doğum tarihi, adres, beden, T.C. kimlik
                numarası ve benzeri Kişisel Veriler işlenebilmektedir. Söz
                konusu Kişisel Veriler, gelen şikayet ve taleplerin
                gerekliliklerinin yerine getirilmesi, analiz yapılması ve
                benzeri amaçlar için işlenmektedir.
              </p>
              <h4>F. ÖZEL NİTELİKLİ KİŞİSEL VERİLERİN İŞLENMESİ</h4>
              <p>
                Micota Şirketleri bünyesinde, Özel Nitelikli Kişisel Veriler,
                yalnızca kanuni ve idari / adli mercii gerekliliklerinin yerine
                getirilmesi ve Micota Şirketlerinin işleyişi ile doğrudan ilgili
                olmak kaydıyla ve erişimi en üst düzeyde sınırlı ve güvenli
                olacak şekilde işlenmektedir. Söz konusu veriler, Kanun’a tam
                bir uyum göstermek kaydıyla, (i) sağlık ve cinsel hayat
                dışındaki özel nitelikli kişisel veriler dışındaki veriler
                bakımından işlemenin kanunlarda açıkça öngörülmüş olması
                durumunda ve (ii) sağlık ve cinsel hayata ilişkin veriler
                bakımınsdan ise ancak, kamu sağlığının korunması, koruyucu
                hekimlik, tıbbî teşhis, tedavi ve bakım hizmetlerinin
                yürütülmesi, sağlık hizmetleri ile finansmanının planlanması ve
                yönetimi amacıyla, sır saklama yükümlülüğü altında bulunan
                kişiler veya yetkili kurum ve kuruluşlar tarafından işlenmesi
                durumunda Veri İlgilisi’nin rızası aranmaksızın işlenebilir.
                Ancak Micota Şirketleri, bu istisna koşulları oluşsa dahi Veri
                İlgililerine Özel Nitelikli Kişisel Verilerinin işlenmesine
                ilişkin aydınlatma yükümlüğünün gerekliliklerini yerine
                getirecek ve istisnaların olduğu durumlarda dahi Veri
                İlgilisinin açık rızasını alacaktır. İstisnaların söz konusu
                olmadığı veya uygulanabilir olduklarına ilişkin şüphe duyulması
                halinde ise, açık rıza olmadan alınan Özel Nitelikli Kişisel
                Veriler derhal silinecek, yok edilecek ve anonim hale
                getirilecektir. Bu tip durumlarda, derhal , gereken önlemlerin
                koordinasyonu ve uygulanabilir olması halinde bu durumun en kısa
                sürede ilgili Veri Sahibine ve Kurula bildirilmesi için [MICOTA
                KVK KOMİTESİ] birimine bilgi verilecektir.
              </p>
              <h4>G. KİŞİSEL VERİ İLGİLİSİNİ AYDINLATMA YÜKÜMLÜLÜĞÜ</h4>
              <p>
                Micota Şirketleri, Kişisel Verilerin elde edilmesi sırasında,
                verisi işlenecek olan gerçek kişileri bilgilendirmek ile
                yükümlüdür. Bu bilgilendirme yükümlülüğün kapsamı, aşağıdaki
                gibidir: Veri sorumlusunun ve varsa temsilcisinin kimliği,
                Kişisel Verilerin hangi amaçla işleneceği, İşlenen Kişisel
                Verilerin kimlere ve hangi amaçla aktarılabileceği, Kişisel Veri
                toplamanın yönetimi ve hukuki sebebi ile, Veri İlgilisinin (C)
                başlığı altında belirtilen hakları. Micota Şirketleri, bu
                konuda, sistemlerinde işlemek üzere Üçüncü Kişilerden veri elde
                etme araçları vasıtasıyla gerekli bilgilendirmeleri yapacak ve
                aydınlatma yükümlülüğünün gerçekleştirildiğinin ispatı için veri
                işlemeye ilişkin Veri Sahiplerinden aydınlatılmış onam
                alacaktır. Kişisel Veriler, Micota Şirketlerinin elektronik
                ticaret, perakende ve toptan satış mağazaları dahil tüm satış
                kanalları, şubeleri, internet siteleri, üçüncü kişilerden hizmet
                alınabilecek çağrı merkezi ve benzeri diğer tüm kanalları
                aracılığıyla otomatik ya da otomatik olmayan yollarla sözlü,
                yazılı veya elektronik olarak toplanabilecektir. Yazılı Şekilde
                Kişisel Veri Elde Edilmesi: Yazılı şekilde, Kişisel Veri elde
                edilmesi sırasında, işbu Politika’ya referans verilmek ve revize
                edilecek yeni ilgili form ve bilgilerin kullanılması kaydıyla
                verilerin işlenmesine ilişkin Aydınlatma Yükümlülüğü yerine
                getirilecektir. Ayrıca, müşteri ilişkisi kurulan kişilerden
                alınacak İzinli İletişim Formları dahil her tür form ve
                sözleşme, her ne kadar ilgili veri grubunun işlenmesi Kanun
                kapsamında istisna kapsamında değerlendirilebilse de, Kişisel
                Verilerin işlenmesine ilişkin Veri İlgilisinin açık rızasını
                gösterecek şekilde revize edilecektir.
              </p>
              <p>
                Müşteri ilişkilerinde, Kanun’a uyumu tevsik eder nitelikteki
                yeni formlar, belgeler ve bilgilendirmeler kullanılacak; tüm
                ilgili çalışanlar bu konuda gerçek kişiye yeterli düzeyde
                detaylı bilgiyi sağlamak ve referansları göstermek konusunda
                eğitilecektir. Mutlak surette, Kişisel Verilerin aydınlatılmış
                onamların yer aldığı yazılı formlar ile elde edilmesi temin
                edilecektir. Sözlü Şekilde Kişisel Veri Elde Edilmesi:
                Hâlihazırda alınan İzinli İletişim Formları uyarınca işlenen
                mevcut müşterilere ilişkin herhangi bir şekilde, mevcutta
                olmayan yeni bir veri elde edilmesi ve Çağrı Merkezi
                aracılığıyla veri elde edilmesi sırasında Kişisel Verilerin
                işlenmesine ilişkin aydınlatma yükümlülüğüne ilişkin bilgi
                verilecektir. Sözlü veri elde edilmesi sırasında, önceden bilgi
                verilmek kaydıyla görüşmenin kaydedildiği hatırlatılacak ve
                Kişisel Verilerinin işbu Politika ve var ise mevcut İzinli
                İletişim Formlarına dâhil olarak işleneceği konusunda onam
                verildiği teyit edilecektir.
              </p>
              <p>
                Çalışan ve Çağrı Merkezi, iş yapış süreçleri bu çerçevede
                yeniden değerlendirilecek ve uygulanacaktır. Elektronik Ortamda
                Kişisel Veri Elde Edilmesi: Elektronik ticaret kanalları ve
                Micota’nun diğer internet kanalları ile elde edilen veriler de
                işbu Politika dâhil olmak üzere, Kişisel Verilerin elde edilmesi
                ve işlenmesini gerektiren mesafeli satış sözleşmeleri dâhil tüm
                sözleşme ve belgeler / bağlantı adresleri / internet sayfaları
                Kişisel Verilerin işlenmesine ilişkin aydınlatma yükümlülüğünü
                yerine getirecek şekilde revize edilecektir. İşbu Politika tüm
                internet sayfalarından ulaşılabilecek şekilde, Micota
                Şirketlerinin tamamının internet sitelerinde yer alacak ve veri
                elde edilmesini gerektirebilecek her bağlantı adresinde veri
                elde edilmesi için Micota Şirketleri tarafından veri
                işlenmesinin onaylanmasını gerektiren sistemler kurulacaktır.
                Kişisel Verilerin işlenmesine onam verildiği açıkça
                işaretlenmedikçe, girilen hiçbir bilgi ve belge otomatik olarak
                hiçbir Micota Şirketi sistemine kaydedilmeyecek ve her ne
                şekilde olursa olsun işlenmeyecektir.
              </p>
              <h4>H. ŞİKÂYET SÜREÇLERİNE İLİŞKİN PROSEDÜRLER</h4>
              <p>
                Kişisel Verileri Micota Şirketleri tarafından işlenen Veri
                Sahipleri tarafından yapılacak şikâyetler, Micota Şirketleri
                tarafından en kısa süre içerisinde ve en geç 30 gün içerisinde
                cevaplandırılacak ve sonuçlandırılacaktır. Veri Sahibi, talep ve
                şikâyetlerini Micota Holding A.Ş. Şirketi Micota KVK Komitesi
                tarafından kimlik kontrolü yapılmak kaydıyla şahsen veya noter
                onaylı vekâlet sunulması kaydıyla vekaleten yapılan başvurular,
                noter kanalı ile yapılan başvurular ve güvenli elektronik imza
                kullanılmak kaydıyla kayıtlı elektronik posta adresleri ile
                KVKK@micota.com.tr adresine yapılabilecektir. E-posta ve telefon
                yoluyla gelen taleplerle ilgilenen tüm çalışanlar, Micota
                tarafından tutulan herhangi bir kişisel bilginin açıklanması
                konusunda dikkatli olmalıdır. Bahsi geçen çalışanlar, özellikle;
                Kişisel Verinin, kişisel veriyi almaya yönelik bir hakka sahip
                olan/yetkisi olan kişiye verildiğinden emin olmak için, çağrı
                yolu ile ulaşan kişinin kimliğini kontrol etmelidirler; Eğer
                çalışanlar, arayanın kimliğinden emin olmadıkları ya da
                kimliklerinin kontrol edilemediği bir çağrı alırlarsa, arayanın
                talebini yazılı olarak iletmesini önermelidirler.
              </p>
              <p>
                Zor durumlarda yardım için müdürlerine başvurmalıdırlar. Hiç
                kimse Kişisel Verinin açıklanması için zorlanmamalıdır. Bir
                çalışanın, yukarıdaki prosedürlere tabi olmak kaydıyla, Veri
                Sahiplerinden bir bildirim / talep alması halinde, bu durum bu
                bildirimin / talebin alınmasını takiben derhal [Micota KVK
                Komitesi’ne ] yazılı şekilde rapor edilecek ve bu taleplere
                cevap verilirken, söz konusu birimin tüm talimatlarına uygun
                hareket edilecektir. Söz konusu iş birimi, şikâyetleri /
                talepleri çözümlemek için ilgili iş biriminden ve destek
                birimlerinden arkadaşlar ile bağlantı kuracaktır. Veri
                Sahibinden gelen talepler özenli bir şekilde rapor edilmeli ve
                gözden geçirilmeli, [Micota KVK Komitesi ] tarafından, talebin
                niteliğini de göz önünde bulundurarak, en fazla 30 gün
                içerisinde olmak şartıyla, mümkün olan en kısa sürede ve Veri
                Sahibine ek bir masraf yansıtılmaksızın söz konusu şikâyetler
                yanıtlanacak ve talepler uygulanabilir olması halinde yerine
                getirilecektir.
              </p>
              <p>
                Kişisel Verilerin silinmesi, yok edilmesi ve anonim hale
                getirilmesi dahil, her tür Veri Sahibi talebinin incelenmesine
                ilişkin takip eden süreç aşağıdaki şekilde olacaktır: [Micota
                KVK Komitesi ] birimi, talebin/şikayetin geçerli olup olmadığına
                ve kimlik teyidi ya da ek bilginin gerekli olup olmadığına karar
                vermek için talebin ilk değerlendirmesini yapacaktır. [Micota
                KVK Komitesi] birimi, yazılı olarak birey ile bağlantı kurarak,
                ilgili kişi erişim talebinin alındığını teyit edecek ve
                gerektiği takdirde kimlik teyidi ve ek bilgi talep edecek ya da
                ilgili kişi erişimi ile ilgili bir istisnanın olması durumunda
                talebi reddedecektir.
              </p>
              <p>
                Tüm ilgili elektronik ve basılı dosyalama sistemleri üzerinde
                bir arama düzenlenecektir. [Micota KVK komitesi ], komplike
                durumları, özellikle de talebin üçüncü kişiler ile ilgili
                bilgiyi içerdiği ya da Kişisel Verilerin ifşa edilmesinin ticari
                gizliliğe ya da hukuki süreçlere zarar verebileceği durumları,
                şirket içi ilgili birimler ya da üçüncü kişi danışmanlara sevk
                edebilir ve talebin yanıtlanması konusunda destek alabilir.
                [Micota KVK Komitesi ], talep edilen bilgileri kolaylıkla
                okunabilir bir formatta düzenleyecektir. [Micota KVK Komitesi ],
                ilgili Micota Şirketi adına Veri Sahibinin talebini kabul
                edebilir ya da gerekçesini açıklayarak yazılı ya da elektronik
                ortamda reddedebilir. Bununla sınırlı olmaksızın, özellikle
                Kanun’un ve Politika’nın uygulanmasına ilişkin istisnalardan
                birinin söz konusu olduğu hallerde talep reddedilebilecektir.
              </p>
              <p>
                Eğer Veri Sahibinin talebi kabul edilirse, talep Micota’nun
                ilgili birimleri tarafından derhal yerine getirilecektir.
                Şikâyet sahibi, Micota Şirketleri tarafından verilecek cevap ya
                da tespite tamamen ya da kısmen itiraz edebilecek ve ilgili
                Micota çalışanını bu konuda bilgilendirebilecektir. İlgili
                çalışan derhal [Micota KVK Komitesi ]’a bilgi verecektir. Böyle
                bir durumda, şikayet talebi yeniden değerlendirilecek ve nihai
                olarak cevaplandırılacaktır. Uygulanacak prosedür ve sürelere
                ilişkin ilk sürelere uygulanabilir prosedür ve süreler geçerli
                olacak olup bu durum Kanun’un öngördüğü sürelerin kesilmesi veya
                durdurulması anlamına gelmeyecektir. Zira, ikinci kez
                değerlendirmeye ilişkin talepler kanuni bir yükümlülük
                kapsamında değil salt müşteri memnuniyeti açısından yeniden
                değerlendirilecektir. Kanun uyarınca, Veri Sahibinin ilk şikayet
                başvurusuna verilecek ilk yanıttan itibaren, Micota Şirketi’nin
                cevabını öğrendiği tarihten itibaren otuz ve her hâlde ilk
                başvuru tarihinden itibaren altmış gün içinde Kurula başvurma
                hakkı vardır ve söz konusu sürelere riayet edilmesi hak düşürücü
                niteliktedir.
              </p>
              <h4>I. KİŞİSEL VERİLERİN KORUNMASI KURUMU İLE İLETİŞİM</h4>
              <p>
                Micota Şirketleri, devlet sırlarını içeren bilgi ve belgeler
                hariç olmak üzere; Kurulun, inceleme konusuyla ilgili istemiş
                olduğu bilgi ve belgeleri 15 gün içinde göndermek ve
                gerektiğinde yerinde inceleme yapılmasına imkân sağlamak
                zorundadır. [Micota KVK Komitesi ], Kurum ile yapılacak
                yazışmaları gerçekleştirecek iş birimi olarak belirlenmiştir ve
                çalışanlar, Kişisel Verinin korunmasına ilişkin Kurul ile her
                türlü iletişimi [Micota KVK Komitesi]’a yönlendirmelidirler.
                Micota ve tüm Micota çalışanları, Kurul’un re’sen ya da şikâyet
                üzerine yapılan soruşturmanın sonucunda verilen kararlarına,
                gecikmesiz ve bildirimden itibaren en geç 30 gün içerisinde
                uyacaktır. Tüm Micota Şirketleri, Kurulun aktif olarak faaliyete
                geçmesi ve Kişisel Verileri Koruma Kurumu nezdinde oluşturulacak
                başkanlık teşkilatının oluşumunu takiben Kurulun gözetiminde ve
                Kişisel Verileri Koruma Kurumu Başkanlığı tarafından kamuya açık
                olarak tutulacak Veri Sorumluları Sicili’ne, Kurul tarafından
                Veri Sorumluları Siciline kayıt zorunluluğuna getirilecek
                istisnalara tabi olmadıkça, kayıt olacaktır.
              </p>
              <h4>
                J. KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİ POLİTİKASI YÖNETİM
                YAPISI
              </h4>
              <p>
                Micota Holding A.Ş. tarafından KVK Kanunu düzenlemelerine uygun
                hareket edilmesi ve Kişisel Verilerin Korunması ve İşlenmesi
                Politikasının yürürlüğü için Kişisel Veriler Yönetim Üst Kurulu
                oluşturulmuş ve Kişisel Verilerin Korunması Komitesi kurmuştur.
              </p>
              <p>
                Bu komitenin görevleri; Kişisel Verilerin Korunması ve İşlenmesi
                ile ilgili kararlar alarak, üst yönetime sunulmak üzere üst
                kurula iletmek, Kişisel Verilerin Korunması ve İşlenmesi ile
                ilgili Politaka’da değişiklikler yapmak, Politikanın
                uygulanmasını ve denetimini sağlamak, KVK Kanunu ve ilgili
                mevzuat çerçevesinde yapılması gereken hususları tespit etmek,
                Kişisel Veri sahiplerinin başvurularını değerlendirmek, Kişisel
                Verilerin Korunması ile ilgili gelişmeleri takip etmek,
                ilgilileri bilgilendirmek suretiyle uygulanmasını sağlamak ve
                gerekli önlemleri almak,
              </p>
              <h4>K. POLİTİKA’NIN UYGULANMASINA İLİŞKİN İSTİSNALAR</h4>
              <p>
                Kanun’un 28. Maddesi uyarınca öngörüldüğü üzere, Kanun’un
                uygulanmayacağı aşağıdaki hallerde, işbu Politika da
                uygulanmayacaktır: Kişisel Verilerin, üçüncü kişilere verilmemek
                ve veri güvenliğine ilişkin yükümlülüklere uyulmak kaydıyla
                gerçek kişiler tarafından tamamen kendisiyle veya aynı konutta
                yaşayan aile fertleriyle ilgili faaliyetler kapsamında
                işlenmesi; Kişisel Verilerin resmi istatistik ile anonim hâle
                getirilmek suretiyle araştırma, planlama ve istatistik gibi
                amaçlarla işlenmesi; Kişisel Verilerin millî savunmayı, millî
                güvenliği, kamu güvenliğini, kamu düzenini, ekonomik güvenliği,
                özel hayatın gizliliğini veya kişilik haklarını ihlal etmemek ya
                da suç teşkil etmemek kaydıyla, sanat, tarih, edebiyat veya
                bilimsel amaçlarla ya da ifade özgürlüğü kapsamında işlenmesi;
                Kişisel Verilerin millî savunmayı, millî güvenliği, kamu
                güvenliğini, kamu düzenini veya ekonomik güvenliği sağlamaya
                yönelik olarak kanunla görev ve yetki verilmiş kamu kurum ve
                kuruluşları tarafından yürütülen önleyici, koruyucu ve istihbari
                faaliyetler kapsamında işlenmesi; Kişisel Verilerin soruşturma,
                kovuşturma, yargılama veya infaz işlemlerine ilişkin olarak
                yargı makamları veya infaz mercileri tarafından işlenmesi.
              </p>
              <p>
                Aydınlatma yükümlülüğü hariç olmak üzere, Veri Sahipleri
                aşağıdaki istisnaların birinin varlığı halinde Kanun ve işbu
                Politika’da düzenlenen haklarını kullanamayacaktır: Kişisel Veri
                işlemenin suç işlenmesinin önlenmesi veya suç soruşturması için
                gerekli olması; Veri Sahibinin kendisi tarafından
                alenileştirilmiş Kişisel Verilerin işlenmesi; Kişisel Veri
                işlemenin kanunun verdiği yetkiye dayanılarak görevli ve yetkili
                kamu kurum ve kuruluşları ile kamu kurumu niteliğindeki meslek
                kuruluşlarınca, denetleme veya düzenleme görevlerinin
                yürütülmesi ile disiplin soruşturma veya kovuşturması için
                gerekli olması; Kişisel Veri işlemenin bütçe, vergi ve mali
                konulara ilişkin olarak Devletin ekonomik ve mali çıkarlarının
                korunması için gerekli olması.
              </p>
              <p>
                Yukarıdakiler dışında, tamamen veya kısmen otomatik olan ya da
                herhangi bir veri kayıt sisteminin parçası olmak kaydıyla
                otomatik olmayan yollarla elde edilen Kişisel Veriler de bu
                Politika’nın kapsamı dışındadır. Bu çerçevede, Micota Şirketleri
                nezdinde herhangi bir veri kayıt sisteminde yer almayan tüm
                veriler bakımından Kanun ve işbu Politika uygulanmayacaktır.
                Micota’nun söz konusu veriler ile ilgili sorumluluğu T.C.
                Anayasası ve Türk Ceza Kanunu hükümleri ile sınırlı olacaktır.
              </p>
              <h4>L. İYİLEŞTİRME VE DEĞİŞİKLİKLER</h4>
              <p>
                Herhangi bir çalışanın, işbu Politika ve Kanun hakkında soruları
                ya da sorunları olur ise, bu konular hakkında [ Micota KVK
                Komitesi ] ile iletişime geçmesi gerekmektedir. Bu çerçevede,
                Kanun’un ve işbu Politika’nın gerekliliklerinin tüm çalışanlar
                bakımından en üst düzeyde anlaşıldığı teyit edilecek ve Kanun ve
                Politika’nın gerekliliklerinin çalışanlar nezdinde
                içselleştirilmesi temin edilecektir. Tüm çalışanlar, işbu
                Politika’nın kabul edilmesiyle birlikte, iş süreçlerinin işbu
                Politika’ya uyum gösterdiğini kabul, beyan ve taahhüt etmiş
                olacaktır. Herhangi bir çalışanın ya da diğer Veri Sahiplerine
                ait kişisel veriler bakımından işbu Politika’ya uyulmadığı
                düşünülüyorsa, konu [Micota KVK Komitesi ]’a yönlendirilecektir.
                İşbu Politika, Kanun uyarınca hazırlanacak ve yürürlüğe girecek
                Yönetmelik ve diğer ikincil mevzuat uyarınca değişebilecek ve
                güncellenebilecektir.
              </p>
              <p>
                Micota Şirketleri ve tüm çalışanları, tüm süreçlerini en kısa
                süre içerisinde Kanun ve işbu Politika’da yapılacak
                değişikliklere ve Kişisel Verilerin korunmasına ilişkin
                çıkarılacak ikincil mevzuata tam bir uyum içerisinde
                gerçekleştirmeyi kabul, taahhüt ve beyan etmektedir. İşbu
                Politika’nın herhangi bir değişikliğe uğraması halinde, söz
                konusu değişikliğe ilişkin tüm Veri Sahiplerine bilgilendirme
                yapılacak ve Veri Sahiplerinin güncel Politika’ya ulaşması için
                gereken bağlantı adresleri ve güncellenen Politika’ya ilişkin
                bilgi alabilecekleri kanallar hakkında bilgilendirilmesi
                sağlanacaktır.
              </p>
              <h4>SONUÇ VE SORUMLULUK</h4>
              <p className='mb-5'>
                Micota, Kanun uyarınca tüm süreçlerini Kanun’a uygun şekilde
                yönetmek ve Kanun’un gerekliliklerini yerine getirmek amacıyla
                halihazırda Türkiye Cumhuriyeti Anayasası ve Türk Ceza Kanunu
                hükümleri ile kişisel veri korumasına ilişkin uluslararası genel
                ilkelere uyumlu süreçlerini iyileştirmektedir. Bu kapsamda, tüm
                iş birimlerine uygulanmak üzere hazırlanan işbu genel Politika
                uyarınca, Kişisel Verilerin Micota Şirketleri tarafından işlenme
                esasları ile tüm iş birimlerini ve çalışanlarını bağlamaktadır.
              </p>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
}

Guvenlik.propTypes = {
  location: PropTypes.object,
};
