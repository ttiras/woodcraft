import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import './HeroSlider.css'
import SliderImageFallback from "../../helpers/SliderImageFallback";


const HeroSliderOneSingle = ({ data, sliderClassName }) => {
  return (
    <div
      className={`single-slider slider-height-1 bGround ${
        sliderClassName ? sliderClassName : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-content slider-animated-1">
            <h3 className="animated foreText">{data.subtitle2}</h3>
              <h3 className="animated foreText">{data.subtitle}</h3>
              <h1 className="animated foreText"><span>{data.title}</span></h1>
              <div className="slider-btn btn-hover">
                <Link
                  className="animated mainButton"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  HEMEN AL
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-single-img slider-animated-1">
              <SliderImageFallback className="animated img-fluid"
                path={data.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string
};

export default HeroSliderOneSingle;
