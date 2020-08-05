import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

export default function Returns({ location }) {
  const { pathname } = location;
  return (
    <Fragment>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
        Anasayfa
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        İade
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        <Breadcrumb />
        <div className='container mt-5 mb-5'>
          <div className='welcome-content text-center'>
            <h5>MiCoTa'da kolay iade ve değişim var</h5>
            <h1 className='mt-3'>İADE VE DEĞİŞİM</h1>
            <div className='text-left'>
              <p className='w-100 ml-3'>
                Online shop üzerinden satın almış olduğunuz ürünlerin değişim
                işlemlerini web sitemiz iletişim bilgileri üzerinden
                gerçekleştirebilirsiniz. Kullanıcı hatası bulunan ve başka bir
                müşteri tarafından satın alınamayacak durumda olan ürünlerin
                değişimi kabul edilmemektedir.
              </p>
              <p className='w-100 ml-3'>
                İade etmek istediğiniz ürünler için kargo ücreti firmamız
                tarafından karşılanmaktadır. Ücretsiz gönderiden faydalanabilmek
                için, paketinizi anlaşmalı olduğumuz kargo firması ile iade
                adresimize ulaştırmanız gerekmektedir. Diğer kargo şirketleriyle
                gönderilen iadelerde kargo ücreti alıcıya aittir. Alıcı ödemeli
                gönderilmesi durumunda kabul edilmeyecektir.
              </p>
              <p className='w-100 ml-3'>
                <strong>İade Adresimiz: </strong>
                MiCoTa Store Huzurevleri Mh. 77106 sk. Onurkent sitesi apt. no:1
                Çukurova, Adana
              </p>

              <p className='w-100 ml-3'>
                İade etmek istediğiniz ürünlerle ilgili olarak web sitemiz
                üzerindeki bir kanaldan bizimle iletişime geçerek ilgili
                prosedürü başlatabilirsiniz.
              </p>
              <p className='w-100 ml-3'>
                Kullanıcı hatası bulunan ve başka bir müşteri tarafından satın
                alınamayacak durumda olan ürünlerin iadesi kabul edilmemektedir.
              </p>
              <p className='w-100 ml-3'>
                Gerekli incelemelerin ardından kredi kartı iadesi anında
                yapılmaktadır.{" "}
              </p>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
}

Returns.propTypes = {
  location: PropTypes.object,
};
