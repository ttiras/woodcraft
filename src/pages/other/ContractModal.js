import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";
import { getDiscountPrice } from "../../helpers/product";

export default function ContractModal(props){
const {cartItems} = props
    let cartTotalPrice = 0;
    const today = new Date()
    return(
        
        <Modal
        show={props.show}
        onHide={props.onHide}
        className='product-quickview-modal-wrapper'
      >
          <Modal.Header closeButton><h3 className='cart-page-title'>Ön Bilgilendirme Formu</h3></Modal.Header>
           <div className='cart-main-area pt-40 pb-70 m-3'>
           <p>1) Sözleşme konusu mal veya hizmetin adı, adedi, KDV dahil satış fiyatı, ödeme şekli ve kısaca temel nitelikleri</p>
           <h4>SÖZLEŞME KONUSU ÜRÜN/ÜRÜNLER BİLGİLERİ</h4>
          <div className='container'>
            {cartItems && cartItems.length >=1 && (
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
                            const finalProductPrice = (
                              cartItem.price
                            ).toFixed(2);
                            const finalDiscountedPrice = (
                              discountedPrice
                            ).toFixed(2);

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
                                        {finalProductPrice +
                            " TL" }
                                      </span>
                                      <span className='amount'>
                                        {finalDiscountedPrice +
                            " TL" }
                                      </span>
                                    </Fragment>
                                  ) : (
                                    <span className='amount'>
                                      {finalProductPrice +
                            " TL" }
                                    </span>
                                  )}
                                </td>

                                <td className='product-quantity'>
                                    
                                   
                                     {cartItem.quantity}
                                      
                                  
                                </td>
                                <td className='product-subtotal'>
                                  {discountedPrice !== null
                                    ? 
                                      (
                                        finalDiscountedPrice * cartItem.quantity
                                      ).toFixed(2) +
                                      " TL" 
                                    : 
                                      (
                                        finalProductPrice * cartItem.quantity
                                      ).toFixed(2) +
                                      " TL" 
                                      }
                                </td>

                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className='col lg-12 d-flex'>
                      <div className="col lg-6"><h4>ÖDENECEK TOPLAM TUTAR (KDV Dahil)</h4> </div>
                      <div className="col lg-6 text-right mr-4"><h4>
                          {cartTotalPrice.toFixed(2) +
                            " TL" }
                        </h4></div>

                  </div>
                </div>
                </Fragment>
                )}
                </div>
                <p className="mt-2">Ürünlerin Cinsi ve türü, Miktarı, Marka/Modeli, Rengi, Satış Bedeli yukarıda belirtildiği gibidir.</p>
              <p>Yukarıdaki bölümde bankanıza iletilecek sipariş toplamının kaç taksitle ödeneceği bilgisi bulunmaktadır. Bankanız kampanyalar düzenleyerek sizin seçtiğiniz taksit adedinin daha üstünde bir taksit adedi uygulayabilir, taksit öteleme gibi hizmetler sunulabilir. Bu tür kampanyalar bankanızın inisiyatifindedir ve şirketimizin bilgisi dâhilinde olması durumunda sayfalarımızda kampanyalar hakkında bilgi verilmektedir. Kredi kartınızın hesap kesim tarihinden itibaren sipariş toplamı taksit adedine bölünerek kredi kartı özetinize bankanız tarafından yansıtılacaktır. Banka taksit tutarlarını küsurat farklarını dikkate alarak aylara eşit olarak dağıtmayabilir. Detaylı ödeme planınızın oluşturulması bankanız inisiyatifindedir.

</p>
<p>2) Kargo fiyatı sipariş toplam tutarına eklenmektedir. Ürün bedeline dahil değildir. Teslimat, anlaşmalı kargo şirketi aracılığı ile, Alıcı'nın yukarıda belirtilen adresinde elden teslim edilecektir. Teslim anında Alıcı'nın adresinde bulunmaması durumunda dahi Firmamız edimini tam ve eksiksiz olarak yerine getirmiş olarak kabul edilecektir. Bu nedenle, Alıcı'nın ürünü geç teslim almasından kaynaklanan her türlü zarar ile ürünün kargo şirketinde beklemiş olması ve/veya kargonun Firmamıza geri iade edilmesinden dolayı da oluşan giderler de Alıcı'ya aittir.</p>
             <p>3) Ürün MICOTA ve ALICI arasında başkaca bir sözleşme yok ise internet satış sözleşmesi tarihinden itibaren en geç 30 gün içerisinde teslim edilecektir. Ürününün teslim edilmesi anına kadar tüm sorumluluk firmamıza aittir.

