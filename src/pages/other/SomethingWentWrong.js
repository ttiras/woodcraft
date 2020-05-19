import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const SomethingWentWrong = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Micota | Bir Sorun Oluştu</title>
        <meta
          name="description"
          content="404 page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Anasayfa</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Sunucu Sorunu
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h1>500</h1>
                  <h2>SUNUCUYLA BAĞLANTI KURULAMADI</h2>
                  <p>
                    Sunucu bağlantısı sırasında bir hata oluştu.
                  </p>
                  <form className="searchform mb-50">
                    <input
                      type="text"
                      name="search"
                      id="error_search"
                      placeholder="Search..."
                      className="searchform__input"
                    />
                    <button type="submit" className="searchform__submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                  <Link to={process.env.PUBLIC_URL + "/"} className="error-btn">
                    Tekrar Dene
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

SomethingWentWrong.propTypes = {
  location: PropTypes.object
};

export default SomethingWentWrong;
