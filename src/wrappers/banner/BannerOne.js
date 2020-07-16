import PropTypes from "prop-types";
import React from "react";
import BannerOneSingle from "../../components/banner/BannerOneSingle.js";
import BannerOneSingle1 from "../../components/banner/BannerOneSingle1.js";
import BannerOneSingle2 from "../../components/banner/BannerOneSingle2.js";



const BannerOne = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`banner-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <BannerOneSingle
            spaceBottomClass="mb-30"
          />
          <BannerOneSingle1
            spaceBottomClass="mb-30"
          />
          <BannerOneSingle2
            spaceBottomClass="mb-30"
          />
        </div>
      </div>
    </div>
  );
};

BannerOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerOne;