</p>
             <p>4) "Tüketicinin hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin malı teslim aldığı veya sözleşmenin imzalandığı tarihten itibaren ondört gün içerisinde malı veya hizmeti reddederek sözleşmeden cayma hakkının var olduğunu ve cayma bildiriminin satıcı veya sağlayıcıya ulaşması tarihinden itibaren malı geri almayı taahhüt ederiz." Firmamızın yukarıda belirtilen yükümlülüklerini yerine getirmemesi hâlinde, cayma hakkı süresi 6 aydır. 14 günlük süre ile 6 aylık süre, malın teslimine ilişkin sözleşmelerde, tüketicinin malı teslim aldığı günden itibaren, diğer sözleşmelerde ise sözleşmenin akdedildiği günden itibaren işlemeye başlar. İş bu, "Ön Bilgilendirme Formunda" ve Mesafeli Sözleşmelere Dair Yönetmelikte belirtilen yükümlülüklerin, üç aylık süre içerisinde yerine getirilmesi hâlinde, 14 günlük cayma hakkı süresi, söz konusu yükümlülüklerin yerine getirildiği günden itibaren işlemeye başlar. Cayma hakkının kullanıldığına dair irade beyanının bu süre içinde yazılı olarak veya bir sürekli veri taşıyıcısıyla bildirilmesi yeterlidir.

</p>
             <p>5) Sipariş vermek için kullandığınız internet sitesinin kullanılması nedeniyle, ücret tarifesi ile ilgili olarak tüketicilere ilave bir maliyet yüklenmemektedir.

</p>
             <p>6) İş bu "Bilgilendirme Formunda" belirtilen fiyat dâhil tüm taahhütlerin geçerlik süresi 30 gündür.

</p>
             <p>7) Tüketicilerin şikâyet ve itirazları: Başvurularınızı, Gümrük ve Ticaret Bakanlığı tarafından her yıl Aralık ayında belirlenen parasal sınırlar dâhilinde (2013 yılı için Büyükşehir statüsünde bulunan illerde faaliyet gösteren Tüketici Sorunları Hakem Heyetlerinin yetkili olmalarına ilişkin parasal sınır 3.110,58 TL ve Büyükşehir statüsünde bulunmayan illerde faaliyet gösteren Tüketici Sorunları Hakem Heyetlerinin yetkili olmalarına ilişkin parasal sınır ise 1.191,52 TL'dir. Bahsedilen bedelin altındaki tutarlar için İlçe Tüketici Sorunları Hakem Heyeti Başkanlıklarına başvurulması gerekmektedir.) mal veya hizmeti satın aldığınız veya ikametgâhınızın bulunduğu yerdeki Tüketici Sorunları Hakem Heyetine veya Tüketici Mahkemesine yapabilirsiniz.

</p>
             <p>8) Ödemenin kredi kartı vb. ile harcama belgesi düzenlenmeksizin yapıldığı durumlarda, kartın bir başkası tarafından hukuka aykırı şekilde kullanılması hâlinde; 23/2/2006 tarihli 5464 sayılı Banka Kartları ve Kredi Kartları Kanunu ve 10/3/2007 tarihli ve 26458 sayılı Resmî Gazetede yayımlanan Banka Kartları ve Kredi Kartları Hakkında Yönetmelik hükümlerine göre işlem yapılır.

</p>
<p>9) Alıcının temerrüde düşmesinin hukuki sonuçları hususunda, Tüketicinin Korunması Hakkında Kanunun "Taksitle Satış" başlıklı 6/A maddesi hükümleri uygulanır.

</p>
<p>10) Ürünler'in tanımı, birim tutarı, adedi ve ödeme koşullarına ilişkin bilgiler aşağıda belirtildiği gibi olup, bu bilgiler Alıcı tarafından da onaylanmıştır.

</p>
                        <p>{today.toLocaleString("en-GB")}</p>
              </div>
                      </Modal>
                     
    )
}