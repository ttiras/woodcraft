import React from "react";

const LanguageCurrencyChanger = () => {
  return (
    <div className="language-currency-wrap">
      <div className="same-language-currency language-style">
        <span>
        <a href="//www.instagram.com/micotastore" title="Instagram">
          <i className="fa fa-instagram" title="MiCoTa Instagram"/>
          </a>
        </span>
       
      </div>
      <div className="same-language-currency use-style">
        <span>
         <i className="fa fa-facebook" title="MiCoTa Facebook" />
        </span>
        
      </div>
      <div className="same-language-currency">
      <span>
    <a href="https://wa.me/905302225663" target="blank" title="İletişime Geç">
      <i className="fa fa-whatsapp" /></a></span>
      </div>
    </div>
  );
};

export default LanguageCurrencyChanger;
