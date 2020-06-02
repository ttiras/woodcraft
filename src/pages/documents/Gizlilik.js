import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

export default function Gizlilik({ location }) {
  const { pathname } = location;
  return (
    <Fragment>
      <Helmet>
        <title>Micota | Gizlilik İlkeleri</title>
        <meta
          name='description'
          content='Alışverii gizlilik sözleşmesi.'
        />
      </Helmet>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
        Anasayfa
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Gizlilik İlkeleri
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        <Breadcrumb />
        <div className='container mt-5'>
          <div className='welcome-content text-center'>
            <h5>Gizliliğiniz bizim için önemli.</h5>
            <h1 className='mt-3'>GİZLİLİK POLİTİKASİ</h1>
            <div className='text-left'>
              <p className='w-100'>
                Micota, alışveriş yaparken kullanmış olduğunuz kişisel
                bilgilerinizi (teslimat/fatura adresleri, telefon numaraları,
                vs.) başka kurum ve kuruluşlarla kesinlikle paylaşmayacaktır.
              </p>
              <p className='w-100'>
                Sipariş verirken kolaylık yaşamanız için bir takım bilgiler
                sizin onayınız doğrultusunda, size ait üyelik hesabınızda
                saklanmaktadır. Bu bilgiler sadece sipariş takibinizin daha
                hızlı ve güvenli bir şekilde ulaşmasını sağlamak için
                kullanılacaktır. Micota, kişisel bilgileri kesinlikle özel ve
                gizli tutmayı; bunu bir sır saklama yükümlülüğü olarak addetmeyi
                ve gizliliğin sağlanması ve sürdürülmesi, gizli bilginin
                tamamının veya herhangi bir kısmının kamu alanına girmesini veya
                yetkisiz kullanımını veya üçüncü bir kişiye ifşasını önlemek
                için gerekli tüm tedbirleri almayı ve gerekli özeni göstermeyi
                taahhüt etmektedir.{" "}
              </p>
              <p className='w-100 mb-5'>
                Micota’nın yürürlükteki yasalar uyarınca ve idari, adli ve diğer
                resmi makamların talebi üzerine bu bilgileri kanunlar
                çerçevesinde ifşa etme hakkı saklıdır.{" "}
              </p>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
}

Gizlilik.propTypes = {
  location: PropTypes.object,
};
