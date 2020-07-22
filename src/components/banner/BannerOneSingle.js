import PropTypes from "prop-types";
import React from "react";
import './Banner.css'

const BannerOneSingle = ({ spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div
        className={`single-banner ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <video width="100%" loop autoPlay muted playsInline>
          <source src="/assets/MiCoTa_konforu.m4v" />
        </video>
        <div className="banner-content fixed">
          <span>Orta sehpa çok uzak geliyorsa</span>
        </div>
      </div>
    </div>
  );
};

BannerOneSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerOneSingle;
