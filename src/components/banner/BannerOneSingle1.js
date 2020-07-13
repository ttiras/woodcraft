import PropTypes from "prop-types";
import React from "react";
import './Banner.css'

const BannerOneSingle1 = ({ spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div
        className={`single-banner ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
                <picture>
      <source type="image/webp" srcSet="/assets/Kolçak_Tepsisi.webp"/>
      <img src="/assets/Kolçak_Tepsisi.jpeg" alt='kolçak tepsisi kahve çay sunumu ahşap yuvarlak tepsi ve supla'/>
    </picture>
        <div className="banner-content fixed">
          <span>Kolçak tepsisi tüm koltuğu kaplıyorsa</span>
        </div>
      </div>
    </div>
  );
};

BannerOneSingle1.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerOneSingle1;
