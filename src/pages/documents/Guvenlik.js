import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

export default function Guvenlik({ location }){
    const { pathname } = location;
    return(
        <Fragment>
      <MetaTags>
        <title>Micota | Güvenlik</title>
        <meta
          name="description"
          content="About page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Anasayfa</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Güvenlik
      </BreadcrumbsItem>
        <LayoutOne headerTop="visible">
        <Breadcrumb />
        <div className='container mt-5'>
        <div className='welcome-content text-center'>
          <h5>Kredi kartı ödemeleri Türkiye'nin en iyi ödeme sistemi olan iyzico tarafından gerçekleştirilmektedir.</h5>
          <h1 className='mt-3'>GÜVENLİK</h1>
          <div className='text-left'>
          <p className='w-100'>
          Site’de kredi kartı ile alışveriş yapmak aşağıdaki güvenlik protokollerine tabidir:   
          </p>
          <p className='w-100 ml-3'>Ödeme işlermleri için Türkiye'nin lider ödeme sistemi iyzico websitesine yönlendirilirsiniz ve tüm bilgileri ilgili web sayfası üzerinde girersinin.</p>
          <p className='w-100 ml-3'>Kişisel bilgileriniz, kart numaranız ve şifreleriniz kayıt edilmez, saklanmaz.</p>
          <p className='w-100 ml-3'>128bit SSL şifrelemesi kullanılmaktadır.</p>
          <p className='w-100 ml-3'>3D Secure ile güvenli kredi kartı kullanımı sunulmaktadır.</p>
          <p className='w-100 mb-5'>Güvenlik işlemleri sebebiyle, kayıtlı bulunan telefon numaranızın doğru olduğundan emin olunuz, siparişiniz ile ilgili her türlü bilgilendirme için sisteme girmiş olduğunuz numaralar ve e-posta adresiniz kullanılacaktır. İşlem Güvenliği Site' de alışverişleriniz SSL(Secure Socket Layer) sertifikası garantisi altındadır. SSL sertifikasının görevi, kullanıcı bilgisayarı ile sitenin bulunduğu ana makine(server) arasındaki bilgi akışının güvenli olarak yapılmasını sağlamaktır. Bu sayede ziyaretçi-sunucu arasındaki bilgiler şifrelenmiş olarak paketlenir ve ancak kullanıcı tarayıcısı(browser) veya sunucu tarafından çözülür. Böylelikle kullanıcı tarafından sunucuya gönderilecek önemli bilgiler, kredi kartı, üye bilgileri, vs. sunucuya ulaşıncaya kadar geçeceği network sistemlerinde okunamaz veya alınamaz.{" "}</p>
          </div>
        </div>
      </div>
      </LayoutOne>
      </Fragment>
    )
}

Guvenlik.propTypes = {
    location: PropTypes.object
  };