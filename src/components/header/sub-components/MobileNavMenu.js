import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { useAuthState } from '../../../auth/auth-context'
import fire from "../../../auth/firebase";

const MobileNavMenu = ({ strings }) => {
  const state = useAuthState()

  const handleLogout = async () => {
    await fire.auth().signOut();
  };

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
        <div className='account-dropdown'>
          {state.user && !state.user.isAnonymous ? (
            <ul>
              <li onClick={handleLogout}>
                <Link to={""}>Çıkış</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>
                  Hesabım
                </Link>
              </li>
              {state.role === "MANAGER" && (
                <li>
                <Link to={process.env.PUBLIC_URL + "/dashboard"}>
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          ) : (
            <ul>
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  Giriş
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>
                  Kayıt
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(MobileNavMenu);
