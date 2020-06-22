import React from "react";
import { Link } from "react-router-dom";
import Instagram from "./Instagram";


const ImageSliderOneSingle = ({ data, sliderClass }) => {
  return (
    <div className={`single-image ${sliderClass ? sliderClass : ""}`}>
      <Link to={process.env.PUBLIC_URL + "/single-image-swiper-slide"}>
        <Instagram url={data.link} />
      </Link>
    </div>
  );
};

export default ImageSliderOneSingle;
