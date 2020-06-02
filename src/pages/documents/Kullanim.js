import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import "./documents.css";

export default function Kullanim({ location }) {
  const { pathname } = location;
  return (
    <Fragment>
      <Helmet>
        <title>Micota | Kullanım Koşulları</title>
        <meta
          name='description'
          content='Alışveriş sitemiz micota.com.tr kullanım koşulları.'
        />
      </Helmet>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
        Anasayfa
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Kullanım Koşulları
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        <Breadcrumb />
        <div className='container mt-5'>
          <div className='welcome-content text-center'>
            <h5>
              İşbu https://micota.com.tr sitesinin (“Site”) tüm hakları Micota
              Ahşap Ürünleri'ne (Micota) aittir.
            </h5>
            <h1 className='mt-3'>KULLANIM KOŞULLARI</h1>
            <div className='text-left'>
              <p className='w-100'>
                Micota webssitesinin Kullanıcılar ve Üyeler tarafından kullanımı
                aşağıdaki hüküm ve şartlara tabidir. Lütfen Siteyi kullanmadan
                önce aşağıdaki Site Kullanım Koşullarını (“Kullanım Koşulları”)
                dikkatlice okuyunuz.
              </p>
              <h4>I. Açıklama</h4>
              <p className='w-100'>
                Site’ye üyelik, aşağıda yazılı koşulların tarafınızca kabulüne
                bağlıdır. Site'nin kullanımı, bu koşulları kabul ettiğiniz
                anlamına gelir. Kullanım Koşulları da dahil olmak üzere Micota,
                Site ve Site uzantısı kapsamında sunulan hizmetleri, ürünleri,
                fikir ve sanat eserlerini, Sitede sunulan herhangi bir bilgi ve
                veriyi, önceden herhangi bir ihtar veya ihbar yapmaya gerek
                olmaksızın değiştirme, Site yayınına ara verme, Site yayını
                tamamen durdurma ve Siteyi en geniş kapsamda yeniden düzenleme
                haklarını saklı tutmaktadır. Micota’nun Site Kullanım Şartları
                üzerinde yapacağı değişiklikler, Sitede yayımlanmalarıyla
                birlikte yürülüğe girer ve bu değişiklikler, kullanıcı
                tarafından Site’ye girilmesi, herhangi bir şekilde erişim
                yapılması veya Site’nin kullanılması ile birlikte kabul edilmiş
                addolunur. Site’ye üyelik formunu eksiksiz dolduran ve Micota
                tarafından üyelikleri uygun bulunan gerçek ya da tüzel kişiler
                "ÜYE" olarak kabul edilir. Üyelik için 18 yaşını doldurmuş olmak
                zorunludur. Tüzel kişiler, ancak yasal temsilcileri kanalı ile
                üyelik başvurusu yapabilirler. Site’ye giriş yapan, Site’yi
                ziyaret eden, herhangi bir şekilde kullanan, Siteye erişen
                ve/veya herhangi başkaca bir şekilde bağlanan tüm üye ve
                ziyaretçiler(“Kullanıcı”), bu sayfada düzenlenmiş olan Micota
                Web Sitesi Kullanım Şartları’na uyacaklarını peşinen beyan,
                kabul ve taahhüt ederler. İşbu Yukarıda anılan "Kullanıcı"
                ifadesi, üye girişi yapmak suretiyle veya herhangi bir şekilde
                Siteye giriş yapan, Siteyi kullanan, inceleyen veya herhangi bir
                iletişim cihazı(cep telefonu, bilgisayar gibi) aracılığıyla
                Site’ye bağlanmış olan veya Site üzerinden elektronik veri
                alış-verişinde bulunmuş veya bulunmakta olan herhangi bir kişiyi
                ifade etmektedir.
              </p>
              <h4>II. Hizmet İçeriği</h4>
              <p className='w-100'>
                Micota'nun, Site üzerinden vereceği hizmet; Micota online shop
                sitesinde satışa sunulan ürünlerin; üye tarafından bedeli
                ödendikten sonra, Micota'nun stok durumunun uygun olması halinde
                taahhüt edilen sürede malın müşteriye kargo firması tarafından
                ayıpsız ve hasarsız olarak teslimidir.
              </p>
              <h4>III. Genel Koşul ve Hükümler</h4>

              <ul className='kosullar'>
                <li>
                  Micota, Sitede mevcut bilgilerin doğruluk ve güncelliğini
                  sürekli olarak kontrol etmektedir. Ancak bu bilgilerin her
                  zaman güncel olmayabileceği Üyeler ve Kullanıcılar tarafından
                  gözetilmelidir.
                </li>
                <li>
                  Micota, dilediği takdirde, hiçbir gerekçe göstermeksizin
                  üyeliği iptal etme hakkına sahiptir.
                </li>
                <li>
                  Site’ye ait her türlü fikri mülkiyet hakkı(sitede bulunan
                  bilgiler, yazılar, resimler, markalar, slogan ve diğer
                  işaretler, sayfa düzeni vb) münhasıran Micota'nun
                  mülkiyetindedir. Sitede sunulan fikri mülkiyetin kısmen ya da
                  tamamen kopyalanması, değiştirilmesi, yayınlanması, online ya
                  da diğer bir medya kullanılmak suretiyle gönderimi, dağıtımı,
                  satılması açık ve kesin bir biçimde 5846 Sayılı Fikir ve Satan
                  Eserleri Kanunu'na aykırı olacak ve hukuki ve cezai yaptırıma
                  maruz kalacaktır.
                </li>
                <li>
                  Üye, kredi kartını güvenli bir şekilde kullanmakla yükümlüdür.
                  Micota, sözleşmeye aykırılık, haksız fiil, ya da başkaca
                  sebeplere binaen, doğabilecek doğrudan ya da dolaylı hiçbir
                  zarardan sorumlu değildir.
                </li>
                <li>
                  Micota, dilediği tarihte, işbu sözleşmeyi bildirimsiz olarak
                  feshedebilir, kısmen ya da tamamen devredebilir. Kullanıcı
                  veya üyenin sözleşmeyi devri, hükümsüzdür.
                </li>
                <li>
                  Micota mücbir sebeple ya da tümü ile kendi takdir ve
                  değerlendirmesine bağlı olarak Site’yi yayından kaldırma,
                  içeriğini değiştirme hakkına sahiptir.
                </li>
                <li>
                  Kullanıcılar ve Üyeler, Site’yi kullanırken genel ahlaka ve
                  adaba, yürürlükteki tüm ulusal ve uluslararası kanunlara ve
                  nizamlara, iletişim ve internet güvenliğine uygun olarak
                  hareket etmek ile yükümlüdür. Kullanıcıların Siteye
                  ekleyecekleri her türlü ifade, yorum, yazı, resim, görsel ve
                  sair her türlü bilgi ve belge genel ahlaka ve adaba ve ilgili
                  ulusal ve uluslararası mevzuata uygun içerik ve şekilde
                  olmalıdır.
                </li>
                <li>
                  Sitenin yazılım ve donanım sistemlerinin zarar görmesine yol
                  açabilecek, işleyişini olumsuz yönde etkileyebilecek veya
                  yavaşlamasına yol açabilecek her türlü fiil ve işlem yasaktır.
                  Anılan yasak kapsamına otomatik programlar veya yazılımlar
                  kullanılarak birden fazla sorgu yapılması veya üyelik kaydı
                  açılması, veya otomatik yöntemler aracılığıyla Siteye çok
                  sayıda talep veya bilgi gönderilmesi de dahildir.
                </li>
                <li>
                  Üyeler, kendilerine verilen şifrelerin münhasıran kendilerine
                  verilmiş olduğunu, bu şifreleri hiçbir surette başkaları ile
                  paylaşmayacaklarını, aksi takdirde doğabilecek her türlü zarar
                  ve ziyandan kendilerinin sorumlu olacağını kabul, beyan ve
                  taahhüt etmektedir. Üyelik başvurusu yapılırken üye tarafından
                  verilen bilgilerin doğruluğu ve eksiksizliğinin tespiti
                  Micota’nun sorumluluğunda değildir. Yanlış üyelik bilgisi
                  verilmesi sebebiyle doğacak zararlardan dolayı Micota’nun
                  hiçbir hukuki sorumluluğu yoktur.
                </li>
                <li>
                  Micota, Site Kullanım Koşulları’na ve yukarıda anılan
                  kuralları aykırı şekilde hareket eden Kullanıcıların Siteye
                  erişiminin engellenmesi ve üyeliklerinin iptal edilmesi de
                  dahil olmak üzere her türlü güvenlik tedbirini almak, ve
                  gerekirse ihlal edenler aleyhinde yasal işlem başlatmak
                  hakkını saklı tutmaktadır.
                </li>
                <li>
                  Site’nin kullanılması, Sitede sunulan ve sağlanan veri ve
                  bilgilerin kullanımı, bu veri ve bilgiler esasında yapılan
                  davranışlar veya Siteye erişim sebebiyle maruz kalınabilinecek
                  herhangi türden bilgisayar virüsleri, trojan ve benzeri kötü
                  amaçlı yazılımlar(malware) da dahil ve fakat bunlarla sınırlı
                  olmamak üzere, Kullanıcıların, Üyelerin veya diğer üçüncü
                  kişilerin herhangi bir sebepten ötürü uğrayabilecekleri her
                  türlü ve tüm doğrudan ve dolaylı zarar, ziyan, hasar ve/veya
                  kayıplar ile ilgili Micota’nun hiçbir hukuki veya cezai
                  sorumluluğu bulunmamaktadır. Kullanıcılar, yukarıda anılan
                  zararlar sebebiyle Micota’dan her ne isim altında olursa olsun
                  herhangi bir talep veya iddiada bulunmayacaklarını peşinen
                  kabul, beyan ve taahhüt etmektedir.
                </li>
                <li>
                  İşbu "WEB SİTESİ KULLANIM KOŞULLARI VE ÜYELİK SÖZLEŞMESİ"nden
                  kaynaklanacak ihtilaflar Türk Hukuku'na tabidir ve İstanbul
                  Merkez Mahkemeleri ve İcra Daireleri yetkilidir.
                </li>
                <li>
                  Şahsıma ait bildirmiş olduğum, işbu form ile yazılı olarak
                  verdiğim bilgiler ve fakat bunlarla sınırlı olmamak üzere her
                  şekilde tarafınıza sağladığım tüm kişisel verilerimin; 6563
                  Sayılı Elektronik Ticaretin Düzenlenmesi kapsamında, kampanya,
                  indirim gibi bilgilendirme maksatlı olmak üzere ve Micota
                  Holding Anonim Şirketi ile grup şirketleri, iş ortakları,
                  çalıştığı tüm kurumlara 6698 sayılı Kişisel Verilerin
                  Korunması Kanunu (“Kanun”) uyarınca, satış tarihçesi
                  oluşturmak, fatura oluşturmak, fatura kesmek, üyelik hesabına
                  sadakat kartını tanımlamak, sadakat kartı veya basılı iletişim
                  materyalleri iletmek, ürün teslim etmek, e-fatura göndermek,
                  newsletter göndermek, promosyon ve sair çeşitli kampanyalar
                  hakkında bilgilendirmek, pazarlama iletişimi yapmak, müşteri
                  analizi yapmak, müşteri sadakatini artırmak, özel üretim
                  yapmak ve benzeri amaçlar için işlenmesine ve söz konusu veri
                  işleme amaçlarının gerçekleştirilmesi ve Micota Şirketler
                  Topluluğunun ilke, operasyon, süreç, hedef ve stratejilerine
                  uygun olarak yürütülmesi ile Micota’nun hak ve menfaatleri ile
                  itibarının korunması amacıyla işlenmesine, kullanılmasına,
                  gerekli görülmesi halinde, tüm Micota Holding Anonim Şirketi
                  iştirakleri ile yalnızca veri işleme amacının gerektirdiği
                  ve/veya arşivleme amacı ve sunulan hizmetin gerektirdiği
                  durumlar kapsamında aktarılmasına Micota Holding A.Ş. ve
                  iştiraklerinin ilke, operasyon, süreç, hedef ve
                  stratejilerinin gerektirdiği durumlarda üçüncü kişi iş
                  ortakları, hizmet / destek / danışmanlık alınan ya da
                  işbirliği yapılan ya da proje / program / finansman ortağı
                  olunan kamu / özel kurum ve kuruluşlar / şirketler,
                  tedarikçiler, tüm Micota Holding A.Ş. iştiraklerinin
                  ortakları, şirket yetkilileri, bankalar, fonlar, şirketler ve
                  sair üçüncü kişi ya da kuruluşlar ile paylaşılmasına; (i)
                  kişisel verilerimin işlenip işlenmediğini öğrenme, (ii)
                  kişisel verilerim işlenmişse, buna ilişkin bilgi talep etme,
                  (iii) kişisel verimin işleme amacını ve verilerimin amaca
                  uygun kullanılıp kullanılmadığını öğrenme, (iv) kişisel
                  verilerimin aktarıldığı üçüncü kişileri öğrenme ve (v) kişisel
                  verilerim eksik ya da yanlış işlenmişse bunların
                  düzeltilmesini isteme ve bunun kişisel verilerimin aktarıldığı
                  üçüncü kişilere bildirilmesini talep etme ve (vi) kişisel
                  verilerimin Kanun’a aykırı işlenmesi sebebiyle zarara uğramam
                  durumunda tazminat talep etme haklarımı saklı tutmak kaydıyla,
                  açık şekilde rıza verdiğimi kabul ve beyan ederim. KVKK’nın
                  11. maddesi gereği uyarınca haklarınız;
                </li>
                <p className='w-75'>
                  <strong>Tarafımıza başvurarak, kişisel verilerinizin;</strong>
                </p>
                <p className='w-75'>a) işlenip işlenmediğini öğrenme,</p>
                <p className='w-75'>b) işlenmişse bilgi talep etme,</p>
                <p className='w-75'>
                  c) işlenme amacını ve amacına uygun kullanılıp
                  kullanılmadığını öğrenme,
                </p>
                <p className='w-75'>
                  ç) yurt içinde/ yurt dışında aktarıldığı 3. kişileri bilme,
                </p>
                <p className='w-75'>
                  d) eksik/ yanlış işlenmişse düzeltilmesini isteme,
                </p>
                <p className='w-75'>
                  e) KVKK’nın 7. maddesinde öngörülen şartlar çerçevesinde
                  silinmesini / yok edilmesini isteme,
                </p>
                <p className='w-75'>
                  f) aktarıldığı üçüncü kişilere yukarıda sayılan (d) ve (e)
                  bentleri uyarınca yapılan işlemlerin bildirilmesini isteme,
                </p>
                <p className='w-75'>
                  g) münhasıran otomatik sistemler ile analiz edilmesi nedeniyle
                  aleyhinize bir sonucun ortaya çıkmasına itiraz etme,
                </p>
                <p className='w-75'>
                  h) kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız
                  hâlinde zararın giderilmesini talep etme hakkına sahipsiniz.
                </p>
              </ul>

              <p className='w-100 mb-5'>
                İlgili kişi olarak yukarıda sıralanan haklarınıza yönelik
                taleplerinizi ‘’KVKK@Micota.com.tr” e-posta adresi üzerinden
                Micota’ya iletebilirsiniz. Micota, gelen talepleri en geç 30
                (otuz) gün içerisinde değerlendirerek sonuçlandıracaktır.
                Taleplere ilişkin olarak herhangi bir ücret talep edilmemesi
                esas olmakla birlikte, Micota Kişisel Verileri Koruma Kurulu
                tarafından belirlenen ücret tarifesi üzerinden ücret talep etme
                hakkını saklı tutmaktadır.
              </p>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
}

Kullanim.propTypes = {
  location: PropTypes.object,
};
