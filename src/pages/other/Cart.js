import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  cartItemStock,
  deleteAllFromCart,
} from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import './Checkout.css'

const Cart = ({
  location,
  cartItems,
  decreaseQuantity,
  addToCart,
  deleteFromCart,
  deleteAllFromCart,
}) => {
  const [quantityCount] = useState(1);
  const [notes, setNotes] = useState("");
  const [isGift, setIsGift] = useState(false);
  const { addToast } = useToasts();
  const { pathname } = location;
  let cartTotalPrice = 0;

  useEffect(() => {
    const data = localStorage.getItem("notes");
    if (data) {
      setNotes(data);
    }
    const data1 = localStorage.getItem("isGift")
    if (data) {
      setIsGift(JSON.parse(data1))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", notes);
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("isGift", isGift);
  }, [isGift]);

  return (
    <Fragment>
      <MetaTags>
        <title>Micota. | Sepet</title>
        <meta
          name='description'
          content='Cart page of flone react minimalist eCommerce template.'
        />
      </MetaTags>

      <LayoutOne headerTop='visible'>
        <div className='cart-main-area pt-90 pb-100'>
          <div className='container'>
            {cartItems && cartItems.length >= 1 ? (
              <Fragment>
                <h3 className='cart-page-title'>Sipariş Özeti</h3>
                <div className='row'>
                  <div className='col-12'>
                    <div className='table-content table-responsive cart-table-content'>
                      <table>
                        <thead>
                          <tr>
                            <th>Görsel</th>
                            <th>Ürün Adı</th>
                            <th>Fiyat</th>
                            <th>Adet</th>
                            <th>Ara Toplam</th>
                            <th>Sil</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((cartItem, key) => {
                            const discountedPrice = getDiscountPrice(
                              cartItem.price,
                              cartItem.discount
                            );
                            const finalProductPrice = (
                              cartItem.price
                            ).toFixed(2);
                            const finalDiscountedPrice = (
                              discountedPrice
                            ).toFixed(2);

                            discountedPrice != null
                              ? (cartTotalPrice +=
                                  finalDiscountedPrice * cartItem.quantity)
                              : (cartTotalPrice +=
                                  finalProductPrice * cartItem.quantity);
                            return (
                              <tr key={key}>
                                <td className='product-thumbnail'>
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      cartItem.id
                                    }
                                  >
                                    <img
                                      className='img-fluid'
                                      src={
                                        process.env.PUBLIC_URL +
                                        cartItem.image[0].path
                                      }
                                      alt=''
                                    />
                                  </Link>
                                </td>

                                <td className='product-name'>
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      cartItem.id
                                    }
                                  >
                                    {cartItem.name}
                                  </Link>
                                  {cartItem.selectedProductColor &&
                                  cartItem.selectedProductSize ? (
                                    <div className='cart-item-variation'>
                                      <span>
                                        Color: {cartItem.selectedProductColor}
                                      </span>
                                      <span>
                                        Size: {cartItem.selectedProductSize}
                                      </span>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </td>

                                <td className='product-price-cart'>
                                  {discountedPrice !== null ? (
                                    <Fragment>
                                      <span className='amount old'>
                                        {finalProductPrice+ " TL" }
                                      </span>
                                      <span className='amount'>
                                        {finalDiscountedPrice+ " TL" }
                                      </span>
                                    </Fragment>
                                  ) : (
                                    <span className='amount'>
                                      {finalProductPrice+ " TL" }
                                    </span>
                                  )}
                                </td>

                                <td className='product-quantity'>
                                  <div className='cart-plus-minus'>
                                    <button
                                      className='dec qtybutton'
                                      onClick={() =>
                                        decreaseQuantity(cartItem, addToast)
                                      }
                                    >
                                      -
                                    </button>
                                    <input
                                      className='cart-plus-minus-box'
                                      type='text'
                                      value={cartItem.quantity}
                                      readOnly
                                    />
                                    <button
                                      className='inc qtybutton'
                                      onClick={() =>
                                        addToCart(
                                          cartItem,
                                          addToast,
                                          quantityCount
                                        )
                                      }
                                      disabled={
                                        cartItem !== undefined &&
                                        cartItem.quantity &&
                                        cartItem.quantity >=
                                          cartItemStock(
                                            cartItem,
                                            cartItem.selectedProductColor,
                                            cartItem.selectedProductSize
                                          )
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td className='product-subtotal'>
                                  {discountedPrice !== null
                                    ? 
                                      (
                                        finalDiscountedPrice * cartItem.quantity
                                      ).toFixed(2)+ " TL" 
                                    : (
                                        finalProductPrice * cartItem.quantity
                                      ).toFixed(2)+ " TL" }
                                </td>

                                <td className='product-remove'>
                                  <button
                                    onClick={() =>
                                      deleteFromCart(cartItem, addToast)
                                    }
                                  >
                                    <i className='fa fa-times'></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-lg-8 col-md-12'>
                    <div className='cart-tax'>
                      <div className='title-wrap'>
                        <h4 className='cart-bottom-title section-bg-gray'>
                          Alışverişinizle ilgili eklemek istedikleriniz
                        </h4>
                      </div>
                      <div className='tax-wrapper'>
                        <div className='mb-2'>
                        <label>Hediye Paketi Olsun</label>
                        <input
                          className='checkbox'
                          checked={isGift}
                          onChange={() =>
                            setIsGift(!isGift)
                          }
                          type='checkbox'
                        />
                        </div>
                        <div className='additional-info'>
                          <label>Sipariş Notları</label>
                          <textarea
                            placeholder='Siparişinizle ilgili belirtmek istediğiniz konular... '
                            name='message'
                            value={notes}
                            rows='2'
                            onChange={(e) => setNotes(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-12'>
                    <div className='grand-totall'>
                      <div className='title-wrap'>
                        <h4 className='cart-bottom-title section-bg-gary-cart'>
                          Sepet Toplamı
                        </h4>
                      </div>
                      <h5>
                        Ürünler Toplamı (KDV Dahil){" "}
                        <span>
                          {cartTotalPrice.toFixed(2)+ " TL" }
                        </span>
                      </h5>

                      <h4 className='grand-totall-title'>
                        Ödenecek Tutar{" "}
                        <span>
                          {cartTotalPrice.toFixed(2)+ " TL" }
                        </span>
                      </h4>
                      <Link to={process.env.PUBLIC_URL + "/checkout"}>
                        Siparişi Tamamla
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='cart-shiping-update-wrapper'>
                      <div className='cart-shiping-update'>
                        <Link
                          to={process.env.PUBLIC_URL + "/shop-grid-standard"}
                        >
                          Alışverişe Devam Et
                        </Link>
                      </div>
                      <div className='cart-clear'>
                        <button onClick={() => deleteAllFromCart(addToast)}>
                          Sepeti Boşalt
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='item-empty-area text-center'>
                    <div className='item-empty-area__icon mb-30'>
                      <i className='pe-7s-cart'></i>
                    </div>
                    <div className='item-empty-area__text'>
                      Sepet Boş <br />{" "}
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
    </Fragment>
  );
};

Cart.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  decreaseQuantity: PropTypes.func,
  location: PropTypes.object,
  deleteAllFromCart: PropTypes.func,
  deleteFromCart: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    decreaseQuantity: (item, addToast) => {
      dispatch(decreaseQuantity(item, addToast));
    },
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    },
    deleteAllFromCart: (addToast) => {
      dispatch(deleteAllFromCart(addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
