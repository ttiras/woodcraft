import PropTypes from "prop-types";
import React from "react";
import BannerOneSingle from "../banner/BannerOneSingle.js";
import BannerOneSingle1 from "../banner/BannerOneSingle1.js";
import BannerOneSingle2 from "../banner/BannerOneSingle2.js";
import "./Section.css";

const SectionTitleMicota = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area mt-5 mb-5${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className='container'>
        <div className='welcome-content text-center'>
          <h5 className="mt-5">KAHVE VE ÇAY SUNUMLARINI KOLAYLAŞTIRIYORUZ</h5>
          <h3 >MiCoTa'yla Tanışın</h3>
        </div>
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

SectionTitleMicota.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default SectionTitleMicota;
