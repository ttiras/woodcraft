import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import { useAuthState } from "../../auth/auth-context";

import { anonymousLogin, socialLogin } from "../../helpers/social-auth";

import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import "./Checkout.css";

import InvoiceModal from "./InvoiceModal";
import INSERT_ORDER from "../../graphql/InsertOrder";
import ContractModal from "./ContractModal";
import DistanceModal from "./DistanceModal";
const Checkout = ({ location, cartItems }) => {
  const state = useAuthState();
  const [loading, setLoading] = useState(false);
  const [addressType, setAddressType] = useState("shipping");
  const [invoiceAddressChecked, setInvoiceAddressChecked] = useState(false);
  const [contractSigned, setContractSigned] = useState(false);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [contractModalShow, setContractModalShow] = useState(false);
  const [distanceModalShow, setDistanceModalShow] = useState(false);
  const history = useHistory();

  const [
    insertOrder,
    { loading: ordersLoading, data: ordersData, error: ordersError },
  ] = useMutation(INSERT_ORDER, {
    onCompleted(ordersData) {
      window.open(ordersData.OrderAction.paymentPageUrl, "_self");
    },
  });

  useEffect(() => {
    const data = localStorage.getItem("invoiceAddressChecked");
    if (data) {
      setInvoiceAddressChecked(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("invoiceAddressChecked", invoiceAddressChecked);
  }, [invoiceAddressChecked]);

  const { pathname } = location;
  let cartTotalPrice = 0;

  const handleModal = (e) => {
    e.preventDefault();
    if (e.target.id === "shipping") {
      setAddressType("shipping");
    } else if (e.target.id === "invoice") {
      setAddressType("invoice");
    }
    setModalShow(true);
  };

  const handleOrder = () => {
    insertOrder({
      variables: {
        notes: localStorage.getItem("notes") || "",
        isGift: localStorage.getItem("isGift") || false,
        addresses: state.invoiceAddress
          ? [
              {
                city: state.invoiceAddress.il,
                identity: state.invoiceAddress.identity || "",
                name: state.invoiceAddress.name || "",
                surname: state.invoiceAddress.surname || "",
                street: state.invoiceAddress.firm
                  ? state.invoiceAddress.firm +
                    " " +
                    state.invoiceAddress.street +
                    " VD:" +
                    state.invoiceAddress.vergid +
                    " VNo:" +
                    state.invoiceAddress.vergin
                  : state.invoiceAddress.street,
                town: state.invoiceAddress.ilçe,
                isinvoiceAddress: true,
              },
              {
                city: state.address.il,
                identity: state.address.identity,
                name: state.address.name,
                surname: state.address.surname,
                street: state.address.firm
                  ? state.address.firm +
                    " VD:" +
                    state.address.vergid +
                    " VNo:" +
                    state.address.vergin +
                    state.address.street
                  : state.address.street,
                town: state.address.ilçe,
                isinvoiceAddress: false,
              },
            ]
          : {
              city: state.address.il,
              identity: state.address.identity,
              name: state.address.name,
              surname: state.address.surname,
              street: state.address.street,
              town: state.address.ilçe,
              isinvoiceAddress: true,
            },
        user_ordered: {
          email: state.address.email,
          name: state.address.name,
          surname: state.address.surname,
          phone: state.address.phone,
          role: !state.user.isAnonymous ? "USER" : "ANONYMOUS",
        },
        order_items: cartItems.map((item) => ({
          product_id: item.id,
          qty: item.quantity,
        })),
      },
    });
  };

  const handleSignin = async (e) => {
    setLoading(true);
    if (e.target.value) {
      await socialLogin(e.target.value);
      if (error) setError(error);
    } else {
      await anonymousLogin();
      if (error) setError(error);
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Micota. | Ödeme</title>
        <meta
          name='description'
          content='Alışveriş sitemiz micota.com.tr ödemelerinizi bu sayfada gerçekleştirebilirsiniz.'
        />
      </Helmet>
      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <div className='checkout-area pt-95 pb-100'>
          <div className='container'>
            {cartItems && cartItems.length >= 1 ? (
              <div className='row'>
                {state.user ? (
                  <div className='col-lg-7'>
                    <div className='your-order-area'>
                      <h3>Adres Bilgileri</h3>
                      <div className='d-flex'>
                        <label>Fatura Adresi Farklı</label>
                        <input
                          className='checkbox'
                          checked={invoiceAddressChecked}
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
                                  <i
                                    id='shipping'
                                    className='fa fa-lg fa-edit'
                                  ></i>
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
                                <span className='colortext'>|</span>{" "}
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
                            <i id='shipping' className='fa fa-lg fa-plus'></i>{" "}
                            Teslimat Adresi Ekle
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
                                    <i
                                      id='invoice'
                                      className='fa fa-lg fa-edit'
                                    ></i>
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
                              <i id='invoice' className='fa fa-lg fa-plus'></i>{" "}
                              Fatura Adresi Ekle
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
                        className={loading ? "d-block" : ""}
                      ></div>
                      <div className='your-order-area'>
                        <div className='item-empty-area__text boxtext'>
                          Not: Üye olmadan da kargolarınızı takip edebilirsiniz
                        </div>
                        <div className='place-order mt-25 '>
                          <button
                            className='btn-hover'
                            onClick={(e) => handleSignin(e)}
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
                          <button
                            className='btn-hover'
                            value='t'
                            onClick={(e) => handleSignin(e)}
                          >
                            {" "}
                            <i className='fa fa-twitter'></i> TwItter Hesabınla
                            Giriş Yap
                          </button>
                        </div>
                        <div className='place-order mt-25'>
                          <button
                            className='btn-hover'
                            value='g'
                            onClick={(e) => handleSignin(e)}
                          >
                            <i className='fa fa-google'></i> Google Hesabınla
                            Giriş Yap
                          </button>
                        </div>
                        <div className='place-order mt-25'>
                          <button
                            className='btn-hover'
                            value='f'
                            onClick={(e) => handleSignin(e)}
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
                              const finalProductPrice = cartItem.price.toFixed(
                                2
                              );
                              const finalDiscountedPrice = discountedPrice.toFixed(
                                2
                              );

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
                                    <strong>
                                      {discountedPrice !== null
                                        ? (
                                            finalDiscountedPrice *
                                            cartItem.quantity
                                          ).toFixed(2) + " TL"
                                        : (
                                            finalProductPrice *
                                            cartItem.quantity
                                          ).toFixed(2) + " TL"}
                                    </strong>
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className='your-order-bottom'>
                          <ul>
                            <li className='your-order-shipping'>Kargo</li>
                            <li>
                              <strong>
                                {cartTotalPrice.toFixed(2) < 150
                                  ? "10 TL"
                                  : "Ücretsiz"}
                              </strong>
                            </li>
                          </ul>
                        </div>
                        <div className='your-order-total'>
                          <ul>
                            <li className='order-total'>Toplam</li>
                            <li>
                              <strong>
                                {cartTotalPrice.toFixed(2) < 150
                                  ? (cartTotalPrice + 10).toFixed(2) + " TL"
                                  : cartTotalPrice.toFixed(2) + " TL"}
                              </strong>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='mt-3 d-flex'>
                      <input
                        className='checkbox'
                        checked={contractSigned}
                        onChange={() => setContractSigned(!contractSigned)}
                        type='checkbox'
                      />
                      <a>
                        <u onClick={() => setContractModalShow(true)}>
                          Ön Bİlgilendirme Koşulları
                        </u>
                        'nı ve{" "}
                        <u onClick={() => setDistanceModalShow(true)}>
                          {" "}
                          Uzaktan Satış Sözleşmesi
                        </u>
                        'ni okudum ve kabul ediyorum
                      </a>
                    </div>

                    <div className='place-order mt-2'>
                      <button
                        type='submit'
                        className={
                          !state.address || !contractSigned
                            ? "btn-hover noButton"
                            : "btn-hover"
                        }
                        onClick={handleOrder}
                        disabled={!state.address || !contractSigned}
                        data-toggle='tooltip'
                        data-placement='bottom'
                        title={
                          !state.address
                            ? "Adres bilgilerini giriniz."
                            : !contractSigned
                            ? "Ön bilgilerndirme koşullarını ve mesafeli satış sözleşmesini onaylayınız."
                            : null
                        }
                      >
                        {ordersLoading ? (
                          <span
                            className='spinner-border spinner-border-sm'
                            role='status'
                            aria-hidden='true'
                          ></span>
                        ) : (
                          "Ödemeye Git(IYZICO Güvencesiyle)"
                        )}
                      </button>
                    </div>
                    {ordersError && (
                      <span>Bir hata oluştu, lütfen tekrar deneyin.</span>
                    )}
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
      <ContractModal
        show={contractModalShow}
        onHide={() => setContractModalShow(false)}
        cartItems={cartItems}
      />
      <DistanceModal
        show={distanceModalShow}
        onHide={() => setDistanceModalShow(false)}
        cartItems={cartItems}
        address={state.address}
      />
    </Fragment>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array,
  location: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
  };
};

export default connect(mapStateToProps)(Checkout);
