import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";
import { getDiscountPrice } from "../../helpers/product";

export default function DistanceModal(props) {
  const { cartItems } = props;
  const { address } = props;
  let cartTotalPrice = 0;
  const today = new Date();
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      className='product-quickview-modal-wrapper'
    >
      <Modal.Header closeButton><h3 className='cart-page-title'>Mesafeli Satış Sözleşmesi</h3></Modal.Header>
      <div className='cart-main-area pt-40 pb-70 m-3'>
        <h4>1. TARAFLAR</h4>
        <h5>SATICI</h5>
        <p>MICOTA AHŞAP ÜRÜNLERİ</p>
        <p>Küçüksu Mah. Asma sok. no:10 C-4 Üsküdar İstanbul</p>
        <p>05302225663 / info@micota.com.tr</p>
        <h5>ALICI</h5>
        {address && 
        <>
        <p>{address.name + " " + address.surname}</p>
        <p>{address.identity}</p>
        <p>{address.street + " " + address.ilçe + " " + address.il}</p>
        <p>{address.phone + " / " + address.email}</p>
        </>}
        <p>
          1) Sözleşme konusu mal veya hizmetin adı, adedi, KDV dahil satış
          fiyatı, ödeme şekli ve kısaca temel nitelikleri
        </p>
        <h4>2. SÖZLEŞMENİN KONUSU VE KAPSAMI</h4>
        <p>
          İş bu Mesafeli Satış Sözleşmesi Tüketicinin Korunması Hakkındaki Kanun
          ve Mesafeli Satış Sözleşmeler Yönetmeliği’ne uygun olarak
          düzenlenmiştir. İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait
          shop.micota.com isimli internet sitesinden elektronik ortamda 3.
          Maddede siparişini yaptığı işbu Sözleşmede nitelikleri ve satış fiyatı
          belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı
          Tüketicilerin Korunması Hakkındaki Kanun ve 27.11.2014 tarih ve 29188
          sayılı Resmi Gazete’de yayınlanan Mesafeli Sözleşmeler Yönetmeliği
          hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasını
          oluşturur. İşbu Sözleşme'nin tarafları işbu Sözleşme tahtında 6502
          Sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler
          Yönetmeliği'den kaynaklanan yükümlülük ve sorumluluklarını
          bildiklerini ve anladıklarını kabul ve beyan ederler.
        </p>
        <div className='container'>
          <h4>
            3. SÖZLEŞME KONUSU MAL VE HİZMETİN TEMEL NİTELİKLERİ VE FİYATI (KDV
            DAHİL)
          </h4>
          {cartItems && cartItems.length >= 1 && (
            <Fragment>
              <div className='row'>
                <div className='col-12'>
                  <div className='table-content table-responsive cart-table-content'>
                    <table>
                      <thead>
                        <tr>
                          <th>Ürün Adı</th>
                          <th>Fiyat</th>
                          <th>Adet</th>
                          <th>Ara Toplam</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((cartItem, key) => {
                          const discountedPrice = getDiscountPrice(
                            cartItem.price,
                            cartItem.discount
                          );
                          const finalProductPrice = cartItem.price.toFixed(2);
                          const finalDiscountedPrice = discountedPrice.toFixed(
                            2
                          );

                          discountedPrice != null
                            ? (cartTotalPrice +=
                                finalDiscountedPrice * cartItem.quantity)
                            : (cartTotalPrice +=
                                finalProductPrice * cartItem.quantity);
                          return (
                            <tr key={key}>
                              <td className='product-name'>
                                {cartItem.name}

                                {cartItem.selectedProductColor &&
                                cartItem.selectedProductSize ? (
                                  <div className='cart-item-variation'>
                                    <span>
                                      Color: {cartItem.selectedProductColor}
                                    </span>
                                    <span>
                                      Size: {cartItem.selectedProductSize}
                                    </span>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </td>

                              <td className='product-price-cart'>
                                {discountedPrice !== null ? (
                                  <Fragment>
                                    <span className='amount old'>
                                      {finalProductPrice + " TL"}
                                    </span>
                                    <span className='amount'>
                                      {finalDiscountedPrice + " TL"}
                                    </span>
                                  </Fragment>
                                ) : (
                                  <span className='amount'>
                                    {finalProductPrice + " TL"}
                                  </span>
                                )}
                              </td>

                              <td className='product-quantity'>
                                {cartItem.quantity}
                              </td>
                              <td className='product-subtotal'>
                                {discountedPrice !== null
                                  ? (
                                      finalDiscountedPrice * cartItem.quantity
                                    ).toFixed(2) + " TL"
                                  : (
                                      finalProductPrice * cartItem.quantity
                                    ).toFixed(2) + " TL"}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='col lg-12 d-flex'>
                  <div className='col lg-6'>
                    <h4>ÖDENECEK TOPLAM TUTAR (KDV Dahil)</h4>{" "}
                  </div>
                  <div className='col lg-6 text-right mr-4'>
                    <h4>{cartTotalPrice.toFixed(2) + " TL"}</h4>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        </div>
        <h4>4. TESLİMAT</h4>
        <p>
          Teslimat, Micota tarafından kargo aracılığı yukarıda belirtilen
          teslimat adresine sipariş onaylandıktan sonra 10 iş günü, her
          hâlükârda 30 günlük yasal süresi içinde yapılacaktır. Resmi tatiller
          ve dini/milli bayram günleri bu süreden sayılmaz. Teslimat sırasında
          Müşteri ürünü muayene ettikten sonra teslim tutanağını imzalayacaktır.
          Müşteri veya Müşteri adına hareket eden kişi, bu teslim tutanağını
          imzalamakla, ürünü tam, eksiksiz ve hasarsız olarak teslim aldığını
          beyan etmiş olacaktır. Grev, lokavt, tabii afetler, ayaklanma, halk
          hareketleri, nükleer risk ve tehlike, savaş, istila, ihtilal, iç
          savaş, sabotaj ve yangın halleri gibi olağanüstü durumlarda, indirim
          dönemlerinde ve alıcıdan kaynaklanan (adreste bulunmama, teslim alacak
          yetkilinin olmaması, alıcının adresten taşınmış olması, vb.)
          durumlarda teslimat süresi ve koşulları değişkenlik gösterebilir.
        </p>
        <h4>5. CAYMA HAKKI</h4>
        <p>
          Tüketici, 14 (on dört) gün içinde herhangi bir gerekçe göstermeksizin
          ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir. Cayma
          hakkı süresi, hizmet ifasına ilişkin sözleşmelerde sözleşmenin
          kurulduğu gün; mal teslimine ilişkin sözleşmelerde ise tüketicinin
          veya tüketici tarafından belirlenen üçüncü kişinin malı teslim aldığı
          gün başlar. Ancak tüketici, sözleşmenin kurulmasından malın teslimine
          kadar olan süre içinde de cayma hakkını kullanabilir. Cayma hakkı
          süresinin belirlenmesinde; a) Tek sipariş konusu olup ayrı ayrı teslim
          edilen mallarda, tüketicinin veya tüketici tarafından belirlenen
          üçüncü kişinin son malı teslim aldığı gün, b) Birden fazla parçadan
          oluşan mallarda, tüketicinin veya tüketici tarafından belirlenen
          üçüncü kişinin son parçayı teslim aldığı gün, c) Belirli bir süre
          boyunca malın düzenli tesliminin yapıldığı sözleşmelerde, tüketicinin
          veya tüketici tarafından belirlenen üçüncü kişinin ilk malı teslim
          aldığı gün esas alınır. Mal teslimi ile hizmet ifasının birlikte
          yapıldığı sözleşmelerde, mal teslimine ilişkin cayma hakkı hükümleri
          uygulanır. Cayma hakkının kullanıldığına dair bildirimin cayma hakkı
          süresi dolmadan, yazılı olarak veya kalıcı veri saklayıcısı ile
          yöneltilmesi yeterlidir. Cayma hakkının kullanılmasında tüketici,
          kararını bildiren açık bir beyanda bulunabilir. Cayma Hakkını kullanan
          tüketici, ürünü 10 gün içinde satcıya iade etmek zorundadır. Cayma
          hakkının süresi içinde kullanılmaması halinde tüketici bu hakkını
          kaybedecektir.
        </p>
        <h4>
          6. CAYMA HAKKININ KULLANIMINA VE ÜRÜNÜN İADESİNE İLİŞKİN HÜKÜMLER
        </h4>
        <p>
          6.1. Faturasız ve kutusuz ürünler iade yapılamaz. 6.2. Orijinal
          ambalajı bozulmuş, tekrar satılabilirlik özelliğini kaybetmiş, başka
          bir müşteri tarafından satın alınamayacak durumda olan ürünlerin
          iadesi kabul edilmemektedir. İade edilmek istenen ürünün tüm
          etiketleri ürünün üzerinde olmalı ve tadilat görmemiş olmalıdır. 6.3.
          İade etmek istediğiniz ürün ile birlikte sizdeki tüm kopyaları ile
          faturanın aslı ve iade takip numaranızı göndermeniz
          gerekmektedir.Faturasız ürünlerde iade kabul edilmemektedir. 6.4. İade
          etmek istediğiniz ürünler için kargo ücreti firmamız tarafından
          karşılanmaktadır. ücretsiz gönderiden faydalanabilmek için, paketinizi
          anlaşmalı olduğumuz kargo firması ile Satıcı'nın Koza Mahallesi, 1673.
          Sok. No:125, 34517 Esenyurt/İstanbul adresine ulaştırmalısınız. Diğer
          kargo şirketleriyle gönderilen iadelerde kargo ücreti alıcıya aittir.
          6.5. Kozmetik, gıda, abiye, christofle ürünleri, iç giyim, mayo,
          bikini, takı, kitap/dergi, teknolojik ürünler, “Kendi Eşarbını
          Tasarla” ve “İsme Özel Eşarp” ürünlerinin iadesi ve değişimi mümkün
          değildir. 6.6. Ürünleriniz tarafınıza sevk irsaliyesi ile birlikte
          gönderilmektedir. Sevk irsaliyesinin arka tarafında iade formu
          bulunmaktadır. İade formunda iade etmek istediğiniz ürünleri
          barkodları ve iade sebebiniz ile birlikte belirtmeniz gerekmektedir.
          6.7. Kargo iade kodunuz irsaliyenin alt bölümünde yer almaktadır.
          Ürününüzü geri gönderirken iade formu doldurulmuş şekilde, sevk
          irsaliyesi kargo paketinin içine konulmalıdır. 6.8. Gelen ürün
          öncelikle Micota tarafından incelenir. Yukarıdaki şartlara uygun ise
          iade işlemi başlatılır. İade işlemi onaylandığında alıcıya İADE
          TALEBİNİZ ONAYLANMIŞTIR konulu mail gönderilerek bilgilendirme
          yapılır. Bu bilgilendirmeden sonra yasal süre olan 14 gün ( ondört )
          içerisinde ürün ücreti kredi kartınıza iade edilir. 6.9. Alıcı ürünü
          isterse Micota mağazalarında iade yapabilir. Mağazalardan yapılan iade
          durumunda ürünün ücreti Micota Tekstil ve Hazır Giyim Sanayi
          İşletmeleri tarafından alıcının kredi kartına yasal süre 10 iş günü
          içerisinde iade edilir. Alıcı isterse ürünün ücreti tutarında iade
          kartı ( exchange card ) alabilir. İade kartı tüm Micota mağazalarında
          geçerlidir. 6.10. Alıcı satın aldığı ürünü, ürün gammı uygun olduğu
          takdirde Micota mağazalarından değişim yapabilir. 6.11. Micota
          kuruluşlarına ait mağazalardan alınan ürünler Micota Online Shop’tan
          değiştirilemez ve iade edilemez. 6.12.Online sayfamızda OUTLET
          bölümünden alınan ürünlerin değişimi veya iadesi sadece MICOTA OUTLET
          mağazalarımızdan yapılabilir. Outlet ürünlerimizin hediye paketlerine
          outlet değiştirme kartı konulmaktadır. 6.13.Online sayfamızda sezon
          bölümünden alınan ürünlerin değişimi ve iadesi sadece sezon
          mağazalarımızdan yapılabilir.
        </p>
        <h4>7. CAYMA HAKKININ İSTİSNALARI</h4>
        <p>
          Aşağıdaki ürünlerden herhangi birinin teslimatına ilişkin
          sözleşmelerde Müşteri cayma hakkını kullanamaz: a) Tüketicinin
          istekleri veya kişisel ihtiyaçları doğrultusunda hazırlanan mallara
          ilişkin sözleşmeler. b) Çabuk bozulabilen veya son kullanma tarihi
          geçebilecek malların teslimine ilişkin sözleşmeler. c) Tesliminden
          sonra ambalaj, bant, mühür, paket gibi koruyucu unsurları açılmış olan
          mallardan; iadesi sağlık ve hijyen açısından uygun olmayanların
          teslimine ilişkin sözleşmeler. ç) Tesliminden sonra başka ürünlerle
          karışan ve doğası gereği ayrıştırılması mümkün olmayan mallara ilişkin
          sözleşmeler. d) Malın tesliminden sonra ambalaj, bant, mühür, paket
          gibi koruyucu unsurları açılmış olması halinde maddi ortamda sunulan
          kitap, dijital içerik ve bilgisayar sarf malzemelerine ilişkin
          sözleşmeler. h) Cayma hakkı süresi sona ermeden önce, tüketicinin
          onayı ile ifasına başlanan hizmetlere ilişkin sözleşmeler.
        </p>
        <h4>8. DİĞER HÜKÜMLER</h4>
        <p>
          8.1. İşbu sözleşme Türk Hukuku kuralları çerçevesinde oluşturulmuş
          olup, geçerliliği ve bağlayıcılığı Türk Hukuku kuralları çerçevesinde
          olacaktır. İşbu sözleşmenin uygulanmasından doğacak herhangi bir
          ihtilafta İstanbul ( Anadolu ) Mahkemeleri yetkili olacaktır. Şikayet
          ve itiraz konusunda başvurular T.C. Gümrük ve Ticaret Bakanlığın’ca
          her yıl Aralık ayında belirlenen parasal sınırlar dâhilinde Tüketici
          Hakem Heyetleri, aşan durumlarda ALICI'nın ve SATICI'nın yerleşim
          yerindeki Tüketici Mahkemeleri ve İcra Müdürlükleri yetkilidir. 8.2.
          Tarafların, bu sözleşmenin imzalandığı sırada belirttikleri adreslerin
          değişmesi halinde yeni tebligat adreslerini adres değişikliğine
          ilişkin olduğunu açıkça bildirir iadeli taahhütlü mektup ile yazılı
          olarak bildirme yükümlülüğü vardır. Aksi takdirde, eski adrese
          yapılmış tebligatların geçerli olacağı kabul edilmiş sayılacaktır.
          8.3. İşbu sözleşmede verilen bilgiler, kullanılan uzaktan iletişim
          araçlarına uygun olarak ve iyiniyet ilkeleri çerçevesinde ergin
          olmayanlar ile ayırtım gücünden yoksun veya kısıtlı erginleri
          koruyacak şekilde ticari amaçlarla verilmektedir
        </p>
        <h4>9. ALICI'NIN BEYANI</h4>
        <p>
          ALICI, sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme
          şekli ile teslimata ilişkin tüm bilgiler de dahil olmak üzere işbu
          sözleşmede yer alan Ön Bilgileri okuyup bilgi sahibi olduğunu ve
          elektronik ortamda gerekli teyidi verdiğini beyan eder.
        </p>
        <h4>10. İMZA YERİ VE TARİHİ</h4>
        <p>
          İşbu Mesafeli Satış Sözleşmesi {today.toLocaleString("en-GB")} tarih
          ve saatinde elektronik ortamda akdedilmiş olup bir nüshası elektronik
          formatta Alıcı’nın işbu sözleşmenin 1. maddesinde belirtilen e-mail
          adresine gönderilmiştir.
        </p>
      </div>
    </Modal>
  );
}
