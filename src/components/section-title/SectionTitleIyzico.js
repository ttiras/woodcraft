import PropTypes from "prop-types";
import React from "react";
import "./Section.css";

const SectionTitleIyzico = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area mt-5 mb-5${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className='container'>
        <div className='welcome-content text-center'>
          <div className='text-center mt-5'>
            <picture className='mr-2'>
              <source
                type='image/webp'
                srcSet='/assets/img/iyzico_guvenli_odeme.webp'
              />
              <img
                src='/assets/img/iyzico_guvenli_odeme.jpeg'
                alt='Ahşap atölyesi kahve sunumu tepsi supla'
              />
            </picture>
          </div>
          <h5 className="mt-5">IYZICO</h5>
          <h3 >Ödemelerinizi Güvenle Yapın</h3>
          <p>
            MiCoTa üzerinde gerçekleştirdiğiniz ödeme işlemlerinizde, hiçbir
            kart bilginizi paylaşmanıza gerek kalmadan, iyzico ödeme
            sistemlerine yönlendirilirsiniz. Tüm ödeme işlemlerinizi saniyeler
            içinde sadece birkaç tıkla tamamlayabilirsiniz.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleIyzico.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default SectionTitleIyzico;
