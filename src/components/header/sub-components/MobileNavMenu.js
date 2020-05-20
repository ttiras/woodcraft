import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["anasayfa"]}
              
            </Link>
            
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {" "}
              {strings["ürünler"]}
              
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog-no-sidebar"}>
              {strings["blog"]}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {strings["iletişim"]}
            </Link>
          </li>
        </ul>
      </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(MobileNavMenu);
