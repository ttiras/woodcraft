import PropTypes from "prop-types";
import React from "react";

const SectionTitleAtelier = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>ATÖLYEMİZ</h5>
          <p>
          Çukurova güçlü, canlı ve yaşam dolu, bereketli topraklar dendiğinde ilk akla gelen, sıcak kanlı konuksever insanların coğrafyası. Bu topraklarda çeşit çeşit ağaçlar yetişmekte, ülkemizin ahşap işçiliği endüstrisine ciddi bir kaynak sağlamaktadır. </p>
          <div className="text-center"><video src="/assets/atolye.m4v" width="750" height="500" controls>
     </video></div>
          <p>Doğanın bize sunduğu güzelliklerin kıymetini bilerek, incelikle çalıştığımız atölyemizde evlerinizi güzelleştirecek işlevsel ürünler üretiyoruz. Hem havası hem insanı sıcak bölgemizden çıkan bu ürünlerin evlerinize dekoratif olarak sıcaklık katmasını umuyoruz. {" "}</p>
         </div>
      </div>
      <div className="text-center">
        <picture>
        <source type="image/webp" srcSet="/assets/img/ahşap_atolye.webp" />
        <img src="/assets/img/ahşap_atolye.jpeg" alt='Ahşap atölyesi kahve sunumu tepsi supla'/>
      </picture>
      <picture className="ml-5">
        <source type="image/webp" srcSet="/assets/img/ahşap_işçiliği.webp" />
        <img src="/assets/img/ahşap_işçiliği.jpeg" alt='Ahşap atölyesi kahve sunumu tepsi supla'/>
      </picture>
      </div>
    </div>
  );
};

SectionTitleAtelier.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleAtelier;
