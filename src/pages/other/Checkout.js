import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import { useAuthState } from "../../auth/auth-context";
import fire from "../../auth/firebase";
import axios from "axios";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

import "./Checkout.css";

import InvoiceModal from "./InvoiceModal";

const Checkout = ({ location, cartItems, currency }) => {
  const state = useAuthState();
  const [loading, setLoading] = useState(false);
  const [addressType, setAddressType] = useState("shipping");
  const [invoiceAddressChecked, setInvoiceAddressChecked] = useState(false);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const history = useHistory();

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
        axios.post(`${process.env.PUBLIC_URL}/claims`, { user }).then((res) => {
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
        axios.post(`${process.env.PUBLIC_URL}/claims`, { user }).then((res) => {
          console.log(res);
        });
        setLoading(false);
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
    setLoading(true);
    fire
      .auth()
      .signInWithPopup(providerFb)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);
        axios.post(`${process.env.PUBLIC_URL}/claims`, { user }).then((res) => {
          console.log(res.config.data.user);
        });
        setLoading(false);
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

  const handleModal = (e) => {
    e.preventDefault();
    if (e.target.id === "shipping") {
      setAddressType("shipping");
    } else if (e.target.id === "invoice") {
      setAddressType("invoice");
    }
    setModalShow(true);
  };

  const handlePost = () => {
    axios
      .post("https://excessive-chipped-nautilus.glitch.me/", {
        locale: "TR",
        conversationId: "123456789",
        price: "1",
        paidPrice: "1.2",
        currency: "TRY",
        basketId: "B67832",
        callbackUrl: "https://excessive-chipped-nautilus.glitch.me/payments",
        enabledInstallments: [2, 3, 6, 9],
        buyer: {
          id: "BY789",
          name: "John",
          surname: "Doe",
          gsmNumber: "+905350000000",
          email: "email@email.com",
          identityNumber: "74300864791",
          lastLoginDate: "2015-10-05 12:43:35",
          registrationDate: "2013-04-21 15:12:09",
          registrationAddress:
            "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          ip: "85.34.78.112",
          city: "Istanbul",
          country: "Turkey",
          zipCode: "34732",
        },
        shippingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        billingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        basketItems: [
          {
            id: "BI101",
            name: "Binocular",
            category1: "Collectibles",
            category2: "Accessories",
            itemType: "PHYSICAL",
            price: "0.3",
          },
          {
            id: "BI102",
            name: "Game code",
            category1: "Game",
            category2: "Online Game Items",
            itemType: "VIRTUAL",
            price: "0.5",
          },
          {
            id: "BI103",
            name: "Usb",
            category1: "Electronics",
            category2: "Usb / Cable",
            itemType: "PHYSICAL",
            price: "0.2",
          },
        ],
      })
      .then(
        (result) => {
          console.log(result);
          window.open(result.data.paymentPageUrl);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Violet | Ödeme</title>
        <meta
          name='description'
          content='Checkout page of flone react minimalist eCommerce template.'
        />
      </MetaTags>
      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <div className='checkout-area pt-95 pb-100'>
          <div className='container'>
            {cartItems && cartItems.length >= 1 ? (
              <div className='row'>
                {!state.isAuthenticated ? (
                  <div className='col-lg-7'>
                    <div className='your-order-area'>
                      <h3>Adres Bilgileri</h3>
                      <div className='d-flex'>
                        <label>Fatura Adresi Farklı</label>
                        <input
                          className='checkbox'
                          onChange={() =>
                            setInvoiceAddressChecked(!invoiceAddressChecked)
                          }
                          type='checkbox'
                        />
                      </div>

                      <div className='your-order-wrap gray-bg-4 mb-4'>
                        <div className='your-order-product-info'>
                          <div className='your-order-top'>
                            <ul>
                              <li>Teslimat Adresi</li>
                              {state.address && (
                                <li
                                  className='edit'
                                  id='shipping'
                                  onClick={(e) => handleModal(e)}
                                >
                                  <i className='fa fa-lg fa-edit'></i>
                                </li>
                              )}
                            </ul>
                          </div>
                          {state.address && (
                            <>
                              <div className='your-order-bottom'>
                                {state.address.name}{" "}
                                <span className='colortext'>|</span>{" "}
                                {state.address.email}{" "}
                                <span className='colortext'>|</span> $
                                {state.address.phone}
                              </div>
                              <div className='your-order-bottom'>
                                {state.address.street}
                                <p>
                                  {state.address.ilçe}{" "}
                                  <span className='colortext'>|</span>{" "}
                                  {state.address.il}
                                </p>
                              </div>
                            </>
                          )}
                        </div>

                        {!state.address && (
                          <button
                            type='button'
                            className='submitAddress btn-block'
                            id='shipping'
                            onClick={(e) => handleModal(e)}
                          >
                            <i className='fa fa-lg fa-plus'></i> Teslimat Adresi
                            Ekle
                          </button>
                        )}
                      </div>

                      {invoiceAddressChecked && (
                        <div className='your-order-wrap gray-bg-4'>
                          <div className='your-order-product-info'>
                            <div className='your-order-top'>
                              <ul>
                                <li>Fatura Adresi</li>
                                {state.invoiceAddress && (
                                  <li
                                    className='edit'
                                    id='invoice'
                                    onClick={(e) => handleModal(e)}
                                  >
                                    <i className='fa fa-lg fa-edit'></i>
                                  </li>
                                )}
                              </ul>
                            </div>
                            {state.invoiceAddress && (
                              <>
                                <div className='your-order-bottom'>
                                  {state.invoiceAddress.name}{" "}
                                  <span className='colortext'>|</span>{" "}
                                  {state.invoiceAddress.email}{" "}
                                  <span className='colortext'>|</span>{" "}
                                  {state.invoiceAddress.phone}
                                </div>
                                <div className='your-order-bottom'>
                                  {state.invoiceAddress.street}
                                  <p>
                                    {state.invoiceAddress.ilçe}{" "}
                                    <span className='colortext'>|</span>{" "}
                                    {state.invoiceAddress.il}
                                  </p>
                                </div>
                              </>
                            )}
                          </div>

                          {!state.invoiceAddress && (
                            <button
                              type='button'
                              className='submitAddress btn-block'
                              id='invoice'
                              onClick={(e) => handleModal(e)}
                            >
                              <i className='fa fa-lg fa-plus'></i> Fatura Adresi
                              Ekle
                            </button>
                          )}
                        </div>
                      )}
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
                        <div className='item-empty-area__text boxtext'>
                          Not: Üye olmadan da kargolarınızı takip edebilirsiniz
                        </div>
                        <div className='place-order mt-25 '>
                          <button
                            className='btn-hover'
                            onClick={handleAnonymous}
                          >
                            ÜYE OLMADAN DEVAM ET
                          </button>
                        </div>
                        <div className='place-order mt-25'>
                          <button
                            className='btn-hover'
                            onClick={() => {
                              history.push("/login-register");
                            }}
                          >
                            ÜYE OL | GİRİŞ YAP
                          </button>
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
                    <h3>Siparişiniz</h3>
                    <div className='your-order-wrap gray-bg-4'>
                      <div className='your-order-product-info'>
                        <div className='your-order-top'>
                          <ul>
                            <li>Ürün</li>
                            <li>Toplam</li>
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
                            <li className='your-order-shipping'>Kargo</li>
                            <li>Ücretsiz</li>
                          </ul>
                        </div>
                        <div className='your-order-total'>
                          <ul>
                            <li className='order-total'>Toplam</li>
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
                      <button
                        type='submit'
                        className='btn-hover'
                        onClick={handlePost}
                      >
                        Ödemeye Git(IYZICO Güvencesiyle)
                      </button>
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
                      Sepette ürün yok. <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        Alışverişe Başla
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
      <InvoiceModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        addressType={addressType}
      />
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
