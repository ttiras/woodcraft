import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MenuCart from "./sub-components/MenuCart";
import { deleteFromCart } from "../../redux/actions/cartActions";
import { useAuthState } from '../../auth/auth-context'
import fire from '../../auth/firebase'
import { useHistory } from 'react-router-dom'

import './IconGroup.css'

const IconGroup = ({
  currency,
  cartData,
  wishlistData,
  compareData,
  deleteFromCart,
  iconWhiteClass
}) => {
  const state = useAuthState()
  const history = useHistory()
  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  const handleLogout = async () => {
    await fire.auth().signOut()
  }

  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
      {state.role === 'MANAGER'&& <div>
        <Link to={process.env.PUBLIC_URL + '/orders'}>
        <button className='active ordersIcon'>Siparişler</button>
        </Link>
      </div>}
      {state&& state.user&&state.user.name&&  <span className='displayname'>{state.user.name}</span>}
      {state&& state.user&&state.user.displayName&&  <span className='displayname'>{state.user.displayName.split(' ')[0]}</span>}
      <div className="same-style account-setting d-none d-lg-block">
        <button
          className="account-setting-active"
          onClick={e => handleClick(e)}
        >
          
          <i className="pe-7s-user-female" /> 
        </button>
        <div className="account-dropdown">
          {state.user&& !state.user.isAnonymous ?
          <ul>
            <li onClick={handleLogout}>
              <Link to={''}>
                Çıkış
              </Link>
              
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>
                my account
              </Link>
            </li>
          </ul> :
          <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/login-register"}>Giriş</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/login-register"}>
              Kayıt
            </Link>
          </li>
        </ul>
        }
          
        </div>
      </div>
      <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {wishlistData && wishlistData.length ? wishlistData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={e => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart
          cartData={cartData}
          currency={currency}
          deleteFromCart={deleteFromCart}
        />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  currency: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  deleteFromCart: PropTypes.func,
  wishlistData: PropTypes.array
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData,
    cartData: state.cartData,
    wishlistData: state.wishlistData,
    compareData: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
