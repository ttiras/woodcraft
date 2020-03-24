import PropTypes from "prop-types";
import React from "react";

const Renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="timer timer-style">
      <div>
        <span className="cdown day">
          {days} <p>Gün</p>
        </span>
        <span className="cdown hour">
          {hours} <p>Saat</p>
        </span>
        <span className="cdown minutes">
          {minutes} <p>Dakika</p>
        </span>
        <span>
          {seconds} <p>Saniye</p>
        </span>
      </div>
    </div>
  );
};

Renderer.propTypes = {
  days: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number
};

export default Renderer;
