import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../../helpers/product";
import ProductImgFallback from "../../../helpers/ProductImgFallback";

const MenuCart = ({ cartData, currency, deleteFromCart }) => {
  let cartTotalPrice = 0;
  const { addToast } = useToasts();
  return (
    <div className="shopping-cart-content">
      {cartData && cartData.length > 0 ? (
        <Fragment>
          <ul>
            {cartData.map((single, key) => {
              const discountedPrice = getDiscountPrice(
                single.price,
                single.discount
              );
              const finalProductPrice = (
                single.price * currency.currencyRate
              ).toFixed(2);
              const finalDiscountedPrice = (
                discountedPrice * currency.currencyRate
              ).toFixed(2);

              discountedPrice != null
                ? (cartTotalPrice += finalDiscountedPrice * single.quantity)
                : (cartTotalPrice += finalProductPrice * single.quantity);

              return (
                <li className="single-shopping-cart" key={key}>
                  <div className="shopping-cart-img">
                    <Link to={process.env.PUBLIC_URL + "/product/" + single.id}>
                      <ProductImgFallback name={single.name} className="img-fluid" path={single.image[0].path}/>
                    </Link>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <Link
                        to={process.env.PUBLIC_URL + "/product/" + single.id}
                      >
                        {" "}
                        {single.name}{" "}
                      </Link>
                    </h4>
                    <h6>Adet: {single.quantity}</h6>
                    <span>
                      {discountedPrice !== null
                        ? currency.currencySymbol + finalDiscountedPrice
                        : currency.currencySymbol + finalProductPrice}
                    </span>
                    {single.selectedProductColor &&
                    single.selectedProductSize ? (
                      <div className="cart-item-variation">
                        <span>Renk: {single.selectedProductColor}</span>
                        <span>Boy: {single.selectedProductSize}</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="shopping-cart-delete">
                    <button onClick={() => deleteFromCart(single, addToast)}>
                      <i className="fa fa-times-circle" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="shopping-cart-total">
            <h4>
              Toplam :{" "}
              <span className="shop-total">
                {currency.currencySymbol + cartTotalPrice.toFixed(2)}
              </span>
            </h4>
          </div>
          <div className="shopping-cart-btn btn-hover text-center">
            <Link className="default-btn" to={process.env.PUBLIC_URL + "/cart"}>
              sepeti görüntüle
            </Link>
            <Link
              className="default-btn"
              to={process.env.PUBLIC_URL + "/checkout"}
            >
              siparişi onayla
            </Link>
          </div>
        </Fragment>
      ) : (
        <p className="text-center">Sepet Boş</p>
      )}
    </div>
  );
};

MenuCart.propTypes = {
  cartData: PropTypes.array,
  currency: PropTypes.object,
  deleteFromCart: PropTypes.func
};

export default MenuCart;
