import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

import "./documents.css";

export default function Cerezler({ location }) {
  const { pathname } = location;
  return (
    <Fragment>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
        Anasayfa
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Güvenlik
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        <Breadcrumb />
        <div className='container mt-5'>
          <div className='welcome-content text-center'>
            <h4>Websitemizde çerezler(cookies) kullanılmaktadır.</h4>
            <h1 className='mt-3'>ÇEREZ POLİTİKASI</h1>
            <div className='text-left'>
              <p>
                micota.com.tr ve mobil uygulamalarında (t&uuml;m&uuml; birlikte
                &ldquo;Platform&rdquo; olarak anılacaktır) muhtelif t&uuml;rde
                &ccedil;erezler kullanılmaktadır. Bunlar oturum
                &ccedil;erezleri, kalıcı &ccedil;erezler, teknik
                &ccedil;erezler, otantikasyon &ccedil;erezleri, flash
                &ccedil;erezler, kişiselleştirilme &ccedil;erezleri, analtik
                &ccedil;erezler ve &uuml;&ccedil;&uuml;nc&uuml; parti
                &ccedil;erezleri gibi tanımlama bilgileridir. &Ccedil;erez
                kullanılmasını tercih etmezseniz tarayıcınızın ayarlarından
                &ccedil;erez&#39;leri silebilir ya da engelleyebilirsiniz. Ancak
                Platform&#39;un kullanımını etkileyebileceğini hatırlatmak
                isteriz. Tarayıcınızdan &ccedil;erez ayarlarınızı
                değiştirmediğiniz s&uuml;rece bu Platform&#39;da &ccedil;erez
                kullanımını kabul ettiğiniz varsayılacaktır. Toplanan verilerle
                ilgili d&uuml;zenlemelere internet sitemizde ve uygulamamızda
                yer alan Gizlilik İlkeleri Metni&#39;nden ulaşabilirsiniz.
              </p>
              <h3>PLATFORM&#39;DA KULLANILAN &Ccedil;EREZLER</h3>
              <h4>&Ccedil;erez Nedir ve Neden Kullanılmaktadır?</h4>
              <p>
                &Ccedil;erezler, ziyaret ettiğiniz internet siteleri tarafından
                tarayıcılar aracılığıyla cihazınıza veya ağ sunucusuna depolanan
                k&uuml;&ccedil;&uuml;k metin dosyalarıdır. &Ccedil;erezler
                konusunda daha detaylı bilgi almak i&ccedil;in:&nbsp;
                <a href='http://www.aboutcookies.org/'>
                  http://www.aboutcookies.org/
                </a>{" "}
                ve&nbsp;
                <a href='http://www.allaboutcookies.org/'>
                  http://www.allaboutcookies.org/
                </a>{" "}
                adreslerini ziyaret edebilirsiniz. Platform&#39;da &ccedil;erez
                kullanılmasının başlıca ama&ccedil;ları aşağıdaki gibidir:
                Platform&#39;un işlevselliğini ve performansını arttırarak
                sizlere sunulan hizmetleri geliştirmek. Platform&#39;u
                iyileştirmek ve Platform &uuml;zerinden yeni &ouml;zellikler
                sunmak ve sunulan &ouml;zellikleri sizlerin tercihlerine
                g&ouml;re kişiselleştirmek. Platform&#39;un, sizin ve Micota
                Kuruluşları&#39;nın hukuki ve ticari g&uuml;venliğinin teminini
                sağlamak.
              </p>
              <h4>
                Platform&#39;da Kullanılan &Ccedil;erezlerin S&uuml;releri
              </h4>
              <h4>Oturum &Ccedil;erezleri</h4>
              <i>(Session Cookies)</i>
              <br />
              <br />
              <p>
                Oturum &ccedil;erezleri ziyaret&ccedil;ilerimizin Platform&#39;u
                ziyaretleri s&uuml;resince kullanılan, tarayıcı kapatıldıktan
                sonra silinen ge&ccedil;ici &ccedil;erezlerdir. Bu t&uuml;r
                &ccedil;erezlerin kullanılmasının temel amacı ziyaretiniz
                s&uuml;resince Platform&#39;un d&uuml;zg&uuml;n bir
                bi&ccedil;imde &ccedil;alışmasının teminini sağlamaktır.
                &Ouml;rneğin; birden fazla sayfadan oluşan
                &ccedil;evrimi&ccedil;i formları doldurmanız sağlanmaktadır.
              </p>
              <br />
              <h4>Kalıcı &Ccedil;erezler</h4>
              <i>(Persistent Cookies)</i>
              <br />
              <br />
              <p>
                Kalıcı &ccedil;erezler Platform&#39;un işlevselliğini artırmak,
                ziyaret&ccedil;ilerimize daha hızlı ve iyi bir hizmet sunmak
                amacıyla kullanılan &ccedil;erez t&uuml;rleridir. Bu t&uuml;r
                &ccedil;erezler tercihlerinizi hatırlamak i&ccedil;in kullanılır
                ve tarayıcılar vasıtasıyla cihazınızda depolanır. Kalıcı
                &ccedil;erezlerin bazı t&uuml;rleri; Platform&#39;u kullanım
                amacınız gibi hususlar g&ouml;z &ouml;n&uuml;nde bulundurarak
                sizlere &ouml;zel &ouml;neriler sunulması i&ccedil;in
                kullanılabilmektedir. Kalıcı &ccedil;erezler sayesinde
                Platform&#39;u aynı cihazla tekrardan ziyaret etmeniz durumunda,
                cihazınızda Platform tarafından oluşturulmuş bir &ccedil;erez
                olup olmadığı kontrol edilir ve var ise, sizin Platform&#39;u
                daha &ouml;nce ziyaret ettiğiniz anlaşılır ve size iletilecek
                i&ccedil;erik bu doğrultuda belirlenir ve b&ouml;ylelikle
                sizlere daha iyi bir hizmet sunulur.
              </p>
              <h4>Platformlarda Kullanılan &Ccedil;erezlerin Kategorileri</h4>
              <h4>Teknik &Ccedil;erezler</h4>
              <i>(Technical Cookies)</i>
              <br />
              <br />
              <p>
                Teknik &ccedil;erezler ile Platform&#39;un &ccedil;alışmasının
                sağlanmakta, Platform&#39;un &ccedil;alışmayan sayfaları ve
                alanları tespit edilmektedir.
              </p>
              <h4>Otantikasyon &Ccedil;erezleri</h4>
              <i>(Authentication Cookies)</i>
              <br />
              <br />
              <p>
                Ziyaret&ccedil;iler, şifrelerini kullanarak Platform&#39;a giriş
                yapmaları durumunda, bu t&uuml;r &ccedil;erezler ile,
                ziyaret&ccedil;inin Platform&#39;da ziyaret ettiği her bir
                sayfada Platform kullanıcısı olduğu belirlenerek, kullanıcının
                her sayfada şifresini yeniden girmesi &ouml;nlenir.
              </p>
              <h4>Flash &Ccedil;erezleri</h4>
              <i>(Flash Cookies)</i>
              <br />
              <br />
              <p>
                Platform&#39;da yer alan g&ouml;r&uuml;nt&uuml; veya ses
                i&ccedil;eriklerini etkinleştirmek i&ccedil;in kullanılan
                &ccedil;erez t&uuml;rleridir.
              </p>
              <h4>Kişiselleştirme &Ccedil;erezleri</h4>
              <i>(Customization Cookies)</i>
              <br />
              <p>
                Kullanıcıların tercihlerini farklı internet sitesinin farklı
                sayfalarını ziyarette de hatırlamak i&ccedil;in kullanılan
                &ccedil;erezlerdir. &Ouml;rneğin, se&ccedil;miş olduğunuz dil
                tercihinizin hatırlanması.
              </p>
              <h4>Analitik &Ccedil;erezler</h4>
              <i>(Analytical Cookies)</i>
              <br />
              <br />
              <p>
                Analitik &ccedil;erezler ile Platform&#39;u ziyaret edenlerin
                sayıları, Platform&#39;da g&ouml;r&uuml;nt&uuml;lenen sayfaların
                tespiti, Platform ziyaret saatleri, sayfa kaydırma hareketleri
                gibi analitik sonu&ccedil;ların &uuml;retimini sağlayan
                &ccedil;erezlerdir.
              </p>
              <h3>&Ccedil;erez A&ccedil;ıklama, S&uuml;re ve Tercihler</h3>
              <h4>Analitik &Ccedil;erezler</h4>
              <h4>Reklam</h4>
              <p>
                Davranışsal ve hedef odaklı reklamların ziyaret&ccedil;ilere
                g&ouml;sterilmesi amacıyla kullanılmaktadır. &Ccedil;erezin ilk
                kurulumundan ya da son g&uuml;ncellenmesinden itibaren 6 ay
                Tarayıcı ayarları aracığıyla kabul etmek ya da reddetmek
                m&uuml;mk&uuml;n&uuml;d&uuml;r.
              </p>
              <h4>Pazar Analizi</h4>
              <p>
                Pazar analizi y&uuml;r&uuml;t&uuml;lmesi amacıyla
                kullanılmaktadır. &Ccedil;erezin ilk kurulumundan ya da son
                g&uuml;ncellenmesinden itibaren 360 g&uuml;n Tarayıcı ayarları
                aracığıyla kabul etmek ya da reddetmek
                m&uuml;mk&uuml;n&uuml;d&uuml;r.
              </p>
              <h4>Kampanya/ promosyon</h4>
              <p>
                Kampanyaların etkisinin hesaplanması i&ccedil;in
                kullanılmaktadır. &Ccedil;erezin ilk kurulumundan ya da son
                g&uuml;ncellenmesinden itibaren 360 g&uuml;n Tarayıcı ayarları
                aracığıyla kabul etmek ya da reddetmek
                m&uuml;mk&uuml;n&uuml;d&uuml;r.
              </p>
              <h4>Facebook</h4>
              <p>
                Bu t&uuml;r &ccedil;erezler, Facebook &uuml;yelerinin (veya
                &uuml;ye olmayan kişilerin) pazar analizi ve &uuml;r&uuml;n
                gelişimi amacıyla izlenmesini sağlar. &Ccedil;erezin ilk
                kurulumundan ya da son g&uuml;ncellenmesinden itibaren 360
                g&uuml;n Tarayıcı ayarları aracığıyla kabul etmek ya da
                reddetmek m&uuml;mk&uuml;n&uuml;d&uuml;r.
              </p>
              <h4>Google analitikleri</h4>
              <p>
                Bu t&uuml;r &ccedil;erezler t&uuml;m istatistiksel verilerin
                toplanmasını, bu şekilde Platform&#39;un sunumunun ve
                kullanımının geliştirilmesini sağlar. Google, bu istatistiklere
                toplumsal istatistikler ve ilgilere ilişkin veriler eklemek
                suretiyle, kullanıcıları daha iyi anlamamızı sağlar.
                Platform&#39;da, Google Analitik &ccedil;erezleri
                kullanmaktadır. S&ouml;z konusu &ccedil;erezler ile toplanan
                veriler, ABD&#39;de bulunan Google sunucularına aktarılmakta ve
                s&ouml;z konusu veriler Google&#39;ın veri koruma ilkeleri ile
                uyumlu olarak muhafaza edilmektedir. Google&#39;ın analitik veri
                işleme faaliyetleri ve kişisel verilerin korunması konusundaki
                ilkeler hakkında daha fazla bilgi sahibi olmak i&ccedil;in
                burayı tıklayabilirsiniz:
              </p>
              <h4>
                <a target='blank' href='http://www.allaboutcookies.org/'>
                  &Ccedil;erezlerin Kontrol&uuml;{" "}
                </a>
              </h4>
              <h4>Kaynak site</h4>
              <p>
                Kaynak site kullanıcıların tercihlerini daha iyi anlamak ve
                ilgili i&ccedil;erikler sunmak i&ccedil;in kullanılır.
                &Ccedil;erezin ilk kurulumundan ya da son g&uuml;ncellenmesinden
                itibaren 360 g&uuml;n Tarayıcı ayarları aracığıyla kabul etmek
                ya da reddetmek m&uuml;mk&uuml;n&uuml;d&uuml;r.
              </p>
              <h4>Son ziyaret ve hareket</h4>
              <p>
                Kullanıcılara Platform&#39;u son ziyaretlerinden itibaren neler
                değiştiğine ilişkin g&uuml;ncellemelerde bulunmak ve
                kullanıcıların tercihlerini daha iyi anlamak i&ccedil;in
                kullanılır. &Ccedil;erezin ilk kurulumundan ya da son
                g&uuml;ncellenmesinden itibaren 360 g&uuml;n Tarayıcı ayarları
                aracığıyla kabul etmek ya da reddetmek
                m&uuml;mk&uuml;n&uuml;d&uuml;r.
              </p>
              <h4>Teknik &Ccedil;erezler</h4>
              <h4>Oturum</h4>
              <p>
                Oturum &ccedil;erezleri oturumun s&uuml;rekliliğinin sağlanması
                amacıyla kullanılır. &Ccedil;erezin ilk kurulumundan ya da son
                g&uuml;ncellenmesinden itibaren 90 g&uuml;n Tarayıcı ayarları
                aracığıyla kabul etmek ya da reddetmek
                m&uuml;mk&uuml;n&uuml;d&uuml;r.
              </p>
              <h4>Otantikasyon &Ccedil;erezleri</h4>
              <h4>Kullanıcı Kimliği</h4>
              <p>
                Kullanıcı kimliği &ccedil;erezler, kullanıcıların yalnızca kendi
                bilgilerini g&ouml;rmeleri i&ccedil;in kullanılır.
                &Ccedil;erezin ilk kurulumundan ya da son g&uuml;ncellenmesinden
                itibaren 360 g&uuml;n Tarayıcı ayarları aracığıyla kabul etmek
                ya da reddetmek m&uuml;mk&uuml;nd&uuml;r.
              </p>
              <h4>
                &Ccedil;erezlerin Kullanımı Veri Sahipleri Tarafından
                Engellenebilir mi?
              </h4>
              <p className='mb-5'>
                Tarayıcınızın ayarlarını değiştirerek &ccedil;erezlere ilişkin
                tercihlerinizi kişiselleştirme imkanına sahipsiniz.
                &Ccedil;erezleri devre dışı bırakmanız halinde Platform&#39;un
                bazı &ouml;zellikleri işlevselliğini kaybedebilir,
                Platform&#39;daki kullanıcı deneyiminiz etkilenebilir veya
                Platform&#39;u ziyaret ettiğinizde sizin i&ccedil;in
                kişiselleştirilmiş olan bilgilere ulaşamayabilirsiniz.
                Platform&#39;u g&ouml;r&uuml;nt&uuml;lemek i&ccedil;in farklı
                cihazlar kullanıyorsanız (&ouml;rn. bilgisayar, akıllı telefon,
                tablet vb.), bu cihazların her birindeki her tarayıcının
                &ccedil;erez tercihlerinize uygun şekilde ayarlanmış olduğundan
                emin olmanız gerekir.
              </p>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
}

Cerezler.propTypes = {
  location: PropTypes.object,
};
