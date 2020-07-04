import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>BİZ</h5>
          <h1>MiCoTa nasıl doğdu?</h1>
          <p>
          Bu ürün gerçek bir ihtiyaçtan doğdu aslında. Kahveyi çok seviyorum ve günün en keyifli anları benim için kahve kokusuyla buluştuğum zamanlar. Masalar veya sehpalar, canım kahvemi içerken aramda hep bir mesafe varmış hissi yaratıp aynı zamanda da işin keyif kısmına gölge düşürüp zahmet yaratan unsurlardı. Kahvem yakınımda olsun istiyordum, ama keyif alayım derken sıcacık kahvem üzerime dökülsün istemezdim. Peki nasıl olacaktı da hem kahvemi sıcacık ve zahmetsizce içip hem de üzerime dökmeyecek ve her yudumda masa veya sehpaya eğilip doğrulma zahmetine girmeyecektim. Öyle bir ürün tasarlamalıydım ki sadece kendim için değil misafirlerim de geldiğinde zarif bir sunum sağlamalıydım. İşte MiCoTa fikri böyle doğdu, mini coffee table; yani mini kahve masası. MiCoTa’m öyle zarif ve hafif ki benimle her yere gelebiliyor, hatta kahvemi dahi onunla servis edebiliyorum. Ayrıca kahvemin dökülmemesi için güvenli bir zemin sağlıyor, ortada yer kaplamıyor ve misafirler geldiğinde sehpalar etrafı daraltmıyor. Odada koltuk kenarında veya koltuk üzerinde, yatakta, balkonda, bahçede, her yerde MiCoTa ile kahvem hemen elimin altında, eğilmeden ulaşabileceğim mesafede tam bir “keyif an”ı yaşatıyor. El yapımı MiCoTa’lar kahve içmenin en keyifli, ergonomik ve doğal yolu. {" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
