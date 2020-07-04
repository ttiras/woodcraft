import PropTypes from "prop-types";
import React from "react";
import { changeLanguage } from "redux-multilanguage";

const LanguageCurrencyChanger = ({
  currency,
  setCurrency,
  currentLanguageCode,
  dispatch
}) => {
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    dispatch(changeLanguage(languageCode));
  };

  const setCurrencyTrigger = e => {
    const currencyName = e.target.value;
    setCurrency(currencyName);
  };

  return (
    <div className="language-currency-wrap">
      <div className="same-language-currency language-style">
        <span>
          <i className="fa fa-instagram" title="MiCoTa Instagram"/>
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

LanguageCurrencyChanger.propTypes = {
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

export default LanguageCurrencyChanger;
