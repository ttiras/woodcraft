import PropTypes from "prop-types";
import React from "react";
import SubscribeEmail from "./sub-components/SubscribeEmail";

const FooterNewsletter = ({ spaceBottomClass, spaceLeftClass, sideMenu }) => {
  return (
    <div
      className={`footer-widget ${spaceBottomClass ? spaceBottomClass : ""} ${
        sideMenu ? "ml-ntv5" : spaceLeftClass ? spaceLeftClass : ""
      }`}
    >
      <div className="footer-title">
        <h3>BİZDEN HABERLER</h3>
      </div>
      <div className="subscribe-style">
        <p>Yeni ürünler ve indirimlerle ilgili bilgilendirmeleri almak için kayıt olabilirsin.</p>
        {/* subscribe email */}
        <SubscribeEmail mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
      </div>
      <div className="mt-3">
        <img className="mw-100" alt="iyzico ödeme sistemleri" src="/assets/logo-band.png" />
      </div>
    </div>
  );
};

FooterNewsletter.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string
};

export default FooterNewsletter;
