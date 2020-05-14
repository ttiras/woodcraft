import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { useRouteMatch } from "react-router-dom";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  deleteAllFromCart,
} from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import SINGLE_ORDER from "../../graphql/GetSingleOrder";
import { useEffect } from "react";

const Cart = ({ location, currency }) => {
  const match = useRouteMatch();
  const { loading, error, data } = useQuery(SINGLE_ORDER, {
    variables: { id: match.params.id },
  });
  const { pathname } = location;

  if (error) console.log(error);
  if (data) console.log(data);

  useEffect(()=>{
    localStorage.clear("cartData", "notes", "isGift");
  },[])

  return (
    <Fragment>
      <MetaTags>
        <title>Micota. | Ödeme Başarılı</title>
        <meta
          name='description'
          content='Cart page of flone react minimalist eCommerce template.'
        />
      </MetaTags>

      <LayoutOne headerTop='visible'>
        <div className='cart-main-area pt-90 pb-100'>
          <div className='container'>
              <div className='alert alert-success text-center' role='alert'>
                Sayın{" "}
                {data && data.orders[0].user_ordered &&
                <strong>
                    {data.orders[0].user_ordered.name.toUpperCase()}{" "} {data.orders[0].user_ordered.surname.toUpperCase()}
                </strong>}{" "}
                Siparişiniz Başarıyla Oluşturulmuştur{" "}
                <i className='fa fa-2x fa-smile-o mb-3'></i>
                <h4 className='mb-3'>
                  Kargo takip bilgileri{" "}
                  <strong>{data && data.orders[0].user_ordered && data.orders[0].user_ordered.email}</strong>{" "}
                  adresine gönderilecektir.
                </h4>
                {data && data.orders[0].notes && (
                  <h5>
                    {" "}
                    Belirtmiş olduğunuz{" "}
                    <strong>"{data.orders[0].notes}"</strong> notunu dikkate alacağız.
                  </h5>
                )}
                <p className='mt-3'>
                {data && data.orders[0].isGift && "Kargonuz talebiniz üzerine hediye paketi içerisinde gönderilecektir."}
                </p>
                <p className='mt-3'>
                  Göstermiş olduğunuz ilgiye teşekkür ederiz.
                </p>
                <p>
                  Ürünlerinizi en iyi şekilde ulaştırmak için çalışmalara
                  başladık bile.
                </p>
              </div>
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
                          <th>Toplam</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.orders[0].order_items.map((item) => {
                            const product = item.product;
                            return (
                              <tr key={product.id}>
                                <td className='product-thumbnail'>
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      product.id
                                    }
                                  >
                                    <img
                                      className='img-fluid'
                                      src={
                                        process.env.PUBLIC_URL +
                                        product.image[0].path
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
                                      product.id
                                    }
                                  >
                                    {product.name}
                                  </Link>
                                </td>

                                <td className='product-price-cart'>
                                  {product.price-(product.price*product.discount/100).toFixed(2) + " " + currency.currencySymbol }
                                </td>

                                <td className='product-quantity'>
                                  <div className='cart-plus-minus'>
                                    {item.qty}
                                  </div>
                                </td>
                                <td className='product-subtotal'>
                                  {((product.price-(product.price*product.discount/100)) * item.qty).toFixed(2) + " " + currency.currencySymbol}
                                </td>

                                <td className='product-remove'></td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className='row'>
                {data &&
                  data.orders[0].addresses.map((address) => (
                    <div className='col-lg-4 col-md-12' key={address.id}>
                      <div className='grand-totall'>
                        <div className='title-wrap'>
                          <h4 className='cart-bottom-title section-bg-gary-cart'>
                            {data.orders[0].addresses.length === 1
                              ? "Teslimat Adresi"
                              : address.isinvoiceAddress
                              ? "Fatura Adresi"
                              : "Teslimat Adresi"}
                          </h4>
                        </div>
                        <h5>{address.name.toUpperCase()} {" "} {address.surname.toUpperCase()} </h5>
                        <h5> {address.street}</h5>

                        <h4 className='grand-totall-title'>
                          {address.town} | {address.city.toUpperCase()}
                        </h4>
                      </div>
                    </div>
                  ))}
                {data && data.orders[0].addresses.length === 1 && (
                  <div className='col-lg-4 col-md-12'>
                    <div className='grand-totall'>
                      <div className='title-wrap'>
                        <h4 className='cart-bottom-title section-bg-gary-cart'>
                          Fatura Adresi
                        </h4>

                        <h4 className='grand-totall-title mt-5'>
                          Teslimat Adresiyle Aynı
                        </h4>
                      </div>
                    </div>
                  </div>
                )}
                <div className='col-lg-4 col-md-12'>
                  <div className='grand-totall'>
                    <div className='title-wrap'>
                      <h4 className='cart-bottom-title section-bg-gary-cart'>
                        Sepet Toplamı
                      </h4>
                    </div>
                    <h5>
                      Ürünler Toplamı{" "}
                      <span>
                        {data &&
                          data.orders[0].amount + " " + currency.currencySymbol}
                      </span>
                    </h5>
                    <h5>
                      KDV <span>Dahil</span>
                    </h5>

                    <h4 className='grand-totall-title'>
                      Toplam Ödenen{" "}
                      <span>
                        {data &&
                          data.orders[0].amount + " " +currency.currencySymbol}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Cart.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  decreaseQuantity: PropTypes.func,
  location: PropTypes.object,
  deleteAllFromCart: PropTypes.func,
  deleteFromCart: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData,
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
