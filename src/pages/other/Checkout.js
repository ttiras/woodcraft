import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useAuthState } from "../../auth/auth-context";
import fire from "../../auth/firebase";
import axios from "axios";
import firebase from "firebase";
import {useHistory} from 'react-router-dom';

import "./Checkout.css";

const Checkout = ({ location, cartItems, currency }) => {
  const state = useAuthState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory()
  const { pathname } = location;
  let cartTotalPrice = 0;

  const provider = new firebase.auth.GoogleAuthProvider();
  const providerFb = new firebase.auth.FacebookAuthProvider();

  const handleAnonymous = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fire
      .auth()
      .signInAnonymously()
      .then(function (result) {
        const user = result.user;
        console.log(user);
        axios.post("http://localhost:8000", { user }).then((res) => {
          console.log(res);
        });
        setLoading(false);
      });
  };

  const handleGoogleSignin = () => {
    setLoading(true);
    fire
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);
        axios.post("http://localhost:8000", { user }).then((res) => {
          console.log(res);
        });
        setLoading(false)
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        setError(errorCode, errorMessage, email, credential);
      });
  };

  const handleFacebookSignin = () => {
    setLoading(true)
    fire
      .auth()
      .signInWithPopup(providerFb)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);
        axios.post("http://localhost:8000", { user }).then((res) => {
          console.log(res.config.data.user);
        });
        setLoading(false)
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        setError(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Violet | Checkout</title>
        <meta
          name='description'
          content='Checkout page of flone react minimalist eCommerce template.'
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Checkout
      </BreadcrumbsItem>
      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb />
        <div className='checkout-area pt-95 pb-100'>
          <div className='container'>
            {cartItems && cartItems.length >= 1 ? (
              <div className='row'>
                {state.isAuthenticated ? (
                  <div className='col-lg-7'>
                    <div className='billing-info-wrap'>
                      <h3>Billing Details</h3>
                      <div className='row'>
                        <div className='col-lg-6 col-md-6'>
                          <div className='billing-info mb-20'>
                            <label>First Name</label>
                            <input type='text' />
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                          <div className='billing-info mb-20'>
                            <label>Last Name</label>
                            <input type='text' />
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='billing-info mb-20'>
                            <label>Company Name</label>
                            <input type='text' />
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='billing-select mb-20'>
                            <label>Country</label>
                            <select>
                              <option>Select a country</option>
                              <option>Azerbaijan</option>
                              <option>Bahamas</option>
                              <option>Bahrain</option>
                              <option>Bangladesh</option>
                              <option>Barbados</option>
                            </select>
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='billing-info mb-20'>
                            <label>Street Address</label>
                            <input
                              className='billing-address'
                              placeholder='House number and street name'
                              type='text'
                            />
                            <input
                              placeholder='Apartment, suite, unit etc.'
                              type='text'
                            />
                          </div>
                        </div>
                        <div className='col-lg-12'>
                          <div className='billing-info mb-20'>
                            <label>Town / City</label>
                            <input type='text' />
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                          <div className='billing-info mb-20'>
                            <label>State / County</label>
                            <input type='text' />
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                          <div className='billing-info mb-20'>
                            <label>Postcode / ZIP</label>
                            <input type='text' />
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                          <div className='billing-info mb-20'>
                            <label>Phone</label>
                            <input type='text' />
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                          <div className='billing-info mb-20'>
                            <label>Email Address</label>
                            <input type='text' />
                          </div>
                        </div>
                      </div>

                      <div className='additional-info-wrap'>
                        <h4>Additional information</h4>
                        <div className='additional-info'>
                          <label>Order notes</label>
                          <textarea
                            placeholder='Notes about your order, e.g. special notes for delivery. '
                            name='message'
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className='col-lg-7 text-center border d-flex justify-content-center'
                    id='dimmed'
                  >
                    <div className='col-lg-7 '>
                      <div
                        id='cover-spin'
                        className={loading && "d-block"}
                      ></div>
                      <div className='your-order-area'>
                        Not: Üye olmadan da kargolarınızı takip edebilirsiniz
                        <div className='place-order mt-25 '>
                          <button
                            className='btn-hover'
                            onClick={handleAnonymous}
                          >
                            ÜYE OLMADAN DEVAM ET
                          </button>
                        </div>
                        <div className='place-order mt-25'>
                          <button className='btn-hover' onClick={() => {
        history.push('/login-register')
   }}>ÜYE OL | GİRİŞ YAP</button>
                        </div>
                        
                        <hr />
                        <div className='place-order mt-25'>
                          <button className='btn-hover'>
                            {" "}
                            <i className='fa fa-twitter'></i> TwItter Hesabınla
                            Giriş Yap
                          </button>
                        </div>
                        <div className='place-order mt-25'>
                          <button
                            className='btn-hover'
                            onClick={handleGoogleSignin}
                          >
                            <i className='fa fa-google'></i> Google Hesabınla
                            Giriş Yap
                          </button>
                        </div>
                        <div className='place-order mt-25'>
                          <button
                            className='btn-hover'
                            onClick={handleFacebookSignin}
                          >
                            <i className='fa fa-facebook'></i> Facebook
                            Hesabınla Giriş Yap
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className='col-lg-5'>
                  <div className='your-order-area'>
                    <h3>Your order</h3>
                    <div className='your-order-wrap gray-bg-4'>
                      <div className='your-order-product-info'>
                        <div className='your-order-top'>
                          <ul>
                            <li>Product</li>
                            <li>Total</li>
                          </ul>
                        </div>
                        <div className='your-order-middle'>
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                cartItem.price,
                                cartItem.discount
                              );
                              const finalProductPrice = (
                                cartItem.price * currency.currencyRate
                              ).toFixed(2);
                              const finalDiscountedPrice = (
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);

                              discountedPrice != null
                                ? (cartTotalPrice +=
                                    finalDiscountedPrice * cartItem.quantity)
                                : (cartTotalPrice +=
                                    finalProductPrice * cartItem.quantity);
                              return (
                                <li key={key}>
                                  <span className='order-middle-left'>
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className='order-price'>
                                    {discountedPrice !== null
                                      ? currency.currencySymbol +
                                        (
                                          finalDiscountedPrice *
                                          cartItem.quantity
                                        ).toFixed(2)
                                      : currency.currencySymbol +
                                        (
                                          finalProductPrice * cartItem.quantity
                                        ).toFixed(2)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className='your-order-bottom'>
                          <ul>
                            <li className='your-order-shipping'>Shipping</li>
                            <li>Free shipping</li>
                          </ul>
                        </div>
                        <div className='your-order-total'>
                          <ul>
                            <li className='order-total'>Total</li>
                            <li>
                              {currency.currencySymbol +
                                cartTotalPrice.toFixed(2)}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='payment-method'></div>
                    </div>
                    <div className='place-order mt-25'>
                      <button className='btn-hover'>Place Order</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='item-empty-area text-center'>
                    <div className='item-empty-area__icon mb-30'>
                      <i className='pe-7s-cash'></i>
                    </div>
                    <div className='item-empty-area__text'>
                      No items found in cart to checkout <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData,
  };
};

export default connect(mapStateToProps)(Checkout);
